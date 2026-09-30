'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './cart-context';

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const links = [
    { href: '/shop', label: 'Shop All' },
    { href: '/shop?category=Wardrobe', label: 'Wardrobe' },
    { href: '/shop?category=Kitchen', label: 'Kitchen' },
    { href: '/shop?category=Storage', label: 'Storage' },
  ];

  return (
    <>
      <div className="utility-strip">
        <span>Designed for Indian homes</span><span>Easy returns</span><span>COD available</span><span>One flat price: ₹999</span>
      </div>
      <header className="site-header">
        <Link href="/" className="brand-lockup" aria-label="SortD home">
          <img src="/brand/sortd-logo.png" alt="SortD — Live SortD. Everyday." />
        </Link>
        <nav className="desktop-nav">
          {links.map((link) => <Link key={link.href} href={link.href} className={pathname === '/shop' && link.href === '/shop' ? 'active' : ''}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/shop" className="icon-link" aria-label="Search">⌕</Link>
          <Link href="/cart" className="cart-link" aria-label="Cart">Cart <span className="cart-count">{count}</span></Link>
        </div>
      </header>
    </>
  );
}
