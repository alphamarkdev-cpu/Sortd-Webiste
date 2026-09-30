'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Product } from '@/lib/products';

type CartLine = Pick<Product, 'id' | 'slug' | 'name' | 'price' | 'image'> & { quantity: number };
type CartContextValue = {
  items: CartLine[];
  count: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQty: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('sortd-cart');
    if (raw) {
      try { setItems(JSON.parse(raw)); } catch { setItems([]); }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sortd-cart', JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: items.reduce((sum, line) => sum + line.quantity * line.price, 0),
    addItem(product, quantity = 1) {
      setItems((current) => {
        const exists = current.find((line) => line.id === product.id);
        if (exists) return current.map((line) => line.id === product.id ? { ...line, quantity: line.quantity + quantity } : line);
        return [...current, { id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image, quantity }];
      });
    },
    updateQty(id, quantity) {
      setItems((current) => current.map((line) => line.id === id ? { ...line, quantity: Math.max(1, quantity) } : line));
    },
    removeItem(id) { setItems((current) => current.filter((line) => line.id !== id)); },
    clearCart() { setItems([]); },
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
