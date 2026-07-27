import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { OrderHistoryPage } from './pages/OrderHistoryPage';
import { WishlistPage } from './pages/WishlistPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { DocumentationPage } from './pages/DocumentationPage';

import { useAuth } from './context/AuthContext';
import { useCart } from './context/CartContext';

export function App() {
  const { user } = useAuth();
  const { isCartOpen, setIsCartOpen } = useCart();

  const [activeTab, setActiveTab] = useState<string>('home');
  const [routeParams, setRouteParams] = useState<any>({});
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleNavigate = (tab: string, param?: any) => {
    setActiveTab(tab);
    if (param) setRouteParams(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Primary Sticky Header */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {activeTab === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activeTab === 'shop' && <ShopPage initialFilter={routeParams} onNavigate={handleNavigate} />}
        {activeTab === 'product-detail' && (
          <ProductDetailPage productId={routeParams.id || 'p1'} onNavigate={handleNavigate} />
        )}
        {activeTab === 'cart' && <CartPage onNavigate={handleNavigate} />}
        {activeTab === 'checkout' && <CheckoutPage onNavigate={handleNavigate} />}
        {activeTab === 'order-confirmation' && (
          <OrderConfirmationPage order={routeParams.order || null} onNavigate={handleNavigate} />
        )}
        {activeTab === 'orders' && <OrderHistoryPage onNavigate={handleNavigate} />}
        {activeTab === 'wishlist' && <WishlistPage onNavigate={handleNavigate} />}
        {activeTab === 'profile' && <ProfilePage />}
        {activeTab === 'admin' && (
          user?.role === 'admin' ? (
            <AdminDashboardPage />
          ) : (
            <div className="p-12 text-center">
              <h2 className="text-xl font-bold text-rose-600">Access Denied</h2>
              <p className="text-xs text-slate-400 mt-1">You need administrator privileges to view this section.</p>
              <button onClick={() => handleNavigate('home')} className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold">
                Return Home
              </button>
            </div>
          )
        )}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'contact' && <ContactPage />}
        {activeTab === 'faq' && <FAQPage />}
        {activeTab === 'docs' && <DocumentationPage />}
      </main>

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        onNavigateCheckout={() => handleNavigate('checkout')}
        onNavigateShop={() => handleNavigate('shop')}
      />

      {/* Auth Modal (Login & Register) */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Site Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
