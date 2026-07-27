import React, { useState } from 'react';
import {
  CreditCard,
  Truck,
  ShieldCheck,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Tag,
  X,
  MapPin,
  FileText,
  DollarSign,
  Smartphone,
  Wallet
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/Toast';

interface CheckoutPageProps {
  onNavigate: (tab: string, param?: any) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const {
    cart,
    subtotal,
    discountAmount,
    shippingFee,
    taxAmount,
    grandTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    clearCart,
  } = useCart();
  const { addToast } = useToast();

  // Navigation Steps: 1 = Address & Billing, 2 = Payment & Review
  const [step, setStep] = useState<1 | 2>(1);

  // Shipping Form State
  const [fullName, setFullName] = useState(user?.name || 'Alex Rivera');
  const [email, setEmail] = useState(user?.email || 'alex@nexusmart.com');
  const [phone, setPhone] = useState(user?.phone || '+1 (555) 432-8765');
  const [street, setStreet] = useState(user?.address?.street || '742 Evergreen Terrace');
  const [city, setCity] = useState(user?.address?.city || 'Seattle');
  const [state, setState] = useState(user?.address?.state || 'WA');
  const [zipCode, setZipCode] = useState(user?.address?.zipCode || '98101');
  const [country, setCountry] = useState(user?.address?.country || 'United States');

  // Billing Address State
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [billingName, setBillingName] = useState('');
  const [billingStreet, setBillingStreet] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingZipCode, setBillingZipCode] = useState('');
  const [billingCountry, setBillingCountry] = useState('United States');

  // Payment Method State
  const [paymentMethod, setPaymentMethod] = useState<'Credit Card' | 'Cash on Delivery' | 'PayPal' | 'Apple Pay'>('Credit Card');
  const [cardHolder, setCardHolder] = useState(user?.name || 'Alex Rivera');
  const [cardNumber, setCardNumber] = useState('4532 8912 3456 8892');
  const [cardExp, setCardExp] = useState('12/28');
  const [cardCvv, setCardCvv] = useState('892');

  // Coupon Input State
  const [couponInput, setCouponInput] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  // Validation & Processing
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Coupon submit handler
  const handleApplyCouponCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    setIsApplyingCoupon(true);
    const success = await applyCoupon(couponInput.trim().toUpperCase());
    setIsApplyingCoupon(false);
    if (success) setCouponInput('');
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid Email is required';
    if (!phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!street.trim()) newErrors.street = 'Street Address is required';
    if (!city.trim()) newErrors.city = 'City is required';
    if (!state.trim()) newErrors.state = 'State is required';
    if (!zipCode.trim()) newErrors.zipCode = 'ZIP Code is required';

    if (!sameAsShipping) {
      if (!billingName.trim()) newErrors.billingName = 'Billing Name is required';
      if (!billingStreet.trim()) newErrors.billingStreet = 'Billing Street is required';
      if (!billingCity.trim()) newErrors.billingCity = 'Billing City is required';
      if (!billingState.trim()) newErrors.billingState = 'Billing State is required';
      if (!billingZipCode.trim()) newErrors.billingZipCode = 'Billing ZIP Code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      addToast('error', 'Incomplete Address', 'Please fill in all required shipping fields.');
    }
  };

  // Final Place Order Action
  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      addToast('error', 'Empty Cart', 'Your shopping cart is empty.');
      return;
    }

    // Step 2 Payment Validation
    if (paymentMethod === 'Credit Card') {
      const cardErrors: Record<string, string> = {};
      if (!cardHolder.trim()) cardErrors.cardHolder = 'Cardholder name is required';
      if (!cardNumber.trim() || cardNumber.replace(/\s/g, '').length < 12) cardErrors.cardNumber = 'Valid card number is required';
      if (!cardExp.trim()) cardErrors.cardExp = 'Expiry date is required';
      if (!cardCvv.trim() || cardCvv.length < 3) cardErrors.cardCvv = 'CVV code is required';

      if (Object.keys(cardErrors).length > 0) {
        setErrors(cardErrors);
        addToast('error', 'Payment Details Missing', 'Please complete your card payment information.');
        return;
      }
    }

    setIsPlacingOrder(true);
    const token = localStorage.getItem('nexusmart_token');

    const shippingAddressPayload = {
      fullName,
      email,
      phone,
      street,
      city,
      state,
      zipCode,
      country,
    };

    const billingAddressPayload = sameAsShipping
      ? shippingAddressPayload
      : {
          fullName: billingName,
          email,
          phone,
          street: billingStreet,
          city: billingCity,
          state: billingState,
          zipCode: billingZipCode,
          country: billingCountry,
        };

    const orderPayload = {
      items: cart.map((item) => ({
        productId: item.product.id,
        title: item.product.title,
        price: parseFloat((item.product.price * (1 - item.product.discount / 100)).toFixed(2)),
        quantity: item.quantity,
        image: item.product.images[0] || '',
      })),
      shippingAddress: shippingAddressPayload,
      billingAddress: billingAddressPayload,
      paymentMethod,
      couponCode: appliedCoupon?.code,
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to submit order');

      addToast('success', 'Order Placed!', `Your order #${data.id} has been confirmed.`);
      clearCart();
      onNavigate('order-confirmation', { order: data });
    } catch (err: any) {
      addToast('error', 'Checkout Error', err.message || 'Order processing failed');
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center mx-auto">
          <Truck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Your Cart is Empty</h2>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Add items to your shopping cart before proceeding to checkout.
        </p>
        <button
          onClick={() => onNavigate('shop')}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-md shadow-indigo-600/20"
        >
          Explore Catalog & Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('cart')}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-slate-700 dark:text-slate-300" />
          </button>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Secure Checkout</h1>
            <p className="text-xs text-slate-500">
              Step {step} of 2: {step === 1 ? 'Shipping & Billing Address' : 'Payment Method & Confirmation'}
            </p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <div
            onClick={() => setStep(1)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
              step === 1
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
            }`}
          >
            {step === 2 ? <CheckCircle2 className="w-3.5 h-3.5" /> : <span>1</span>}
            <span>Address</span>
          </div>
          <div className="w-6 h-0.5 bg-slate-200 dark:bg-slate-800" />
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              step === 2
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
            }`}
          >
            <span>2</span>
            <span>Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Step Content */}
        <div className="lg:col-span-7 space-y-6">
          {step === 1 ? (
            /* STEP 1: SHIPPING & BILLING ADDRESS */
            <div className="space-y-6">
              {/* Shipping Address Box */}
              <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <MapPin className="w-5 h-5" />
                  <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">Shipping Address</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                      }}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.fullName ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 dark:border-slate-700'
                      } bg-slate-50 dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.fullName && <p className="text-[10px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      placeholder="alex@nexusmart.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 dark:border-slate-700'
                      } bg-slate-50 dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                      }}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 dark:border-slate-700'
                      } bg-slate-50 dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.phone && <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      value={street}
                      onChange={(e) => {
                        setStreet(e.target.value);
                        if (errors.street) setErrors((prev) => ({ ...prev, street: '' }));
                      }}
                      placeholder="Street address, apartment, or suite"
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.street ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 dark:border-slate-700'
                      } bg-slate-50 dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.street && <p className="text-[10px] text-rose-500 mt-1">{errors.street}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">City *</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        if (errors.city) setErrors((prev) => ({ ...prev, city: '' }));
                      }}
                      placeholder="Seattle"
                      className={`w-full px-3.5 py-2.5 rounded-xl border ${
                        errors.city ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 dark:border-slate-700'
                      } bg-slate-50 dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.city && <p className="text-[10px] text-rose-500 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      State / Zip Code *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="WA"
                        className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-hidden"
                      />
                      <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="98101"
                        className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-hidden"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Billing Address Section */}
              <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 pb-2 border-b border-slate-100 dark:border-slate-700">
                  <FileText className="w-5 h-5" />
                  <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">Billing Address</h2>
                </div>

                <label className="flex items-center gap-3 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300 select-none">
                  <input
                    type="checkbox"
                    checked={sameAsShipping}
                    onChange={(e) => setSameAsShipping(e.target.checked)}
                    className="w-4 h-4 rounded-md text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span>Billing address is the same as shipping address</span>
                </label>

                {!sameAsShipping && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-3 border-t border-slate-100 dark:border-slate-700">
                    <div className="sm:col-span-2">
                      <label className="block font-semibold mb-1">Billing Full Name *</label>
                      <input
                        type="text"
                        value={billingName}
                        onChange={(e) => setBillingName(e.target.value)}
                        placeholder="Name on billing account"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                      />
                      {errors.billingName && <p className="text-[10px] text-rose-500 mt-1">{errors.billingName}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-semibold mb-1">Billing Street Address *</label>
                      <input
                        type="text"
                        value={billingStreet}
                        onChange={(e) => setBillingStreet(e.target.value)}
                        placeholder="Billing street address"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                      />
                      {errors.billingStreet && <p className="text-[10px] text-rose-500 mt-1">{errors.billingStreet}</p>}
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">City *</label>
                      <input
                        type="text"
                        value={billingCity}
                        onChange={(e) => setBillingCity(e.target.value)}
                        placeholder="City"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">State / Zip *</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={billingState}
                          onChange={(e) => setBillingState(e.target.value)}
                          placeholder="State"
                          className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                        />
                        <input
                          type="text"
                          value={billingZipCode}
                          onChange={(e) => setBillingZipCode(e.target.value)}
                          placeholder="Zip"
                          className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button to Step 2 */}
              <button
                type="button"
                onClick={handleProceedToPayment}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Continue to Payment & Review</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          ) : (
            /* STEP 2: PAYMENT METHOD & FINAL PLACE ORDER */
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-6">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <CreditCard className="w-5 h-5" />
                  <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">Select Payment Method</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Credit Card')}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold flex flex-col gap-2 transition-all ${
                      paymentMethod === 'Credit Card'
                        ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-600/30'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-indigo-600" />
                    <span>Credit / Debit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Cash on Delivery')}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold flex flex-col gap-2 transition-all ${
                      paymentMethod === 'Cash on Delivery'
                        ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-600/30'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <Truck className="w-5 h-5 text-emerald-600" />
                    <span>Cash on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('PayPal')}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold flex flex-col gap-2 transition-all ${
                      paymentMethod === 'PayPal'
                        ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-600/30'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <Wallet className="w-5 h-5 text-sky-600" />
                    <span>PayPal</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Apple Pay')}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold flex flex-col gap-2 transition-all ${
                      paymentMethod === 'Apple Pay'
                        ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-600/30'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                    <span>Apple Pay</span>
                  </button>
                </div>

                {/* Credit Card Inputs & Visual Card */}
                {paymentMethod === 'Credit Card' && (
                  <div className="space-y-4 pt-2">
                    {/* Visual Card simulation */}
                    <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white space-y-5 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <CreditCard className="w-48 h-48" />
                      </div>
                      <div className="flex justify-between items-center text-xs opacity-80">
                        <span className="font-mono tracking-widest font-bold">NEXUSMART PREFERRED</span>
                        <Lock className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-xl font-mono tracking-wider pt-2">
                        {cardNumber || '•••• •••• •••• ••••'}
                      </div>
                      <div className="flex justify-between items-end text-xs">
                        <div>
                          <p className="text-[10px] uppercase opacity-70">Cardholder</p>
                          <p className="font-bold tracking-wide">{cardHolder || 'FULL NAME'}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase opacity-70">Expires</p>
                          <p className="font-bold font-mono">{cardExp || 'MM/YY'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="sm:col-span-2">
                        <label className="block font-semibold mb-1">Cardholder Name *</label>
                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="Name as printed on card"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block font-semibold mb-1">Card Number *</label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="4532 8912 3456 8892"
                          maxLength={19}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-1">Expiration Date *</label>
                        <input
                          type="text"
                          value={cardExp}
                          onChange={(e) => setCardExp(e.target.value)}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-1">Security Code (CVV) *</label>
                        <input
                          type="password"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'Cash on Delivery' && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
                    <p className="font-bold mb-1">Cash on Delivery Selected</p>
                    <p className="text-[11px] opacity-90">
                      You will pay directly in cash when the delivery agent hands over your shipment.
                    </p>
                  </div>
                )}

                {(paymentMethod === 'PayPal' || paymentMethod === 'Apple Pay') && (
                  <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-800 dark:text-indigo-300">
                    <p className="font-bold mb-1">{paymentMethod} Integration Active</p>
                    <p className="text-[11px] opacity-90">
                      Clicking "Place Order" will simulate instant one-touch authorization with {paymentMethod}.
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation & Submit Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors"
                >
                  ← Edit Address
                </button>
                <button
                  type="submit"
                  disabled={isPlacingOrder}
                  className="flex-1 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isPlacingOrder ? 'Processing Order...' : `Place Order • $${grandTotal.toFixed(2)}`}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar: Order Summary & Coupon Code */}
        <div className="lg:col-span-5 space-y-6">
          {/* Coupon Code Card */}
          <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              <Tag className="w-4 h-4 text-indigo-600" />
              <span>Promo Code / Coupon</span>
            </div>

            {appliedCoupon ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs">
                <div>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{appliedCoupon.code}</span>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400/80">
                    {appliedCoupon.discountPercent
                      ? `${appliedCoupon.discountPercent}% Discount Activated`
                      : `$${appliedCoupon.fixedDiscount} Off`}
                  </p>
                </div>
                <button
                  onClick={removeCoupon}
                  className="p-1 rounded-lg text-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCouponCode} className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Enter code (e.g. WELCOME20)"
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 uppercase font-mono"
                />
                <button
                  type="submit"
                  disabled={isApplyingCoupon || !couponInput.trim()}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs transition-colors"
                >
                  {isApplyingCoupon ? '...' : 'Apply'}
                </button>
              </form>
            )}

            {!appliedCoupon && (
              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5 flex-wrap">
                <span>Available codes:</span>
                <button
                  onClick={() => setCouponInput('WELCOME20')}
                  className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono font-bold hover:text-indigo-600"
                >
                  WELCOME20
                </button>
                <button
                  onClick={() => setCouponInput('NEXUS10')}
                  className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono font-bold hover:text-indigo-600"
                >
                  NEXUS10
                </button>
              </div>
            )}
          </div>

          {/* Itemized Order Summary Box */}
          <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-700 pb-3">
              Order Summary ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h3>

            {/* Scrollable Items List */}
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 divide-y divide-slate-100 dark:divide-slate-800">
              {cart.map((item) => {
                const discountedUnitPrice = item.product.price * (1 - item.product.discount / 100);
                const itemTotalPrice = discountedUnitPrice * item.quantity;
                return (
                  <div key={item.product.id} className="pt-3 first:pt-0 flex gap-3 text-xs">
                    <img
                      src={item.product.images[0] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200'}
                      alt={item.product.title}
                      className="w-12 h-12 rounded-xl object-cover bg-slate-100 shrink-0 border border-slate-200/50 dark:border-slate-700"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">{item.product.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Qty: {item.quantity} • ${discountedUnitPrice.toFixed(2)} ea
                      </p>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100 shrink-0">
                      ${itemTotalPrice.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Calculated Costs */}
            <div className="space-y-2 text-xs pt-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                  <span>Coupon Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Estimated Shipping</span>
                <span className="font-medium">
                  {shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Sales Tax (8%)</span>
                <span className="font-medium">${taxAmount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center text-sm font-black text-slate-900 dark:text-slate-100 pt-3 border-t border-slate-200 dark:border-slate-700">
                <span>Grand Total</span>
                <span className="text-base text-indigo-600 dark:text-indigo-400">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Security Guarantee Note */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>256-Bit SSL Encrypted & Guaranteed Safe Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
