import { Router, Request, Response } from 'express';
import { db } from '../db/database';
import { protect, adminOnly } from '../middleware/auth';

const router = Router();

// GET /api/coupons (Admin list all)
router.get('/', protect, adminOnly, (req: Request, res: Response) => {
  res.json(db.getCoupons());
});

// POST /api/coupons/validate
router.post('/validate', (req: Request, res: Response) => {
  const { code, cartSubtotal } = req.body;
  if (!code) {
    return res.status(400).json({ message: 'Coupon code is required' });
  }

  const coupon = db.getCouponByCode(code);
  if (!coupon) {
    return res.status(404).json({ message: 'Invalid or expired promo code' });
  }

  if (coupon.minSpend && cartSubtotal < coupon.minSpend) {
    return res.status(400).json({
      message: `Minimum subtotal of $${coupon.minSpend} required for coupon ${coupon.code}`,
    });
  }

  res.json({
    valid: true,
    coupon,
  });
});

// POST /api/coupons (Admin create coupon)
router.post('/', protect, adminOnly, (req: Request, res: Response) => {
  const { code, discountPercent, fixedDiscount, minSpend } = req.body;
  if (!code) {
    return res.status(400).json({ message: 'Coupon code is required' });
  }

  const newCoupon = db.createCoupon({
    code: code.toUpperCase(),
    discountPercent: discountPercent ? parseFloat(discountPercent) : undefined,
    fixedDiscount: fixedDiscount ? parseFloat(fixedDiscount) : undefined,
    minSpend: minSpend ? parseFloat(minSpend) : 0,
    isActive: true,
  });

  res.status(201).json(newCoupon);
});

export default router;
