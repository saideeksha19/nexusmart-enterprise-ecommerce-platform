import React from 'react';
import { ShieldCheck, Sparkles, Award, Globe, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-200">
          <Sparkles className="w-3.5 h-3.5" /> Enterprise E-Commerce Standard
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          Pioneering High-Performance Retail Engineering
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          NexusMart delivers modern technology products, premium lifestyle accessories, and automated order fulfillment to over 150,000 customers worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
          <ShieldCheck className="w-8 h-8 text-indigo-600" />
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Guaranteed Quality</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Every product in our inventory undergoes rigorous quality testing and hardware verification before listing.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
          <Award className="w-8 h-8 text-indigo-600" />
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">Global Warehousing</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Fulfillment nodes across North America, Europe, and East Asia ensure 2-day expedited shipping everywhere.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
          <Users className="w-8 h-8 text-indigo-600" />
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">24/7 Dedicated Support</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our expert product specialists respond to user technical queries and order modifications within minutes.
          </p>
        </div>
      </div>
    </div>
  );
};
