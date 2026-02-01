import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Database connection for serverless environments (Vercel)
// In production, DATABASE_URL must be set
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.warn('DATABASE_URL is not set. Database operations will fail.');
}

// Serverless-optimized connection settings
// - prepare: false - required for serverless (no prepared statements)
// - max: 1 - limit connections for serverless functions
// - idle_timeout: 20 - close idle connections quickly
export const client = postgres(connectionString || '', {
    prepare: false,
    max: 1,
    idle_timeout: 20,
});

export const db = drizzle(client);

