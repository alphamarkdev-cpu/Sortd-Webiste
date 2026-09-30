import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img className="footer-logo" src="/brand/sortd-logo.png" alt="SortD" />
          <p>Smart organisers for calmer, more useful homes. Make room for the way you actually live.</p>
        </div>
        <div><h4>Shop</h4><Link href="/shop">All organisers</Link><Link href="/shop?category=Wardrobe">Wardrobe</Link><Link href="/shop?category=Kitchen">Kitchen</Link><Link href="/shop?category=Storage">Storage</Link></div>
        <div><h4>Help</h4><span>COD checkout</span><span>7-day returns</span><span>Order support</span><span>hello@sortd.example</span></div>
        <div><h4>About</h4><span>Our idea</span><span>Space-saving living</span><span>Everyday utility</span><span>Made to organise</span></div>
      </div>
      <div className="footer-bottom"><span>© 2026 SortD. Demo storefront.</span><span>COD is enabled for this build.</span></div>
    </footer>
  );
}
