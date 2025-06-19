import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

// Using the Product type directly in ProductCardProps
interface ProductCardProps {
  product: {
    id: number | string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    isBestSeller?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    isNew,
    isBestSeller
  } = product;

  // Calculate discount percentage if there's an original price
  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div 
      className="luxury-card group relative h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Badges */}
      <div className="relative overflow-hidden image-zoom">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover transition-transform duration-700"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-emerald-600 text-white text-xs font-medium px-2.5 py-1 rounded animate-fadeDown">
              New
            </span>
          )}
          {isBestSeller && (
            <span className="bg-amber-500 text-white text-xs font-medium px-2.5 py-1 rounded animate-fadeDown" style={{animationDelay: '0.1s'}}>
              Best Seller
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-rose-600 text-white text-xs font-medium px-2.5 py-1 rounded animate-fadeDown" style={{animationDelay: '0.2s'}}>
              {discountPercentage}% Off
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3">
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full shadow-md transition-all duration-300 ${isInWishlist(String(id)) ? 'bg-rose-50 text-rose-500' : 'bg-white/90 hover:bg-rose-50 hover:text-rose-500 text-gray-600'} animate-fadeDown`}
            aria-label={isInWishlist(String(id)) ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-5 h-5 ${isInWishlist(String(id)) ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
        
        {/* View Button - Appears on Hover */}
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <Link 
            to={`/product/${id}`}
            className="bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 mx-2"
            aria-label="View product details"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col">
        <Link to={`/product/${id}`} className="block flex-grow">
          <h3 className="text-lg font-medium text-gray-800 hover:text-gold-600 transition-colors duration-300 line-clamp-2">
            {name}
          </h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-semibold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{category}</p>
        </Link>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full luxury-button flex items-center justify-center gap-2 py-2.5"
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;