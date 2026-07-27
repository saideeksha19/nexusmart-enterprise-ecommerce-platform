import { Router, Request, Response } from 'express';
import { db } from '../db/database';
import { protect, adminOnly } from '../middleware/auth';

const router = Router();

// GET /api/categories
router.get('/', (req: Request, res: Response) => {
  const categories = db.getCategories();
  res.json(categories);
});

// POST /api/categories (Admin only)
router.post('/', protect, adminOnly, (req: Request, res: Response) => {
  const { name, slug, icon, description } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Category name is required' });
  }

  const category = db.createCategory({
    name,
    slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
    icon: icon || 'Package',
    description: description || '',
  });

  res.status(201).json(category);
});

// DELETE /api/categories/:id (Admin only)
router.delete('/:id', protect, adminOnly, (req: Request, res: Response) => {
  db.deleteCategory(req.params.id);
  res.json({ message: 'Category deleted successfully' });
});

export default router;
