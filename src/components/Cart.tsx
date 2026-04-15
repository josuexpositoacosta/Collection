import React from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Product, Screen } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  updateQuantity: (productId: string, delta: number) => void;
  removeFromCart: (productId: string) => void;
  setScreen: (screen: Screen) => void;
}

export default function Cart({ cart, updateQuantity, removeFromCart, setScreen }: CartProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="px-6 md:px-12 py-32 flex flex-col items-center justify-center text-center gap-8">
        <div className="w-24 h-24 bg-white rounded-[32px] shadow-vibrant flex items-center justify-center border border-outline">
          <ShoppingBag className="w-10 h-10 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tighter mb-2">Your bag is empty</h1>
          <p className="text-secondary text-sm font-medium">Looks like you haven't added anything to your bag yet.</p>
        </div>
        <button 
          onClick={() => setScreen('catalog')}
          className="bg-primary text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-12">
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Shopping Bag</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Items List */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {cart.map((item, idx) => (
            <div key={item.product.id} className={`card-vibrant card-vibrant-${(idx % 4) + 1} p-6 flex gap-6`}>
              <div className="w-32 aspect-square overflow-hidden rounded-2xl bg-surface">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-secondary text-[10px] font-black uppercase tracking-widest mb-1 block">
                      {item.product.category}
                    </span>
                    <h3 className="text-lg font-bold">{item.product.name}</h3>
                  </div>
                  <p className="font-black text-primary">${item.product.price.toLocaleString()}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center bg-surface border border-outline rounded-xl overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.product.id, -1)}
                      className="p-2 hover:bg-white transition-colors"
                    >
                      <Minus className="w-3 h-3 text-primary" />
                    </button>
                    <span className="w-8 text-center text-xs font-black text-primary">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, 1)}
                      className="p-2 hover:bg-white transition-colors"
                    >
                      <Plus className="w-3 h-3 text-primary" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-3 bg-white rounded-xl border border-outline text-secondary hover:text-vibrant-pink hover:border-vibrant-pink transition-all shadow-sm"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-vibrant-dark text-white p-8 rounded-[32px] shadow-2xl sticky top-32">
            <h2 className="text-2xl font-black tracking-tight mb-8">Order Summary</h2>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-secondary">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-secondary">Shipping</span>
                <span className="text-vibrant-emerald">{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span>
              </div>
              <div className="pt-6 border-t border-secondary/30 flex justify-between items-end">
                <span className="text-secondary text-xs font-black uppercase tracking-widest">Total</span>
                <span className="text-3xl font-black">${total.toLocaleString()}</span>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-4 group">
              Checkout
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="mt-8 flex items-center justify-center gap-2 text-secondary">
              <ShieldCheck className="w-4 h-4" />
              <p className="text-[10px] uppercase tracking-widest font-black">
                Secure Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
