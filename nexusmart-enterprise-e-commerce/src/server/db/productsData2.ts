import { Product } from '../../types';

export const productsPart2: Product[] = [
  // ==================== HOME & LIVING (15 Products) ====================
  {
    id: 'prod-h1',
    sku: 'APP-AROMA-500',
    title: 'Smart Barista Espresso Machine Touch',
    description: 'Commercial-grade 15-bar Italian pump espresso machine with automatic microfoam milk texturing, PID temperature control, and intuitive touchscreen interface.',
    category: 'home-living',
    brand: 'AromaMaster',
    price: 699.99,
    discount: 10,
    stock: 16,
    rating: 4.8,
    numReviews: 88,
    images: [
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517668808822-9e428824603b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Pressure', value: '15 Bar Italian Pump' },
      { name: 'Water Tank', value: '2.0L Removable Reservoir' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h2',
    sku: 'CHAIR-ERGO-PRO',
    title: 'Ergonomic Mesh Executive Chair Pro',
    description: 'Medical-grade lumbar support ergonomic chair with 4D adjustable armrests, dynamic recline tension control, and breathable Italian mesh fabric.',
    category: 'home-living',
    brand: 'ErgoDesign',
    price: 349.99,
    discount: 20,
    stock: 22,
    rating: 4.8,
    numReviews: 140,
    images: [
      'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight Capacity', value: '350 lbs' },
      { name: 'Mechanism', value: 'Synchro-Tilt 135 Degree' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h3',
    sku: 'KIT-BREVILLE-OVEN',
    title: 'Breville Smart Oven Air Fryer Pro',
    description: 'Versatile 13-in-1 countertop convection smart oven and air fryer with Element iQ heat technology, super convection fan, and stainless steel housing.',
    category: 'home-living',
    brand: 'Breville',
    price: 399.95,
    discount: 15,
    stock: 18,
    rating: 4.9,
    numReviews: 195,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '1 CU FT (Fits 14 lb Turkey)' },
      { name: 'Functions', value: '13 Smart Cooking Functions' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h4',
    sku: 'KIT-LECREUSET-DUTCH',
    title: 'Le Creuset Enameled Cast Iron Dutch Oven 5.5 Qt',
    description: 'Iconic French enameled cast iron Dutch oven kitchen casserole dish with superior heat distribution, chip-resistant enamel, and ergonomic loop handles.',
    category: 'home-living',
    brand: 'Le Creuset',
    price: 420.00,
    discount: 10,
    stock: 14,
    rating: 4.9,
    numReviews: 160,
    images: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '5.5 Quarts (5-6 Servings)' },
      { name: 'Heat Safe', value: 'Oven Safe up to 500°F' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h5',
    sku: 'KIT-KITCHENAID-MIXER',
    title: 'KitchenAid Artisan Series 5-Quart Stand Mixer',
    description: 'Classic tilt-head kitchen stand mixer with 10 speeds, 5-quart stainless steel bowl with handle, flat beater, dough hook, and wire whip.',
    category: 'home-living',
    brand: 'KitchenAid',
    price: 449.99,
    discount: 10,
    stock: 20,
    rating: 4.9,
    numReviews: 310,
    images: [
      'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Power', value: '325 Watts 10-Speed Engine' },
      { name: 'Bowl Size', value: '5 Qt Stainless Steel' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h6',
    sku: 'VAC-DYSON-V15',
    title: 'Dyson V15 Detect Cordless Vacuum Cleaner',
    description: 'Intelligent cordless stick vacuum cleaner with laser dust illumination, piezo sensor particle count detection, and up to 60 minutes run time.',
    category: 'home-living',
    brand: 'Dyson',
    price: 749.99,
    discount: 10,
    stock: 12,
    rating: 4.8,
    numReviews: 240,
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Suction Power', value: '230 AW Hyperdymium Motor' },
      { name: 'Run Time', value: '60 Minutes Swappable Battery' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h7',
    sku: 'KIT-INSTANTPOT-DUO',
    title: 'Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker',
    description: 'Multi-use programmable electric pressure cooker, slow cooker, rice cooker, steamer, yogurt maker, and food warmer with EasySteam pressure release.',
    category: 'home-living',
    brand: 'Instant Pot',
    price: 129.95,
    discount: 15,
    stock: 45,
    rating: 4.8,
    numReviews: 410,
    images: [
      'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '6 Quart' },
      { name: 'Safety', value: '10+ Certified Safety Features' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h8',
    sku: 'KIT-NESPRESSO-VERTUO',
    title: 'Nespresso Vertuo Pop Coffee & Espresso Maker',
    description: 'Compact single-serve coffee and espresso machine using Centrifusion technology for rich crema coffees and espressos at the touch of a button.',
    category: 'home-living',
    brand: 'Nespresso',
    price: 129.00,
    discount: 20,
    stock: 35,
    rating: 4.7,
    numReviews: 185,
    images: [
      'https://images.unsplash.com/photo-1517668808822-9e428824603b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Brew Sizes', value: '5 Cup Sizes (5oz, 8oz, 12oz, Espresso)' },
      { name: 'Heat Time', value: '30 Seconds Fast Heat' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h9',
    sku: 'KIT-NINJA-AIRFRYER',
    title: 'Ninja Air Fryer Max XL 5.5 Qt',
    description: 'High-speed air fryer with Max Crisp Technology deliver 450 degrees of superheated air to cook crisp foods up to 30% faster with 75% less fat.',
    category: 'home-living',
    brand: 'Ninja',
    price: 169.99,
    discount: 15,
    stock: 30,
    rating: 4.8,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '5.5 Qt Nonstick Basket' },
      { name: 'Temperature', value: '105°F to 450°F' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h10',
    sku: 'KIT-VITAMIX-A3500',
    title: 'Vitamix A3500 Ascent Series Smart Blender',
    description: 'Professional-grade high-performance smart blender with 5 program settings, touchscreen controls, variable speed control, and built-in wireless timer.',
    category: 'home-living',
    brand: 'Vitamix',
    price: 649.95,
    discount: 10,
    stock: 15,
    rating: 4.9,
    numReviews: 175,
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Motor', value: '2.2 Peak HP Commercial Engine' },
      { name: 'Container', value: '64 oz Low-Profile Container' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h11',
    sku: 'KIT-FELLOW-KETTLE',
    title: 'Fellow Stagg EKG Electric Pour-Over Kettle',
    description: 'Precision pour-over electric tea and coffee kettle with gooseneck spout, variable temperature control knob, LCD screen, and 60-minute HOLD mode.',
    category: 'home-living',
    brand: 'Fellow',
    price: 165.00,
    discount: 10,
    stock: 25,
    rating: 4.9,
    numReviews: 140,
    images: [
      'https://images.unsplash.com/photo-1517668808822-9e428824603b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '0.9 Liter' },
      { name: 'Material', value: '304 Stainless Steel Body' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h12',
    sku: 'VAC-ROOMBA-J7',
    title: 'iRobot Roomba j7+ Self-Emptying Robot Vacuum',
    description: 'Smart robot vacuum cleaner with PrecisionVision Navigation to avoid pet waste and cords, automatically emptying into Clean Base for 60 days.',
    category: 'home-living',
    brand: 'iRobot',
    price: 799.00,
    discount: 15,
    stock: 11,
    rating: 4.7,
    numReviews: 160,
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Feature', value: 'Pet Owner Official Guarantee' },
      { name: 'Base', value: 'Automatic Dirt Disposal Unit' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h13',
    sku: 'LAMP-MINIMAL-LED',
    title: 'Minimalist Dimmable LED Touch Desk Lamp',
    description: 'Sleek aluminum architectural desk lamp with touch slider dimming, color temperature modes, memory function, and USB-C device charging port.',
    category: 'home-living',
    brand: 'ErgoDesign',
    price: 69.99,
    discount: 10,
    stock: 40,
    rating: 4.7,
    numReviews: 82,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Modes', value: '5 Color Temps & 10 Brightness Levels' },
      { name: 'Power', value: '12W Eye-Caring LED' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h14',
    sku: 'PAN-ALLCLAD-STAINLESS',
    title: 'All-Clad D3 Stainless Steel 10" Frying Pan',
    description: 'Professional 3-ply bonded stainless steel frying pan with aluminum core for fast evenly distributed heating, ergonomic riveted handle.',
    category: 'home-living',
    brand: 'All-Clad',
    price: 129.99,
    discount: 10,
    stock: 30,
    rating: 4.9,
    numReviews: 120,
    images: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Construction', value: 'Tri-Ply Stainless Steel & Aluminum' },
      { name: 'Compatibility', value: 'Induction, Gas, Electric, Oven 600°F' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-h15',
    sku: 'AIR-LEVOIT-CORE400S',
    title: 'Levoit Core 400S Smart True HEPA Air Purifier',
    description: 'High-efficiency smart air purifier with 3-stage filtration, real-time AQI monitoring, quiet sleep mode, and voice control for large living rooms.',
    category: 'home-living',
    brand: 'Levoit',
    price: 219.99,
    discount: 15,
    stock: 28,
    rating: 4.8,
    numReviews: 115,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Coverage', value: '403 sq ft in 12 mins (CADR 260 CFM)' },
      { name: 'Filtration', value: 'H13 True HEPA Filter' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },

  // ==================== SPORTS & FITNESS (14 Products) ====================
  {
    id: 'prod-s1',
    sku: 'NIKE-PEGASUS-40',
    title: 'Nike Air Zoom Pegasus 40 Running Shoes',
    description: 'Ultralight road running sneakers engineered with dual Zoom Air units, React foam midsole, breathable engineered mesh upper, and Nike signature waffle traction.',
    category: 'fitness-outdoors',
    brand: 'Nike',
    price: 130.00,
    discount: 10,
    stock: 30,
    rating: 4.8,
    numReviews: 240,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Midsole', value: 'Nike React Foam + Dual Zoom Air' },
      { name: 'Terrain', value: 'Road Running' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s2',
    sku: 'NIKE-METCON-9',
    title: 'Nike Metcon 9 Training Gym Shoes',
    description: 'Gold standard cross-training gym sneakers featuring large Hyperlift heel plate, rubber rope wrap, firm heel stability, and breathable mesh.',
    category: 'fitness-outdoors',
    brand: 'Nike',
    price: 150.00,
    discount: 15,
    stock: 25,
    rating: 4.9,
    numReviews: 180,
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Feature', value: 'Hyperlift Heel Stability Plate' },
      { name: 'Use', value: 'Weightlifting & High-Intensity Training' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s3',
    sku: 'NIKE-DUFFEL-BRASILIA',
    title: 'Nike Brasilia Gym Training Duffel Bag',
    description: 'Spacious 60-liter sports duffel bag with padded shoulder strap, ventilated shoe compartment, outer zip pockets, and durable water-resistant bottom.',
    category: 'fitness-outdoors',
    brand: 'Nike',
    price: 55.00,
    discount: 10,
    stock: 40,
    rating: 4.8,
    numReviews: 130,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '60 Liters Medium Duffel' },
      { name: 'Material', value: '100% Water-Resistant Polyester' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s4',
    sku: 'SHOES-ADI-ULTRABOOST',
    title: 'Adidas Ultraboost Light Running Shoes',
    description: 'High-performance long distance road running shoes powered by 30% lighter Light BOOST cushioning and Continental Rubber outsole grip.',
    category: 'fitness-outdoors',
    brand: 'Adidas',
    price: 190.00,
    discount: 20,
    stock: 22,
    rating: 4.8,
    numReviews: 210,
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Cushioning', value: 'Ultra Light BOOST Foam' },
      { name: 'Outsole', value: 'Continental™ Better Rubber' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s5',
    sku: 'WATCH-GARMIN-FR265',
    title: 'Garmin Forerunner 265 GPS Running Watch',
    description: 'Advanced sports & running smart watch with vibrant AMOLED touchscreen, training readiness metrics, wrist-based running power, and multi-band GPS.',
    category: 'fitness-outdoors',
    brand: 'Garmin',
    price: 449.99,
    discount: 10,
    stock: 15,
    rating: 4.9,
    numReviews: 110,
    images: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Display', value: '1.3" AMOLED Touchscreen' },
      { name: 'Battery', value: 'Up to 13 Days in Smartwatch Mode' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s6',
    sku: 'GYM-BOWFLEX-552',
    title: 'Bowflex SelectTech 552 Adjustable Dumbbells Pair',
    description: 'Space-saving adjustable weights dumbbell pair that adjusts from 5 to 52.5 lbs per dumbbell with a turn of a dial.',
    category: 'fitness-outdoors',
    brand: 'Bowflex',
    price: 429.00,
    discount: 10,
    stock: 12,
    rating: 4.8,
    numReviews: 280,
    images: [
      'https://images.unsplash.com/photo-1638805981949-33230cf33766?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight Range', value: '5 to 52.5 lbs per dumbbell' },
      { name: 'Replaces', value: '15 Pairs of Dumbbells' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s7',
    sku: 'YOGA-MANDUKA-PRO',
    title: 'Manduka PRO High Density Yoga Mat',
    description: 'Unmatched high-density professional yoga mat with closed-cell surface to keep moisture out, joint cushioning, and lifetime guarantee.',
    category: 'fitness-outdoors',
    brand: 'Manduka',
    price: 138.00,
    discount: 10,
    stock: 35,
    rating: 4.9,
    numReviews: 165,
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Thickness', value: '6mm Ultra Cushioning' },
      { name: 'Material', value: '100% Latex-Free High Density PVC' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s8',
    sku: 'FIT-FITBIT-CHARGE6',
    title: 'Fitbit Charge 6 Fitness Tracker Wristband',
    description: 'Advanced sports fitness band with Google Built-In apps, YouTube Music controls, heart rate tracking on gym equipment, 40+ exercise modes, and 7-day battery.',
    category: 'fitness-outdoors',
    brand: 'Fitbit',
    price: 159.95,
    discount: 15,
    stock: 28,
    rating: 4.7,
    numReviews: 190,
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'GPS', value: 'Built-In GPS & GLONASS' },
      { name: 'Water Rating', value: 'Water Resistant up to 50 Meters' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s9',
    sku: 'FIT-THERAGUN-PRO',
    title: 'Theragun PRO Wireless Deep Tissue Percussive Massager',
    description: 'Professional-grade deep tissue percussive muscle therapy massage gun with quiet OLED screen, 16mm amplitude, and rotating arm.',
    category: 'fitness-outdoors',
    brand: 'Therabody',
    price: 599.00,
    discount: 15,
    stock: 10,
    rating: 4.9,
    numReviews: 145,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1638805981949-33230cf33766?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Amplitude', value: '16mm Deep Muscle Penetration' },
      { name: 'Force', value: 'Delivers Up To 60 lbs Stall Force' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s10',
    sku: 'BOTTLE-HYDROFLASK-32',
    title: 'Hydro Flask 32 oz Wide Mouth Vacuum Water Bottle',
    description: 'Double-wall vacuum insulated stainless steel water flask that keeps drinks ice cold for 24 hours or piping hot for 12 hours with leakproof Flex Cap.',
    category: 'fitness-outdoors',
    brand: 'Hydro Flask',
    price: 44.95,
    discount: 10,
    stock: 65,
    rating: 4.9,
    numReviews: 320,
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: '32 oz / 946 ml' },
      { name: 'Material', value: '18/8 Pro-Grade Stainless Steel' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s11',
    sku: 'CAMP-OSPREY-ATMOS65',
    title: 'Osprey Atmos AG 65 Outdoor Backpacking Pack',
    description: 'Award-winning anti-gravity 65L outdoor hiking and camping backpack with continuous 3D suspended mesh backpanel for supreme ventilation.',
    category: 'fitness-outdoors',
    brand: 'Osprey',
    price: 340.00,
    discount: 10,
    stock: 14,
    rating: 4.9,
    numReviews: 98,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Volume', value: '65 Liters Large Trail Capacity' },
      { name: 'Suspension', value: 'Anti-Gravity Mesh Backpanel' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s12',
    sku: 'CAMP-YETI-TUNDRA45',
    title: 'YETI Tundra 45 Hard Ice Cooler Chest',
    description: 'Indestructible rotomolded outdoor cooler with up to 3 inches of PermaFrost insulation and Heavy-Duty rubber T-Latches for wilderness camping.',
    category: 'fitness-outdoors',
    brand: 'YETI',
    price: 325.00,
    discount: 5,
    stock: 18,
    rating: 4.9,
    numReviews: 170,
    images: [
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Capacity', value: 'Holds 28 Cans with 2:1 Ice Ratio' },
      { name: 'Construction', value: 'Armor-like Rotomolded Polyethylene' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s13',
    sku: 'CAMP-COLEMAN-SUNDOME',
    title: 'Coleman Sundome 4-Person Camping Tent',
    description: 'Weatherproof dome camping tent featuring WeatherTec system with patented welded floors and inverted seams to keep you dry.',
    category: 'fitness-outdoors',
    brand: 'Coleman',
    price: 89.99,
    discount: 15,
    stock: 30,
    rating: 4.7,
    numReviews: 240,
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Dimensions', value: '9 x 7 ft with 4 ft 11 in Center Height' },
      { name: 'Setup', value: '10-Minute Snag-Free Continuous Pole Sleeves' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-s14',
    sku: 'BIKE-GARMIN-EDGE540',
    title: 'Garmin Edge 540 Solar Bike Computer GPS',
    description: 'Solar-charging cycling GPS bike computer with targeted adaptive coaching, climbing insights, and up to 42 hours battery life.',
    category: 'fitness-outdoors',
    brand: 'Garmin',
    price: 449.99,
    discount: 10,
    stock: 12,
    rating: 4.8,
    numReviews: 68,
    images: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Charging', value: 'Power Glass Solar Lens' },
      { name: 'Navigation', value: 'Multi-Band GNSS Technology' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },

  // ==================== BOOKS & LITERATURE (14 Products) ====================
  {
    id: 'prod-bk1',
    sku: 'BOOK-CLEAR-ATOMIC',
    title: 'Atomic Habits by James Clear (Hardcover Edition)',
    description: 'The #1 New York Times bestseller book. An easy & proven way to build good habits & break bad ones with tiny changes that deliver remarkable results.',
    category: 'books',
    brand: 'Avery Publishing',
    price: 27.00,
    discount: 20,
    stock: 85,
    rating: 4.9,
    numReviews: 620,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Format', value: 'Hardcover 320 Pages' },
      { name: 'Genre', value: 'Self-Help / Psychology' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk2',
    sku: 'BOOK-DDIA-KLEPPMANN',
    title: 'Designing Data-Intensive Applications by Martin Kleppmann',
    description: 'The definitive software architecture book on distributed systems, data processing, databases, scalability, consistency, and fault tolerance.',
    category: 'books',
    brand: "O'Reilly Media",
    price: 49.99,
    discount: 10,
    stock: 45,
    rating: 4.9,
    numReviews: 310,
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Format', value: 'Paperback 616 Pages' },
      { name: 'Topic', value: 'Software Architecture & Databases' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk3',
    sku: 'BOOK-CLEANCODE-MARTIN',
    title: 'Clean Code: Handbook of Agile Software Craftsmanship',
    description: 'Essential computer science programming book by Robert C. Martin detailing best practices, refactoring techniques, and writing maintainable code.',
    category: 'books',
    brand: 'Prentice Hall',
    price: 44.95,
    discount: 15,
    stock: 50,
    rating: 4.8,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Author', value: 'Robert C. Martin (Uncle Bob)' },
      { name: 'Pages', value: '464 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk4',
    sku: 'BOOK-HERBERT-DUNE',
    title: 'Dune Deluxe Edition Hardcover Book by Frank Herbert',
    description: 'Science fiction masterpiece book featuring gilded edges, custom endpapers, stamped cloth cover, and full-color poster map of Arrakis.',
    category: 'books',
    brand: 'Ace Books',
    price: 40.00,
    discount: 15,
    stock: 35,
    rating: 4.9,
    numReviews: 450,
    images: [
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Genre', value: 'Epic Sci-Fi Fiction' },
      { name: 'Edition', value: 'Collector Deluxe Hardcover' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk5',
    sku: 'BOOK-WEIR-HAILMARY',
    title: 'Project Hail Mary Hardcover Novel by Andy Weir',
    description: 'Tense interstellar survival space science fiction novel by the author of The Martian following astronaut Ryland Grace on a solo mission.',
    category: 'books',
    brand: 'Ballantine Books',
    price: 28.99,
    discount: 10,
    stock: 40,
    rating: 4.9,
    numReviews: 380,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Author', value: 'Andy Weir' },
      { name: 'Pages', value: '496 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk6',
    sku: 'BOOK-SAPIENS-HARARI',
    title: 'Sapiens: A Brief History of Humankind by Yuval Noah Harari',
    description: 'Renowned non-fiction book exploring how Homo sapiens came to dominate planet Earth through cognitive, agricultural, and scientific revolutions.',
    category: 'books',
    brand: 'Harper',
    price: 24.99,
    discount: 15,
    stock: 60,
    rating: 4.8,
    numReviews: 510,
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Topic', value: 'World History & Anthropology' },
      { name: 'Format', value: 'Trade Paperback 464 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk7',
    sku: 'BOOK-HOUSEL-MONEY',
    title: 'The Psychology of Money by Morgan Housel',
    description: 'Timeless financial wisdom book featuring 19 short stories exploring the weird ways people think about money, wealth, and decision making.',
    category: 'books',
    brand: 'Harriman House',
    price: 21.00,
    discount: 10,
    stock: 75,
    rating: 4.8,
    numReviews: 420,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Genre', value: 'Finance & Behavioral Economics' },
      { name: 'Pages', value: '256 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk8',
    sku: 'BOOK-JOBS-ISAACSON',
    title: 'Steve Jobs Biography by Walter Isaacson',
    description: 'The exclusive biography of Apple founder Steve Jobs based on forty interviews conducted over two years with Jobs and family.',
    category: 'books',
    brand: 'Simon & Schuster',
    price: 35.00,
    discount: 20,
    stock: 30,
    rating: 4.8,
    numReviews: 310,
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Subject', value: 'Steve Jobs / Apple Computer History' },
      { name: 'Pages', value: '656 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk9',
    sku: 'BOOK-NEWPORT-DEEPWORK',
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    description: 'Cal Newport transformative productivity book guiding knowledge workers to master intense focus and overcome digital distractions.',
    category: 'books',
    brand: 'Grand Central Publishing',
    price: 22.50,
    discount: 10,
    stock: 55,
    rating: 4.8,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Author', value: 'Cal Newport' },
      { name: 'Topic', value: 'Productivity & Focus' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk10',
    sku: 'BOOK-TOLKIEN-HOBBIT',
    title: 'The Hobbit Illustrated Collector Edition Book',
    description: 'J.R.R. Tolkien classic fantasy book featuring full-color illustrations by Alan Lee, clothbound spine, and fold-out maps of Middle-earth.',
    category: 'books',
    brand: 'William Morrow',
    price: 38.00,
    discount: 10,
    stock: 25,
    rating: 4.9,
    numReviews: 360,
    images: [
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Illustrator', value: 'Alan Lee' },
      { name: 'Genre', value: 'Classic Epic Fantasy' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk11',
    sku: 'BOOK-PRAGMATIC-PROG',
    title: 'The Pragmatic Programmer 20th Anniversary Edition',
    description: 'Updated software engineering classic book by Andrew Hunt & David Thomas covering developer career growth, architecture, and coding mastery.',
    category: 'books',
    brand: 'Addison-Wesley',
    price: 48.00,
    discount: 15,
    stock: 35,
    rating: 4.9,
    numReviews: 180,
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Authors', value: 'David Thomas, Andrew Hunt' },
      { name: 'Pages', value: '352 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk12',
    sku: 'BOOK-CHEMISTRY-GARMUS',
    title: 'Lessons in Chemistry Novel by Bonnie Garmus',
    description: 'Witty blockbuster fiction book following Elizabeth Zott, an uncompromising 1960s chemist who becomes the reluctant star of America cooking show.',
    category: 'books',
    brand: 'Doubleday',
    price: 29.00,
    discount: 15,
    stock: 50,
    rating: 4.8,
    numReviews: 440,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Genre', value: 'Historical Fiction / Humor' },
      { name: 'Pages', value: '400 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk13',
    sku: 'BOOK-TOMORROW-ZEVIN',
    title: 'Tomorrow and Tomorrow and Tomorrow Novel by Gabrielle Zevin',
    description: 'An imaginative story book about two video game designer friends spanning thirty years of creative partnership, fame, love, and video gaming.',
    category: 'books',
    brand: 'Knopf',
    price: 28.00,
    discount: 10,
    stock: 40,
    rating: 4.8,
    numReviews: 270,
    images: [
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Topic', value: 'Video Game Developers & Friendship' },
      { name: 'Pages', value: '416 Pages' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-bk14',
    sku: 'BOOK-GRAPHIC-DUNE',
    title: 'Dune: The Official Graphic Novel Adaptation Book',
    description: 'Stunning full-color graphic novel adaptation of Frank Herbert science fiction masterpiece illustrated by Raul Allen and Patricia Martin.',
    category: 'books',
    brand: 'Abrams ComicArts',
    price: 24.99,
    discount: 10,
    stock: 30,
    rating: 4.9,
    numReviews: 120,
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Format', value: 'Hardcover Graphic Novel 176 Pages' },
      { name: 'Art', value: 'Full Color Illustrated' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  }
];
