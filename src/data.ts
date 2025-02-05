import { Product, Category } from './types';
import image1 from './assets/images/lash/g92-2-500x500 1.png';
import image2 from './assets/images/lash/ak-900-01-500x500 1.png';
import image3 from './assets/images/lash/g27cq4-500x500 1.png';
import image4 from './assets/images/lash/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png';
import bestsellingimg1 from './assets/images/bestselling/Frame 605.png';
import bestsellingimg2 from './assets/images/bestselling/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png';
import bestsellingimg3 from './assets/images/bestselling/gammaxx-l240-argb-1-500x500 1.png';
import bestsellingimg4 from './assets/images/bestselling/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png';
export const products: Product[] = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    price: 60,
    oldPrice: 120,
    rating: 4.8,
    reviews: 88,
    image: image1,
    category: 'Gaming',
    discount: 50
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    price: 960,
    oldPrice: 1160,
    rating: 4.7,
    reviews: 75,
    image: image2,
    category: 'Gaming',
    discount: 15
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    price: 400,
    oldPrice: 370,
    rating: 4.9,
    reviews: 99,
    image: image3,
    category: 'Gaming',
    discount: 30
  },
  {
    id: '4',
    name: 'S-Series Comfort Chair',
    price: 400,
    oldPrice: 475,
    rating: 4.6,
    reviews: 99,
    image: image4,
    category: 'Furniture',
    discount: 25
  }
];

export const bestSellers: Product[] = [
  {
    id: '5',
    name: 'The North Coat',
    price: 260,
    oldPrice: 360,
    rating: 4.9,
    reviews: 65,
    image: bestsellingimg1,
    category: 'Fashion'
  },
  {
    id: '6',
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    rating: 4.7,
    reviews: 65,
    image: bestsellingimg2,
    category: 'Fashion'
  },
  {
    id: '7',
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    rating: 4.8,
    reviews: 65,
    image: bestsellingimg3,
    category: 'Electronics'
  },
  {
    id: '8',
    name: 'Small BookShelf',
    price: 360,
    rating: 4.7,
    reviews: 65,
    image: bestsellingimg4,
    category: 'Furniture'
  }
];

export const categories: Category[] = [
  { id: '1', name: 'Phones', icon: 'smartphone' },
  { id: '2', name: 'Computers', icon: 'monitor' },
  { id: '3', name: 'SmartWatch', icon: 'watch' },
  { id: '4', name: 'Camera', icon: 'camera' },
  { id: '5', name: 'HeadPhones', icon: 'headphones' },
  { id: '6', name: 'Gaming', icon: 'gamepad-2' }
];
