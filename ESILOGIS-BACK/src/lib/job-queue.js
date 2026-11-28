// src/lib/job-queue.js - Minimal in-process background job queue.
//
// Purpose: keep slow side effects (SMTP) out of the request path. A job is
// started after the HTTP response is produced, never inside a database
// transaction, so a slow Gmail connection can no longer hold a pooled
// connection or lock rows.
//
// Trade-off: this queue lives in the process, so jobs still pending when the
// process dies are lost. That is acceptable for notification emails (the
// database notification row is already written). A durable outbox table would
// be the next step if at-least-once delivery becomes a requirement.

const logger = require("../utils/logger");

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

class JobQueue {
    constructor({
        name = "jobs",
        concurrency = 2,
        maxQueued = 1000,
        retries = 3,
        retryDelayMs = 1000,
    } = {}) {
        this.name = name;
        this.concurrency = Math.max(1, concurrency);
        this.maxQueued = maxQueued;
        this.retries = retries;
        this.retryDelayMs = retryDelayMs;

        this.pending = [];
        this.active = new Set();
        this.completed = 0;
        this.failures = 0;
        this.dropped = 0;
    }

    /**
     * Queue a job. Never throws and never blocks the caller.
     * @returns {boolean} false when the queue is full and the job was dropped.
     */
    add(label, fn) {
        if (this.pending.length >= this.maxQueued) {
            this.dropped++;
            logger.error(
                `[queue:${this.name}] Queue full (${this.maxQueued}); dropped job "${label}"`
            );
            return false;
        }

        this.pending.push({ label, fn, attempt: 0 });
        this.pump();
        return true;
    }

    pump() {
        while (this.active.size < this.concurrency && this.pending.length > 0) {
            const job = this.pending.shift();
            const running = this.run(job).finally(() => {
                this.active.delete(running);
                this.pump();
            });
            this.active.add(running);
        }
    }

    async run(job) {
        try {
            await job.fn();
            this.completed++;
        } catch (error) {
            job.attempt++;

            // Errors marked `permanent` (bad credentials, blocked sender) will
            // not fix themselves; retrying only hammers the provider.
            const permanent = error && error.permanent === true;

            if (!permanent && job.attempt <= this.retries) {
                const delay = this.retryDelayMs * 2 ** (job.attempt - 1);
                logger.warn(
                    `[queue:${this.name}] Job "${job.label}" failed (attempt ${job.attempt}/${this.retries}), retrying in ${delay}ms: ${error.message}`
                );
                await sleep(delay);
                this.pending.push(job);
                return;
            }

            this.failures++;
            logger.error(
                `[queue:${this.name}] Job "${job.label}" failed ${
                    permanent ? "permanently (no retry)" : "permanently"
                } after ${job.attempt} attempt(s): ${error.message}`
            );
        }
    }

    stats() {
        return {
            name: this.name,
            pending: this.pending.length,
            active: this.active.size,
            completed: this.completed,
            failures: this.failures,
            dropped: this.dropped,
        };
    }

    /**
     * Wait until every queued job finished or the timeout expires.
     * Used on shutdown so a restart does not silently drop pending emails.
     */
    async drain(timeoutMs = 5000) {
        const deadline = Date.now() + timeoutMs;
        while (
            (this.pending.length > 0 || this.active.size > 0) &&
            Date.now() < deadline
        ) {
            await sleep(50);
        }

        const idle = this.pending.length === 0 && this.active.size === 0;
        if (!idle) {
            logger.warn(
                `[queue:${this.name}] Drain timed out with ${this.pending.length} pending / ${this.active.size} active jobs`
            );
        }
        return idle;
    }
}

const emailQueue = new JobQueue({
    name: "email",
    concurrency: Number(process.env.EMAIL_QUEUE_CONCURRENCY || 2),
    retries: Number(process.env.EMAIL_QUEUE_RETRIES || 3),
});

module.exports = { JobQueue, emailQueue };
