import { Suspense } from "react";
import { getProducts } from "@/lib/queries";
import { ProductCard } from "@/components/ProductCard";

async function ProductGrid() {
  try {
    const products = await getProducts();

    if (products.length === 0) {
      return <p className="text-slate-600">No products found. Run the seed script to add inventory.</p>;
    }

    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
        Unable to load products. Confirm your <code className="font-mono">DATABASE_URL</code> and run the Drizzle migrations.
      </div>
    );
  }
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Featured</p>
        <h1 className="text-4xl font-bold text-slate-900">Nike Essentials</h1>
        <p className="text-slate-600 max-w-2xl">
          Explore curated Nike footwear and apparel served straight from a Neon-hosted PostgreSQL
          database via Drizzle ORM.
        </p>
      </header>
      <Suspense fallback={<p className="text-slate-500">Loading products...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <ProductGrid />
      </Suspense>
    </main>
  );
}
