import React from 'react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  activeMenu: string;
  collections: string[];
  shopByCategories: string[];
  giftingOptions: string[];
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  activeMenu,
  collections,
  shopByCategories,
  giftingOptions,
  onClose,
}) => {
  const handleLinkClick = () => {
    onClose();
  };

  if (!activeMenu) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 animate-fadeDown">
      <div className="container mx-auto py-8 px-4">
        {activeMenu === 'Collection' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Collections Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Collections</h3>
              <ul className="space-y-3">
                {collections.map((collection, index) => (
                  <li key={index}>
                    <Link
                      to={`/collections/${collection.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                      onClick={handleLinkClick}
                    >
                      {collection}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Occasions Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Occasions</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/occasions/wedding"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Wedding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/occasions/anniversary"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Anniversary
                  </Link>
                </li>
                <li>
                  <Link
                    to="/occasions/engagement"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Engagement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/occasions/birthday"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Birthday
                  </Link>
                </li>
                <li>
                  <Link
                    to="/occasions/corporate-gifts"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Corporate Gifts
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Featured Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Featured</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/featured/new-arrivals"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/featured/best-sellers"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/featured/trending"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Trending Now
                  </Link>
                </li>
                <li>
                  <Link
                    to="/featured/sale"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Sale Items
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Link to="/collections/featured" onClick={handleLinkClick}>
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Featured Collection" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-serif text-xl font-bold mb-1">Signature Collection</h4>
                    <p className="text-sm mb-2">Discover our most iconic pieces</p>
                    <span className="text-xs font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      Explore Now
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        
        {activeMenu === 'Shop By' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Categories Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Categories</h3>
              <ul className="space-y-3">
                {shopByCategories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                      className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                      onClick={handleLinkClick}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price Range Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Price Range</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/price-range/under-1000"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Under $1,000
                  </Link>
                </li>
                <li>
                  <Link
                    to="/price-range/1000-5000"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    $1,000 - $5,000
                  </Link>
                </li>
                <li>
                  <Link
                    to="/price-range/5000-10000"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    $5,000 - $10,000
                  </Link>
                </li>
                <li>
                  <Link
                    to="/price-range/over-10000"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Over $10,000
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Materials Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Materials</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/materials/gold"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Gold
                  </Link>
                </li>
                <li>
                  <Link
                    to="/materials/platinum"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Platinum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/materials/silver"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Silver
                  </Link>
                </li>
                <li>
                  <Link
                    to="/materials/diamonds"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Diamonds
                  </Link>
                </li>
                <li>
                  <Link
                    to="/materials/gemstones"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Gemstones
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Link to="/category/featured" onClick={handleLinkClick}>
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Featured Category" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-serif text-xl font-bold mb-1">Diamond Collection</h4>
                    <p className="text-sm mb-2">Timeless elegance for every occasion</p>
                    <span className="text-xs font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      Shop Now
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        
        {activeMenu === 'Gifting' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Gifting Options Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Gifting Options</h3>
              <ul className="space-y-3">
                {giftingOptions.map((option, index) => (
                  <li key={index}>
                    <Link
                      to={`/gifting/${option.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                      onClick={handleLinkClick}
                    >
                      {option}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Occasions Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Occasions</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/gifting/occasions/anniversary"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Anniversary
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gifting/occasions/birthday"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Birthday
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gifting/occasions/wedding"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Wedding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gifting/occasions/graduation"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Graduation
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Gift Services Column */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-4 text-gradient">Gift Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/gifting/services/gift-cards"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gifting/services/gift-wrapping"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Gift Wrapping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gifting/services/personalization"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Personalization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gifting/services/concierge"
                    className="text-gray-600 hover:text-gold-600 transition-colors duration-300 block"
                    onClick={handleLinkClick}
                  >
                    Gift Concierge
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Link to="/gifting" onClick={handleLinkClick}>
                <img 
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Gifting" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-serif text-xl font-bold mb-1">Perfect Gifts</h4>
                    <p className="text-sm mb-2">Thoughtfully curated for your loved ones</p>
                    <span className="text-xs font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      Explore Gifts
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;