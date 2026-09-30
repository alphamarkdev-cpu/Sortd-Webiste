import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="pill">MAKE ROOM FOR LIFE</div>
        <h1>Less clutter.<br /><span>More living.</span></h1>
        <p className="hero-lead">Smart organisers that help you use the space you already have — from cupboards and drawers to kitchens, bathrooms and everything in between.</p>
        <div className="hero-ctas"><Link href="/shop" className="primary-btn">Shop organisers <span>→</span></Link><Link href="#why-sortd" className="text-link">See how SortD works</Link></div>
        <div className="hero-proof"><div className="proof-chip"><b>15+ ways</b><span>to use space better</span></div><div className="proof-chip"><b>₹999</b><span>one simple product price</span></div><div className="proof-chip"><b>COD</b><span>available at checkout</span></div></div>
      </div>
      <div className="hero-visual">
        <img src="/assets/hero-cupboard.png" alt="Before and after organised cupboard" />
        <div className="hero-note"><span className="note-label">THE SORTD DIFFERENCE</span><strong>Turn one shelf into a system.</strong><span>Visual. Practical. Repeatable.</span></div>
      </div>
    </section>
  );
}
