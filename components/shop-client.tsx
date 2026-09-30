'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '@/lib/products';
import { ProductCard } from './product-card';

export function ShopClient({ initialCategory = 'All' }: { initialCategory?: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => products.filter((p) => (category === 'All' || p.category === category) && `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <>
    <div className="shop-toolbar"><div className="filters">{categories.map((cat) => <button key={cat} onClick={() => setCategory(cat)} className={category === cat ? 'filter-btn active' : 'filter-btn'}>{cat}</button>)}</div><div className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search organisers" /></div></div>
    <p className="result-line">Showing {filtered.length} organiser{filtered.length === 1 ? '' : 's'}</p>
    {filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h3>No organisers found</h3><p>Try a different word or browse all categories.</p><button onClick={() => { setCategory('All'); setQuery(''); }} className="primary-btn">Reset filters</button></div>}
  </>;
}
