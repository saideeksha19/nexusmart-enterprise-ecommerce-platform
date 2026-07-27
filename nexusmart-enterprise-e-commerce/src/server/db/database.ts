import { User, Product, Category, Order, Coupon, Review, CartItem } from '../../types';
import { initialCategories, initialProducts } from './productsData';

// Re-export initialCategories & initialProducts
export { initialCategories, initialProducts };

// Seed Initial Users
export const initialUsers: User[] = [
  {
    id: 'u-admin-1',
    name: 'Sarah Connor (Admin)',
    email: 'admin@nexusmart.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    phone: '+1 (555) 019-2834',
    address: {
      street: '100 Technology Way, Suite 400',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA',
    },
    createdAt: new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString(),
  },
  {
    id: 'u-user-1',
    name: 'Alex Rivera',
    email: 'alex@nexusmart.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    phone: '+1 (555) 432-8765',
    address: {
      street: '742 Evergreen Terrace',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA',
    },
    createdAt: new Date(Date.now() - 15 * 24 * 3600 * 1000).toISOString(),
  }
];

// Categories and Products imported from ./productsData

// Legacy Products (Replaced by productsData)
const _oldProducts: Product[] = [
  {
    id: 'prod-1',
    sku: 'AUDIO-AURA-PRO',
    title: 'AuraSound Pro ANC Wireless Headphones',
    description: 'Experience pure acoustic clarity with hybrid active noise cancellation, 40-hour battery life, spatial audio spatialization, and plush memory foam earcups.',
    category: 'electronics',
    brand: 'AuraSound',
    price: 299.99,
    discount: 15,
    stock: 24,
    rating: 4.8,
    numReviews: 128,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Driver Size', value: '40mm Titanium Drivers' },
      { name: 'Battery Life', value: '40 Hours (ANC On)' },
      { name: 'Connectivity', value: 'Bluetooth 5.3, 3.5mm Aux' },
      { name: 'Weight', value: '250g' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-2',
    sku: 'MON-UV-34OLED',
    title: 'UltraView 34" Curved OLED Gaming Monitor',
    description: 'Ultra-wide 34-inch QD-OLED display with 175Hz refresh rate, 0.03ms response time, HDR True Black 400, and immersive 1800R curve.',
    category: 'electronics',
    brand: 'UltraView',
    price: 899.99,
    discount: 10,
    stock: 8,
    rating: 4.9,
    numReviews: 64,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Resolution', value: '3440 x 1440 UWQHD' },
      { name: 'Refresh Rate', value: '175Hz' },
      { name: 'Panel Type', value: 'Quantum Dot OLED' },
      { name: 'Ports', value: '2x HDMI 2.1, 1x DP 1.4, USB-C 90W' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-3',
    sku: 'WATCH-CHRO-01',
    title: 'Chronos Smart Watch Precision Edition',
    description: 'Sleek grade-5 titanium smartwatch featuring continuous ECG monitoring, dual-band GPS, AMOLED sapphire crystal display, and 14-day battery life.',
    category: 'electronics',
    brand: 'Chronos Tech',
    price: 349.00,
    discount: 20,
    stock: 18,
    rating: 4.7,
    numReviews: 92,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Case Material', value: 'Grade-5 Titanium' },
      { name: 'Water Resistance', value: '50 Meters (5 ATM)' },
      { name: 'Sensors', value: 'Heart Rate, SpO2, ECG, Barometer' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-4',
    sku: 'BAG-VER-04',
    title: 'Minimalist Artisan Leather Laptop Backpack',
    description: 'Handcrafted full-grain Italian leather laptop backpack featuring weatherproof lining, 16-inch padded laptop sleeve, and anti-theft hidden pocket.',
    category: 'fashion',
    brand: 'Veritas Leather Co.',
    price: 210.00,
    discount: 0,
    stock: 12,
    rating: 4.9,
    numReviews: 43,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: 'Full-Grain Tuscan Leather' },
      { name: 'Laptop Capacity', value: 'Up to 16" MacBook Pro' },
      { name: 'Capacity', value: '22 Liters' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-5',
    sku: 'CHAIR-ERGO-PRO',
    title: 'Ergonomic Mesh Executive Chair Pro',
    description: 'Medical-grade lumbar support chair with 4D adjustable armrests, dynamic recline tension control, and breathable Italian mesh fabric.',
    category: 'home-living',
    brand: 'ErgoForm',
    price: 499.50,
    discount: 25,
    stock: 5,
    rating: 4.8,
    numReviews: 87,
    images: [
      'https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight Limit', value: '350 lbs' },
      { name: 'Adjustment Points', value: '11 Ergonomic Points' },
      { name: 'Warranty', value: '10-Year Frame Warranty' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-6',
    sku: 'APP-AROMA-500',
    title: 'Smart Barista Espresso Machine Touch',
    description: 'Commercial-grade 15-bar Italian pump espresso machine with automatic microfoam milk texturing, PID temperature control, and intuitive touchscreen interface.',
    category: 'home-living',
    brand: 'AromaCraft',
    price: 649.99,
    discount: 12,
    stock: 9,
    rating: 4.9,
    numReviews: 110,
    images: [
      'https://images.unsplash.com/photo-1517668808822-9e428824603b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Pump Pressure', value: '15 Bar Italian Pump' },
      { name: 'Water Tank', value: '2.8 Liters Removable' },
      { name: 'Grinder', value: 'Integrated Conical Burr Grinder' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-7',
    sku: 'SHOES-AERO-07',
    title: 'AeroGlide Running Shoes Carbon Edition',
    description: 'Ultralight road running sneakers engineered with full-length carbon fiber propulsive plate, high-rebound supercritical nitrogen foam midsole.',
    category: 'fitness-outdoors',
    brand: 'AeroGlide',
    price: 185.00,
    discount: 15,
    stock: 22,
    rating: 4.7,
    numReviews: 76,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight', value: '198g (US Size 9)' },
      { name: 'Midsole Drop', value: '8mm' },
      { name: 'Plate Type', value: '3D Carbon Fiber Plate' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-8',
    sku: 'SERUM-LUM-08',
    title: 'Lumina Botanical Hydrating Serum Set',
    description: 'Dermatologist-formulated skin brightening serum enriched with 15% pure Vitamin C, Hyaluronic Acid complexes, and organic botanical antioxidants.',
    category: 'beauty-skincare',
    brand: 'Lumina Botanicals',
    price: 78.00,
    discount: 10,
    stock: 35,
    rating: 4.8,
    numReviews: 150,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597261-8332570543c1?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Volume', value: '50ml / 1.7 fl oz' },
      { name: 'Skin Type', value: 'All Skin Types' },
      { name: 'Formula', value: '100% Vegan & Cruelty-Free' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-9',
    sku: 'LAPTOP-PRO-16',
    title: 'ProBook Ultra 16 Slim Laptop',
    description: 'Ultra-thin flagship 16-inch workstation laptop featuring 32GB RAM, 1TB NVMe SSD storage, Intel Core i9 processor, and 4K OLED touch screen display.',
    category: 'electronics',
    brand: 'TechPro',
    price: 1299.99,
    discount: 10,
    stock: 15,
    rating: 4.9,
    numReviews: 52,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Processor', value: 'Intel Core i9-13900H' },
      { name: 'Memory', value: '32GB LPDDR5' },
      { name: 'Storage', value: '1TB NVMe PCIe 4.0 SSD' },
      { name: 'Display', value: '16" 4K OLED (3840 x 2400)' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-10',
    sku: 'MOUSE-APEX-01',
    title: 'ApexGrip Pro Wireless Ergonomic Mouse',
    description: 'Precision wireless ergonomic optical gaming and productivity mouse with 26,000 DPI sensor, dual wireless mode, silent click switches, and fast USB-C charging.',
    category: 'electronics',
    brand: 'TechPro',
    price: 79.99,
    discount: 15,
    stock: 40,
    rating: 4.8,
    numReviews: 88,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Sensor', value: '26,000 DPI Optical' },
      { name: 'Connectivity', value: '2.4GHz Wireless & Bluetooth 5.2' },
      { name: 'Battery Life', value: 'Up to 70 Hours' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-11',
    sku: 'KEYBOARD-KC-87',
    title: 'KeyCraft RGB Mechanical Gaming Keyboard',
    description: 'Hot-swappable tenkeyless 87-key mechanical keyboard with per-key RGB lighting, sound-dampening foam, custom tactile mechanical switches, and detachable braided cable.',
    category: 'electronics',
    brand: 'TechPro',
    price: 119.50,
    discount: 20,
    stock: 25,
    rating: 4.7,
    numReviews: 60,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Layout', value: 'Tenkeyless (87 Keys)' },
      { name: 'Switches', value: 'Hot-swappable Tactile Brown' },
      { name: 'Backlight', value: 'Dynamic Per-Key RGB' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-12',
    sku: 'DRESS-ELY-02',
    title: 'Elysian Silk Floral Summer Dress',
    description: 'Flowing 100% mulberry silk midi floral summer dress featuring hand-painted botanical prints, breathable cotton lining, waist cinch belt, and elegant V-neckline.',
    category: 'fashion',
    brand: 'Veritas Fashion',
    price: 165.00,
    discount: 10,
    stock: 18,
    rating: 4.9,
    numReviews: 35,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '100% Organic Mulberry Silk' },
      { name: 'Care', value: 'Dry Clean or Gentle Hand Wash' },
      { name: 'Length', value: 'Midi Dress (42 inches)' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  }
];

// Seed Coupons
export const initialCoupons: Coupon[] = [
  { code: 'WELCOME20', discountPercent: 20, minSpend: 50, isActive: true },
  { code: 'NEXUS10', discountPercent: 10, minSpend: 0, isActive: true },
  { code: 'FREESHIP', fixedDiscount: 15, minSpend: 30, isActive: true },
  { code: 'SAVEMORE', discountPercent: 15, minSpend: 100, isActive: true },
];

// Seed Reviews
export const initialReviews: Review[] = [
  {
    id: 'rev-1',
    productId: 'prod-1',
    userId: 'u-user-1',
    userName: 'Alex Rivera',
    userAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    title: 'Unbelievable Sound Quality and Comfort!',
    comment: 'The active noise cancellation is superior to competitors costing twice as much. Battery life comfortably got me through a transpacific flight and several workdays.',
    createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
  },
  {
    id: 'rev-2',
    productId: 'prod-1',
    userId: 'u-admin-1',
    userName: 'Sarah Connor',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 4,
    title: 'Solid build quality and crisp highs',
    comment: 'Very premium packaging and great microphone clarity during video conference calls. Highly recommended!',
    createdAt: new Date(Date.now() - 8 * 24 * 3600 * 1000).toISOString(),
  }
];

// Seed Orders
export const initialOrders: Order[] = [
  {
    id: 'ORD-982341',
    userId: 'u-user-1',
    items: [
      {
        productId: 'prod-1',
        title: 'AuraSound Pro ANC Wireless Headphones',
        price: 254.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      }
    ],
    shippingAddress: {
      fullName: 'Alex Rivera',
      email: 'alex@nexusmart.com',
      phone: '+1 (555) 432-8765',
      street: '742 Evergreen Terrace',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA',
    },
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    itemsPrice: 254.99,
    shippingPrice: 0,
    taxPrice: 20.40,
    discountAmount: 25.49,
    totalPrice: 249.90,
    couponCode: 'NEXUS10',
    status: 'Shipped',
    trackingNumber: 'NX-9823-8841-US',
    estimatedDelivery: 'July 29, 2026',
    createdAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 3600 * 1000).toISOString(),
  },
  {
    id: 'ORD-761204',
    userId: 'u-user-1',
    items: [
      {
        productId: 'prod-8',
        title: 'Lumina Botanical Hydrating Serum Set',
        price: 70.20,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
      }
    ],
    shippingAddress: {
      fullName: 'Alex Rivera',
      email: 'alex@nexusmart.com',
      phone: '+1 (555) 432-8765',
      street: '742 Evergreen Terrace',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      country: 'USA',
    },
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Pending',
    itemsPrice: 140.40,
    shippingPrice: 10.00,
    taxPrice: 11.23,
    discountAmount: 0,
    totalPrice: 161.63,
    status: 'Confirmed',
    trackingNumber: 'NX-7612-9910-US',
    estimatedDelivery: 'August 01, 2026',
    createdAt: new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 4 * 24 * 3600 * 1000).toISOString(),
  }
];

// In-Memory Runtime Store
class DatabaseStore {
  public users: User[] = [...initialUsers];
  public categories: Category[] = [...initialCategories];
  public products: Product[] = [...initialProducts];
  public coupons: Coupon[] = [...initialCoupons];
  public reviews: Review[] = [...initialReviews];
  public orders: Order[] = [...initialOrders];
  public carts: Record<string, CartItem[]> = {
    'u-user-1': [
      {
        product: initialProducts[0],
        quantity: 1,
      }
    ]
  };
  public wishlists: Record<string, string[]> = {
    'u-user-1': ['prod-2', 'prod-4']
  };

  // User methods
  findUserByEmail(email: string) {
    return this.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  }

  findUserById(id: string) {
    return this.users.find((u) => u.id === id);
  }

  createUser(userData: Omit<User, 'id' | 'createdAt'>) {
    const newUser: User = {
      ...userData,
      id: `u-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updates: Partial<User>) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) return null;
    this.users[userIndex] = { ...this.users[userIndex], ...updates };
    return this.users[userIndex];
  }

  // Product methods
  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  createProduct(productData: Omit<Product, 'id' | 'createdAt'>) {
    const newProduct: Product = {
      ...productData,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.products.unshift(newProduct);
    return newProduct;
  }

  updateProduct(id: string, updates: Partial<Product>) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.products[index] = { ...this.products[index], ...updates };
    return this.products[index];
  }

  deleteProduct(id: string) {
    const initialLen = this.products.length;
    this.products = this.products.filter((p) => p.id !== id);
    return this.products.length < initialLen;
  }

  // Order methods
  getOrders() {
    return this.orders;
  }

  getOrdersByUserId(userId: string) {
    return this.orders.filter((o) => o.userId === userId);
  }

  getOrderById(id: string) {
    return this.orders.find((o) => o.id === id);
  }

  createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Reduce product stock for each ordered item
    if (newOrder.items && Array.isArray(newOrder.items)) {
      for (const item of newOrder.items) {
        if (item.productId) {
          const product = this.getProductById(item.productId);
          if (product) {
            const updatedStock = Math.max(0, (product.stock || 0) - (item.quantity || 1));
            this.updateProduct(product.id, {
              stock: updatedStock,
              availability: updatedStock === 0 ? 'out_of_stock' : product.availability,
            });
          }
        }
      }
    }

    this.orders.unshift(newOrder);
    return newOrder;
  }

  updateOrderStatus(id: string, status: Order['status'], trackingNumber?: string) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) return null;
    order.status = status;
    order.updatedAt = new Date().toISOString();
    if (trackingNumber) order.trackingNumber = trackingNumber;
    return order;
  }

  // Category methods
  getCategories() {
    return this.categories;
  }

  createCategory(categoryData: Omit<Category, 'id'>) {
    const newCat: Category = {
      ...categoryData,
      id: `cat-${Date.now()}`,
      productCount: 0,
    };
    this.categories.push(newCat);
    return newCat;
  }

  deleteCategory(id: string) {
    this.categories = this.categories.filter((c) => c.id !== id);
  }

  // Reviews
  getReviewsByProductId(productId: string) {
    return this.reviews.filter((r) => r.productId === productId);
  }

  addReview(reviewData: Omit<Review, 'id' | 'createdAt'>) {
    const newReview: Review = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.reviews.unshift(newReview);

    // recalculate rating for product
    const prodReviews = this.getReviewsByProductId(reviewData.productId);
    const avgRating = prodReviews.reduce((sum, r) => sum + r.rating, 0) / prodReviews.length;
    this.updateProduct(reviewData.productId, {
      rating: parseFloat(avgRating.toFixed(1)),
      numReviews: prodReviews.length,
    });

    return newReview;
  }

  // Coupons
  getCoupons() {
    return this.coupons;
  }

  getCouponByCode(code: string) {
    return this.coupons.find((c) => c.code.toUpperCase() === code.toUpperCase() && c.isActive);
  }

  createCoupon(coupon: Coupon) {
    this.coupons.push(coupon);
    return coupon;
  }
}

export const db = new DatabaseStore();
