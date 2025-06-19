import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';

const ProductListing: React.FC = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    materials: [] as string[],
    categories: [] as string[],
    inStock: true
  });

  // Mock products data
  const allProducts = [
    {
      id: '1',
      name: 'Elegant Pearl Necklace',
      price: 2899,
      originalPrice: 3299,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'necklaces',
      isNew: true,
      material: 'pearl',
      inStock: true
    },
    {
      id: '2',
      name: 'Diamond Stud Earrings',
      price: 4599,
      originalPrice: 5299,
      image: 'https://images.pexels.com/photos/1927363/pexels-photo-1927363.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'earrings',
      isNew: true,
      material: 'diamond',
      inStock: true
    },
    {
      id: '3',
      name: 'Rose Gold Bracelet',
      price: 1899,
      originalPrice: 2199,
      image: 'https://images.pexels.com/photos/1445704/pexels-photo-1445704.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'bracelets',
      material: 'gold',
      inStock: true
    },
    {
      id: '4',
      name: 'Vintage Ring Set',
      price: 3299,
      originalPrice: 3899,
      image: 'https://images.pexels.com/photos/1721988/pexels-photo-1721988.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'rings',
      material: 'gold',
      inStock: true
    },
    {
      id: '5',
      name: 'Classic Diamond Ring',
      price: 8999,
      originalPrice: 10499,
      image: 'https://images.pexels.com/photos/1721988/pexels-photo-1721988.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'rings',
      isBestSeller: true,
      material: 'diamond',
      inStock: true
    },
    {
      id: '6',
      name: 'Statement Necklace',
      price: 6799,
      originalPrice: 7999,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'necklaces',
      isBestSeller: true,
      material: 'gold',
      inStock: true
    }
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    let filtered = allProducts;

    // Filter by category if specified
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    // Apply filters
    filtered = filtered.filter(product => {
      const priceInRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const materialMatch = filters.materials.length === 0 || filters.materials.includes(product.material);
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
      const stockMatch = !filters.inStock || product.inStock;

      return priceInRange && materialMatch && categoryMatch && stockMatch;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // popularity - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [category, filters, sortBy]);

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getPageTitle = () => {
    if (category) {
      return category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
    }
    return 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {getPageTitle()}
          </h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="luxury-card p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under ₹5,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹5,000 - ₹15,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹15,000 - ₹30,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Above ₹30,000</span>
                  </label>
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  {['Gold', 'Silver', 'Diamond', 'Pearl', 'Platinum'].map(material => (
                    <label key={material} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {['Necklaces', 'Rings', 'Earrings', 'Bracelets'].map(cat => (
                    <label key={cat} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                  />
                  <span className="text-sm">In Stock Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter size={16} />
                <span>Filters</span>
              </button>

              <div className="flex items-center space-x-4">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="popularity">Sort by Popularity</option>
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Products */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;