import React from 'react';
import { CheckCircle2, Printer, MapPin, CreditCard, ArrowRight, Truck } from 'lucide-react';
import { Order } from '../types';
import { OrderTimeline } from '../components/OrderTimeline';

interface OrderConfirmationPageProps {
  order: Order | null;
  onNavigate: (tab: string, param?: any) => void;
}

export const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({ order, onNavigate }) => {
  if (!order) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold">No Order Details Found</h2>
        <p className="text-xs text-slate-500">You haven't completed an order yet in this session.</p>
        <button
          onClick={() => onNavigate('shop')}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Confirmation Banner */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">Order Confirmed!</h1>
        <p className="text-xs text-slate-500">
          Thank you for shopping with NexusMart. Order ID: <strong className="font-mono text-slate-800 dark:text-slate-200">{order.id}</strong>
        </p>
      </div>

      {/* Shipment Tracker */}
      <OrderTimeline status={order.status} trackingNumber={order.trackingNumber} estimatedDelivery={order.estimatedDelivery} />

      {/* Shipping & Payment summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
            <MapPin className="w-4 h-4 text-indigo-600" />
            <span>Shipping Destination</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
            <p className="font-semibold text-slate-900 dark:text-slate-100">{order.shippingAddress.fullName}</p>
            <p>{order.shippingAddress.street}</p>
            <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
            <p>{order.shippingAddress.country}</p>
            <p className="text-[11px] text-slate-400 mt-1">Phone: {order.shippingAddress.phone}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
            <CreditCard className="w-4 h-4 text-indigo-600" />
            <span>Payment Summary</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-1">
            <p><span className="text-slate-400">Method:</span> <strong className="text-slate-800 dark:text-slate-200">{order.paymentMethod}</strong></p>
            <p><span className="text-slate-400">Payment Status:</span> <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">{order.paymentStatus}</span></p>
            {order.couponCode && (
              <p><span className="text-slate-400">Applied Coupon:</span> <span className="font-mono font-bold text-indigo-600">{order.couponCode}</span></p>
            )}
            <p><span className="text-slate-400">Est. Delivery:</span> {order.estimatedDelivery}</p>
          </div>
        </div>
      </div>

      {/* Itemized Receipt Box */}
      <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Order Items ({order.items.length})</h3>
          <button
            onClick={() => window.print()}
            className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 flex items-center gap-1"
          >
            <Printer className="w-3.5 h-3.5" /> Print Receipt
          </button>
        </div>

        <div className="space-y-3">
          {order.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-xs">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded-xl bg-slate-100 shrink-0 border border-slate-200/50" />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 truncate">{item.title}</h4>
                <p className="text-slate-400">Qty: {item.quantity} • ${item.price.toFixed(2)} each</p>
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100 shrink-0">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
          <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>${order.itemsPrice.toFixed(2)}</span></div>
          {order.discountAmount > 0 && (
            <div className="flex justify-between text-emerald-600 font-medium"><span>Discount</span><span>-${order.discountAmount.toFixed(2)}</span></div>
          )}
          <div className="flex justify-between text-slate-500"><span>Shipping Fee</span><span>{order.shippingPrice === 0 ? 'FREE' : `$${order.shippingPrice.toFixed(2)}`}</span></div>
          <div className="flex justify-between text-slate-500"><span>Sales Tax</span><span>${order.taxPrice.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-sm text-slate-900 dark:text-slate-100 pt-2 border-t border-slate-200 dark:border-slate-700">
            <span>Grand Total</span>
            <span className="text-indigo-600 dark:text-indigo-400">${order.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
        <button
          onClick={() => onNavigate('orders')}
          className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs hover:bg-slate-800 transition-colors"
        >
          View Order History
        </button>
        <button
          onClick={() => onNavigate('shop')}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
