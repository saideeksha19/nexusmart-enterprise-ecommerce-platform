import React, { useState } from 'react';
import { User as UserIcon, Mail, Phone, MapPin, Shield, Check, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/Toast';

export const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const { addToast } = useToast();

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [street, setStreet] = useState(user?.address?.street || '');
  const [city, setCity] = useState(user?.address?.city || '');
  const [state, setState] = useState(user?.address?.state || '');
  const [zipCode, setZipCode] = useState(user?.address?.zipCode || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const success = await updateProfile({
      name,
      phone,
      avatar,
      address: {
        street,
        city,
        state,
        zipCode,
        country: 'USA',
      },
    });

    setIsSaving(false);
    if (success) {
      addToast('success', 'Profile Updated', 'Account settings saved successfully.');
    }
  };

  if (!user) {
    return <div className="p-8 text-center text-xs text-slate-400">Please sign in to view profile.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Account Profile Settings</h1>
        <p className="text-xs text-slate-500">Manage your profile details, avatar, and default shipping addresses</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-6">
        <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-700">
          <img src={avatar || user.avatar} alt="" className="w-16 h-16 rounded-2xl object-cover border" />
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">{user.name}</h3>
            <p className="text-xs text-slate-400">{user.email} • Role: <strong className="uppercase font-mono text-indigo-600">{user.role}</strong></p>
          </div>
        </div>

        <div className="space-y-4 text-xs">
          <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Personal Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold mb-1">Avatar Image URL</label>
              <input
                type="url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
              />
            </div>
          </div>

          <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 pt-4 border-t border-slate-100 dark:border-slate-800">
            Default Shipping Address
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block font-semibold mb-1">Street Address</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">State / Zip Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
        >
          <Save className="w-4 h-4" /> {isSaving ? 'Saving Changes...' : 'Save Profile Settings'}
        </button>
      </form>
    </div>
  );
};
