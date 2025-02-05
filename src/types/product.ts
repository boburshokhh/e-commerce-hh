export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  discount?: number;
  rating: number;
  reviews: number;
  colors?: string[];
  isNew?: boolean;
} 