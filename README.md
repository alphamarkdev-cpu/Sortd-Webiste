# SortD — Functional E-commerce Starter

This is a full-stack starter storefront for the SortD home-organisation brand. The design is deliberately different from the supplied homepage reference while using the same SortD logo and the supplied cupboard / organiser imagery as source assets.

## Included

- Responsive homepage with hero, category discovery, featured products, utility-led positioning, testimonials and offer banner.
- 18-product starter catalogue across wardrobe, drawers, kitchen, shoes, bags, bathroom and storage.
- Product detail pages with quantity controls and add-to-cart.
- Cart page with live quantity updates and subtotal.
- COD-only checkout with delivery form and server-side order validation.
- `/api/orders` backend endpoint.
- Local development order persistence in `.data/orders.json` when no database is configured.
- PostgreSQL + Prisma schema ready for hosted persistence later.
- Supplied SortD logo used as the brand mark; supplied organiser images used as product/hero assets where suitable.

## Stack

Next.js + React + TypeScript for the storefront and backend routes, with Prisma/PostgreSQL ready for persistent orders. This keeps the app deployable to a normal Node hosting platform or Vercel later without locking the brand into Shopify/Wix.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The checkout works locally without a database; orders are written to `.data/orders.json`.

## Add a real cloud database later

1. Create a PostgreSQL database (Supabase Postgres, Neon, Railway Postgres or another PostgreSQL provider).
2. Copy `.env.example` to `.env.local` and set `DATABASE_URL`.
3. Run:

```bash
npm run db:generate
npm run db:push
```

After that, checkout orders are saved in PostgreSQL instead of the local JSON file.

## Add real products later

The starter catalogue is code-backed in `lib/products.ts`. Replace the dummy SVG assets in `public/assets/products` with real product-front images and update the product records. A future iteration can move products, inventory, customers, coupons and shipping rules into PostgreSQL without changing the storefront structure.

## Important next production steps

Before launch, connect a real domain, replace demo product data, add shipping/pincode rules, configure transactional email/SMS, add an admin order view, add a real return/refund workflow, and switch the database to managed PostgreSQL. COD should remain an explicitly selectable payment method only if that matches the brand's actual fulfilment policy.

Vercel deployment test
