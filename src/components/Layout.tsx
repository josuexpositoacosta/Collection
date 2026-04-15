import React from 'react';
import { Menu, ShoppingBag, Home, Grid, ShoppingCart, User, Search } from 'lucide-react';
import { Screen } from '../types';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  cartCount: number;
}

export default function Layout({ children, currentScreen, setScreen, cartCount }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 glass-header border-b border-outline/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setScreen('home')}
            >
              <div className="w-3 h-3 bg-vibrant-pink rounded-full group-hover:scale-125 transition-transform" />
              <span className="text-2xl font-black tracking-tighter text-primary">VELO</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => setScreen('home')}
                className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all ${currentScreen === 'home' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-secondary hover:text-primary'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setScreen('catalog')}
                className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all ${currentScreen === 'catalog' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-secondary hover:text-primary'}`}
              >
                Collection
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-outline shadow-sm">
              <Search className="w-4 h-4 text-secondary" />
              <input type="text" placeholder="Search..." className="bg-transparent text-xs font-bold outline-none w-32" />
            </div>
            
            <button 
              className="p-3 bg-white rounded-2xl border border-outline shadow-sm hover:border-primary transition-all relative group"
              onClick={() => setScreen('cart')}
            >
              <ShoppingBag className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-vibrant-pink text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50 bg-white/90 backdrop-blur-xl border border-outline shadow-2xl rounded-[32px] px-6 py-4 flex justify-around items-center">
        <button 
          onClick={() => setScreen('home')}
          className={`p-3 rounded-2xl transition-all ${currentScreen === 'home' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-secondary'}`}
        >
          <Home className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setScreen('catalog')}
          className={`p-3 rounded-2xl transition-all ${currentScreen === 'catalog' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-secondary'}`}
        >
          <Grid className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setScreen('cart')}
          className={`p-3 rounded-2xl transition-all ${currentScreen === 'cart' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-secondary'}`}
        >
          <ShoppingCart className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-2xl text-secondary">
          <User className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
}
