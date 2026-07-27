import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ShoppingBag,
  Heart,
  User as UserIcon,
  Moon,
  Sun,
  ShieldAlert,
  ChevronDown,
  LogOut,
  Package,
  Sparkles,
  Layers,
  Check,
  FileCode,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Product } from '../types';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string, param?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const { user, logout, switchDemoRole } = useAuth();
  const { totalCartCount, wishlist, openCart } = useCart();
  const { theme, toggleTheme } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  // Debounced search preview
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/products?search=${encodeURIComponent(searchQuery)}&limit=5`);
        const data = await res.json();
        setSearchResults(data.products || []);
        setShowSearchDropdown(true);
      } catch (err) {
        console.error('Search preview failed', err);
      } finally {
        setIsSearching(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Click outside listener for search dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchDropdown(false);
      onNavigate('shop', { search: searchQuery.trim(), category: 'all', brand: 'all' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Top Banner with Demo Switchers */}
      <div className="bg-slate-900 text-slate-100 dark:bg-slate-950 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-[10px] uppercase">
              Free Delivery
            </span>
            <p className="truncate text-slate-300">
              ⚡ Summer Tech & Lifestyle Sale! Up to <strong className="text-white">25% OFF</strong> with code{' '}
              <span className="font-mono bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded">WELCOME20</span>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-slate-400 text-[11px] hidden md:inline">Role Switcher:</span>
            <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700/60">
              <button
                onClick={() => switchDemoRole('user')}
                className={`px-2 py-0.5 rounded-md font-semibold text-[11px] transition-colors ${
                  user?.role === 'user'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Customer
              </button>
              <button
                onClick={() => switchDemoRole('admin')}
                className={`px-2 py-0.5 rounded-md font-semibold text-[11px] transition-colors flex items-center gap-1 ${
                  user?.role === 'admin'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ShieldAlert className="w-3 h-3" /> Admin
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => onNavigate('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl tracking-tight text-slate-900 dark:text-slate-100">
                Nexus<span className="text-indigo-600 dark:text-indigo-400">Mart</span>
              </span>
              <span className="px-1.5 py-0.2 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-extrabold text-[9px] uppercase tracking-wider">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium -mt-1 hidden sm:block">Enterprise E-Commerce</p>
          </div>
        </div>

        {/* Instant Search Bar */}
        <div ref={searchRef} className="relative flex-1 max-w-lg hidden md:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.trim() && setShowSearchDropdown(true)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </form>

          {/* Autocomplete Dropdown */}
          {showSearchDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50">
              {isSearching ? (
                <div className="p-4 text-xs text-center text-slate-400">Searching inventory...</div>
              ) : searchResults.length > 0 ? (
                <div className="p-2 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1">Matching Products</div>
                  {searchResults.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        setShowSearchDropdown(false);
                        setSearchQuery('');
                        onNavigate('product-detail', { id: prod.id });
                      }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      <img src={prod.images[0]} alt="" className="w-10 h-10 object-cover rounded-md bg-slate-100" />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                          {prod.title}
                        </h5>
                        <span className="text-[10px] text-slate-400">{prod.brand} • ${prod.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-xs text-center text-slate-400">No products found matching "{searchQuery}"</div>
              )}
            </div>
          )}
        </div>

        {/* Actions (Wishlist, Cart, Theme, User) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => onNavigate('wishlist')}
            className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={openCart}
            className="relative p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-bold text-xs hidden sm:inline-block">{totalCartCount} items</span>
            {totalCartCount > 0 && (
              <span className="sm:hidden absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* User Account Menu */}
          <div className="relative">
            {user ? (
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <img
                  src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                  alt={user.name}
                  className="w-7 h-7 rounded-lg object-cover"
                />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 max-w-[100px] truncate hidden lg:inline-block">
                  {user.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ) : (
              <button
                onClick={() => switchDemoRole('user')}
                className="px-3 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 transition-colors flex items-center gap-1.5"
              >
                <UserIcon className="w-3.5 h-3.5" /> Sign In
              </button>
            )}

            {/* Dropdown Menu */}
            {showUserMenu && user && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50">
                <div className="p-3 border-b border-slate-100 dark:border-slate-800">
                  <p className="font-bold text-xs text-slate-900 dark:text-slate-100">{user.name}</p>
                  <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-bold uppercase rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Role: {user.role}
                  </span>
                </div>

                <div className="py-1 space-y-0.5 text-xs">
                  {user.role === 'admin' && (
                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        onNavigate('admin');
                      }}
                      className="w-full px-3 py-2 text-left rounded-lg font-semibold text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 flex items-center gap-2"
                    >
                      <ShieldAlert className="w-4 h-4" /> Admin Dashboard
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onNavigate('orders');
                    }}
                    className="w-full px-3 py-2 text-left rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
                  >
                    <Package className="w-4 h-4" /> Order History
                  </button>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onNavigate('profile');
                    }}
                    className="w-full px-3 py-2 text-left rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
                  >
                    <UserIcon className="w-4 h-4" /> Account Profile
                  </button>
                </div>

                <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      logout();
                    }}
                    className="w-full px-3 py-2 text-left rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 font-medium text-xs flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div className="hidden md:block bg-slate-50/80 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-slate-800/60 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('shop')}
              className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                activeTab === 'shop' ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => onNavigate('shop', { category: 'electronics' })}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Electronics & Audio
            </button>
            <button
              onClick={() => onNavigate('shop', { category: 'fashion' })}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Fashion & Apparel
            </button>
            <button
              onClick={() => onNavigate('shop', { category: 'home-living' })}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Home & Living
            </button>
            <button
              onClick={() => onNavigate('shop', { category: 'fitness-outdoors' })}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Fitness
            </button>
            <button
              onClick={() => onNavigate('shop', { category: 'beauty-skincare' })}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Beauty
            </button>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <button
              onClick={() => onNavigate('docs')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 font-mono text-[11px] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-200 dark:border-indigo-800"
            >
              <FileCode className="w-3.5 h-3.5" /> PRD & Docs
            </button>
            <button onClick={() => onNavigate('faq')} className="hover:text-indigo-600 transition-colors">
              FAQ
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-indigo-600 transition-colors">
              About
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 p-4 space-y-3 bg-white dark:bg-slate-900">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          <div className="grid grid-cols-2 gap-2 text-xs font-medium pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('shop');
              }}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-left font-semibold"
            >
              All Shop Catalog
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigate('docs');
              }}
              className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 text-left font-bold"
            >
              PRD & Architecture Docs
            </button>
            {user?.role === 'admin' && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('admin');
                }}
                className="col-span-2 p-2 rounded-lg bg-amber-500 text-white text-left font-bold"
              >
                Admin Control Dashboard
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
