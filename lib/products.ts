export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  description: string;
  bullets: string[];
};

export const PRICE = 999;

export const categories = [
  'All',
  'Wardrobe',
  'Drawers',
  'Kitchen',
  'Shoes',
  'Bags',
  'Bathroom',
  'Storage',
];

export const products: Product[] = [
  {
    id: 'p01', slug: 'sock-innerwear-organizer', name: 'Sock & Innerwear Organizer', shortName: 'Sock Organizer', category: 'Wardrobe', price: PRICE,
    image: '/assets/products/wardrobe-rack.png', badge: 'Everyday essential',
    description: 'Give small wardrobe essentials a proper home with easy-to-see compartments.',
    bullets: ['Keeps pairs together', 'Soft structured compartments', 'Fits shelves & drawers'],
  },
  {
    id: 'p02', slug: 'adjustable-drawer-dividers', name: 'Adjustable Drawer Dividers', shortName: 'Drawer Dividers', category: 'Drawers', price: PRICE,
    image: '/assets/products/drawer-divider.png', badge: 'Best for drawers',
    description: 'Turn one messy drawer into clear zones for clothes, accessories and daily essentials.',
    bullets: ['Flexible sectioning', 'Cleaner visibility', 'Simple to reposition'],
  },
  {
    id: 'p03', slug: 'hanging-wardrobe-shelf', name: 'Hanging Wardrobe Shelf', shortName: 'Wardrobe Shelf', category: 'Wardrobe', price: PRICE,
    image: '/assets/products/wardrobe-rack.png', badge: 'Space saver',
    description: 'Add vertical storage inside tall cupboards without installing permanent shelves.',
    bullets: ['Uses vertical space', 'Foldable design', 'Great for folded clothes'],
  },
  {
    id: 'p04', slug: 'stackable-storage-bins', name: 'Stackable Storage Bins', shortName: 'Storage Bins', category: 'Storage', price: PRICE,
    image: '/assets/products/stackable-bins.png', badge: 'Stack & store',
    description: 'Build storage upward on shelves, counters and cupboards with modular bins.',
    bullets: ['Stackable format', 'Front-access design', 'Works across rooms'],
  },
  {
    id: 'p05', slug: 'shoe-rack-3-tier', name: '3-Tier Shoe Rack', shortName: 'Shoe Rack', category: 'Shoes', price: PRICE,
    image: '/assets/products/shoes-photo.jpg',
    description: 'Keep everyday footwear off the floor and easy to grab near the entrance or wardrobe.',
    bullets: ['Three roomy levels', 'Compact footprint', 'Quick access'],
  },
  {
    id: 'p06', slug: 'under-shelf-basket', name: 'Under-Shelf Basket', shortName: 'Shelf Basket', category: 'Kitchen', price: PRICE,
    image: '/assets/products/kitchen-photo.jpg',
    description: 'Create an extra layer of storage below an existing shelf or cabinet panel.',
    bullets: ['Instant extra layer', 'No bulky cabinet changes', 'Ideal for packets & linens'],
  },
  {
    id: 'p07', slug: 't-shirt-file-organizer', name: 'T-Shirt File Organizer', shortName: 'T-Shirt Organizer', category: 'Wardrobe', price: PRICE,
    image: '/assets/products/wardrobe-rack.png',
    description: 'Store tees vertically so you can see what you have without disturbing the stack.',
    bullets: ['File-fold friendly', 'Fast visual scan', 'Keeps stacks tidy'],
  },
  {
    id: 'p08', slug: 'saree-organizer', name: 'Saree & Dupatta Organizer', shortName: 'Saree Organizer', category: 'Wardrobe', price: PRICE,
    image: '/assets/products/wardrobe-rack.png',
    description: 'Separate special-occasion fabrics from daily wear while keeping shelves neat.',
    bullets: ['Wide compartments', 'Protective cover', 'Easy shelf placement'],
  },
  {
    id: 'p09', slug: 'bag-display-organizer', name: 'Bag Display Organizer', shortName: 'Bag Organizer', category: 'Bags', price: PRICE,
    image: '/assets/products/bag-organizer.svg',
    description: 'Keep handbags visible, upright and ready to reach instead of hidden in piles.',
    bullets: ['Keeps shapes intact', 'Easy grab-and-go access', 'Makes shelf space usable'],
  },
  {
    id: 'p10', slug: 'kitchen-shelf-riser', name: 'Kitchen Shelf Riser', shortName: 'Shelf Riser', category: 'Kitchen', price: PRICE,
    image: '/assets/products/kitchen-photo.jpg',
    description: 'Double the usable height of a shelf by creating a strong second level.',
    bullets: ['Adds vertical storage', 'Great for plates & jars', 'Better visibility'],
  },
  {
    id: 'p11', slug: 'fridge-storage-bin', name: 'Fridge Storage Bin', shortName: 'Fridge Bin', category: 'Kitchen', price: PRICE,
    image: '/assets/products/kitchen-photo.jpg',
    description: 'Group packets, condiments and snack items so the refrigerator stays easier to navigate.',
    bullets: ['Groups similar items', 'Easy pull-out access', 'Cleaner fridge shelves'],
  },
  {
    id: 'p12', slug: 'makeup-desk-organizer', name: 'Makeup & Desk Organizer', shortName: 'Desk Organizer', category: 'Storage', price: PRICE,
    image: '/assets/products/stackable-bins.png',
    description: 'One compact place for skincare, makeup, stationery and little daily items.',
    bullets: ['Multiple compartments', 'Keeps essentials upright', 'Works on desks & dressers'],
  },
  {
    id: 'p13', slug: 'bathroom-counter-caddy', name: 'Bathroom Counter Caddy', shortName: 'Bathroom Caddy', category: 'Bathroom', price: PRICE,
    image: '/assets/products/bathroom-photo.jpg',
    description: 'Tame bottles and grooming essentials on a busy bathroom counter.',
    bullets: ['Separated zones', 'Easy wipe-clean layout', 'Compact countertop footprint'],
  },
  {
    id: 'p14', slug: 'pantry-storage-container-set', name: 'Pantry Storage Container Set', shortName: 'Pantry Set', category: 'Kitchen', price: PRICE,
    image: '/assets/products/kitchen-photo.jpg',
    description: 'Bring grains, snacks and pantry staples into a consistent, visible system.',
    bullets: ['Uniform shelf look', 'Easy ingredient access', 'Modular storage'],
  },
  {
    id: 'p15', slug: 'foldable-clothes-storage-bag', name: 'Foldable Clothes Storage Bag', shortName: 'Storage Bag', category: 'Storage', price: PRICE,
    image: '/assets/products/stackable-bins.png',
    description: 'Store seasonal clothing, blankets and linens without wasting shelf or loft space.',
    bullets: ['Foldable when empty', 'Dust-resistant cover', 'Good for seasonal rotation'],
  },
  {
    id: 'p16', slug: 'multi-purpose-storage-basket', name: 'Multi-Purpose Storage Basket', shortName: 'Storage Basket', category: 'Storage', price: PRICE,
    image: '/assets/products/stackable-bins.png',
    description: 'A flexible basket for toys, toiletries, accessories, chargers and everything in between.',
    bullets: ['Carry handles', 'Open-top access', 'Useful across rooms'],
  },
  {
    id: 'p17', slug: 'bedside-drawer-organizer', name: 'Bedside Drawer Organizer', shortName: 'Bedside Organizer', category: 'Drawers', price: PRICE,
    image: '/assets/products/drawer-divider.png',
    description: 'Create a tiny home for glasses, cables, remotes, medicines and bedtime essentials.',
    bullets: ['Small-item friendly', 'Easy to lift out', 'Stops drawer clutter'],
  },
  {
    id: 'p18', slug: 'door-hanging-organizer', name: 'Door Hanging Organizer', shortName: 'Door Organizer', category: 'Storage', price: PRICE,
    image: '/assets/products/stackable-bins.png', badge: 'Use unused space',
    description: 'Turn the back of a door into practical storage for accessories and everyday clutter.',
    bullets: ['Uses overlooked space', 'Multiple pockets', 'Ideal for small rooms'],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
