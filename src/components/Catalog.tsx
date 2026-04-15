import React, { useState } from 'react';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product, Screen } from '../types';

interface CatalogProps {
  setScreen: (screen: Screen) => void;
  setSelectedProduct: (product: Product) => void;
}

export default function Catalog({ setScreen, setSelectedProduct }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="px-6 md:px-12 py-12">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Collection</h1>
            <p className="text-secondary text-sm max-w-md font-medium">
              Discover our carefully curated selection of objects designed for the modern lifestyle.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-grow md:w-64 bg-white rounded-2xl border border-outline shadow-sm px-4 py-3 flex items-center gap-2">
              <Search className="w-4 h-4 text-secondary" />
              <input 
                type="text" 
                placeholder="Search products..."
                className="bg-transparent text-xs font-bold outline-none w-full"
              />
            </div>
            <button className="p-3 bg-white rounded-2xl border border-outline shadow-sm hover:border-primary transition-all">
              <SlidersHorizontal className="w-4 h-4 text-primary" />
            </button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {['All', ...CATEGORIES.map(c => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                  : 'bg-white text-secondary border-outline hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product, idx) => (
          <div 
            key={product.id} 
            className={`card-vibrant card-vibrant-${(idx % 4) + 1} p-6 flex flex-col gap-4 cursor-pointer group`}
            onClick={() => {
              setSelectedProduct(product);
              setScreen('detail');
            }}
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-surface relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                Quick View
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <span className="text-secondary text-[10px] font-black uppercase tracking-widest">{product.category}</span>
                <div className="bg-[#F1F5F9] px-2 py-1 rounded-lg text-[8px] font-black">
                  ⭐ {product.rating}
                </div>
              </div>
              <h3 className="text-sm font-bold group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-lg font-black text-primary">${product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
