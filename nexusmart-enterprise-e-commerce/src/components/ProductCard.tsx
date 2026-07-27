import React from 'react';
import { Star, Heart, Eye, ShoppingCart, Check, Zap } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView, onSelectProduct }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <div className="group relative bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.discount > 0 && (
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-rose-600 text-white shadow-xs">
            -{product.discount}% OFF
          </span>
        )}
        {product.isFeatured && (
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-indigo-600 text-white flex items-center gap-1 shadow-xs">
            <Zap className="w-3 h-3" /> Featured
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product.id);
        }}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-colors ${
          isWishlisted
            ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-500'
            : 'bg-white/80 dark:bg-slate-900/80 text-slate-400 hover:text-rose-500'
        } backdrop-blur-xs shadow-xs`}
        title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
      </button>

      {/* Image Container */}
      <div
        onClick={() => onSelectProduct(product)}
        className="relative w-full aspect-4/3 bg-slate-50 dark:bg-slate-900 overflow-hidden cursor-pointer group-hover:opacity-95"
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 text-xs font-semibold flex items-center gap-1.5 shadow-md hover:bg-white dark:hover:bg-slate-900 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-medium uppercase tracking-wider text-[10px] text-indigo-600 dark:text-indigo-400">
              {product.brand}
            </span>
            <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {product.rating} ({product.numReviews})
            </span>
          </div>

          <h3
            onClick={() => onSelectProduct(product)}
            className="font-bold text-slate-900 dark:text-slate-100 text-sm line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer mb-2"
          >
            {product.title}
          </h3>
        </div>

        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount > 0 && (
              <span className="text-xs text-slate-400 line-through">${product.price.toFixed(2)}</span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            disabled={product.stock <= 0}
            className={`w-full py-2 px-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
              product.stock > 0
                ? 'bg-slate-900 hover:bg-indigo-600 dark:bg-slate-100 dark:hover:bg-indigo-500 text-white dark:text-slate-900 dark:hover:text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};
