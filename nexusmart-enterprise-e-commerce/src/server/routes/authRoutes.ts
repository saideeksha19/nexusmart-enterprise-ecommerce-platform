import { Router, Response } from 'express';
import { db } from '../db/database';
import { generateToken, protect, AuthenticatedRequest } from '../middleware/auth';

const router = Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password, phone, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }

  const existingUser = db.findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  const newUser = db.createUser({
    name,
    email,
    role: role === 'admin' ? 'admin' : 'user',
    phone: phone || '',
    avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'USA',
    },
  });

  const token = generateToken(newUser);

  res.status(201).json({
    user: newUser,
    token,
  });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  const user = db.findUserByEmail(email);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Demo shortcut or check password length
  if (password.length < 3) {
    return res.status(401).json({ message: 'Password must be at least 3 characters' });
  }

  const token = generateToken(user);

  res.json({
    user,
    token,
  });
});

// GET /api/auth/me
router.get('/me', protect, (req: AuthenticatedRequest, res: Response) => {
  res.json({ user: req.user });
});

// PUT /api/auth/profile
router.put('/profile', protect, (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) return res.status(401).json({ message: 'Not authenticated' });

  const { name, phone, avatar, address } = req.body;

  const updated = db.updateUser(req.user.id, {
    ...(name && { name }),
    ...(phone !== undefined && { phone }),
    ...(avatar && { avatar }),
    ...(address && { address: { ...req.user.address, ...address } }),
  });

  res.json({ user: updated });
});

export default router;
