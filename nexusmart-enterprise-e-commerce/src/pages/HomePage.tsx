import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Truck,
  Star,
  ChevronRight,
  Headphones,
  Shirt,
  Home,
  Dumbbell,
  Clock,
} from 'lucide-react';
import { Product, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ProductQuickViewModal } from '../components/ProductQuickViewModal';

interface HomePageProps {
  onNavigate: (tab: string, param?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [topSellingProducts, setTopSellingProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedQuickView, setSelectedQuickView] = useState<Product | null>(null);

  // Flash deal countdown timer (e.g. 14h 28m 42s)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featRes, topRes, catRes] = await Promise.all([
          fetch('/api/products/featured'),
          fetch('/api/products/top-selling'),
          fetch('/api/categories'),
        ]);

        if (featRes.ok) setFeaturedProducts(await featRes.ok ? await featRes.json() : []);
        if (topRes.ok) setTopSellingProducts(await topRes.ok ? await topRes.json() : []);
        if (catRes.ok) setCategories(await catRes.ok ? await catRes.json() : []);
      } catch (err) {
        console.error('Failed to load homepage data', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white dark:bg-slate-950 rounded-3xl mx-4 sm:mx-6 mt-4 p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen Enterprise E-Commerce
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Elevate Your Tech & Lifestyle with <span className="text-indigo-400">NexusMart</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Discover precision-engineered audio, OLED displays, ergonomic home office essentials, and artisan crafted accessories with instant 2-day delivery.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              Explore Full Catalog <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('docs')}
              className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
            >
              System PRD & Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Shop by Category</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Explore curated collections for every aspect of life</p>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('shop', { category: cat.slug })}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-500 dark:hover:border-indigo-400 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col items-center text-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {cat.slug === 'electronics' && <Headphones className="w-6 h-6" />}
                {cat.slug === 'fashion' && <Shirt className="w-6 h-6" />}
                {cat.slug === 'home-living' && <Home className="w-6 h-6" />}
                {cat.slug === 'fitness-outdoors' && <Dumbbell className="w-6 h-6" />}
                {cat.slug === 'beauty-skincare' && <Sparkles className="w-6 h-6" />}
              </div>
              <h3 className="font-bold text-xs text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {cat.name}
              </h3>
              <span className="text-[10px] text-slate-400 mt-1">{cat.productCount || 3} items</span>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-white/20 font-bold text-[10px] uppercase tracking-wider backdrop-blur-xs">
              ⚡ Limited Time Offer
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">24-Hour Tech Flash Sale</h3>
            <p className="text-xs text-white/90 max-w-md">
              Save up to 25% on titanium smartwatches, curved OLED gaming displays, and ANC headphones.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center p-3 rounded-xl bg-black/30 backdrop-blur-md min-w-[60px]">
              <span className="text-2xl font-black font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase font-bold text-white/70">Hours</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center p-3 rounded-xl bg-black/30 backdrop-blur-md min-w-[60px]">
              <span className="text-2xl font-black font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase font-bold text-white/70">Mins</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center p-3 rounded-xl bg-black/30 backdrop-blur-md min-w-[60px]">
              <span className="text-2xl font-black font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase font-bold text-white/70">Secs</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('shop')}
            className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 shadow-md shrink-0 transition-transform hover:scale-105"
          >
            Claim Flash Deals Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Featured Products
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Handpicked high-performance hardware and modern gear</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onQuickView={(p) => setSelectedQuickView(p)}
              onSelectProduct={(p) => onNavigate('product-detail', { id: p.id })}
            />
          ))}
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Best Sellers
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Customer favorites loved for design and reliability</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSellingProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onQuickView={(p) => setSelectedQuickView(p)}
              onSelectProduct={(p) => onNavigate('product-detail', { id: p.id })}
            />
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
        onViewFullDetails={(p) => onNavigate('product-detail', { id: p.id })}
      />
    </div>
  );
};
