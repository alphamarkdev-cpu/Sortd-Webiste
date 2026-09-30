import Link from 'next/link';
import { ShopClient } from '@/components/shop-client';
import { categories } from '@/lib/products';

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const category = params.category && categories.includes(params.category) ? params.category : 'All';
  return <section className="page-shell"><div className="shop-page-header"><Link href="/" className="shop-back-link">← Back to home</Link></div><div className="page-intro"><p className="eyebrow">THE SORTD STORE</p><h1>Organise the space you already own.</h1><p>Browse organisers for wardrobes, drawers, kitchens, shoes, bags, bathrooms and storage corners. Every product in this starter catalogue is ₹999.</p></div><ShopClient initialCategory={category} /></section>;
}
