import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Truck, RefreshCw, Headphones, Mail, Heart } from 'lucide-react';
import { useToast } from './ui/Toast';

interface FooterProps {
  onNavigate: (tab: string, param?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    addToast('success', 'Subscribed!', 'Thank you for subscribing to NexusMart VIP updates & deals.');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 transition-colors pt-12 pb-8">
      {/* Value Propositions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 pb-12 border-b border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Free Express Shipping</h4>
              <p className="text-xs text-slate-400 mt-1">On all orders over $150 with tracked delivery</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Secure 256-Bit SSL</h4>
              <p className="text-xs text-slate-400 mt-1">Encrypted checkout & Stripe integration ready</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">30-Day Money Back</h4>
              <p className="text-xs text-slate-400 mt-1">Hassle-free return policy with prepaid shipping labels</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">24/7 Priority Support</h4>
              <p className="text-xs text-slate-400 mt-1">Dedicated customer care via email & live chat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        {/* Brand Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tight text-white">
              Nexus<span className="text-indigo-400">Mart</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            NexusMart is an enterprise-grade full-stack e-commerce experience designed for ultra-fast product discovery, persistent cart state, real-time order tracking, and intuitive management.
          </p>

          {/* Newsletter Form */}
          <div className="pt-2">
            <h5 className="font-semibold text-xs text-white mb-2">Subscribe to VIP Secret Deals</h5>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-colors shrink-0"
              >
                Join VIP
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-bold text-sm text-white mb-4">Shop Collections</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('shop', { category: 'electronics' })}
                className="hover:text-indigo-400 transition-colors"
              >
                Electronics & Audio
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('shop', { category: 'fashion' })}
                className="hover:text-indigo-400 transition-colors"
              >
                Fashion Apparel
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('shop', { category: 'home-living' })}
                className="hover:text-indigo-400 transition-colors"
              >
                Home & Living
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('shop', { category: 'fitness-outdoors' })}
                className="hover:text-indigo-400 transition-colors"
              >
                Fitness & Gear
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('shop', { category: 'beauty-skincare' })}
                className="hover:text-indigo-400 transition-colors"
              >
                Beauty & Cosmetics
              </button>
            </li>
          </ul>
        </div>

        {/* Customer Account */}
        <div>
          <h5 className="font-bold text-sm text-white mb-4">Customer Account</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('orders')} className="hover:text-indigo-400 transition-colors">
                Order History & Tracking
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('wishlist')} className="hover:text-indigo-400 transition-colors">
                Saved Wishlist
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('profile')} className="hover:text-indigo-400 transition-colors">
                Account Settings
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('cart')} className="hover:text-indigo-400 transition-colors">
                View Shopping Cart
              </button>
            </li>
          </ul>
        </div>

        {/* Company & Specs */}
        <div>
          <h5 className="font-bold text-sm text-white mb-4">Architecture & Company</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('docs')}
                className="text-indigo-400 font-bold hover:underline flex items-center gap-1"
              >
                PRD & System Architecture
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
                About NexusMart
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors">
                Contact Customer Support
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('faq')} className="hover:text-indigo-400 transition-colors">
                Frequently Asked Questions
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 NexusMart Enterprise E-Commerce Inc. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Service</span>
          <span>•</span>
          <span>Security & Compliance</span>
        </div>
      </div>
    </footer>
  );
};
