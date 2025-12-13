"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/db/schema";
import { useCartStore } from "@/state/useCartStore";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="rounded-2xl bg-white shadow-card p-6 space-y-4 border border-slate-100">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{product.category}</p>
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        </div>
        <span className="text-base font-semibold text-brand-accent">${product.price}</span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
      <button
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white text-sm font-medium transition-colors hover:bg-brand-accent"
        onClick={() => addItem(product)}
        type="button"
      >
        <ShoppingBag className="h-4 w-4" />
        Add to cart
      </button>
    </article>
  );
}
