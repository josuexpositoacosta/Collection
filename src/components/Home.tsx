import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product, Screen } from '../types';

interface HomeProps {
  setScreen: (screen: Screen) => void;
  setSelectedProduct: (product: Product) => void;
}

export default function Home({ setScreen, setSelectedProduct }: HomeProps) {
  const featuredProduct = PRODUCTS[3]; // The Sculptural Lounge Chair

  return (
    <div className="flex flex-col gap-12 pb-12 px-6 md:px-12">
      {/* Header Section */}
      <header className="flex justify-between items-end mt-8">
        <div>
          <span className="text-secondary text-sm font-bold mb-1 block">Wednesday, April 15</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Ready to shop?</h1>
        </div>
        <button 
          onClick={() => setScreen('catalog')}
          className="bg-white px-6 py-3 rounded-2xl font-bold text-sm shadow-vibrant border border-outline hover:border-primary transition-all"
        >
          + New Arrival
        </button>
      </header>

      {/* Featured Hero Card */}
      <section 
        className="card-vibrant card-vibrant-1 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center cursor-pointer group"
        onClick={() => {
          setSelectedProduct(featuredProduct);
          setScreen('detail');
        }}
      >
        <div className="flex-grow flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-black tracking-tight">{featuredProduct.name}</h2>
            <div className="bg-[#F1F5F9] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
              🔥 Trending
            </div>
          </div>
          <p className="text-secondary text-sm leading-relaxed max-w-md">
            {featuredProduct.description}
          </p>
          <div className="mt-auto">
            <div className="flex justify-between text-xs font-bold text-secondary mb-2">
              <span>Stock Level</span>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill bg-primary w-[85%]" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 aspect-square overflow-hidden rounded-[32px] shadow-2xl">
          <img 
            src={featuredProduct.image} 
            alt={featuredProduct.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-vibrant-dark text-white p-8 rounded-[32px] flex flex-col gap-2">
          <span className="text-secondary text-[10px] font-black uppercase tracking-widest">Weekly Sales</span>
          <span className="text-3xl font-black">92%</span>
        </div>
        <div className="bg-vibrant-dark text-white p-8 rounded-[32px] flex flex-col gap-2">
          <span className="text-secondary text-[10px] font-black uppercase tracking-widest">Active Users</span>
          <span className="text-3xl font-black">1.4k</span>
        </div>
        <div className="bg-vibrant-dark text-white p-8 rounded-[32px] flex flex-col gap-2">
          <span className="text-secondary text-[10px] font-black uppercase tracking-widest">Atelier Points</span>
          <span className="text-3xl font-black">4,250</span>
        </div>
      </section>

      {/* Categories Horizontal Scroll */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-black tracking-tight">Categories</h2>
          <button className="text-xs font-bold text-secondary hover:text-primary transition-colors">
            View All
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex-shrink-0 group cursor-pointer">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] overflow-hidden mb-4 border-2 border-outline group-hover:border-primary transition-all shadow-sm">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center text-xs font-bold text-secondary group-hover:text-primary transition-colors">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section className="py-12">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black tracking-tight">New Arrivals</h2>
          <button 
            onClick={() => setScreen('catalog')}
            className="text-xs font-bold text-primary hover:underline"
          >
            Shop All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product, idx) => (
            <div 
              key={product.id} 
              className={`card-vibrant card-vibrant-${(idx % 4) + 1} p-6 flex flex-col gap-4 cursor-pointer group`}
              onClick={() => {
                setSelectedProduct(product);
                setScreen('detail');
              }}
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <span className="text-secondary text-[10px] font-black uppercase tracking-widest">{product.category}</span>
                  <div className="bg-[#F1F5F9] px-2 py-1 rounded-lg text-[8px] font-black">
                    ⭐ {product.rating}
                  </div>
                </div>
                <h3 className="text-sm font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-lg font-black text-primary">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
