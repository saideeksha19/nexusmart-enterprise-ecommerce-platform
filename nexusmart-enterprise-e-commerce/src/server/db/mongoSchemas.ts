/**
 * MongoDB / Mongoose Schemas for NexusMart Enterprise E-Commerce
 * These declarations represent the production schema structure for MongoDB Atlas deployments.
 */

export const MongoUserSchemaDoc = `
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  avatar: { type: String, default: '' },
  phone: { type: String, default: '' },
  address: {
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    zipCode: { type: String, default: '' },
    country: { type: String, default: 'USA' }
  }
}, { timestamps: true });
`;

export const MongoProductSchemaDoc = `
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
  category: { type: String, required: true, index: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  discount: { type: Number, default: 0 },
  stock: { type: Number, required: true, min: 0, default: 10 },
  rating: { type: Number, default: 5 },
  numReviews: { type: Number, default: 0 },
  images: [{ type: String }],
  specifications: [{ name: String, value: String }],
  availability: { type: String, enum: ['in_stock', 'out_of_stock', 'pre_order'], default: 'in_stock' },
  isFeatured: { type: Boolean, default: false },
  isTopSelling: { type: Boolean, default: false }
}, { timestamps: true });
`;

export const MongoOrderSchemaDoc = `
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    price: Number,
    quantity: Number,
    image: String
  }],
  shippingAddress: {
    fullName: String,
    email: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, enum: ['Paid', 'Pending', 'Failed'], default: 'Pending' },
  itemsPrice: Number,
  shippingPrice: Number,
  taxPrice: Number,
  discountAmount: Number,
  totalPrice: Number,
  couponCode: String,
  status: { type: String, enum: ['Pending', 'Confirmed', 'Packed', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
  trackingNumber: String,
  estimatedDelivery: String
}, { timestamps: true });
`;

export const MongoCategorySchemaDoc = `
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  icon: { type: String, default: 'Package' },
  description: String
});
`;

export const MongoCouponSchemaDoc = `
const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true },
  discountPercent: Number,
  fixedDiscount: Number,
  minSpend: { type: Number, default: 0 },
  expiresAt: Date,
  isActive: { type: Boolean, default: true }
});
`;
