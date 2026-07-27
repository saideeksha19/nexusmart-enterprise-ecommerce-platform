import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export const ContactPage: React.FC = () => {
  const { addToast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('success', 'Message Sent', 'Our support team will contact you within 2 hours.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">Contact Customer Care</h1>
        <p className="text-xs text-slate-500">Have questions regarding product warranties or enterprise bulk orders?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
            <Mail className="w-5 h-5 text-indigo-600" />
            <div>
              <p className="font-bold">Email Support</p>
              <p className="text-slate-400">support@nexusmart.com</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
            <Phone className="w-5 h-5 text-indigo-600" />
            <div>
              <p className="font-bold">Phone Hotline</p>
              <p className="text-slate-400">+1 (800) 555-NEXUS</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <div>
              <p className="font-bold">Headquarters</p>
              <p className="text-slate-400">700 Tech Plaza, Seattle WA</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-base">Thank you for getting in touch!</h3>
              <p className="text-xs text-slate-400">Ticket #NX-8821 has been logged to our CRM system.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold mb-1">Your Name</label>
                <input required type="text" placeholder="Alex Rivera" className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900" />
              </div>

              <div>
                <label className="block font-semibold mb-1">Email Address</label>
                <input required type="email" placeholder="alex@nexusmart.com" className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900" />
              </div>

              <div>
                <label className="block font-semibold mb-1">Message</label>
                <textarea required rows={4} placeholder="Describe your inquiry..." className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900" />
              </div>

              <button type="submit" className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
