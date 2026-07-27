import React, { useState } from 'react';
import {
  FileText,
  Layers,
  Database,
  Code2,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Server,
  Cpu,
  Globe,
} from 'lucide-react';

export const DocumentationPage: React.FC = () => {
  const [docTab, setDocTab] = useState<'prd' | 'architecture' | 'database' | 'api' | 'deployment'>('prd');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-200 mb-2">
          <Code2 className="w-3.5 h-3.5" /> Enterprise Software Architecture
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          NexusMart System Documentation
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Complete Product Requirement Document, Database Schemas, REST API Contracts, and Deployment Specifications.
        </p>

        {/* Tab switcher */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold mt-6 overflow-x-auto">
          <button
            onClick={() => setDocTab('prd')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 shrink-0 ${
              docTab === 'prd' ? 'bg-white dark:bg-slate-900 text-indigo-600 font-bold shadow-xs' : 'text-slate-500'
            }`}
          >
            <FileText className="w-4 h-4" /> System PRD
          </button>
          <button
            onClick={() => setDocTab('architecture')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 shrink-0 ${
              docTab === 'architecture' ? 'bg-white dark:bg-slate-900 text-indigo-600 font-bold shadow-xs' : 'text-slate-500'
            }`}
          >
            <Layers className="w-4 h-4" /> Technical Architecture
          </button>
          <button
            onClick={() => setDocTab('database')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 shrink-0 ${
              docTab === 'database' ? 'bg-white dark:bg-slate-900 text-indigo-600 font-bold shadow-xs' : 'text-slate-500'
            }`}
          >
            <Database className="w-4 h-4" /> MongoDB Database Schema
          </button>
          <button
            onClick={() => setDocTab('api')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 shrink-0 ${
              docTab === 'api' ? 'bg-white dark:bg-slate-900 text-indigo-600 font-bold shadow-xs' : 'text-slate-500'
            }`}
          >
            <Server className="w-4 h-4" /> REST API Docs
          </button>
          <button
            onClick={() => setDocTab('deployment')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 shrink-0 ${
              docTab === 'deployment' ? 'bg-white dark:bg-slate-900 text-indigo-600 font-bold shadow-xs' : 'text-slate-500'
            }`}
          >
            <Terminal className="w-4 h-4" /> Deployment Guide
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-6 text-xs text-slate-700 dark:text-slate-300">
        {docTab === 'prd' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">1. Product Requirement Document (PRD)</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong>NexusMart</strong> is designed as a high-performance, enterprise-grade e-commerce application serving consumer technology, apparel, and lifestyle sectors. It bridges customer shopping flows with an administrative management platform.
              </p>

              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 pt-2">Key Functional Requirements:</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Role-Based Authentication:</strong> Secure JWT-authenticated accounts for customers and store administrators with role protection middleware.</li>
                <li><strong>Dynamic Product Catalog:</strong> Advanced multi-facet filtering (categories, brands, price range slider, star rating minimums, stock availability) and sorting options.</li>
                <li><strong>Persistent Cart & Wishlist:</strong> Session-resilient client-side storage with coupon code verification.</li>
                <li><strong>Order Timeline Tracker:</strong> Real-time visual progress monitoring (`Pending` → `Confirmed` → `Packed` → `Shipped` → `Delivered`).</li>
                <li><strong>Admin Analytics Control Suite:</strong> Live KPI metrics, product inventory manager, order fulfillment status updater, and coupon creator.</li>
              </ul>
            </div>
          </div>
        )}

        {docTab === 'architecture' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">2. Technical Architecture</h2>
            <p className="leading-relaxed">
              NexusMart uses a decoupled full-stack architecture running inside a Cloud Run containerized Node environment on Port 3000.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] space-y-2 overflow-x-auto">
              <p className="text-indigo-400 font-bold">// System Directory Map</p>
              <pre>{`src/
├── components/          # Reusable UI Controls
│   ├── Admin/           # Admin modals & forms
│   ├── ui/              # Toast & Notification System
│   ├── Navbar.tsx       # Primary Header
│   ├── ProductCard.tsx  # Interactive product view
│   └── OrderTimeline.tsx# Tracking timeline component
├── context/             # Global Application State
│   ├── AuthContext.tsx  # User Session & JWT handler
│   ├── CartContext.tsx  # Cart, Wishlist & Coupons
│   └── ThemeContext.tsx # Dark/Light theme state
├── pages/               # Application Route Views
│   ├── HomePage.tsx
│   ├── ShopPage.tsx
│   ├── ProductDetailPage.tsx
│   └── AdminDashboardPage.tsx
├── server/              # Express Backend Engine
│   ├── db/              # In-Memory & Mongoose Schemas
│   ├── middleware/      # JWT Authentication & Roles
│   └── routes/          # RESTful Endpoints
└── types/               # Shared TypeScript Interfaces`}</pre>
            </div>
          </div>
        )}

        {docTab === 'database' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">3. MongoDB Schemas & Data Model</h2>
            <p className="leading-relaxed">
              Data models are declared using standard Mongoose schema definitions in <code>/src/server/db/mongoSchemas.ts</code> with an in-memory seed store fallback.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border space-y-2">
                <h4 className="font-bold text-indigo-600">User Schema</h4>
                <p className="text-[11px]">Fields: <code>name</code>, <code>email</code>, <code>passwordHash</code>, <code>role</code> ('user' | 'admin'), <code>phone</code>, <code>address</code> object, <code>avatar</code>.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border space-y-2">
                <h4 className="font-bold text-indigo-600">Product Schema</h4>
                <p className="text-[11px]">Fields: <code>title</code>, <code>description</code>, <code>category</code>, <code>brand</code>, <code>price</code>, <code>discount</code>, <code>stock</code>, <code>images</code> array, <code>rating</code>, <code>isFeatured</code>.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border space-y-2">
                <h4 className="font-bold text-indigo-600">Order Schema</h4>
                <p className="text-[11px]">Fields: <code>user</code> ref, <code>items</code> array, <code>shippingAddress</code>, <code>paymentMethod</code>, <code>status</code>, <code>trackingNumber</code>, <code>totalPrice</code>.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border space-y-2">
                <h4 className="font-bold text-indigo-600">Coupon Schema</h4>
                <p className="text-[11px]">Fields: <code>code</code>, <code>discountPercent</code>, <code>isActive</code>, <code>expiresAt</code>.</p>
              </div>
            </div>
          </div>
        )}

        {docTab === 'api' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">4. REST API Endpoint Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b font-bold bg-slate-50 dark:bg-slate-900">
                    <th className="p-3">Method</th>
                    <th className="p-3">Endpoint</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Auth Guard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono text-[11px]">
                  <tr><td className="p-3 text-emerald-600 font-bold">POST</td><td className="p-3">/api/auth/login</td><td className="p-3 font-sans">User authentication & token generation</td><td className="p-3 font-sans text-slate-400">Public</td></tr>
                  <tr><td className="p-3 text-indigo-600 font-bold">GET</td><td className="p-3">/api/products</td><td className="p-3 font-sans">List products with search & filters</td><td className="p-3 font-sans text-slate-400">Public</td></tr>
                  <tr><td className="p-3 text-emerald-600 font-bold">POST</td><td className="p-3">/api/orders</td><td className="p-3 font-sans">Submit new purchase order</td><td className="p-3 font-sans text-amber-600 font-bold">Optional / User</td></tr>
                  <tr><td className="p-3 text-amber-600 font-bold">PUT</td><td className="p-3">/api/orders/:id/status</td><td className="p-3 font-sans">Update order fulfillment status & tracking</td><td className="p-3 font-sans text-rose-600 font-bold">Admin Only</td></tr>
                  <tr><td className="p-3 text-indigo-600 font-bold">GET</td><td className="p-3">/api/admin/analytics</td><td className="p-3 font-sans">Fetch KPI dashboard stats & revenue</td><td className="p-3 font-sans text-rose-600 font-bold">Admin Only</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {docTab === 'deployment' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">5. Deployment & Execution Commands</h2>
            <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] space-y-3">
              <p className="text-emerald-400 font-bold"># Development Server Setup</p>
              <pre className="text-slate-300">npm run dev</pre>

              <p className="text-indigo-400 font-bold"># Single-Command Production Bundle Generation (esbuild)</p>
              <pre className="text-slate-300">npm run build</pre>

              <p className="text-amber-400 font-bold"># Launch Production Bundle</p>
              <pre className="text-slate-300">npm start</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
