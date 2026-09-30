import Link from 'next/link';

const cats = [
  ['Wardrobe', 'Closets & clothes', 'W'],
  ['Drawers', 'Small essentials', 'D'],
  ['Kitchen', 'Pantry & shelves', 'K'],
  ['Shoes', 'Entryway storage', 'S'],
  ['Bags', 'Handbags & accessories', 'B'],
  ['Bathroom', 'Counters & cabinets', 'B'],
  ['Storage', 'Everywhere else', '+'],
];

export function CategoryStrip() {
  return <section className="section category-section"><div className="section-head"><div><p className="eyebrow">SHOP BY SPACE</p><h2>Every corner has a job.</h2></div><Link href="/shop" className="small-link">View all →</Link></div><div className="category-grid">{cats.map(([name, sub, icon]) => <Link key={name} href={`/shop?category=${encodeURIComponent(name)}`} className="category-card"><span className="category-icon">{icon}</span><div><b>{name}</b><span>{sub}</span></div><span className="arrow">↗</span></Link>)}</div></section>;
}
