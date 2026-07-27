import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'How long does shipping take?',
    a: 'We offer standard 2-4 business day shipping across North America and Western Europe, with expedited overnight delivery available at checkout.',
  },
  {
    q: 'What is the return policy?',
    a: 'NexusMart offers a 30-day money-back guarantee on all undamaged electronics and apparel. Return shipping labels are pre-paid.',
  },
  {
    q: 'Are the products covered by warranty?',
    a: 'Yes, all electronic hardware comes with a 2-year manufacturer warranty covering internal component defects.',
  },
  {
    q: 'How do promo codes work?',
    a: 'You can apply promo coupons directly in your shopping cart before proceeding to checkout to receive instant percentage discounts.',
  },
  {
    q: 'Can I track my order live?',
    a: 'Yes! Every order features a real-time fulfillment timeline on the Order History page with courier tracking references.',
  },
];

export const FAQPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div className="text-center space-y-2">
        <HelpCircle className="w-10 h-10 text-indigo-600 mx-auto" />
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">Frequently Asked Questions</h1>
        <p className="text-xs text-slate-500">Find answers to common questions about orders, shipping, and warranty claims</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full p-4 text-left flex justify-between items-center text-xs font-bold text-slate-900 dark:text-slate-100"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openIdx === i ? 'rotate-180 text-indigo-600' : ''}`} />
            </button>
            {openIdx === i && (
              <div className="px-4 pb-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
