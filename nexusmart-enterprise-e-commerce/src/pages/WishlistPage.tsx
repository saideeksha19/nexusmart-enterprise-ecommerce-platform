import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

interface WishlistPageProps {
  onNavigate: (tab: string, param?: any) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({ onNavigate }) => {
  const { wishlist } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWishlistProducts();
  }, [wishlist]);

  const fetchWishlistProducts = async () => {
    if (wishlist.length === 0) {
      setProducts([]);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/products?limit=50');
      if (res.ok) {
        const data = await res.json();
        const filtered = (data.products || []).filter((p: Product) => wishlist.includes(p.id));
        setProducts(filtered);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" /> Saved Wishlist
          </h1>
          <p className="text-xs text-slate-500">{wishlist.length} products saved for later</p>
        </div>
      </div>

      {isLoading ? (
        <div className="p-8 text-center text-xs text-slate-400">Loading wishlist...</div>
      ) : products.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
          <Heart className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">Your Wishlist is Empty</h3>
          <p className="text-xs text-slate-500">Tap the heart icon on any product to save it here.</p>
          <button
            onClick={() => onNavigate('shop')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
          >
            Discover Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onQuickView={() => {}}
              onSelectProduct={(prod) => onNavigate('product-detail', { id: prod.id })}
            />
          ))}
        </div>
      )}
    </div>
  );
};
