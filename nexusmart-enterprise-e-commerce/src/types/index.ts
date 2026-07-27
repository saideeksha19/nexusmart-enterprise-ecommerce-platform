export type Role = 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  productCount?: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  sku?: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  discount: number; // percentage, e.g. 15 for 15% off
  stock: number;
  rating: number;
  numReviews: number;
  images: string[];
  specifications: ProductSpecification[];
  availability: 'in_stock' | 'out_of_stock' | 'pre_order';
  isFeatured?: boolean;
  isTopSelling?: boolean;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountPercent?: number;
  fixedDiscount?: number;
  minSpend?: number;
  expiresAt?: string;
  isActive: boolean;
}

export type OrderStatus = 'Pending' | 'Confirmed' | 'Packed' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface OrderItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  paymentMethod: 'Credit Card' | 'Cash on Delivery' | 'Stripe / Card' | 'PayPal' | 'Apple Pay';
  paymentStatus: 'Paid' | 'Pending' | 'Failed';
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  discountAmount: number;
  totalPrice: number;
  couponCode?: string;
  status: OrderStatus;
  trackingNumber?: string;
  estimatedDelivery?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FilterState {
  search: string;
  category: string;
  brand: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest' | 'rating';
}

export interface AnalyticsSummary {
  totalRevenue: number;
  totalOrders: number;
  totalUsers: number;
  totalProducts: number;
  lowStockCount: number;
  monthlySales: { month: string; sales: number; orders: number }[];
  salesByCategory: { category: string; amount: number }[];
  recentOrders: Order[];
}
