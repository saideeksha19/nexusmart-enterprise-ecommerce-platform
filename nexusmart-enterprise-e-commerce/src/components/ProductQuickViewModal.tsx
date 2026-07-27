import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Star, ShoppingCart, Heart, ShieldCheck, Truck, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onViewFullDetails: (product: Product) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onViewFullDetails,
}) => {
  if (!product) return null;

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const isWishlisted = isInWishlist(product.id);
  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Column */}
            <div className="p-6 bg-slate-50 dark:bg-slate-950/50 flex flex-col items-center justify-between">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-4">
                <img
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto w-full pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-14 h-14 rounded-lg border-2 overflow-hidden shrink-0 transition-all ${
                        selectedImage === idx
                          ? 'border-indigo-600 dark:border-indigo-400 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Column */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mb-1">
                  <span>{product.brand}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{product.title}</h2>

                <div className="flex items-center gap-3 mb-4 text-xs">
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-slate-400">({product.numReviews} customer reviews)</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      product.stock > 0
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                        : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                    }`}
                  >
                    {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-sm text-slate-400 line-through">${product.price.toFixed(2)}</span>
                  )}
                  {product.discount > 0 && (
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                      Save ${(product.price - discountedPrice).toFixed(2)} ({product.discount}%)
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Specs snippet */}
                {product.specifications.length > 0 && (
                  <div className="mb-6 space-y-1 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl text-xs border border-slate-100 dark:border-slate-800">
                    {product.specifications.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400">{spec.name}:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-l-xl font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 font-semibold text-sm text-slate-900 dark:text-slate-100">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                      className="px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-r-xl font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => {
                      addToCart(product, quantity);
                      onClose();
                    }}
                    disabled={product.stock <= 0}
                    className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3 rounded-xl border transition-colors ${
                      isWishlisted
                        ? 'border-rose-300 bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-400'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onViewFullDetails(product);
                  }}
                  className="w-full text-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-1"
                >
                  View Full Product Specifications & Customer Reviews →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
