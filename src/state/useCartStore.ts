import { create } from "zustand";
import type { Product } from "@/db/schema";

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (product) => {
    const { items } = get();
    const existing = items.find((item) => item.id === product.id);

    if (existing) {
      set({
        items: items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },
  clear: () => set({ items: [] }),
}));
