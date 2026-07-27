import { Router, Response } from 'express';
import { db } from '../db/database';
import { protect, adminOnly, decodeToken, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

// POST /api/orders (Create order for logged-in or guest user)
router.post('/', (req: AuthenticatedRequest, res: Response) => {
  let userId = 'u-user-1';

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = decodeToken(token);
    if (decoded && decoded.id) {
      userId = decoded.id;
    }
  }

  const { items, shippingAddress, billingAddress, paymentMethod, couponCode } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'No items in order' });
  }

  if (!shippingAddress || !shippingAddress.fullName || !shippingAddress.street || !shippingAddress.city) {
    return res.status(400).json({ message: 'Invalid shipping address. Full Name, Street, and City are required.' });
  }

  // Calculate pricing
  let itemsPrice = 0;
  items.forEach((item: any) => {
    itemsPrice += item.price * item.quantity;
  });

  let discountAmount = 0;
  if (couponCode) {
    const coupon = db.getCouponByCode(couponCode);
    if (coupon) {
      if (coupon.discountPercent) {
        discountAmount = (itemsPrice * coupon.discountPercent) / 100;
      } else if (coupon.fixedDiscount) {
        discountAmount = coupon.fixedDiscount;
      }
    }
  }

  const shippingPrice = itemsPrice > 150 ? 0 : 15;
  const taxPrice = parseFloat(((itemsPrice - discountAmount) * 0.08).toFixed(2));
  const totalPrice = parseFloat((itemsPrice - discountAmount + shippingPrice + taxPrice).toFixed(2));

  const newOrder = db.createOrder({
    userId,
    items,
    shippingAddress,
    billingAddress: billingAddress || shippingAddress,
    paymentMethod: paymentMethod || 'Credit Card',
    paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
    itemsPrice,
    shippingPrice,
    taxPrice,
    discountAmount,
    totalPrice,
    couponCode,
    status: 'Pending',
    trackingNumber: `NX-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-US`,
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 3600 * 1000).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  });

  res.status(201).json(newOrder);
});

// GET /api/orders/my-orders (Get user's or default orders)
router.get('/my-orders', (req: AuthenticatedRequest, res: Response) => {
  let userId = 'u-user-1';

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = decodeToken(token);
    if (decoded && decoded.id) {
      userId = decoded.id;
    }
  }

  const userOrders = db.getOrdersByUserId(userId);
  res.json(userOrders);
});

// GET /api/orders/:id (Get order details)
router.get('/:id', protect, (req: AuthenticatedRequest, res: Response) => {
  const order = db.getOrderById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  // Ensure user can only view their own order unless admin
  if (req.user?.role !== 'admin' && order.userId !== req.user?.id) {
    return res.status(403).json({ message: 'Not authorized to view this order' });
  }

  res.json(order);
});

// GET /api/orders (Admin list all orders)
router.get('/', protect, adminOnly, (req: AuthenticatedRequest, res: Response) => {
  const allOrders = db.getOrders();
  res.json(allOrders);
});

// PUT /api/orders/:id/status (Admin update order status)
router.put('/:id/status', protect, adminOnly, (req: AuthenticatedRequest, res: Response) => {
  const { status, trackingNumber } = req.body;
  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  const updatedOrder = db.updateOrderStatus(req.params.id, status, trackingNumber);
  if (!updatedOrder) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.json(updatedOrder);
});

// PUT /api/orders/:id/cancel (User or Admin cancel order)
router.put('/:id/cancel', protect, (req: AuthenticatedRequest, res: Response) => {
  const order = db.getOrderById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  if (req.user?.role !== 'admin' && order.userId !== req.user?.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  if (order.status === 'Delivered' || order.status === 'Shipped') {
    return res.status(400).json({ message: 'Cannot cancel shipped or delivered orders' });
  }

  const updatedOrder = db.updateOrderStatus(req.params.id, 'Cancelled');
  res.json(updatedOrder);
});

export default router;
