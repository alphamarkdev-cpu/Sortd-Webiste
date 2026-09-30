import './globals.css';
import { CartProvider } from '@/components/cart-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = { title: 'SortD — Smart organisers for calmer homes', description: 'A utility-first organiser store for cupboards, drawers, kitchens and everyday spaces.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><Header /><main>{children}</main><Footer /></CartProvider></body></html>;
}
