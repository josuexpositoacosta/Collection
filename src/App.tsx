import React, { useState } from 'react';
import { Product, Screen } from './types';
import Layout from './components/Layout';
import Home from './components/Home';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setCurrentScreen('cart');
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home setScreen={setCurrentScreen} setSelectedProduct={setSelectedProduct} />;
      case 'catalog':
        return <Catalog setScreen={setCurrentScreen} setSelectedProduct={setSelectedProduct} />;
      case 'detail':
        return selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            setScreen={setCurrentScreen} 
            addToCart={addToCart} 
          />
        ) : <Home setScreen={setCurrentScreen} setSelectedProduct={setSelectedProduct} />;
      case 'cart':
        return (
          <Cart 
            cart={cart} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart} 
            setScreen={setCurrentScreen} 
          />
        );
      default:
        return <Home setScreen={setCurrentScreen} setSelectedProduct={setSelectedProduct} />;
    }
  };

  return (
    <Layout 
      currentScreen={currentScreen} 
      setScreen={setCurrentScreen} 
      cartCount={cartCount}
    >
      {renderScreen()}
    </Layout>
  );
}
