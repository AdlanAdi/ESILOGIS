// server.js - Application entry point
require("dotenv").config();
const app = require("./app");
const logger = require("./src/utils/logger");
const prisma = require("./src/lib/prisma");
const { emailQueue } = require("./src/lib/job-queue");

const PORT = process.env.PORT || 3000;

// Start the server
const server = app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
    logger.info(
        `API Documentation available at http://localhost:${PORT}/api-docs`
    );
});

// Graceful shutdown
async function shutdown(signal) {
    logger.info(`${signal} signal received: closing HTTP server`);

    server.close(async () => {
        // Let pending background jobs (emails) finish before the process exits.
        const drained = await emailQueue.drain(5000);
        if (!drained) {
            logger.warn(
                "Email queue did not drain in time; pending emails were dropped"
            );
        }

        await prisma.$disconnect();
        logger.info("Database connections closed");
        process.exit(0);
    });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
