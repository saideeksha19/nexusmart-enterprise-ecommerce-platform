import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  Plus,
  Edit2,
  Trash2,
  ShieldCheck,
  Tag,
  CheckCircle2,
  AlertTriangle,
  RefreshCcw,
} from 'lucide-react';
import { AnalyticsSummary, Product, Order, User, Coupon } from '../types';
import { ProductFormModal } from '../components/Admin/ProductFormModal';
import { OrderStatusModal } from '../components/Admin/OrderStatusModal';
import { useToast } from '../components/ui/Toast';

export const AdminDashboardPage: React.FC = () => {
  const { addToast } = useToast();
  const token = localStorage.getItem('nexusmart_token') || '';

  const [activeTab, setActiveTab] = useState<'analytics' | 'products' | 'orders' | 'users' | 'coupons'>('analytics');
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  // Modals
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [isOrderStatusModalOpen, setIsOrderStatusModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  // New Coupon Form
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newDiscountPercent, setNewDiscountPercent] = useState('15');

  useEffect(() => {
    fetchDashboardData();
  }, [activeTab]);

  const fetchDashboardData = async () => {
    try {
      if (activeTab === 'analytics') {
        const res = await fetch('/api/admin/analytics', { headers: { Authorization: `Bearer ${token}` } });
        if (res.ok) setAnalytics(await res.json());
      } else if (activeTab === 'products') {
        const res = await fetch('/api/products?limit=100');
        if (res.ok) {
          const data = await res.json();
          setProducts(data.products || []);
        }
      } else if (activeTab === 'orders') {
        const res = await fetch('/api/orders', { headers: { Authorization: `Bearer ${token}` } });
        if (res.ok) setOrders(await res.json());
      } else if (activeTab === 'users') {
        const res = await fetch('/api/admin/users', { headers: { Authorization: `Bearer ${token}` } });
        if (res.ok) setUsers(await res.json());
      } else if (activeTab === 'coupons') {
        const res = await fetch('/api/coupons', { headers: { Authorization: `Bearer ${token}` } });
        if (res.ok) setCoupons(await res.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        addToast('success', 'Product Deleted');
        fetchDashboardData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleUserRole = async (userId: string, currentRole: string) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    try {
      const res = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: newRole }),
      });
      if (res.ok) {
        addToast('success', 'Role Updated', `User role switched to ${newRole}`);
        fetchDashboardData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode.trim()) return;

    try {
      const res = await fetch('/api/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          code: newCouponCode,
          discountPercent: parseFloat(newDiscountPercent),
        }),
      });

      if (res.ok) {
        addToast('success', 'Coupon Created', `Promo code ${newCouponCode} active.`);
        setNewCouponCode('');
        fetchDashboardData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500 text-white font-bold text-xs flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Admin Control Suite
            </span>
            <span className="text-xs text-slate-400 font-mono">v2.4 Enterprise</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">Store Dashboard & Analytics</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
              activeTab === 'analytics' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs font-bold' : 'text-slate-500'
            }`}
          >
            Analytics & KPIs
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
              activeTab === 'products' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs font-bold' : 'text-slate-500'
            }`}
          >
            Products Catalog
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
              activeTab === 'orders' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs font-bold' : 'text-slate-500'
            }`}
          >
            Orders & Shipping
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
              activeTab === 'users' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs font-bold' : 'text-slate-500'
            }`}
          >
            User Accounts
          </button>
          <button
            onClick={() => setActiveTab('coupons')}
            className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
              activeTab === 'coupons' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs font-bold' : 'text-slate-500'
            }`}
          >
            Coupons
          </button>
        </div>
      </div>

      {/* Analytics Tab */}
      {activeTab === 'analytics' && analytics && (
        <div className="space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <span className="text-xs text-slate-400 font-semibold">Total Revenue</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100">${analytics.totalRevenue.toFixed(2)}</p>
              <span className="text-[10px] text-emerald-600 font-bold">+18.4% from last month</span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <span className="text-xs text-slate-400 font-semibold">Total Orders</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100">{analytics.totalOrders}</p>
              <span className="text-[10px] text-indigo-600 font-bold">100% fulfilled</span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <span className="text-xs text-slate-400 font-semibold">Active Customers</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100">{analytics.totalUsers}</p>
              <span className="text-[10px] text-emerald-600 font-bold">Verified profiles</span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <span className="text-xs text-slate-400 font-semibold">Catalog Items</span>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100">{analytics.totalProducts}</p>
              <span className="text-[10px] text-indigo-600 font-bold">5 categories</span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <span className="text-xs text-slate-400 font-semibold">Low Stock Alerts</span>
              <p className="text-2xl font-black text-rose-600">{analytics.lowStockCount}</p>
              <span className="text-[10px] text-rose-500 font-bold">Needs restock</span>
            </div>
          </div>

          {/* SVG Sales Bar Chart Visualizer */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Monthly Revenue Projection ($)</h3>
            <div className="h-48 flex items-end justify-between gap-4 pt-8 px-4 border-b border-slate-100 dark:border-slate-700">
              {analytics.monthlySales.map((m) => {
                const heightPct = Math.min(100, (m.sales / 10000) * 100);
                return (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">${m.sales}</span>
                    <div
                      className="w-full max-w-[40px] bg-gradient-to-t from-indigo-600 to-violet-500 rounded-t-lg transition-all"
                      style={{ height: `${heightPct}%` }}
                    />
                    <span className="text-xs font-semibold text-slate-400">{m.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Inventory Items ({products.length})</h3>
            <button
              onClick={() => {
                setEditingProduct(null);
                setIsProductModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
            >
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 text-slate-400 uppercase tracking-wider font-bold border-b border-slate-100 dark:border-slate-800">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td className="p-4 flex items-center gap-3">
                      <img src={p.images[0]} alt="" className="w-10 h-10 object-cover rounded-lg bg-slate-100" />
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100">{p.title}</h4>
                        <span className="text-[10px] text-slate-400">{p.brand}</span>
                      </div>
                    </td>
                    <td className="p-4 uppercase font-semibold text-slate-500">{p.category}</td>
                    <td className="p-4 font-bold">${p.price}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${p.stock > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                        {p.stock} units
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingProduct(p);
                            setIsProductModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-indigo-600 hover:bg-indigo-50"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDeleteProduct(p.id)} className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Customer Orders ({orders.length})</h3>
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 text-slate-400 uppercase tracking-wider font-bold border-b border-slate-100 dark:border-slate-800">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Fulfillment Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td className="p-4 font-mono font-bold text-indigo-600">{o.id}</td>
                    <td className="p-4">{o.shippingAddress.fullName}</td>
                    <td className="p-4 font-bold">${o.totalPrice.toFixed(2)}</td>
                    <td className="p-4 font-bold text-slate-700">{o.status}</td>
                    <td className="p-4">
                      <button
                        onClick={() => {
                          setEditingOrder(o);
                          setIsOrderStatusModalOpen(true);
                        }}
                        className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-semibold text-[11px]"
                      >
                        Update Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Registered Accounts ({users.length})</h3>
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 text-slate-400 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-4">User</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Role Toggle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {users.map((u) => (
                  <tr key={u.id}>
                    <td className="p-4 font-bold flex items-center gap-2">
                      <img src={u.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                      {u.name}
                    </td>
                    <td className="p-4">{u.email}</td>
                    <td className="p-4 uppercase font-mono font-bold text-indigo-600">{u.role}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleToggleUserRole(u.id, u.role)}
                        className="px-3 py-1 rounded-lg border border-slate-200 text-[11px] font-semibold"
                      >
                        Toggle {u.role === 'admin' ? 'User' : 'Admin'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Coupons Tab */}
      {activeTab === 'coupons' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-4 max-w-md">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Create Promo Code</h3>
            <form onSubmit={handleCreateCoupon} className="space-y-3 text-xs">
              <input
                type="text"
                placeholder="Promo Code (e.g. SUMMER25)"
                required
                value={newCouponCode}
                onChange={(e) => setNewCouponCode(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 uppercase font-mono"
              />
              <input
                type="number"
                placeholder="Discount %"
                required
                value={newDiscountPercent}
                onChange={(e) => setNewDiscountPercent(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200"
              />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs">
                Create Promo Coupon
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-4 space-y-2">
            <h4 className="font-bold text-xs">Active Coupons</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {coupons.map((c, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs">
                  <p className="font-mono font-bold text-indigo-600">{c.code}</p>
                  <p className="text-slate-400 text-[10px]">{c.discountPercent}% OFF</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product Form Modal */}
      <ProductFormModal
        product={editingProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onSave={() => fetchDashboardData()}
        token={token}
      />

      {/* Order Status Modal */}
      <OrderStatusModal
        order={editingOrder}
        isOpen={isOrderStatusModalOpen}
        onClose={() => setIsOrderStatusModalOpen(false)}
        onSave={() => fetchDashboardData()}
        token={token}
      />
    </div>
  );
};
