import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    isBestSeller?: boolean;
  }>;
  viewAllLink: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  subtitle,
  products,
  viewAllLink,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Define how many items to show per page based on screen size
  // This is a simplified version - in a real app, you'd use a hook to detect screen size
  const itemsPerPage = 3;
  
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };
  
  // Calculate which products to display based on current index
  const displayedProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="relative">
      {/* Header with Title, Subtitle, and Navigation */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-serif font-bold mb-2 text-gradient">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Navigation Dots */}
          <div className="hidden md:flex items-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-gold-600 w-5' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gold-50 hover:border-gold-200 hover:text-gold-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gold-50 hover:border-gold-200 hover:text-gold-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="relative overflow-hidden">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {displayedProducts.map((product) => (
            <div key={product.id} className="animate-fadeDown" style={{animationDelay: `${(product.id % itemsPerPage) * 0.1}s`}}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      
      {/* View All Link */}
      <div className="mt-8 text-center">
        <Link 
          to={viewAllLink}
          className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium transition-colors duration-300"
        >
          View All Products
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCarousel;