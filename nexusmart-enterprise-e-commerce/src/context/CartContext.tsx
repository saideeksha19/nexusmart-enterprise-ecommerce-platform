import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Coupon } from '../types';
import { useToast } from '../components/ui/Toast';

interface CartContextType {
  cart: CartItem[];
  wishlist: string[]; // array of product IDs
  isCartOpen: boolean;
  appliedCoupon: Coupon | null;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  applyCoupon: (code: string) => Promise<boolean>;
  removeCoupon: () => void;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  taxAmount: number;
  grandTotal: number;
  totalCartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { addToast } = useToast();
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('nexusmart_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('nexusmart_wishlist');
    return saved ? JSON.parse(saved) : ['prod-2', 'prod-4'];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(() => {
    const saved = localStorage.getItem('nexusmart_coupon');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('nexusmart_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('nexusmart_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (appliedCoupon) {
      localStorage.setItem('nexusmart_coupon', JSON.stringify(appliedCoupon));
    } else {
      localStorage.removeItem('nexusmart_coupon');
    }
  }, [appliedCoupon]);

  const addToCart = (product: Product, quantity = 1) => {
    if (product.stock <= 0) {
      addToast('error', 'Item Out of Stock', `${product.title} is currently unavailable.`);
      return;
    }

    const existingItem = cart.find((item) => item.product.id === product.id);
    const existingQty = existingItem ? existingItem.quantity : 0;
    const newQty = existingQty + quantity;

    if (newQty > product.stock) {
      addToast('error', 'Stock Limit Reached', `Only ${product.stock} items available in stock.`);
      return;
    }

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity: newQty };
        return updated;
      } else {
        return [...prev, { product, quantity }];
      }
    });

    addToast('success', 'Added to Cart', `${product.title} (${quantity}) added.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('info', 'Item Removed', 'Product removed from your shopping cart.');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const item = cart.find((i) => i.product.id === productId);
    if (item && quantity > item.product.stock) {
      addToast('error', 'Stock Limit', `Maximum available stock is ${item.product.stock}`);
      return;
    }

    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId: string) => {
    const exists = wishlist.includes(productId);
    if (exists) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      addToast('info', 'Removed from Wishlist');
    } else {
      setWishlist((prev) => [...prev, productId]);
      addToast('success', 'Added to Wishlist', 'Item saved to your favorites.');
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyCoupon = async (code: string) => {
    try {
      const res = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, cartSubtotal: subtotal }),
      });
      const data = await res.json();

      if (!res.ok) {
        addToast('error', 'Coupon Error', data.message || 'Invalid promo code');
        return false;
      }

      setAppliedCoupon(data.coupon);
      addToast('success', 'Coupon Applied!', `Promo code ${data.coupon.code} activated.`);
      return true;
    } catch (err: any) {
      addToast('error', 'Coupon Error', 'Failed to validate promo code');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast('info', 'Coupon Removed');
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Math calculations
  const subtotal = cart.reduce((acc, item) => {
    const discounted = item.product.price * (1 - item.product.discount / 100);
    return acc + discounted * item.quantity;
  }, 0);

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountAmount = (subtotal * appliedCoupon.discountPercent) / 100;
    } else if (appliedCoupon.fixedDiscount) {
      discountAmount = appliedCoupon.fixedDiscount;
    }
  }

  const afterDiscountSubtotal = Math.max(0, subtotal - discountAmount);
  const shippingFee = cart.length === 0 ? 0 : afterDiscountSubtotal > 150 ? 0 : 15;
  const taxAmount = afterDiscountSubtotal * 0.08;
  const grandTotal = afterDiscountSubtotal + shippingFee + taxAmount;
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        appliedCoupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyCoupon,
        removeCoupon,
        openCart,
        closeCart,
        subtotal,
        discountAmount,
        shippingFee,
        taxAmount,
        grandTotal,
        totalCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
