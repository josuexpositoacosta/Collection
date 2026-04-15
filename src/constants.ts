import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Chronos Essential',
    nameEs: 'Chronos Esencial',
    category: 'Electronics',
    categoryEs: 'Electrónica',
    price: 450,
    description: 'Swiss-made movement encased in surgical-grade stainless steel with a sapphire crystal finish.',
    descriptionEs: 'Movimiento de fabricación suiza revestido en acero inoxidable de grado quirúrgico con un acabado de cristal de zafiro.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewsCount: 56
  },
  {
    id: '2',
    name: 'Ignite Runner V2',
    nameEs: 'Ignite Runner V2',
    category: 'Footwear',
    categoryEs: 'Calzado',
    price: 180,
    description: 'High-performance athletic sneaker with responsive cushioning and breathable mesh.',
    descriptionEs: 'Zapatilla deportiva de alto rendimiento con amortiguación reactiva y malla transpirable.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 128
  },
  {
    id: '3',
    name: 'Shadow Aviators',
    nameEs: 'Aviadores Shadow',
    category: 'Accessories',
    categoryEs: 'Accesorios',
    price: 290,
    description: 'Classic aviator silhouette with polarized lenses and lightweight titanium frames.',
    descriptionEs: 'Silueta clásica de aviador con lentes polarizadas y monturas de titanio ligeras.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviewsCount: 84
  },
  {
    id: '4',
    name: 'The Sculptural Lounge Chair',
    nameEs: 'La Silla Escultural',
    category: 'Furniture',
    categoryEs: 'Muebles',
    price: 2450,
    description: 'A masterwork of organic form and structural integrity. Carved from solid European oak, the Sculptural Lounge Chair balances architectural precision with ergonomic comfort.',
    descriptionEs: 'Una obra maestra de forma orgánica e integridad estructural. Tallada en roble europeo macizo, la Silla Escultural equilibra la precisión arquitectónica con el confort ergonómico.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.9,
    reviewsCount: 128,
    details: {
      dimensions: '85cm H × 78cm W × 74cm D',
      materials: 'Solid European Oak, Natural Wax Finish',
      origin: 'Handmade in Denmark'
    }
  },
  {
    id: '5',
    name: 'Sculptural Form Vase',
    nameEs: 'Jarrón de Forma Escultural',
    category: 'Home',
    categoryEs: 'Hogar',
    price: 185,
    description: 'Hand-fired stoneware vase with a unique organic silhouette and textured finish.',
    descriptionEs: 'Jarrón de gres cocido a mano con una silueta orgánica única y acabado texturizado.',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 24
  },
  {
    id: '6',
    name: 'Linen Club Lounge',
    nameEs: 'Lounge Club de Lino',
    category: 'Furniture',
    categoryEs: 'Muebles',
    price: 1240,
    description: 'Luxury linen lounge chair in ivory fabric set against a muted light grey wall.',
    descriptionEs: 'Sillón de lino de lujo en tela marfil sobre una pared gris claro mate.',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    reviewsCount: 12
  },
  {
    id: '7',
    name: 'Orbital Brass Lamp',
    nameEs: 'Lámpara Orbital de Latón',
    category: 'Home',
    categoryEs: 'Hogar',
    price: 420,
    description: 'Elegant brass table lamp with a geometric marble base and soft ambient lighting.',
    descriptionEs: 'Elegante lámpara de mesa de latón con base de mármol geométrica e iluminación ambiental suave.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewsCount: 56
  },
  {
    id: '8',
    name: 'Structured Wool Overcoat',
    nameEs: 'Abrigo de Lana Estructurado',
    category: 'Fashion',
    categoryEs: 'Moda',
    price: 1250,
    description: 'Refined wool overcoat with clean minimalist tailoring and a modern silhouette.',
    descriptionEs: 'Abrigo de lana refinado con sastrería minimalista limpia y una silueta moderna.',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 42
  },
  {
    id: '9',
    name: 'Italian Calfskin Chelsea',
    nameEs: 'Chelsea de Piel Italiana',
    category: 'Footwear',
    categoryEs: 'Calzado',
    price: 680,
    description: 'Bespoke hand-crafted black leather chelsea boots with a refined finish.',
    descriptionEs: 'Botas chelsea de cuero negro hechas a mano a medida con un acabado refinado.',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    reviewsCount: 18
  }
];

export const CATEGORIES = [
  { id: 'electronics', name: 'Electronics', nameEs: 'Electrónica', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
  { id: 'fashion', name: 'Fashion', nameEs: 'Moda', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=400' },
  { id: 'home', name: 'Home', nameEs: 'Hogar', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
  { id: 'beauty', name: 'Beauty', nameEs: 'Belleza', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400' },
  { id: 'accessories', name: 'Accessories', nameEs: 'Accesorios', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
];
