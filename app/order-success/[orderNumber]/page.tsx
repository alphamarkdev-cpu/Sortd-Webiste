import Link from 'next/link';

export default async function OrderSuccess({ params }: { params: Promise<{ orderNumber: string }> }) {
  const { orderNumber } = await params;
  return <section className="success-page"><div className="success-card"><div className="success-mark">✓</div><p className="eyebrow">ORDER CONFIRMED</p><h1>Your SortD order is in.</h1><p className="success-lead">Order <b>{orderNumber}</b> has been created with Cash on Delivery. Keep your phone handy for delivery updates.</p><div className="success-actions"><Link href="/shop" className="primary-btn">Continue shopping →</Link><Link href="/" className="text-link">Back to home</Link></div></div></section>;
}
