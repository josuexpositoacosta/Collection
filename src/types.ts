export interface Product {
  id: string;
  name: string;
  nameEs: string;
  category: string;
  categoryEs: string;
  price: number;
  description: string;
  descriptionEs: string;
  image: string;
  images?: string[];
  rating?: number;
  reviewsCount?: number;
  details?: {
    dimensions: string;
    materials: string;
    origin: string;
  };
}

export type Screen = 'home' | 'catalog' | 'detail' | 'cart' | 'checkout';
