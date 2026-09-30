import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { products } from '@/lib/products';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | null = null;
function getPrisma() {
  if (!prisma) prisma = new PrismaClient();
  return prisma;
}
const ORDER_FILE = path.join(process.cwd(), '.data', 'orders.json');

function orderNumber() {
  const tail = randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase();
  return `SORT-${tail}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const customer = body?.customer;
    const items = body?.items;
    if (!customer?.name || !customer?.phone || !customer?.address || !customer?.city || !customer?.state || !customer?.pincode || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Please complete the delivery details and add at least one item.' }, { status: 400 });
    }
    if (!/^\d{10}$/.test(customer.phone) || !/^\d{6}$/.test(customer.pincode)) return NextResponse.json({ error: 'Please enter a valid mobile number and PIN code.' }, { status: 400 });

    const normalized = items.map((line: { productId?: string; quantity?: number }) => {
      const product = products.find((p) => p.id === line.productId);
      const quantity = Math.max(1, Math.min(20, Number(line.quantity || 1)));
      if (!product) throw new Error('A product in the cart is no longer available.');
      return { productId: product.id, productName: product.name, price: product.price, quantity };
    });
    const total = normalized.reduce((sum, line) => sum + line.price * line.quantity, 0);
    const number = orderNumber();

    if (process.env.DATABASE_URL) {
      const created = await getPrisma().order.create({ data: { orderNumber: number, customerName: customer.name, phone: customer.phone, email: customer.email || null, address: customer.address, city: customer.city, state: customer.state, pincode: customer.pincode, paymentMethod: 'COD', status: 'PENDING', total, items: { create: normalized } } });
      return NextResponse.json({ orderNumber: created.orderNumber });
    }

    await mkdir(path.dirname(ORDER_FILE), { recursive: true });
    let saved: unknown[] = [];
    try { saved = JSON.parse(await readFile(ORDER_FILE, 'utf8')); } catch { saved = []; }
    const order = { id: randomUUID(), orderNumber: number, customer, paymentMethod: 'COD', status: 'PENDING', total, items: normalized, createdAt: new Date().toISOString() };
    await writeFile(ORDER_FILE, JSON.stringify([order, ...saved], null, 2));
    return NextResponse.json({ orderNumber: number });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Could not create the order.' }, { status: 500 });
  }
}
