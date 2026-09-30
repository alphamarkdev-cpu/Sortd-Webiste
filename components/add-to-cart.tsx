'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';
import { useCart } from './cart-context';

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  return <div className="detail-actions"><div className="qty-control"><button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button><span>{qty}</span><button onClick={() => setQty((q) => q + 1)}>+</button></div><button className="primary-btn wide" onClick={() => { addItem(product, qty); setAdded(true); setTimeout(() => setAdded(false), 1400); }}>{added ? 'Added to cart ✓' : 'Add to cart →'}</button></div>;
}
