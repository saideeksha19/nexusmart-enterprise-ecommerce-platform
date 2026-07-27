import React, { useState, useEffect } from 'react';
import {
  Star,
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RefreshCw,
  Check,
  MessageSquare,
  Plus,
} from 'lucide-react';
import { Product, Review } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/Toast';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (tab: string, param?: any) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const { user } = useAuth();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const { addToast } = useToast();

  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Write Review Modal
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/products/${productId}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data.product);
        setReviews(data.reviews || []);
        setRelatedProducts(data.relatedProducts || []);
      }
    } catch (err) {
      console.error('Failed to fetch product detail', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      addToast('error', 'Authentication Required', 'Please sign in to post a review.');
      return;
    }

    try {
      const token = localStorage.getItem('nexusmart_token');
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          rating: reviewRating,
          title: reviewTitle,
          comment: reviewComment,
        }),
      });

      if (!res.ok) throw new Error('Failed to post review');

      addToast('success', 'Review Submitted!', 'Thank you for your feedback.');
      setIsReviewModalOpen(false);
      setReviewTitle('');
      setReviewComment('');
      fetchProductDetails();
    } catch (err: any) {
      addToast('error', 'Error', err.message);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center text-xs text-slate-400">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h2 className="text-xl font-bold mb-2">Product Not Found</h2>
        <button onClick={() => onNavigate('shop')} className="text-xs text-indigo-600 font-bold hover:underline">
          Return to Catalog
        </button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Product View Top */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery Column */}
        <div className="space-y-4">
          <div className="w-full aspect-4/3 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-xl border-2 overflow-hidden shrink-0 transition-all ${
                    selectedImage === i ? 'border-indigo-600 scale-105 shadow-md' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
              <span>{product.brand}</span>
              <span>•</span>
              <span>{product.category}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{product.rating}</span>
              </div>
              <span className="text-slate-400">({product.numReviews} Verified Reviews)</span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  product.stock > 0
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                }`}
              >
                {product.stock > 0 ? `In Stock (${product.stock} left)` : 'Out of Stock'}
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80">
            <span className="text-3xl font-black text-slate-900 dark:text-slate-100">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount > 0 && (
              <span className="text-base text-slate-400 line-through">${product.price.toFixed(2)}</span>
            )}
            {product.discount > 0 && (
              <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white font-bold text-xs">
                Save {product.discount}%
              </span>
            )}
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{product.description}</p>

          {/* Add to Cart Actions */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex gap-3">
              <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3.5 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-l-xl"
                >
                  -
                </button>
                <span className="px-3 text-sm font-bold text-slate-900 dark:text-slate-100">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  className="px-3.5 py-2.5 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-r-xl"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                disabled={product.stock <= 0}
                className="flex-1 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.01]"
              >
                <ShoppingCart className="w-4 h-4" /> Add {quantity} to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3.5 rounded-xl border transition-colors ${
                  isWishlisted
                    ? 'border-rose-300 bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-400'
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-indigo-600" /> Free Shipping &gt;$150
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" /> 2-Yr Warranty
              </div>
              <div className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-indigo-600" /> 30-Day Returns
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      {product.specifications.length > 0 && (
        <section className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Technical Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {product.specifications.map((spec, i) => (
              <div key={i} className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 font-medium">{spec.name}</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-600" /> Verified Customer Reviews ({reviews.length})
            </h3>
          </div>
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-4 h-4" /> Write a Review
          </button>
        </div>

        {reviews.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-6">No customer reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((rev) => (
              <div key={rev.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={rev.userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'} alt="" className="w-7 h-7 rounded-full object-cover" />
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200">{rev.userName}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{new Date(rev.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400' : 'text-slate-300'}`} />
                  ))}
                </div>

                <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">{rev.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">{rev.comment}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Write Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={() => setIsReviewModalOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Write a Review for {product.title}</h3>
            <form onSubmit={handleAddReview} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setReviewRating(num)}
                      className={`p-2 rounded-lg border ${reviewRating >= num ? 'bg-amber-50 text-amber-500 border-amber-300 font-bold' : 'text-slate-400'}`}
                    >
                      {num} ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Headline / Title</label>
                <input
                  type="text"
                  required
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  placeholder="e.g. Premium quality & fast shipping!"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Your Feedback</label>
                <textarea
                  rows={3}
                  required
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder="Share details about durability, performance, fit..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setIsReviewModalOpen(false)} className="px-4 py-2 rounded-xl border">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={() => {}}
                onSelectProduct={(prod) => onNavigate('product-detail', { id: prod.id })}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
