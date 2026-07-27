import { Product } from '../../types';

export const productsPart1: Product[] = [
  // ==================== ELECTRONICS (14 Products) ====================
  {
    id: 'prod-e1',
    sku: 'AUDIO-AURA-PRO',
    title: 'AuraSound Pro ANC Wireless Headphones',
    description: 'Experience pure acoustic clarity with hybrid active noise cancellation, 40-hour battery life, spatial audio spatialization, and plush memory foam earcups.',
    category: 'electronics',
    brand: 'AuraSound',
    price: 299.99,
    discount: 15,
    stock: 28,
    rating: 4.8,
    numReviews: 124,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Battery', value: '40 Hours ANC On' },
      { name: 'Bluetooth', value: 'v5.3 Multipoint' },
      { name: 'Driver', value: '40mm Titanium Dynamic' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e2',
    sku: 'LAPTOP-APPLE-MBP14',
    title: 'Apple MacBook Pro 14 M3 Chip Laptop',
    description: 'Powerful Apple M3 Pro laptop with 18GB Unified Memory, 512GB SSD, Liquid Retina XDR 120Hz ProMotion display, and up to 18 hours battery life.',
    category: 'electronics',
    brand: 'Apple',
    price: 1899.00,
    discount: 5,
    stock: 12,
    rating: 4.9,
    numReviews: 210,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Processor', value: 'Apple M3 Pro 11-Core' },
      { name: 'RAM', value: '18GB Unified Memory' },
      { name: 'Storage', value: '512GB NVMe SSD' },
      { name: 'Display', value: '14.2" Liquid Retina XDR (3024x1964)' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e3',
    sku: 'LAPTOP-DELL-XPS15',
    title: 'Dell XPS 15 Intel Core i9 Ultra Laptop',
    description: 'Premium creator laptop featuring 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 4060 graphics, and 15.6" 3.5K OLED touch screen.',
    category: 'electronics',
    brand: 'Dell',
    price: 1749.99,
    discount: 10,
    stock: 15,
    rating: 4.7,
    numReviews: 89,
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Processor', value: 'Intel Core i9-13900H' },
      { name: 'GPU', value: 'NVIDIA RTX 4060 8GB' },
      { name: 'RAM', value: '32GB DDR5' },
      { name: 'Storage', value: '1TB PCIe Gen4 SSD' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e4',
    sku: 'LAPTOP-ASUS-ROG16',
    title: 'Asus ROG Zephyrus G16 Gaming Laptop',
    description: 'High-performance ultra-slim gaming laptop with Intel Core Ultra 9, RTX 4070 8GB, 240Hz ROG Nebula OLED display, and RGB keyboard.',
    category: 'electronics',
    brand: 'Asus',
    price: 1999.00,
    discount: 8,
    stock: 10,
    rating: 4.8,
    numReviews: 64,
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Display', value: '16" 2.5K 240Hz OLED' },
      { name: 'GPU', value: 'NVIDIA GeForce RTX 4070' },
      { name: 'Processor', value: 'Intel Core Ultra 9 185H' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e5',
    sku: 'MOUSE-LOGI-MX3S',
    title: 'Logitech MX Master 3S Wireless Ergonomic Mouse',
    description: 'Iconic performance wireless mouse with 8K DPI quiet clicks, MagSpeed electromagnetic scroll wheel, and ergonomic thumb rest.',
    category: 'electronics',
    brand: 'Logitech',
    price: 99.99,
    discount: 10,
    stock: 45,
    rating: 4.9,
    numReviews: 340,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Sensor', value: '8000 DPI Darkfield' },
      { name: 'Connectivity', value: 'Bluetooth & Logi Bolt' },
      { name: 'Battery', value: '70 Days Per Charge' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e6',
    sku: 'MOUSE-RAZER-DV3',
    title: 'Razer DeathAdder V3 Pro Wireless Gaming Mouse',
    description: 'Ultra-lightweight 63g wireless ergonomic gaming mouse with Focus Pro 30K Optical Sensor, Gen-3 optical switches, and 90-hour battery life.',
    category: 'electronics',
    brand: 'Razer',
    price: 149.99,
    discount: 12,
    stock: 30,
    rating: 4.8,
    numReviews: 175,
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight', value: '63g Ultra-light' },
      { name: 'Sensor', value: 'Focus Pro 30K Optical' },
      { name: 'Switch Type', value: 'Razer Optical Gen-3' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e7',
    sku: 'KEYBOARD-LOGI-MXKEYS',
    title: 'Logitech MX Keys S Wireless Illuminated Keyboard',
    description: 'Advanced low-profile wireless mechanical typing keyboard with smart backlighting, customizable Smart Actions macro keys, and dual Bluetooth connection.',
    category: 'electronics',
    brand: 'Logitech',
    price: 119.99,
    discount: 10,
    stock: 35,
    rating: 4.8,
    numReviews: 215,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Key Switches', value: 'Low Profile Scissor Keys' },
      { name: 'Backlight', value: 'Smart Proximity RGB' },
      { name: 'Compatibility', value: 'Mac, Windows, Linux, iOS' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e8',
    sku: 'KEYBOARD-KEYCHRON-K2',
    title: 'Keychron K2 Wireless RGB Mechanical Keyboard',
    description: 'Hot-swappable 75% mechanical gaming keyboard with Gateron G Pro switches, aluminum frame, Bluetooth 5.1, and Mac/Windows switch keys.',
    category: 'electronics',
    brand: 'Keychron',
    price: 99.00,
    discount: 15,
    stock: 40,
    rating: 4.7,
    numReviews: 180,
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Layout', value: '75% Compact (84 Keys)' },
      { name: 'Switches', value: 'Gateron G Pro Brown Tactile' },
      { name: 'Connectivity', value: 'Bluetooth & USB-C Cable' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e9',
    sku: 'MON-SAMSUNG-G9',
    title: 'Samsung Odyssey G9 49" Curved Gaming Monitor',
    description: 'Immersive 49-inch Dual QHD curved gaming monitor featuring 240Hz refresh rate, 1ms response time, Quantum Mini-LED display, and NVIDIA G-Sync support.',
    category: 'electronics',
    brand: 'Samsung',
    price: 1299.99,
    discount: 15,
    stock: 8,
    rating: 4.8,
    numReviews: 95,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Screen Size', value: '49" Super Ultra-Wide (5120x1440)' },
      { name: 'Refresh Rate', value: '240Hz' },
      { name: 'Curvature', value: '1000R Radius' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e10',
    sku: 'AUDIO-APPLE-AIRPODSPRO',
    title: 'Apple AirPods Pro 2 Wireless Earbuds',
    description: 'Apple-engineered wireless earbuds featuring H2 chip, Active Noise Cancellation, Adaptive Audio, Spatial Audio, and USB-C MagSafe charging case.',
    category: 'electronics',
    brand: 'Apple',
    price: 249.00,
    discount: 10,
    stock: 50,
    rating: 4.9,
    numReviews: 480,
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Chip', value: 'Apple H2 Headphone Chip' },
      { name: 'ANC', value: 'Up to 2x More Noise Cancellation' },
      { name: 'Water Resistance', value: 'IP54 Sweat & Water Resistant' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e11',
    sku: 'TAB-SAMSUNG-S9',
    title: 'Samsung Galaxy Tab S9 Ultra 14.6" Tablet',
    description: 'Ultra-wide 14.6-inch Dynamic AMOLED 2X display Android tablet with S Pen included, Snapdragon 8 Gen 2 processor, and IP68 water resistance.',
    category: 'electronics',
    brand: 'Samsung',
    price: 1199.99,
    discount: 10,
    stock: 14,
    rating: 4.8,
    numReviews: 110,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Display', value: '14.6" Dynamic AMOLED 2X 120Hz' },
      { name: 'Stylus', value: 'S Pen Included' },
      { name: 'Storage', value: '512GB + MicroSD Slot' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e12',
    sku: 'AUDIO-SONY-XM5',
    title: 'Sony WH-1000XM5 Noise Canceling Headphones',
    description: 'Industry-leading noise canceling wireless headphones with two processors, 8 microphones, precise voice pickup technology, and 30-hour battery life.',
    category: 'electronics',
    brand: 'Sony',
    price: 398.00,
    discount: 15,
    stock: 22,
    rating: 4.8,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Processor', value: 'HD Noise Canceling Processor QN1' },
      { name: 'Microphones', value: '8 Mics for Voice & Noise Reduction' },
      { name: 'Quick Charge', value: '3 Mins Charge = 3 Hours Playback' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e13',
    sku: 'CAM-CANON-EOSR6',
    title: 'Canon EOS R6 Mark II Mirrorless Camera',
    description: 'Full-frame mirrorless camera with 24.2 MP CMOS sensor, 40 fps high-speed continuous shooting, 4K 60p video, and Dual Pixel CMOS AF II.',
    category: 'electronics',
    brand: 'Canon',
    price: 2499.00,
    discount: 5,
    stock: 6,
    rating: 4.9,
    numReviews: 42,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Sensor', value: '24.2 MP Full-Frame CMOS' },
      { name: 'Video', value: 'Uncropped 4K 60p' },
      { name: 'Stabilization', value: 'In-Body IS Up to 8 Stops' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-e14',
    sku: 'STORAGE-SAMSUNG-T7',
    title: 'Samsung Smart T7 Shield 2TB Portable SSD',
    description: 'Rugged external SSD storage device with read speeds up to 1,050 MB/s, IP65 dust and water resistance, USB 3.2 Gen 2 connectivity, and rubberized armor casing.',
    category: 'electronics',
    brand: 'Samsung',
    price: 179.99,
    discount: 15,
    stock: 60,
    rating: 4.9,
    numReviews: 230,
    images: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '2TB NVMe Storage' },
      { name: 'Speed', value: '1,050 MB/s Sequential Read' },
      { name: 'Durability', value: 'Drop Resistant Up to 9.8ft' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },

  // ==================== FASHION (14 Products) ====================
  {
    id: 'prod-f1',
    sku: 'DRESS-ELY-SILK',
    title: 'Elysian Silk Floral Summer Dress',
    description: 'Flowing 100% mulberry silk midi floral summer dress featuring hand-painted botanical prints, breathable cotton lining, waist cinch belt, and elegant V-neckline.',
    category: 'fashion',
    brand: 'Elysian Fashion',
    price: 165.00,
    discount: 10,
    stock: 18,
    rating: 4.9,
    numReviews: 85,
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '100% Mulberry Silk' },
      { name: 'Fit', value: 'Regular Midi' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f2',
    sku: 'DRESS-VELVET-NIGHT',
    title: 'Velvet Evening Cocktail Party Dress',
    description: 'Glamorous dark emerald velvet bodycon cocktail evening dress with off-the-shoulder sleeves, subtle side slit, and premium stretch velvet fit.',
    category: 'fashion',
    brand: 'Veritas Fashion',
    price: 189.99,
    discount: 20,
    stock: 12,
    rating: 4.8,
    numReviews: 62,
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Fabric', value: '95% Velvet Polyester, 5% Elastane' },
      { name: 'Occasion', value: 'Evening / Party / Cocktail' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f3',
    sku: 'DRESS-LINEN-MAXI',
    title: 'Linen Button-Down Sundress Maxi Dress',
    description: 'Casual chic French flax linen maxi dress with front tortoiseshell buttons, adjustable thin shoulder straps, and tier pleated ruffled hem.',
    category: 'fashion',
    brand: 'Veritas Fashion',
    price: 120.00,
    discount: 15,
    stock: 25,
    rating: 4.7,
    numReviews: 44,
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '100% Organic Linen' },
      { name: 'Style', value: 'A-Line Maxi Sundress' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f4',
    sku: 'NIKE-HOODIE-TECH',
    title: 'Nike Tech Fleece Windrunner Mens Hoodie',
    description: 'Iconic Nike Sportswear Tech Fleece lightweight full-zip hoodie with articulated tailoring, zippered arm pocket, and premium double-sided smooth thermal warmth.',
    category: 'fashion',
    brand: 'Nike',
    price: 140.00,
    discount: 10,
    stock: 35,
    rating: 4.9,
    numReviews: 190,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '66% Cotton, 34% Polyester' },
      { name: 'Features', value: 'Tech Fleece Thermal Layer' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f5',
    sku: 'NIKE-DRIFIT-JACKET',
    title: 'Nike Dri-FIT Academy Training Jacket',
    description: 'Moisture-wicking athletic full-zip jacket engineered for peak sport performance, zip side pockets, mesh lining, and classic Nike Swoosh embroidery.',
    category: 'fashion',
    brand: 'Nike',
    price: 85.00,
    discount: 15,
    stock: 40,
    rating: 4.8,
    numReviews: 112,
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Technology', value: 'Nike Dri-FIT Sweat Wicking' },
      { name: 'Fit', value: 'Standard Sport Fit' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f6',
    sku: 'BAG-LEATHER-BACKPACK',
    title: 'Minimalist Artisan Leather Laptop Backpack',
    description: 'Handcrafted full-grain Italian leather laptop backpack featuring weatherproof lining, 16-inch padded laptop sleeve, and anti-theft hidden pocket.',
    category: 'fashion',
    brand: 'Veritas Leather Co.',
    price: 249.99,
    discount: 15,
    stock: 14,
    rating: 4.9,
    numReviews: 156,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: 'Full-Grain Italian Cowhide' },
      { name: 'Capacity', value: '22 Liters (Holds 16" Laptop)' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f7',
    sku: 'JCKT-DENIM-CLASSIC',
    title: 'Vintage Oversized Trucker Denim Jacket',
    description: 'Classic heavy-duty 100% cotton washed denim jacket with bronze button closures, flap chest pockets, and relaxed vintage unisex tailoring.',
    category: 'fashion',
    brand: 'Veritas Fashion',
    price: 110.00,
    discount: 10,
    stock: 22,
    rating: 4.7,
    numReviews: 78,
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Fabric', value: '14oz Rigid Cotton Denim' },
      { name: 'Wash', value: 'Medium Vintage Indigo Wash' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f8',
    sku: 'COAT-WOOL-TRENCH',
    title: 'Cashmere Blend Double-Breasted Trench Coat',
    description: 'Luxurious heavy cashmere and virgin wool blend long trench coat with waist tie belt, horn buttons, wide lapels, and deep hand warmer pockets.',
    category: 'fashion',
    brand: 'Elysian Fashion',
    price: 320.00,
    discount: 20,
    stock: 9,
    rating: 4.9,
    numReviews: 38,
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '80% Virgin Wool, 20% Cashmere' },
      { name: 'Lining', value: '100% Viscose Satin' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f9',
    sku: 'SUIT-SLIM-ITALIAN',
    title: 'Italian Wool Slim-Fit Mens Blazer Jacket',
    description: 'Tailored two-button Italian merino wool suit jacket blazer with notch lapels, double back vents, and breathable lining for corporate and formal wear.',
    category: 'fashion',
    brand: 'Veritas Fashion',
    price: 280.00,
    discount: 15,
    stock: 16,
    rating: 4.8,
    numReviews: 53,
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Fabric', value: 'Super 120s Italian Merino Wool' },
      { name: 'Fit', value: 'Modern Slim Fit' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f10',
    sku: 'SWEATER-CASHMERE-NEUTRAL',
    title: '100% Pure Cashmere Crewneck Sweater',
    description: 'Ultra-soft 2-ply Mongolian cashmere pullover sweater featuring ribbed cuffs, hem, and neckband in a timeless relaxed fit.',
    category: 'fashion',
    brand: 'Elysian Fashion',
    price: 195.00,
    discount: 10,
    stock: 20,
    rating: 4.9,
    numReviews: 87,
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Yarn', value: '100% Grade-A Mongolian Cashmere' },
      { name: 'Gauge', value: '12 Gauge 2-Ply Knit' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f11',
    sku: 'PANTS-CHINO-SLIM',
    title: 'Stretch Cotton Slim Chino Trousers',
    description: 'Versatile stretch twill cotton trousers with wrinkle-resistant finish, button closure, and tailored narrow leg opening.',
    category: 'fashion',
    brand: 'Veritas Fashion',
    price: 75.00,
    discount: 10,
    stock: 40,
    rating: 4.6,
    numReviews: 92,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '98% Organic Cotton, 2% Elastane' },
      { name: 'Care', value: 'Machine Wash Cold' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f12',
    sku: 'SKIRT-PLEATED-MIDI',
    title: 'Satin High-Waist Pleated Midi Skirt',
    description: 'Elegant flowing satin skirt with metallic sheen, comfortable elastic waistband, and knife-pleated flare silhouette.',
    category: 'fashion',
    brand: 'Elysian Fashion',
    price: 89.00,
    discount: 15,
    stock: 22,
    rating: 4.7,
    numReviews: 49,
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Fabric', value: 'Silky Polyester Satin' },
      { name: 'Waist', value: 'Elasticated High Rise' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f13',
    sku: 'SHIRT-OXFORD-WHITE',
    title: 'Classic Button-Down Oxford Cotton Shirt',
    description: 'Crisp 100% heavy Oxford weave cotton tailored shirt with button-down collar, chest pocket, and durable pearlized buttons.',
    category: 'fashion',
    brand: 'Veritas Fashion',
    price: 68.00,
    discount: 10,
    stock: 50,
    rating: 4.8,
    numReviews: 135,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '100% Heavyweight Cotton Oxford' },
      { name: 'Collar', value: 'Button-Down Collar' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-f14',
    sku: 'DRESS-PARTY-WRAP',
    title: 'Satin Wrap V-Neck Party Evening Dress',
    description: 'Chic satin wrap party dress featuring adjustable waist tie belt, lantern sleeves, ruffled asymmetrical hemline, and silky soft feel.',
    category: 'fashion',
    brand: 'Elysian Fashion',
    price: 135.00,
    discount: 15,
    stock: 19,
    rating: 4.8,
    numReviews: 71,
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: 'Stretch Poly Satin Blend' },
      { name: 'Closure', value: 'True Wrap Belt Tie' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },

  // ==================== BEAUTY & SKINCARE (14 Products) ====================
  {
    id: 'prod-b1',
    sku: 'SERUM-LUMINA-VITC',
    title: 'Lumina Botanical Hydrating Serum Set',
    description: 'Dermatologist-formulated skin brightening beauty serum enriched with 15% pure Vitamin C, Hyaluronic Acid complexes, and organic botanical antioxidants.',
    category: 'beauty-skincare',
    brand: 'Lumina Skincare',
    price: 88.00,
    discount: 10,
    stock: 45,
    rating: 4.9,
    numReviews: 210,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597263-000799965d84?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Active Ingredients', value: '15% L-Ascorbic Acid, Hyaluronic Acid' },
      { name: 'Volume', value: '50ml / 1.7 fl. oz.' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b2',
    sku: 'BEAUTY-ESTEE-REPAIR',
    title: 'Estée Lauder Advanced Night Repair Synchronized Serum',
    description: 'Iconic anti-aging facial beauty serum with Chronolux Power Signal Technology that locks in 72-hour hydration and visibly reduces fine lines.',
    category: 'beauty-skincare',
    brand: 'Estée Lauder',
    price: 115.00,
    discount: 12,
    stock: 30,
    rating: 4.9,
    numReviews: 410,
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Skin Type', value: 'All Skin Types' },
      { name: 'Benefits', value: 'Deep Night Repair & Anti-Aging' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b3',
    sku: 'BEAUTY-FENTY-GLOSS',
    title: 'Fenty Beauty Gloss Bomb Universal Lip Luminizer',
    description: 'The ultimate gotta-have-it lip gloss beauty product with explosive shine, conditioning shea butter formula, and addictive peach-vanilla scent.',
    category: 'beauty-skincare',
    brand: 'Fenty Beauty',
    price: 21.00,
    discount: 5,
    stock: 80,
    rating: 4.8,
    numReviews: 530,
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Shade', value: 'Fenty Glow (Rose Nude)' },
      { name: 'Finish', value: 'High Shine Shimmer' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b4',
    sku: 'BEAUTY-DIOR-SAUVAGE',
    title: 'Dior Sauvage Eau de Parfum Spray 100ml',
    description: 'Sensual luxury men fragrance featuring bergamot, Sichuan pepper, lavender, and spicy nutmeg over a rich woody ambroxan trail.',
    category: 'beauty-skincare',
    brand: 'Dior',
    price: 145.00,
    discount: 10,
    stock: 25,
    rating: 4.9,
    numReviews: 380,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Fragrance Family', value: 'Fresh & Woody' },
      { name: 'Size', value: '100ml / 3.4 oz' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b5',
    sku: 'BEAUTY-CERAVE-CLEANSER',
    title: 'CeraVe Hydrating Facial Cleanser & Wash',
    description: 'Gentle facial wash developed with dermatologists, infused with 3 essential ceramides and hyaluronic acid to cleanse without stripping skin moisture.',
    category: 'beauty-skincare',
    brand: 'CeraVe',
    price: 16.99,
    discount: 5,
    stock: 100,
    rating: 4.8,
    numReviews: 620,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597263-000799965d84?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Skin Concern', value: 'Dry & Sensitive Skin Cleansing' },
      { name: 'Volume', value: '16 fl oz / 473 ml' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b6',
    sku: 'BEAUTY-LAMER-CREAM',
    title: 'La Mer Crème de la Mer Ultra Moisturizing Cream',
    description: 'Legendary luxury ultra-rich moisturizing beauty cream powered by Miracle Broth to soothe, firm, and restore skin radiance.',
    category: 'beauty-skincare',
    brand: 'La Mer',
    price: 380.00,
    discount: 5,
    stock: 10,
    rating: 4.9,
    numReviews: 145,
    images: [
      'https://images.unsplash.com/photo-1608248597263-000799965d84?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Key Ingredient', value: 'Miracle Broth Cell-Renewing Elixir' },
      { name: 'Texture', value: 'Rich Cream' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b7',
    sku: 'BEAUTY-GLOSSIER-PAINT',
    title: 'Glossier Cloud Paint Seamless Liquid Blush',
    description: 'Lightweight buildable gel-cream liquid cheek blush inspired by gradient sunsets that melts into skin for a natural flushed glow.',
    category: 'beauty-skincare',
    brand: 'Glossier',
    price: 22.00,
    discount: 10,
    stock: 65,
    rating: 4.7,
    numReviews: 280,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Formula', value: 'Cruelty-Free Gel-Cream' },
      { name: 'Shade', value: 'Beam (Soft Peach)' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b8',
    sku: 'BEAUTY-CHARLOTTE-MAGIC',
    title: 'Charlotte Tilbury Magic Cream Moisturizer',
    description: 'Award-winning hydrating face moisturizer infused with BioNymph Peptide, Hyaluronic Acid, and Vitamin C & E for glowing radiant skin makeup prep.',
    category: 'beauty-skincare',
    brand: 'Charlotte Tilbury',
    price: 100.00,
    discount: 10,
    stock: 32,
    rating: 4.8,
    numReviews: 220,
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Volume', value: '50ml Jar' },
      { name: 'Benefits', value: 'Plumping, Hydrating, Radiant Prep' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b9',
    sku: 'BEAUTY-NARS-CONCEALER',
    title: 'NARS Radiant Creamy Concealer Makeup',
    description: 'Coveted long-wear liquid makeup concealer that blurs imperfections, brightens under-eyes, and provides buildable medium-to-full coverage.',
    category: 'beauty-skincare',
    brand: 'NARS',
    price: 32.00,
    discount: 5,
    stock: 70,
    rating: 4.9,
    numReviews: 390,
    images: [
      'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Finish', value: 'Radiant Luminous Natural' },
      { name: 'Coverage', value: 'Medium-to-Full' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b10',
    sku: 'BEAUTY-ANASTASIA-BROW',
    title: 'Anastasia Beverly Hills Brow Wiz Pencil',
    description: 'Ultra-fine precision mechanical eyebrow pencil with spoolie brush for drawing natural hair-like strokes and filling brows.',
    category: 'beauty-skincare',
    brand: 'Anastasia Beverly Hills',
    price: 25.00,
    discount: 10,
    stock: 55,
    rating: 4.8,
    numReviews: 310,
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Tip', value: '0.5mm Micro Fine Tip' },
      { name: 'Shade', value: 'Medium Brown' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b11',
    sku: 'BEAUTY-LANEIGE-LIPMASK',
    title: 'Laneige Lip Sleeping Mask Berry Hydration',
    description: 'Overnight leave-on lip mask enriched with Berry Mix Complex, Vitamin C, and Moisture Wrap technology for super soft hydrated lips.',
    category: 'beauty-skincare',
    brand: 'Laneige',
    price: 24.00,
    discount: 5,
    stock: 90,
    rating: 4.9,
    numReviews: 450,
    images: [
      'https://images.unsplash.com/photo-1608248597263-000799965d84?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Flavor', value: 'Sweet Berry' },
      { name: 'Size', value: '20g / 0.70 oz.' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b12',
    sku: 'BEAUTY-ORDINARY-NIACINAMIDE',
    title: 'The Ordinary Niacinamide 10% + Zinc 1%',
    description: 'High-strength vitamin and mineral blemish formula serum that target skin congestion, visible pore size, and uneven tone.',
    category: 'beauty-skincare',
    brand: 'The Ordinary',
    price: 10.90,
    discount: 0,
    stock: 120,
    rating: 4.7,
    numReviews: 780,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Concentration', value: '10% Niacinamide, 1% Zinc PCA' },
      { name: 'Volume', value: '30ml Serum' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b13',
    sku: 'BEAUTY-OLAPLEX-NO3',
    title: 'Olaplex No. 3 Hair Perfector Repair Treatment',
    description: 'At-home bond building treatment that visibly strengthens damaged, color-treated, or heat-styled hair from within.',
    category: 'beauty-skincare',
    brand: 'Olaplex',
    price: 30.00,
    discount: 10,
    stock: 60,
    rating: 4.8,
    numReviews: 510,
    images: [
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Hair Type', value: 'All Damaged & Treated Hair' },
      { name: 'Volume', value: '100ml / 3.3 fl oz' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-b14',
    sku: 'BEAUTY-SOL-BUMBUM',
    title: 'Sol de Janeiro Brazilian Bum Bum Body Cream',
    description: 'Award-winning visible skin-tightening body cream with iconic Cheirosa 62 pistachio and salted caramel fragrance.',
    category: 'beauty-skincare',
    brand: 'Sol de Janeiro',
    price: 48.00,
    discount: 8,
    stock: 40,
    rating: 4.9,
    numReviews: 360,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Fragrance', value: 'Pistachio & Salted Caramel' },
      { name: 'Size', value: '240ml / 8.1 fl oz' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  }
];
