import { Product } from '../../types';

export const productsPart3: Product[] = [
  // ==================== TOYS & GAMING (14 Products) ====================
  {
    id: 'prod-t1',
    sku: 'GAME-PS5-SLIM',
    title: 'Sony PlayStation 5 Slim Disc Edition Gaming Console',
    description: 'Next-gen gaming console with 1TB SSD, DualSense haptic feedback, 4K 120Hz gaming output, Ray Tracing, and ultra-high-speed SSD.',
    category: 'toys',
    brand: 'Sony',
    price: 499.99,
    discount: 5,
    stock: 15,
    rating: 4.9,
    numReviews: 480,
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607853202200-5301e7e408d6?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Storage', value: '1TB Custom NVMe SSD' },
      { name: 'Graphics', value: 'AMD Radeon RDNA 2 Ray Tracing' },
      { name: 'Resolution', value: '4K HDR at up to 120 FPS' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t2',
    sku: 'GAME-XBOX-SERIESX',
    title: 'Xbox Series X 1TB Gaming Console Black',
    description: 'The fastest, most powerful Xbox video gaming console ever with 12 teraflops of processing power, Quick Resume, and Xbox Velocity Architecture.',
    category: 'toys',
    brand: 'Microsoft',
    price: 499.00,
    discount: 5,
    stock: 12,
    rating: 4.8,
    numReviews: 320,
    images: [
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Processor', value: '12 TFLOPS Custom Zen 2 GPU' },
      { name: 'Feature', value: '4K Gaming at 120Hz & 8K Ready' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t3',
    sku: 'GAME-NINTENDO-OLED',
    title: 'Nintendo Switch OLED Model White Edition',
    description: 'Portable hybrid gaming console featuring 7-inch OLED screen, wide adjustable stand, wired LAN dock port, and 64GB storage.',
    category: 'toys',
    brand: 'Nintendo',
    price: 349.99,
    discount: 5,
    stock: 25,
    rating: 4.9,
    numReviews: 540,
    images: [
      'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Screen', value: '7" Vibrant OLED Display' },
      { name: 'Modes', value: 'TV Mode, Tabletop Mode, Handheld Mode' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t4',
    sku: 'GAME-PS5-DUALSENSE',
    title: 'Sony DualSense Wireless PS5 Controller White',
    description: 'Immersive wireless gaming controller featuring haptic feedback, dynamic adaptive triggers, built-in microphone, and motion sensors.',
    category: 'toys',
    brand: 'Sony',
    price: 69.99,
    discount: 10,
    stock: 40,
    rating: 4.9,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1607853202200-5301e7e408d6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Features', value: 'Adaptive Triggers & Haptic Actuators' },
      { name: 'Battery', value: 'Built-in USB-C Rechargeable' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t5',
    sku: 'GAME-XBOX-CONTROLLER',
    title: 'Xbox Wireless Controller Robot White',
    description: 'Modernized gaming controller with sculpted surfaces, refined geometry, hybrid D-pad, textured grip on triggers, and dedicated Share button.',
    category: 'toys',
    brand: 'Microsoft',
    price: 59.99,
    discount: 10,
    stock: 35,
    rating: 4.8,
    numReviews: 210,
    images: [
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Connectivity', value: 'Xbox Wireless & Bluetooth' },
      { name: 'Compatibility', value: 'Xbox Series X/S, Windows PC, Android, iOS' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t6',
    sku: 'LEGO-STARWARS-FALCON',
    title: 'LEGO Star Wars Ultimate Millennium Falcon Set',
    description: 'Massive 7,541-piece iconic Star Wars spaceship model kit featuring intricate interior detailing, upper and lower quad laser cannons, and minifigures.',
    category: 'toys',
    brand: 'LEGO',
    price: 849.99,
    discount: 5,
    stock: 8,
    rating: 4.9,
    numReviews: 180,
    images: [
      'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Pieces', value: '7,541 Pieces' },
      { name: 'Age', value: '16+ Collectors Edition' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t7',
    sku: 'LEGO-TECHNIC-PORSCHE',
    title: 'LEGO Technic Porsche 911 RSR Race Car Kit',
    description: 'Detailed LEGO Technic race car building model with aerodynamic bodywork, black spoked rims, working differential, independent suspension, and flat 6 engine.',
    category: 'toys',
    brand: 'LEGO',
    price: 179.99,
    discount: 10,
    stock: 20,
    rating: 4.8,
    numReviews: 130,
    images: [
      'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Pieces', value: '1,580 Pieces' },
      { name: 'Scale', value: 'Authentic 1:10 Scale Model' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t8',
    sku: 'BOARDGAME-CATAN-5TH',
    title: 'Catan Board Game 5th Edition Strategy Set',
    description: 'The premier modern board game of trade, building, and resource management where players compete to settle the island of Catan.',
    category: 'toys',
    brand: 'Catan Studio',
    price: 48.00,
    discount: 10,
    stock: 45,
    rating: 4.9,
    numReviews: 340,
    images: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Players', value: '3-4 Players (Expandable to 6)' },
      { name: 'Play Time', value: '60 Minutes' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t9',
    sku: 'BOARDGAME-TICKET-RIDE',
    title: 'Ticket to Ride Cross-Country Board Game',
    description: 'Fast-paced railway train strategy board game where players collect train cars to claim railway routes connecting cities across North America.',
    category: 'toys',
    brand: 'Days of Wonder',
    price: 49.99,
    discount: 15,
    stock: 30,
    rating: 4.9,
    numReviews: 280,
    images: [
      'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Players', value: '2-5 Players' },
      { name: 'Age', value: '8 to Adult' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t10',
    sku: 'TOY-NERF-ELITE2',
    title: 'Nerf Elite 2.0 Commander RD-6 Dart Blaster',
    description: 'Motorized dart toy blaster featuring 6-dart rotating drum, 12 official Nerf Elite foam darts, tactical rails, and stock attachment points.',
    category: 'toys',
    brand: 'Hasbro',
    price: 14.99,
    discount: 10,
    stock: 60,
    rating: 4.6,
    numReviews: 190,
    images: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Distance', value: 'Fires Darts up to 90 Feet (27m)' },
      { name: 'Includes', value: 'Blaster + 12 Official Foam Darts' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t11',
    sku: 'TOY-TAMAGOTCHI-UNI',
    title: 'Tamagotchi Uni Virtual Interactive Pet Pink',
    description: 'Next generation virtual pet toy with Wi-Fi connectivity to enter Tamaverse, raise unique characters, craft items, and customize style.',
    category: 'toys',
    brand: 'Bandai',
    price: 59.99,
    discount: 10,
    stock: 30,
    rating: 4.7,
    numReviews: 95,
    images: [
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Display', value: 'Full Color LCD Screen' },
      { name: 'Battery', value: 'Rechargeable Lipo via USB-C' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t12',
    sku: 'TOY-FUNKO-SPIDERMAN',
    title: 'Funko Pop! Marvel Spider-Man Collectible Figure',
    description: 'Vinyl bobblehead collectible figure standing 3.75 inches tall in classic red and blue suit pose in window display box.',
    category: 'toys',
    brand: 'Funko',
    price: 12.99,
    discount: 0,
    stock: 80,
    rating: 4.9,
    numReviews: 210,
    images: [
      'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Height', value: '3.75 Inches Vinyl' },
      { name: 'Franchise', value: 'Marvel Avengers' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t13',
    sku: 'TOY-DJI-MINI3',
    title: 'DJI Mini 3 Lightweight Camera Drone Toy',
    description: 'Ultralight under-249g camera drone with 4K HDR video, True Vertical Shooting, 38-minute flight time, and beginner-friendly automatic takeoff.',
    category: 'toys',
    brand: 'DJI',
    price: 469.00,
    discount: 10,
    stock: 14,
    rating: 4.9,
    numReviews: 160,
    images: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight', value: '248g (No FAA Registration Required)' },
      { name: 'Camera', value: '4K HDR 1/1.3-inch CMOS Sensor' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-t14',
    sku: 'TOY-RAZER-STREAM',
    title: 'Razer Stream Deck Controller for Gaming',
    description: 'Customizable keypad control deck featuring 15 LCD keys to trigger unlimited actions, scene switching, audio adjustment, and live streaming commands.',
    category: 'toys',
    brand: 'Razer',
    price: 149.99,
    discount: 10,
    stock: 22,
    rating: 4.8,
    numReviews: 110,
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Keys', value: '15 Customizable LCD Macro Keys' },
      { name: 'Software', value: 'Elgato Stream Deck Ecosystem' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },

  // ==================== GROCERY & GOURMET (14 Products) ====================
  {
    id: 'prod-g1',
    sku: 'GROC-GODIVA-TRUFFLES',
    title: 'Godiva Belgium Dark Chocolate Truffles Box 24-Piece',
    description: 'Handcrafted luxury gourmet dark chocolate truffles gift box filled with rich ganache, roasted hazelnut, salted caramel, and double dark chocolate.',
    category: 'grocery',
    brand: 'Godiva',
    price: 36.00,
    discount: 10,
    stock: 50,
    rating: 4.9,
    numReviews: 210,
    images: [
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Origin', value: 'Belgian Artisan Chocolatier' },
      { name: 'Piece Count', value: '24 Truffles Gift Box' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g2',
    sku: 'GROC-NESPRESSO-PODS',
    title: 'Nespresso Vertuo Roasted Espresso Pods 50-Pack',
    description: 'Variety pack of dark roasted and medium roasted Arabica coffee pods for Nespresso Vertuo machines delivering velvet crema.',
    category: 'grocery',
    brand: 'Nespresso',
    price: 52.00,
    discount: 5,
    stock: 75,
    rating: 4.9,
    numReviews: 380,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517668808822-9e428824603b?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Count', value: '50 Aluminum Capsules' },
      { name: 'Roast Level', value: 'Assorted Medium to Dark Intensity 6-11' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g3',
    sku: 'GROC-ORGANIC-HONEY',
    title: 'Organix Raw Unfiltered Wildflower Honey 32 oz',
    description: '100% pure raw unpasteurized organic wildflower honey harvested from sustainable bee apiaries retaining natural pollen and enzymes.',
    category: 'grocery',
    brand: 'Organix',
    price: 19.99,
    discount: 10,
    stock: 60,
    rating: 4.8,
    numReviews: 180,
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Type', value: '100% Pure Raw & Unfiltered' },
      { name: 'Size', value: '32 oz (2 lbs)' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g4',
    sku: 'GROC-BLUE-MOUNTAIN',
    title: 'Jamaica Blue Mountain Whole Bean Coffee 16 oz',
    description: 'World-renowned 100% Grade 1 Jamaica Blue Mountain whole bean coffee featuring exceptionally smooth flavor, floral aroma, and mild acidity.',
    category: 'grocery',
    brand: 'Blue Mountain Coffee',
    price: 59.99,
    discount: 10,
    stock: 25,
    rating: 4.9,
    numReviews: 92,
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Origin', value: 'Certified Jamaica Blue Mountain' },
      { name: 'Weight', value: '16 oz (1 lb Whole Bean)' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g5',
    sku: 'GROC-MATCHA-CEREMONIAL',
    title: 'Matcha DNA Certified Organic Ceremonial Grade 100g',
    description: 'First harvest ceremonial grade Japanese organic green tea matcha powder shade-grown in Uji Japan for vibrant green color and smooth umami taste.',
    category: 'grocery',
    brand: 'Matcha DNA',
    price: 29.99,
    discount: 10,
    stock: 45,
    rating: 4.8,
    numReviews: 165,
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Grade', value: '100% First Harvest Ceremonial Grade' },
      { name: 'Origin', value: 'Uji, Kyoto, Japan' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g6',
    sku: 'GROC-OLIVEOIL-EVOO',
    title: 'Organic Cold Pressed Extra Virgin Olive Oil 1L',
    description: 'Single-estate estate harvested cold pressed extra virgin olive oil from ancient Tuscan olive groves with peppery finish and high antioxidants.',
    category: 'grocery',
    brand: 'Tuscan Gold',
    price: 32.50,
    discount: 10,
    stock: 40,
    rating: 4.9,
    numReviews: 140,
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Acidity', value: '< 0.3% Low Acidity Extra Virgin' },
      { name: 'Volume', value: '1 Liter Dark Glass Bottle' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g7',
    sku: 'GROC-GHIRARDELLI-DARK',
    title: 'Ghirardelli 72% Cacao Intense Dark Chocolate 12 oz',
    description: 'Gourmet dark chocolate square bag crafted with slow-roasted cacao beans delivering intense cocoa notes and velvet melt.',
    category: 'grocery',
    brand: 'Ghirardelli',
    price: 14.99,
    discount: 5,
    stock: 90,
    rating: 4.8,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Cacao Content', value: '72% Intense Dark' },
      { name: 'Package', value: 'Individually Wrapped Squares' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g8',
    sku: 'GROC-KIND-BARS',
    title: 'KIND Bars Dark Chocolate Nuts & Sea Salt 12-Pack',
    description: 'Nutritious snack bars packed with whole almonds, peanuts, dark chocolate drizzled with sea salt, offering 5g sugar and 6g protein.',
    category: 'grocery',
    brand: 'KIND',
    price: 18.99,
    discount: 10,
    stock: 80,
    rating: 4.8,
    numReviews: 320,
    images: [
      'https://images.unsplash.com/photo-1622484210800-8851842182b2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Count', value: '12 Individually Wrapped Bars' },
      { name: 'Dietary', value: 'Gluten-Free, Low Sodium, Non-GMO' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g9',
    sku: 'GROC-TWININGS-EARLGREY',
    title: 'Twinings Earl Grey Black Tea Bags 100-Pack Box',
    description: 'Classic aromatic black tea blended with fragrant citrus bergamot fruit flavor notes, sourced from fine tea gardens.',
    category: 'grocery',
    brand: 'Twinings',
    price: 12.49,
    discount: 5,
    stock: 100,
    rating: 4.8,
    numReviews: 240,
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Count', value: '100 Foil Wrapped Tea Bags' },
      { name: 'Flavor', value: 'Bergamot Citrus & Fine Black Tea' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g10',
    sku: 'GROC-BISCOFF-SPREAD',
    title: 'Lotus Biscoff Caramelized Cookie Butter Spread 14oz',
    description: 'Irresistibly creamy European cookie spread made from original caramelized Biscoff biscuits, perfect for toast, baking, or fruit dip.',
    category: 'grocery',
    brand: 'Lotus',
    price: 6.99,
    discount: 0,
    stock: 95,
    rating: 4.9,
    numReviews: 410,
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight', value: '14.1 oz (400g) Glass Jar' },
      { name: 'Dietary', value: 'Vegan Friendly, No Artificial Colors' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g11',
    sku: 'GROC-SANPELL-WATER',
    title: 'San Pellegrino Sparkling Natural Mineral Water 12-Pack',
    description: 'Crisp refreshing Italian sparkling mineral water bottled at the source in San Pellegrino Terme with fine delicate carbonation bubbles.',
    category: 'grocery',
    brand: 'San Pellegrino',
    price: 22.99,
    discount: 5,
    stock: 60,
    rating: 4.8,
    numReviews: 180,
    images: [
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Pack Size', value: '12 Glass Bottles (750ml each)' },
      { name: 'Source', value: 'Italian Alps Mineral Springs' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g12',
    sku: 'GROC-KIRKLAND-ALMONDS',
    title: 'Kirkland Organic Raw Unsalted Whole Almonds 3lb',
    description: 'Heart-healthy raw organic California almonds, high in vitamin E, magnesium, and plant-based protein in resealable stay-fresh bag.',
    category: 'grocery',
    brand: 'Kirkland Signature',
    price: 16.99,
    discount: 5,
    stock: 70,
    rating: 4.8,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1622484210800-8851842182b2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight', value: '3 lbs (48 oz)' },
      { name: 'Certification', value: 'USDA Organic Certified' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g13',
    sku: 'GROC-BOBS-OATS',
    title: 'Bobs Red Mill Organic Old Fashioned Rolled Oats 32oz',
    description: 'Whole grain organic kiln-toasted rolled oats perfect for warm breakfast oatmeal bowls, overnight oats, and wholesome baking recipes.',
    category: 'grocery',
    brand: "Bob's Red Mill",
    price: 8.49,
    discount: 0,
    stock: 85,
    rating: 4.9,
    numReviews: 230,
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622484210800-8851842182b2?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Weight', value: '32 oz (2 lbs)' },
      { name: 'Dietary', value: 'Non-GMO, Whole Grain Certified' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-g14',
    sku: 'GROC-PINK-SALT',
    title: 'Pure Himalayan Pink Sea Salt Grinder Set 2-Pack',
    description: 'Coarse raw unrefined 100% Himalayan pink salt crystals in refillable glass ceramic rotor salt grinder mills for gourmet seasoning.',
    category: 'grocery',
    brand: 'GourmetSpice',
    price: 14.50,
    discount: 10,
    stock: 65,
    rating: 4.8,
    numReviews: 120,
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Minerals', value: 'Contains 84 Trace Minerals' },
      { name: 'Grinder', value: 'Adjustable Ceramic Rotor Mill' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },

  // ==================== JEWELRY & ACCESSORIES (14 Products) ====================
  {
    id: 'prod-a1',
    sku: 'WATCH-APPLE-ULTRA2',
    title: 'Apple Watch Ultra 2 Titanium Smartwatch',
    description: 'The most capable Apple Watch ever with grade-5 aerospace titanium case, dual-frequency GPS, 3000 nits display, 36-hour battery, and water resistance to 100m.',
    category: 'accessories',
    brand: 'Apple',
    price: 799.00,
    discount: 5,
    stock: 18,
    rating: 4.9,
    numReviews: 310,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Case Material', value: 'Grade-5 Titanium' },
      { name: 'Display', value: '49mm Always-On Retina 3000 Nits' },
      { name: 'Water Resistance', value: '100m EN13319 Scuba Certified' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a2',
    sku: 'GLASS-RAYBAN-AVIATOR',
    title: 'Ray-Ban Classic Aviator Polarized Sunglasses',
    description: 'Iconic gold metal frame aviator sunglasses featuring G-15 green polarized crystal glass lenses with 100% UV protection and classic tear-drop shape.',
    category: 'accessories',
    brand: 'Ray-Ban',
    price: 213.00,
    discount: 15,
    stock: 30,
    rating: 4.9,
    numReviews: 420,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Lens', value: 'G-15 Green Polarized Glass' },
      { name: 'Frame', value: 'Polished Arista Gold Metal' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a3',
    sku: 'GLASS-OAKLEY-HOLBROOK',
    title: 'Oakley Holbrook Sport Prizm Sunglasses',
    description: 'Timeless classic frame infused with modern Oakley technology including O Matter frame material, Prizm Lens Technology, and metal icon accents.',
    category: 'accessories',
    brand: 'Oakley',
    price: 173.00,
    discount: 10,
    stock: 25,
    rating: 4.8,
    numReviews: 210,
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Lens Tech', value: 'Prizm Black Polarized' },
      { name: 'Frame Material', value: 'Lightweight O Matter' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a4',
    sku: 'WALLET-RIDGE-TITANIUM',
    title: 'The Ridge RFID Blocking Metal Minimalist Wallet',
    description: 'Slim front pocket minimalist wallet constructed from grade-5 titanium plates holding up to 12 cards with integrated cash strap.',
    category: 'accessories',
    brand: 'The Ridge',
    price: 125.00,
    discount: 10,
    stock: 45,
    rating: 4.8,
    numReviews: 380,
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: 'Grade-5 Burnt Titanium' },
      { name: 'Security', value: 'RFID-Blocking Military Grade Protection' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a5',
    sku: 'WATCH-SEIKO-PRESAGE',
    title: 'Seiko Presage Cocktail Time Automatic Watch',
    description: 'Exquisite Japanese automatic mechanical dress watch featuring sunburst textured ice blue dial, stainless steel bracelet, and box-shaped crystal.',
    category: 'accessories',
    brand: 'Seiko',
    price: 425.00,
    discount: 15,
    stock: 14,
    rating: 4.9,
    numReviews: 160,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Movement', value: 'Seiko Caliber 4R35 Automatic (23 Jewels)' },
      { name: 'Dial', value: 'Ice Blue Sunburst Cocktail Pattern' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a6',
    sku: 'WATCH-CASIO-GSHOCK',
    title: 'Casio G-Shock Tough Solar Bluetooth Watch',
    description: 'Rugged shock-resistant digital analog sports watch with Tough Solar battery power, Bluetooth smartphone link, and 200m water resistance.',
    category: 'accessories',
    brand: 'Casio',
    price: 150.00,
    discount: 10,
    stock: 35,
    rating: 4.9,
    numReviews: 290,
    images: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Power', value: 'Tough Solar (Never Needs Battery Change)' },
      { name: 'Durability', value: '200m Water Resistant & Shock Resistant' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a7',
    sku: 'BAG-SAMSONITE-CARRYON',
    title: 'Samsonite Omnitech Hardside Spinner Luggage 20"',
    description: 'Lightweight polycarbonate hardside carry-on luggage with multidirectional 360-degree spinner wheels, integrated TSA lock, and scratch-resistant texture.',
    category: 'accessories',
    brand: 'Samsonite',
    price: 159.99,
    discount: 20,
    stock: 22,
    rating: 4.8,
    numReviews: 240,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Size', value: '20" Carry-On Approved' },
      { name: 'Material', value: '100% Micro-Diamond Polycarbonate' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a8',
    sku: 'BAG-MICHAELKORS-TOTE',
    title: 'Michael Kors Charlotte Large Leather Tote Handbag',
    description: 'Chic Saffiano leather shoulder tote bag featuring top zip closure, gold-tone hardware, side slip pockets, and spacious lined interior.',
    category: 'accessories',
    brand: 'Michael Kors',
    price: 228.00,
    discount: 25,
    stock: 18,
    rating: 4.8,
    numReviews: 190,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Material', value: '100% Saffiano Cowhide Leather' },
      { name: 'Hardware', value: 'Polished Gold Tone' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a9',
    sku: 'JEWEL-PANDORA-BRACELET',
    title: 'Pandora Sterling Silver Heart Clasp Snake Chain Bracelet',
    description: 'Hand-finished 925 sterling silver charm bracelet featuring cubic zirconia paved heart clasp to customize with Pandora charms.',
    category: 'accessories',
    brand: 'Pandora',
    price: 75.00,
    discount: 10,
    stock: 35,
    rating: 4.9,
    numReviews: 310,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Metal', value: '925 Sterling Silver' },
      { name: 'Clasp', value: 'Heart Shaped Pave Clasp' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a10',
    sku: 'WALLET-FOSSIL-LEATHER',
    title: 'Fossil Executive Leather Bifold Wallet',
    description: '100% genuine brown leather bifold wallet with RFID blocking lining, flip ID window, 8 credit card slots, and dual bill compartments.',
    category: 'accessories',
    brand: 'Fossil',
    price: 55.00,
    discount: 15,
    stock: 50,
    rating: 4.7,
    numReviews: 180,
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Leather', value: '100% Genuine Cowhide' },
      { name: 'Capacity', value: '8 Card Slots + Flip ID Window' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a11',
    sku: 'ACCESS-APPLE-AIRTAG4PK',
    title: 'Apple AirTag 4-Pack Location Tracking Device',
    description: 'Keep track of your keys, wallet, luggage, and backpack in the Apple Find My app with Precision Finding and built-in speaker.',
    category: 'accessories',
    brand: 'Apple',
    price: 99.00,
    discount: 10,
    stock: 60,
    rating: 4.9,
    numReviews: 610,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Quantity', value: '4 Pack AirTags' },
      { name: 'Battery', value: 'CR2032 User Replaceable (1+ Year Life)' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a12',
    sku: 'JEWEL-SILVER-PENDANT',
    title: 'Sterling Silver Solitaire Cubic Zirconia Pendant',
    description: 'Timeless 925 sterling silver solitaire necklace featuring 2-carat round brilliant cut diamond-simulant cubic zirconia on 18-inch cable chain.',
    category: 'accessories',
    brand: 'Crestfield Jewelry',
    price: 49.99,
    discount: 20,
    stock: 40,
    rating: 4.8,
    numReviews: 125,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Stone', value: '2.0ct AAA Grade Cubic Zirconia' },
      { name: 'Chain', value: '18" Sterling Silver Cable Chain with Spring Ring' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a13',
    sku: 'BAG-HERSCHEL-LITTLE',
    title: 'Herschel Little America Laptop Backpack 25L',
    description: 'Signature mountaineering style backpack with fleece-lined 15-inch laptop sleeve, magnetic strap closures, and mesh back padding.',
    category: 'accessories',
    brand: 'Herschel Supply Co.',
    price: 110.00,
    discount: 10,
    stock: 35,
    rating: 4.8,
    numReviews: 220,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Volume', value: '25 Liters' },
      { name: 'Laptop Sleeve', value: 'Padded & Fleece-Lined 15/16"' }
    ],
    availability: 'in_stock',
    isFeatured: false,
    isTopSelling: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'prod-a14',
    sku: 'AUDIO-BOSE-FRAMES',
    title: 'Bose Frames Tenor Audio Smart Sunglasses',
    description: 'Innovative audio sunglasses with open-ear Bose sound speakers built into high-gloss black polarized sunglasses frame.',
    category: 'accessories',
    brand: 'Bose',
    price: 249.00,
    discount: 15,
    stock: 16,
    rating: 4.7,
    numReviews: 95,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80'
    ],
    specifications: [
      { name: 'Audio', value: 'Open-Ear Bose OpenAudio Technology' },
      { name: 'Lenses', value: 'Polarized Shatter-Resistant Glass' }
    ],
    availability: 'in_stock',
    isFeatured: true,
    isTopSelling: false,
    createdAt: new Date().toISOString(),
  }
];
