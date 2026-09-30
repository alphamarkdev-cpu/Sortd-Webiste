'use client';

import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from './cart-context';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <article className="product-card">
      <Link href={`/shop/${product.slug}`} className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-copy">
        <p className="eyebrow">{product.category}</p>
        <Link href={`/shop/${product.slug}`}><h3>{product.name}</h3></Link>
        <div className="product-row"><strong>₹{product.price.toLocaleString('en-IN')}</strong><span>COD</span></div>
        <button className="add-btn" onClick={() => addItem(product)}>Add to cart</button>
      </div>
    </article>
  );
}
