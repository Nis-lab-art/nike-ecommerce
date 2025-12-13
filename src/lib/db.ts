import { drizzle } from "drizzle-orm/neon-serverless";
import { neon, neonConfig } from "@neondatabase/serverless";
import { cache } from "react";
import { products } from "@/db/schema";

neonConfig.fetchConnectionCache = true;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("DATABASE_URL is not set. Database features will be disabled until it is provided.");
}

export const getDb = cache(() => {
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  const client = neon(connectionString);
  return drizzle(client, { schema: { products } });
});
