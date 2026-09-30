'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './cart-context';

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name:'', phone:'', email:'', address:'', city:'', state:'', pincode:'' });

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (items.length === 0) return setError('Your cart is empty.');
    if (!/^\d{10}$/.test(form.phone)) return setError('Enter a valid 10-digit mobile number.');
    if (!/^\d{6}$/.test(form.pincode)) return setError('Enter a valid 6-digit PIN code.');
    setBusy(true);
    try {
      const response = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ customer: form, items: items.map((item) => ({ productId: item.id, quantity: item.quantity })) }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not place order.');
      clearCart();
      router.push(`/order-success/${data.orderNumber}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not place order.');
      setBusy(false);
    }
  }

  return <form className="checkout-form" onSubmit={submit}><div className="form-grid"><label>Full name<input required value={form.name} onChange={(e)=>update('name',e.target.value)} placeholder="Your name" /></label><label>Mobile number<input required inputMode="numeric" value={form.phone} onChange={(e)=>update('phone',e.target.value.replace(/\D/g,'').slice(0,10))} placeholder="10-digit mobile" /></label><label className="full">Email (optional)<input type="email" value={form.email} onChange={(e)=>update('email',e.target.value)} placeholder="you@example.com" /></label><label className="full">Address<input required value={form.address} onChange={(e)=>update('address',e.target.value)} placeholder="House no., street, locality" /></label><label>City<input required value={form.city} onChange={(e)=>update('city',e.target.value)} placeholder="City" /></label><label>State<input required value={form.state} onChange={(e)=>update('state',e.target.value)} placeholder="State" /></label><label>PIN code<input required inputMode="numeric" value={form.pincode} onChange={(e)=>update('pincode',e.target.value.replace(/\D/g,'').slice(0,6))} placeholder="6-digit PIN" /></label></div><div className="payment-card"><div><span className="payment-radio">●</span><div><b>Cash on Delivery</b><p>Pay when your order is delivered.</p></div></div><strong>₹{subtotal.toLocaleString('en-IN')}</strong></div>{error && <div className="form-error">{error}</div>}<button className="primary-btn checkout-submit" type="submit" disabled={busy}>{busy ? 'Placing order…' : `Place COD order · ₹${subtotal.toLocaleString('en-IN')}`}</button></form>;
}
