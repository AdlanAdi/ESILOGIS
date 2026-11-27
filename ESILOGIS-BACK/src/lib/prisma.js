// src/lib/prisma.js - Single shared Prisma client
// Every module must import this instead of calling `new PrismaClient()`.
// Creating one client per module creates one connection pool per module,
// which wastes connections and memory and can cause pool timeouts.
const { PrismaClient } = require("@prisma/client");

// Reuse the client across hot reloads (nodemon) in development.
const globalForPrisma = globalThis;

const logLevels = ["warn", "error"];
if (process.env.PRISMA_LOG_QUERIES === "true") {
    logLevels.push("query");
}

const prisma =
    globalForPrisma.__esilogisPrisma ||
    new PrismaClient({
        log: logLevels,
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.__esilogisPrisma = prisma;
}

module.exports = prisma;
