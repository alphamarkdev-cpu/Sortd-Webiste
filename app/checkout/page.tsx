'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart-context';
import { CheckoutForm } from '@/components/checkout-form';

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  if (items.length === 0) return <section className="page-shell"><div className="empty-state large"><h2>Your cart is empty.</h2><p>Add an organiser before coming to checkout.</p><Link href="/shop" className="primary-btn">Browse organisers →</Link></div></section>;
  return <section className="page-shell"><div className="page-intro compact"><p className="eyebrow">SECURE CHECKOUT</p><h1>Place a COD order.</h1><p>Enter your delivery details. Payment is due when the parcel arrives.</p></div><div className="checkout-layout"><CheckoutForm /><aside className="checkout-summary"><p className="eyebrow">YOUR ORDER</p>{items.map((item)=><div className="checkout-item" key={item.id}><img src={item.image} alt=""/><div><b>{item.name}</b><span>Qty {item.quantity}</span></div><strong>₹{(item.price*item.quantity).toLocaleString('en-IN')}</strong></div>)}<div className="summary-total"><span>Total</span><strong>₹{subtotal.toLocaleString('en-IN')}</strong></div></aside></div></section>;
}
