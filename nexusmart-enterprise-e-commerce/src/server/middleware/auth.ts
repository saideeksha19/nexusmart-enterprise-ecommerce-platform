import { Request, Response, NextFunction } from 'express';
import { db } from '../db/database';
import { User } from '../../types';

export interface AuthenticatedRequest extends Request {
  user?: User;
}

// Simple Base64-JSON JWT simulation for demo container environment
export const generateToken = (user: User): string => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    exp: Date.now() + 7 * 24 * 3600 * 1000, // 7 days
  };
  return Buffer.from(JSON.stringify(payload)).toString('base64url');
};

export const decodeToken = (token: string): any => {
  try {
    const jsonStr = Buffer.from(token, 'base64url').toString('utf8');
    const data = JSON.parse(jsonStr);
    if (data.exp && data.exp < Date.now()) {
      return null;
    }
    return data;
  } catch (err) {
    return null;
  }
};

export const protect = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  let token: string | undefined;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  const decoded = decodeToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Not authorized, invalid or expired token' });
  }

  const user = db.findUserById(decoded.id);
  if (!user) {
    return res.status(401).json({ message: 'User no longer exists' });
  }

  req.user = user;
  next();
};

export const adminOnly = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Admin access required' });
  }
};
