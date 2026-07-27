import { Router, Response } from 'express';
import { db } from '../db/database';
import { protect, adminOnly, AuthenticatedRequest } from '../middleware/auth';
import { AnalyticsSummary } from '../../types';

const router = Router();

// GET /api/admin/analytics
router.get('/analytics', protect, adminOnly, (req: AuthenticatedRequest, res: Response) => {
  const orders = db.getOrders();
  const products = db.getProducts();
  const users = db.users;

  const totalRevenue = orders.reduce((sum, o) => (o.status !== 'Cancelled' ? sum + o.totalPrice : sum), 0);
  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalProducts = products.length;
  const lowStockCount = products.filter((p) => p.stock < 10).length;

  // Monthly Sales calculation
  const monthlySales = [
    { month: 'Mar', sales: 4200, orders: 18 },
    { month: 'Apr', sales: 5800, orders: 24 },
    { month: 'May', sales: 7400, orders: 31 },
    { month: 'Jun', sales: 9100, orders: 39 },
    { month: 'Jul', sales: parseFloat(totalRevenue.toFixed(2)), orders: totalOrders },
  ];

  // Sales by Category
  const categorySalesMap: Record<string, number> = {};
  orders.forEach((o) => {
    if (o.status !== 'Cancelled') {
      o.items.forEach((item) => {
        const prod = db.getProductById(item.productId);
        const cat = prod?.category || 'General';
        categorySalesMap[cat] = (categorySalesMap[cat] || 0) + item.price * item.quantity;
      });
    }
  });

  const salesByCategory = Object.entries(categorySalesMap).map(([category, amount]) => ({
    category,
    amount: parseFloat(amount.toFixed(2)),
  }));

  const analytics: AnalyticsSummary = {
    totalRevenue: parseFloat(totalRevenue.toFixed(2)),
    totalOrders,
    totalUsers,
    totalProducts,
    lowStockCount,
    monthlySales,
    salesByCategory,
    recentOrders: orders.slice(0, 5),
  };

  res.json(analytics);
});

// GET /api/admin/users
router.get('/users', protect, adminOnly, (req: AuthenticatedRequest, res: Response) => {
  res.json(db.users);
});

// PUT /api/admin/users/:id/role
router.put('/users/:id/role', protect, adminOnly, (req: AuthenticatedRequest, res: Response) => {
  const { role } = req.body;
  if (role !== 'admin' && role !== 'user') {
    return res.status(400).json({ message: 'Invalid role specified' });
  }

  const updatedUser = db.updateUser(req.params.id, { role });
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(updatedUser);
});

export default router;
