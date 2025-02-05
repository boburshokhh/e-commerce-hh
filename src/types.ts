export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}