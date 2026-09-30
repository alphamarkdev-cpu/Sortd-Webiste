import Link from 'next/link';
export default function NotFound() { return <section className="success-page"><div className="success-card"><p className="eyebrow">404</p><h1>That space doesn't exist.</h1><p>Let's get you back to organisers that do.</p><Link href="/shop" className="primary-btn">Shop organisers →</Link></div></section>; }
