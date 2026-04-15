import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Heart, Share2, ArrowLeft, Plus, Minus, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Product, Screen } from '../types';

interface ProductDetailProps {
  product: Product;
  setScreen: (screen: Screen) => void;
  addToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetail({ product, setScreen, addToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const images = product.images || [product.image];

  return (
    <div className="px-6 md:px-12 py-12">
      <button 
        onClick={() => setScreen('catalog')}
        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-widest">Back to Collection</span>
      </button>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col gap-6">
          <div className="aspect-square overflow-hidden rounded-[32px] bg-white shadow-vibrant">
            <motion.img 
              key={selectedImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-24 aspect-square overflow-hidden rounded-2xl border-4 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-secondary text-xs font-black uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex gap-2">
                <button className="p-3 bg-white rounded-2xl border border-outline shadow-sm hover:border-vibrant-pink transition-all">
                  <Heart className="w-5 h-5 text-vibrant-pink" />
                </button>
                <button className="p-3 bg-white rounded-2xl border border-outline shadow-sm hover:border-primary transition-all">
                  <Share2 className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">{product.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-vibrant-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-secondary text-xs font-bold">
                {product.reviewsCount} Reviews
              </span>
            </div>
          </div>

          <div className="text-4xl font-black text-primary">
            ${product.price.toLocaleString()}
          </div>

          <p className="text-secondary font-medium leading-relaxed">
            {product.description}
          </p>

          {product.details && (
            <div className="grid grid-cols-2 gap-4 py-8 border-y border-outline">
              <div className="bg-white p-4 rounded-2xl border border-outline shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Dimensions</p>
                <p className="text-sm font-bold">{product.details.dimensions}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-outline shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Materials</p>
                <p className="text-sm font-bold">{product.details.materials}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-outline shadow-sm col-span-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Origin</p>
                <p className="text-sm font-bold">{product.details.origin}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white border border-outline rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-surface transition-colors"
                >
                  <Minus className="w-4 h-4 text-primary" />
                </button>
                <span className="w-12 text-center font-black text-primary">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-surface transition-colors"
                >
                  <Plus className="w-4 h-4 text-primary" />
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-grow bg-primary text-white py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Add to Bag
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-2xl border border-outline shadow-sm">
              <Truck className="w-6 h-6 text-vibrant-emerald" />
              <p className="text-[8px] font-black uppercase tracking-widest text-secondary">Free Shipping</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-2xl border border-outline shadow-sm">
              <RotateCcw className="w-6 h-6 text-vibrant-pink" />
              <p className="text-[8px] font-black uppercase tracking-widest text-secondary">30-Day Returns</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-2xl border border-outline shadow-sm">
              <ShieldCheck className="w-6 h-6 text-vibrant-amber" />
              <p className="text-[8px] font-black uppercase tracking-widest text-secondary">2-Year Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
