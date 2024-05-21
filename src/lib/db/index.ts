import { neonConfig, neon } from "@neondatabase/serverless";

neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
  throw new Error("database url not found");
}

const sql = neon(process.env.DATABASE_URL);
