import Link from 'next/link';
import { Hero } from '@/components/hero';
import { CategoryStrip } from '@/components/category-strip';
import { ProductCard } from '@/components/product-card';
import { WhySortd } from '@/components/why-sortd';
import { TestimonialStrip } from '@/components/testimonial-strip';
import { OfferBanner } from '@/components/offer-banner';
import { products } from '@/lib/products';

export default function HomePage() {
  return <>
    <Hero />
    <CategoryStrip />
    <section className="section product-section"><div className="section-head"><div><p className="eyebrow">POPULAR RIGHT NOW</p><h2>Organisers with a clear job to do.</h2></div><Link href="/shop" className="small-link">Shop all →</Link></div><div className="product-grid">{products.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
    <section className="image-split-section"><div className="image-split-copy"><p className="eyebrow">START WITH THE MESS</p><h2>The cupboard is the space. The organiser is the system.</h2><p>SortD is built around the everyday spaces people already have: cupboards, drawers, shelves, counters and doors. Pick the spot that frustrates you most and give it a simpler layout.</p><Link href="/shop" className="primary-btn">Find an organiser →</Link></div><div className="image-stack"><img src="/assets/shelf-storage.png" alt="Modular shelf storage" /></div></section>
    <WhySortd />
    <TestimonialStrip />
    <OfferBanner />
  </>;
}
