import { Router, Response } from 'express';
import { db } from '../db/database';
import { protect, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

// GET /api/reviews/product/:productId
router.get('/product/:productId', (req, res) => {
  const reviews = db.getReviewsByProductId(req.params.productId);
  res.json(reviews);
});

// POST /api/reviews
router.post('/', protect, (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) return res.status(401).json({ message: 'Not authenticated' });

  const { productId, rating, title, comment } = req.body;

  if (!productId || !rating || !title || !comment) {
    return res.status(400).json({ message: 'All fields (productId, rating, title, comment) are required' });
  }

  const review = db.addReview({
    productId,
    userId: req.user.id,
    userName: req.user.name,
    userAvatar: req.user.avatar,
    rating: parseInt(rating),
    title,
    comment,
  });

  res.status(201).json(review);
});

export default router;
