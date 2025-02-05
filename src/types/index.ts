export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  discount?: number;
  colors?: string[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface NewArrivalItem {
  id: number;
  title: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
} 