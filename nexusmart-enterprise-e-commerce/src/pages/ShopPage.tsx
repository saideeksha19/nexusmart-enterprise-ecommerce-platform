import React, { useState, useEffect } from 'react';
import {
  Filter,
  Search,
  X,
  SlidersHorizontal,
  ChevronDown,
  Star,
  RotateCcw,
  Check,
} from 'lucide-react';
import { Product, FilterState, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ProductQuickViewModal } from '../components/ProductQuickViewModal';

interface ShopPageProps {
  initialFilter?: Partial<FilterState>;
  onNavigate: (tab: string, param?: any) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ initialFilter, onNavigate }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuickView, setSelectedQuickView] = useState<Product | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter State
  const [filters, setFilters] = useState<FilterState>({
    search: initialFilter?.search || '',
    category: initialFilter?.category || 'all',
    brand: initialFilter?.brand || 'all',
    minPrice: 0,
    maxPrice: 5000,
    minRating: 0,
    inStockOnly: false,
    sortBy: 'featured',
  });

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Sync initialFilter when prop changes (e.g., from Navbar search or category click)
  useEffect(() => {
    if (initialFilter) {
      setFilters((prev) => ({
        ...prev,
        search: initialFilter.search !== undefined ? initialFilter.search : prev.search,
        category: initialFilter.category !== undefined ? initialFilter.category : prev.category,
        brand: initialFilter.brand !== undefined ? initialFilter.brand : prev.brand,
      }));
      setPage(1);
    }
  }, [initialFilter]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [filters, page]);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      if (res.ok) {
        setCategories(await res.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        search: filters.search,
        category: filters.category,
        brand: filters.brand,
        minPrice: filters.minPrice.toString(),
        maxPrice: filters.maxPrice.toString(),
        minRating: filters.minRating.toString(),
        inStockOnly: filters.inStockOnly.toString(),
        sortBy: filters.sortBy,
        page: page.toString(),
        limit: '9',
      });

      const res = await fetch(`/api/products?${queryParams.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products || []);
        setTotalPages(data.totalPages || 1);
        setTotalCount(data.total || 0);
        if (data.brands) setBrands(data.brands);
      }
    } catch (err) {
      console.error('Failed to fetch shop products', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      category: 'all',
      brand: 'all',
      minPrice: 0,
      maxPrice: 5000,
      minRating: 0,
      inStockOnly: false,
      sortBy: 'featured',
    });
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">Catalog & Shop</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Showing <strong className="text-slate-800 dark:text-slate-200">{totalCount}</strong> matching products
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filter Products
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">Sort By:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters((f) => ({ ...f, sortBy: e.target.value as any }))}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-hidden"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <div className="hidden lg:block space-y-6 bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Filter className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Filters
            </h3>
            <button
              onClick={handleResetFilters}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Search Filter Input */}
          <div>
            <h4 className="font-semibold text-xs text-slate-800 dark:text-slate-200 mb-2">Search Keywords</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Search laptop, mouse, brand..."
                value={filters.search}
                onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
                className="w-full px-3 py-1.5 pl-8 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              {filters.search && (
                <button
                  onClick={() => setFilters((f) => ({ ...f, search: '' }))}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Categories Filter */}
          <div>
            <h4 className="font-semibold text-xs text-slate-800 dark:text-slate-200 mb-2">Category</h4>
            <div className="space-y-1.5 text-xs">
              <button
                onClick={() => setFilters((f) => ({ ...f, category: 'all' }))}
                className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  filters.category === 'all'
                    ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilters((f) => ({ ...f, category: cat.slug }))}
                  className={`w-full text-left px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    filters.category === cat.slug
                      ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-xs text-slate-800 dark:text-slate-200 mb-2">
              Max Price: ${filters.maxPrice}
            </h4>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={filters.maxPrice}
              onChange={(e) => setFilters((f) => ({ ...f, maxPrice: parseFloat(e.target.value) }))}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>$50</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Minimum Rating */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-xs text-slate-800 dark:text-slate-200 mb-2">Rating</h4>
            <div className="space-y-1 text-xs">
              {[4, 3, 2].map((r) => (
                <button
                  key={r}
                  onClick={() => setFilters((f) => ({ ...f, minRating: filters.minRating === r ? 0 : r }))}
                  className={`w-full flex items-center justify-between p-2 rounded-lg ${
                    filters.minRating === r
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {r} Stars & Above
                  </span>
                  {filters.minRating === r && <Check className="w-3.5 h-3.5 text-amber-600" />}
                </button>
              ))}
            </div>
          </div>

          {/* In Stock Toggle */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => setFilters((f) => ({ ...f, inStockOnly: e.target.checked }))}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>In Stock Items Only</span>
            </label>
          </div>
        </div>

        {/* Product Grid & Search Tags */}
        <div className="lg:col-span-3 space-y-6">
          {/* Active Filter Chips */}
          {(filters.search || filters.category !== 'all' || filters.minRating > 0 || filters.inStockOnly) && (
            <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <span className="font-bold text-slate-500">Active Filters:</span>
              {filters.search && (
                <span className="px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center gap-1 font-semibold">
                  Search: "{filters.search}"
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters((f) => ({ ...f, search: '' }))} />
                </span>
              )}
              {filters.category !== 'all' && (
                <span className="px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center gap-1 font-semibold capitalize">
                  Cat: {filters.category}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters((f) => ({ ...f, category: 'all' }))} />
                </span>
              )}
              {filters.inStockOnly && (
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1 font-semibold">
                  In Stock Only
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setFilters((f) => ({ ...f, inStockOnly: false }))} />
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline ml-auto"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-80 rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {filters.search.trim()
                  ? `No products found for '${filters.search.trim()}'`
                  : (() => {
                      const activeCat = categories.find((c) => c.slug === filters.category);
                      const catName = activeCat
                        ? activeCat.name
                        : filters.category === 'home-living' || filters.category.includes('home')
                        ? 'Home & Living'
                        : '';
                      return catName ? `No ${catName} products available.` : 'No products match your filters';
                    })()}
              </p>
              <p className="text-xs text-slate-500 mt-1 mb-4">Try broadening your search term or price limit</p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onQuickView={(p) => setSelectedQuickView(p)}
                  onSelectProduct={(p) => onNavigate('product-detail', { id: p.id })}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 px-3">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      <ProductQuickViewModal
        product={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
        onViewFullDetails={(p) => onNavigate('product-detail', { id: p.id })}
      />
    </div>
  );
};
