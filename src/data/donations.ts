export interface Product {
  name: string;
  id: string;
  price: number;
  image: string;
  currency: string;
  sku: string;
}

export const products: Product[] = [
  {
    name: 'Noetica Coffee Mug',
    id: 'price_1RBTT9IyXKFritZtL3OIWtA1',
    price: 3000,
    image: '/products/mug2.png',
    currency: 'USD',
    sku: 'mug-001'
  },
  {
    name: 'Noetica Sweatshirt',
    id: 'price_1RBTSZIyXKFritZtyGSIyN9j',
    price: 5000,
    image: '/products/sweatshirt2.png',
    currency: 'USD',
    sku: 'sweatshirt-001'
  },
  {
    name: 'Noetica Tote',
    id: 'price_1RBTU8IyXKFritZtb6rb7AVm',
    price: 3000,
    image: '/products/tote1.png',
    currency: 'USD',
    sku: 'tote-001'
  },
  {
    name: 'Noetica Sticker',
    id: 'price_1RBTTbIyXKFritZttXy8Ugjp',
    price: 1000,
    image: '/products/sticker1.png',
    currency: 'USD',
    sku: 'sticker-001'
  },
  {
    name: 'Noetica Magazine Volume 1',
    id: 'price_1RBToWIyXKFritZtTCHKYlui',
    price: 3000,
    image: '/branding/volume-one-cover.png',
    currency: 'USD',
    sku: 'magazine-001'
  },
  {
    name: 'Noetica Magazine Volume 2',
    id: 'price_1RBTp5IyXKFritZtSzBiLrOl',
    price: 3000,
    image: '/branding/noetica-cover-issue-two.png',
    currency: 'USD',
    sku: 'magazine-001'
  }
]; 