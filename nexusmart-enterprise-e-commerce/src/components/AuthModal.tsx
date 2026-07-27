import React, { useState } from 'react';
import { X, Mail, Lock, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from './ui/Toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { login, register } = useAuth();
  const { addToast } = useToast();

  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('admin@nexusmart.com');
  const [password, setPassword] = useState('admin123');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let success = false;
    if (isRegistering) {
      success = await register(name, email, password);
    } else {
      success = await login(email, password);
    }

    setIsSubmitting(false);

    if (success) {
      addToast(
        'success',
        isRegistering ? 'Account Created' : 'Welcome Back!',
        `Signed in successfully.`
      );
      onClose();
    } else {
      addToast('error', 'Authentication Failed', 'Invalid credentials or connection error.');
    }
  };

  const fillQuickUser = (role: 'admin' | 'user') => {
    if (role === 'admin') {
      setEmail('admin@nexusmart.com');
      setPassword('admin123');
    } else {
      setEmail('alex@nexusmart.com');
      setPassword('user123');
    }
    setIsRegistering(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-slate-100">
              {isRegistering ? 'Create NexusMart Account' : 'Sign In to NexusMart'}
            </h3>
            <p className="text-xs text-slate-400">Access orders, wishlist & admin panel</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Quick Fills */}
        {!isRegistering && (
          <div className="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800 text-xs space-y-2">
            <span className="font-bold text-indigo-900 dark:text-indigo-300 block">⚡ Demo One-Click Sign In:</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => fillQuickUser('admin')}
                className="px-2.5 py-1 rounded-lg bg-amber-500 text-white font-bold text-[10px] flex items-center gap-1 shadow-xs"
              >
                <ShieldCheck className="w-3 h-3" /> Admin Account
              </button>
              <button
                type="button"
                onClick={() => fillQuickUser('user')}
                className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-[10px] shadow-xs"
              >
                Customer Account
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {isRegistering && (
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                required
                placeholder="alex@nexusmart.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
          >
            {isSubmitting ? 'Authenticating...' : isRegistering ? 'Create Account' : 'Sign In'} <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2 text-xs text-slate-500">
          {isRegistering ? 'Already registered?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {isRegistering ? 'Sign In' : 'Create One Now'}
          </button>
        </div>
      </div>
    </div>
  );
};
