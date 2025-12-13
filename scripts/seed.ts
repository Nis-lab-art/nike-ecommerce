import "dotenv/config";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { products } from "@/db/schema";

neonConfig.fetchConnectionCache = true;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set in the environment");
}

const client = neon(connectionString);
const db = drizzle(client);

async function seedProducts() {
  const sampleProducts = [
    {
      name: "Nike Air Max 270",
      description: "Lightweight cushioning with a bold 270 Air unit for everyday comfort.",
      price: "159.99",
      category: "Footwear",
      imageUrl:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      inventory: 35,
    },
    {
      name: "Nike Pegasus 41",
      description: "Responsive running shoe built for daily miles with breathable mesh.",
      price: "139.99",
      category: "Running",
      imageUrl:
        "https://images.unsplash.com/photo-1612810806695-30fa3bd9d6f0?auto=format&fit=crop&w=800&q=80",
      inventory: 50,
    },
    {
      name: "Nike Club Fleece Hoodie",
      description: "Ultra-soft fleece with a relaxed fit to keep you cozy post workout.",
      price: "65.00",
      category: "Apparel",
      imageUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      inventory: 80,
    },
    {
      name: "Nike Dri-FIT Legend Tee",
      description: "Sweat-wicking tee designed to keep you cool when training heats up.",
      price: "30.00",
      category: "Training",
      imageUrl:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      inventory: 120,
    },
    {
      name: "Nike Metcon 9",
      description: "Stable and tough for lifting days with grippy traction for agility drills.",
      price: "149.99",
      category: "Training",
      imageUrl:
        "https://images.unsplash.com/photo-1612902377756-414b2253c903?auto=format&fit=crop&w=800&q=80",
      inventory: 42,
    },
    {
      name: "Nike Sportswear Tech Fleece Joggers",
      description: "Lightweight warmth with a tapered fit and iconic Tech Fleece look.",
      price: "120.00",
      category: "Apparel",
      imageUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      inventory: 64,
    },
  ];

  await db.delete(products);
  await db.insert(products).values(sampleProducts);
}

seedProducts()
  .then(() => {
    console.log("Seeded products successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
