import { Router, Request, Response } from 'express';
import { db } from '../db/database';
import { protect, adminOnly } from '../middleware/auth';
import { Product } from '../../types';

const router = Router();

// GET /api/products (List with search, filters, sorting, pagination)
router.get('/', (req: Request, res: Response) => {
  let products = [...db.getProducts()];

  const search = (req.query.search as string) || '';
  const category = (req.query.category as string) || '';
  const brand = (req.query.brand as string) || '';
  const minPrice = parseFloat(req.query.minPrice as string) || 0;
  const maxPrice = parseFloat(req.query.maxPrice as string) || 10000;
  const minRating = parseFloat(req.query.minRating as string) || 0;
  const inStockOnly = req.query.inStockOnly === 'true';
  const sortBy = (req.query.sortBy as string) || 'featured';
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 12;

  // Search Filter
  if (search.trim()) {
    const q = search.toLowerCase().trim();
    const allCategories = db.getCategories();
    const tokens = q.split(/\s+/).filter(Boolean);

    products = products.filter((p) => {
      const catObj = allCategories.find((c) => c.slug.toLowerCase() === p.category.toLowerCase());
      const catName = catObj ? catObj.name.toLowerCase() : '';
      const specsText = p.specifications && Array.isArray(p.specifications)
        ? p.specifications.map((s) => `${s.name} ${s.value}`).join(' ').toLowerCase()
        : '';
      
      const searchableText = `${p.title} ${p.brand} ${p.category} ${catName} ${p.description} ${p.sku || ''} ${p.id} ${specsText}`.toLowerCase();

      // Match full exact search string OR ensure all whitespace-separated tokens are matched
      return searchableText.includes(q) || (tokens.length > 0 && tokens.every((token) => searchableText.includes(token)));
    });
  }

  // Category Filter
  if (category && category !== 'all') {
    const normReqCat = category.toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '-');
    products = products.filter((p) => {
      const pCat = p.category.toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '-');
      if (pCat === normReqCat) return true;
      // Alias match for Home category variants (home-kitchen, home-living, home)
      const isHomeReq = normReqCat.includes('home');
      const isHomeProd = pCat.includes('home');
      if (isHomeReq && isHomeProd) return true;
      return false;
    });
  }

  // Brand Filter
  if (brand && brand !== 'all') {
    products = products.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
  }

  // Price Filter
  products = products.filter((p) => {
    const discountedPrice = p.price * (1 - p.discount / 100);
    return discountedPrice >= minPrice && discountedPrice <= maxPrice;
  });

  // Rating Filter
  if (minRating > 0) {
    products = products.filter((p) => p.rating >= minRating);
  }

  // In Stock Only
  if (inStockOnly) {
    products = products.filter((p) => p.stock > 0 && p.availability === 'in_stock');
  }

  // Sorting
  switch (sortBy) {
    case 'price-low':
      products.sort((a, b) => a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100));
      break;
    case 'price-high':
      products.sort((a, b) => b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100));
      break;
    case 'newest':
      products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
    case 'featured':
    default:
      products.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      break;
  }

  // Pagination
  const total = products.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const paginated = products.slice(startIndex, startIndex + limit);

  // Available brands list
  const brands = Array.from(new Set(db.getProducts().map((p) => p.brand)));

  res.json({
    products: paginated,
    total,
    page,
    totalPages,
    brands,
  });
});

// GET /api/products/featured
router.get('/featured', (req: Request, res: Response) => {
  const featured = db.getProducts().filter((p) => p.isFeatured);
  res.json(featured);
});

// GET /api/products/top-selling
router.get('/top-selling', (req: Request, res: Response) => {
  const topSelling = db.getProducts().filter((p) => p.isTopSelling);
  res.json(topSelling);
});

// GET /api/products/:id
router.get('/:id', (req: Request, res: Response) => {
  const product = db.getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const reviews = db.getReviewsByProductId(req.params.id);
  const related = db
    .getProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  res.json({
    product,
    reviews,
    relatedProducts: related,
  });
});

// POST /api/products (Admin only)
router.post('/', protect, adminOnly, (req: Request, res: Response) => {
  const { title, description, category, brand, price, discount, stock, images, specifications } = req.body;

  if (!title || !description || !category || !price) {
    return res.status(400).json({ message: 'Title, description, category, and price are required' });
  }

  const newProduct = db.createProduct({
    title,
    description,
    category,
    brand: brand || 'Generic',
    price: parseFloat(price),
    discount: parseFloat(discount || 0),
    stock: parseInt(stock || 10),
    rating: 5.0,
    numReviews: 0,
    images: Array.isArray(images) && images.length > 0 ? images : ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'],
    specifications: specifications || [],
    availability: parseInt(stock) > 0 ? 'in_stock' : 'out_of_stock',
    isFeatured: req.body.isFeatured || false,
    isTopSelling: req.body.isTopSelling || false,
  });

  res.status(201).json(newProduct);
});

// PUT /api/products/:id (Admin only)
router.put('/:id', protect, adminOnly, (req: Request, res: Response) => {
  const updated = db.updateProduct(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(updated);
});

// DELETE /api/products/:id (Admin only)
router.delete('/:id', protect, adminOnly, (req: Request, res: Response) => {
  const success = db.deleteProduct(req.params.id);
  if (!success) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product deleted successfully' });
});

export default router;
