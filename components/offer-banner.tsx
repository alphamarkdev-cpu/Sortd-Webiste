import Link from 'next/link';

export function OfferBanner() {
  return <section className="offer-banner"><div><p className="eyebrow">START SIMPLE</p><h2>Pick a problem. Pick an organiser.</h2><p>Every product in this demo catalogue is ₹999, so you can explore the range without getting stuck comparing dozens of prices.</p></div><Link href="/shop" className="dark-btn">Browse ₹999 organisers →</Link></section>;
}
