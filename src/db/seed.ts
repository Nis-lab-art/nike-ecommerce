import "dotenv/config";
import { db } from "@/db";
import { products } from "@/db/schema/products";

async function main() {
  await db.insert(products).values([
    {
      name: "Nike Air Force 1 '07",
      subtitle: "Men's Shoes",
      category: "Shoes",
      imageUrl: "https://static.nike.com/a/images/t_default/af1.jpg",
      price: "7495.00",
      color: "White/White",
      gender: "Men",
      inventory: 25,
    },
    {
      name: "Nike Dunk Low",
      subtitle: "Women's Shoes",
      category: "Shoes",
      imageUrl: "https://static.nike.com/a/images/t_default/dunklow.jpg",
      price: "8695.00",
      color: "White/Black",
      gender: "Women",
      inventory: 18,
    },
    {
      name: "Nike Air Max 90",
      subtitle: "Men's Shoes",
      category: "Shoes",
      imageUrl: "https://static.nike.com/a/images/t_default/airmax90.jpg",
      price: "10995.00",
      color: "Black/White",
      gender: "Men",
      inventory: 12,
    },
    {
      name: "Nike Dri-FIT Tee",
      subtitle: "Men's Training T-Shirt",
      category: "Apparel",
      imageUrl: "https://static.nike.com/a/images/t_default/drifittee.jpg",
      price: "1995.00",
      color: "Grey",
      gender: "Men",
      inventory: 40,
    },
    {
      name: "Nike Club Fleece Hoodie",
      subtitle: "Unisex Hoodie",
      category: "Apparel",
      imageUrl: "https://static.nike.com/a/images/t_default/clubfleece.jpg",
      price: "3995.00",
      color: "Navy",
      gender: "Unisex",
      inventory: 20,
    },
  ]);

  console.log("✅ Seed complete");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
