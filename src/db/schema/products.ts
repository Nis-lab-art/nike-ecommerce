import {
  pgTable,
  text,
  integer,
  timestamp,
  numeric,
  uuid,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: text("name").notNull(),
  subtitle: text("subtitle").notNull(),
  category: text("category").notNull(), // e.g. "Shoes", "Apparel"
  imageUrl: text("image_url").notNull(),

  // store as numeric for money; render formatted in UI
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),

  // optional merch fields
  color: text("color"),
  gender: text("gender"),
  inventory: integer("inventory").notNull().default(0),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
