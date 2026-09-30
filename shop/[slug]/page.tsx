import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToCart } from '@/components/add-to-cart';
import { ProductCard } from '@/components/product-card';
import { getProduct, products } from '@/lib/products';

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  return <section className="page-shell"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>{product.name}</span></div><div className="product-detail"><div className="detail-media"><img src={product.image} alt={product.name} /></div><div className="detail-copy"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="detail-price">₹{product.price.toLocaleString('en-IN')}</p><p className="detail-description">{product.description}</p><ul className="benefit-list">{product.bullets.map((b) => <li key={b}>✓ {b}</li>)}</ul><div className="cod-note"><b>COD available</b><span>Pay when the order reaches your door.</span></div><AddToCart product={product} /></div></div><div className="detail-lower"><div><p className="eyebrow">WHY IT WORKS</p><h2>Give the space a layout.</h2><p>Good organising removes friction. The right product creates a visible place for everyday things, so putting something away takes less thought.</p></div><div className="detail-feature-grid"><div><b>01</b><span>Made for everyday use</span></div><div><b>02</b><span>Easy to reset</span></div><div><b>03</b><span>Fits existing spaces</span></div></div></div>{related.length>0 && <section className="related"><div className="section-head"><div><p className="eyebrow">MORE IN {product.category.toUpperCase()}</p><h2>You might also like.</h2></div><Link href="/shop" className="small-link">See everything →</Link></div><div className="product-grid">{related.map((p)=><ProductCard key={p.id} product={p}/>)}</div></section>}</section>;
}
