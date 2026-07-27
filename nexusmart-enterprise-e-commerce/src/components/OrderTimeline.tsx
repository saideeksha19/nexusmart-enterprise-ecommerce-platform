import React from 'react';
import { CheckCircle2, Clock, Package, Truck, Home, XCircle } from 'lucide-react';
import { OrderStatus } from '../types';

interface OrderTimelineProps {
  status: OrderStatus;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

const steps: { key: OrderStatus; label: string; icon: React.FC<{ className?: string }> }[] = [
  { key: 'Pending', label: 'Order Placed', icon: Clock },
  { key: 'Confirmed', label: 'Payment Confirmed', icon: CheckCircle2 },
  { key: 'Packed', label: 'Packed & Ready', icon: Package },
  { key: 'Shipped', label: 'In Transit', icon: Truck },
  { key: 'Delivered', label: 'Delivered', icon: Home },
];

export const OrderTimeline: React.FC<OrderTimelineProps> = ({ status, trackingNumber, estimatedDelivery }) => {
  if (status === 'Cancelled') {
    return (
      <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 flex items-center gap-3">
        <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
        <div>
          <h4 className="font-semibold text-sm">Order Cancelled</h4>
          <p className="text-xs text-rose-600 dark:text-rose-300">
            This order has been cancelled and any paid amounts refunded.
          </p>
        </div>
      </div>
    );
  }

  const currentStepIndex = steps.findIndex((s) => s.key === status);

  return (
    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        {trackingNumber && (
          <div>
            <span className="text-slate-500 dark:text-slate-400">Tracking Code: </span>
            <span className="font-mono font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
              {trackingNumber}
            </span>
          </div>
        )}
        {estimatedDelivery && (
          <div>
            <span className="text-slate-500 dark:text-slate-400">Est. Delivery: </span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{estimatedDelivery}</span>
          </div>
        )}
      </div>

      {/* Progress Line */}
      <div className="relative pt-2 pb-1">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 rounded-full z-0" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-indigo-600 dark:bg-indigo-500 -translate-y-1/2 rounded-full z-0 transition-all duration-500"
          style={{
            width: `${Math.max(0, (currentStepIndex / (steps.length - 1)) * 100)}%`,
          }}
        />

        <div className="relative z-10 flex justify-between">
          {steps.map((step, idx) => {
            const isCompleted = idx <= currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            const IconComponent = step.icon;

            return (
              <div key={step.key} className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-950 scale-110'
                      : isCompleted
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-400 border-2 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span
                  className={`text-[11px] font-medium mt-2 text-center max-w-[70px] ${
                    isCompleted
                      ? 'text-slate-900 dark:text-slate-100 font-bold'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
