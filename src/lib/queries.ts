import { desc } from "drizzle-orm";
import { products } from "@/db/schema";
import { getDb } from "@/lib/db";

export async function getProducts() {
  const db = getDb();
  return db.select().from(products).orderBy(desc(products.createdAt));
}
