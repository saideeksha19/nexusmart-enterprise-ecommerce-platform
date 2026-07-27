import React, { useState, useEffect } from 'react';
import { Package, Clock, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import { Order } from '../types';
import { OrderTimeline } from '../components/OrderTimeline';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/ui/Toast';

interface OrderHistoryPageProps {
  onNavigate: (tab: string, param?: any) => void;
}

export const OrderHistoryPage: React.FC<OrderHistoryPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('nexusmart_token');
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/orders/my-orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setOrders(await res.json());
      }
    } catch (err) {
      console.error('Failed to load orders', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    const token = localStorage.getItem('nexusmart_token');
    try {
      const res = await fetch(`/api/orders/${orderId}/cancel`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to cancel order');
      }

      addToast('info', 'Order Cancelled', `Order #${orderId} has been cancelled.`);
      fetchOrders();
    } catch (err: any) {
      addToast('error', 'Error', err.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Order History</h1>
        <p className="text-xs text-slate-500">Track fulfillment stages, view receipts, and re-order products</p>
      </div>

      {isLoading ? (
        <div className="p-8 text-center text-xs text-slate-400">Loading order history...</div>
      ) : orders.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
          <Package className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">No Orders Placed Yet</h3>
          <p className="text-xs text-slate-500">Start shopping our latest tech and lifestyle catalog!</p>
          <button
            onClick={() => onNavigate('shop')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-xs p-6 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    Order #{order.id}
                  </span>
                  <p className="text-[10px] text-slate-400">Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                    ${order.totalPrice.toFixed(2)}
                  </span>
                  {(order.status === 'Pending' || order.status === 'Confirmed') && (
                    <button
                      onClick={() => handleCancelOrder(order.id)}
                      className="px-3 py-1 rounded-lg border border-rose-200 text-rose-600 text-[11px] font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/40"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>

              {/* Status Timeline Bar */}
              <OrderTimeline status={order.status} trackingNumber={order.trackingNumber} estimatedDelivery={order.estimatedDelivery} />

              {/* Items List */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800 pt-2">
                {order.items.map((item, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt="" className="w-10 h-10 object-cover rounded-lg bg-slate-100" />
                      <div>
                        <h5 className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</h5>
                        <p className="text-[10px] text-slate-400">Qty: {item.quantity} • ${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
