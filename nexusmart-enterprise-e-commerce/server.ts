import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';

import authRoutes from './src/server/routes/authRoutes';
import productRoutes from './src/server/routes/productRoutes';
import orderRoutes from './src/server/routes/orderRoutes';
import categoryRoutes from './src/server/routes/categoryRoutes';
import couponRoutes from './src/server/routes/couponRoutes';
import reviewRoutes from './src/server/routes/reviewRoutes';
import adminRoutes from './src/server/routes/adminRoutes';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // API Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/categories', categoryRoutes);
  app.use('/api/coupons', couponRoutes);
  app.use('/api/reviews', reviewRoutes);
  app.use('/api/admin', adminRoutes);

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'NexusMart E-Commerce Platform API',
      timestamp: new Date().toISOString(),
    });
  });

  // Vite Dev server or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NexusMart Enterprise E-Commerce Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
