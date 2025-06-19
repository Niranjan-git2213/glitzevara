import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Ticket } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import MegaMenu from './MegaMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);  
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  
  const { user, logout } = useAuth();
  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowMegaMenu(false);
        setActiveMenu('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuToggle = (menuName: string) => {
    if (activeMenu === menuName) {
      setShowMegaMenu(false);
      setActiveMenu('');
    } else {
      setActiveMenu(menuName);
      setShowMegaMenu(true);
    }
  };

  const navigation = [
    { name: 'New Arrivals', href: '/products/new-arrivals', label: 'NEW' },
    { name: 'Best Seller', href: '/products/best-seller' },
    { name: 'Lab Grown Diamond', href: '/products/lab-grown-diamond', label: 'Luxe' },
    { name: 'Emily In Paris', href: '/products/emily-in-paris', label: 'à la mode' },
    { name: "Top Brands", href: '/products/top-brands' },
    { name: 'Collection', href: '#', hasDropdown: true },
    { name: 'Shop By', href: '#', hasDropdown: true },
    { name: 'Gifting', href: '/gifting', hasDropdown: true },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Return & Exchange', href: '/returns' },
    { name: 'About Us', href: '/about' },
  ];

  const collections = [
    'AM To PM Collection',
    'Emily In Paris',
    'Kids Collection',
    'Signature Collection',
    'Diwali Collection',
    'Office Collection',
    'Party Collection',
    'Vacay Collection',
    'Valentine Collection'
  ];

  const shopByCategories = [
    'Necklaces',
    'Rings',
    'Bracelets',
    'Earrings',
    "Men's Collection",
    'Mangalsutra',
    'Anklets'
  ];

  const giftingOptions = [
    'Gifts for Her',
    'Gifts for Him'
  ];

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white text-center py-2 px-4 text-sm font-medium relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <span className="animate-pulse mr-2">✨</span>
          MONSOON SALE | BUY 3 FOR ₹3003 | Use Code: <span className="font-bold">MONSOON</span>
          <span className="animate-pulse ml-2">✨</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 opacity-30"></div>
      </div>

      {/* Main Header */}
      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-lg py-2' : 'bg-white py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105">
              <div className="font-playfair text-2xl lg:text-3xl font-bold text-gradient">
              Glitzevara
              </div>
            </Link>

            {/* Search Bar - Centered */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-auto">
              <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search Gs"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent transition-all bg-[#f3f0e9]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Mobile Search */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <Search size={24} className="text-gray-800" />
              </button>

              {/* User Account */}
              <div className="relative group">
                <Link to={user ? "/profile" : "/login"} className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center">
                  <User size={22} className="text-gray-800" />
                </Link>
                {user && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                    <div className="p-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Hello, {user.name || 'User'}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <div className="py-2">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-amber-600 transition-colors">
                        My Profile
                      </Link>
                      <Link to="/profile?tab=orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-amber-600 transition-colors">
                        My Orders
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-amber-600 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative flex items-center justify-center">
                <Heart size={22} className="text-gray-800" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Coupon/Offers */}
              <Link to="/offers" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative flex items-center justify-center">
                <Ticket size={22} className="text-gray-800" />
              </Link>

              {/* Cart */}
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative flex items-center justify-center">
                <ShoppingBag size={22} className="text-gray-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-fadeDown">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm bg-[#f3f0e9]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                {searchQuery ? (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Close search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Menu - Below Header */}
        <div className="hidden lg:block border-t border-gray-100 py-2">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-center space-x-6 text-sm">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center space-x-1 text-gray-700 hover:text-amber-600 font-medium transition-colors ${
                        activeMenu === item.name ? 'text-amber-600' : ''
                      }`}
                      onClick={() => handleMenuToggle(item.name)}
                      aria-expanded={activeMenu === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-gray-700 hover:text-amber-600 font-medium transition-colors relative flex items-center ${
                        location.pathname === item.href ? 'text-amber-600' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.label && (
                        <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${item.label === 'NEW' ? 'bg-green-500' : item.label === '' ? 'bg-amber-500' : 'bg-rose-500'} text-white font-medium`}>
                          {item.label}
                        </span>
                      )}
                      {location.pathname === item.href && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-600 rounded-full"></span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeDown">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center justify-between w-full text-gray-700 hover:text-amber-600 font-medium py-2"
                      onClick={() => handleMenuToggle(item.name)}
                    >
                      {/* <div className="flex items-center">
                        <span>{item.name}</span>
                        {item.label && (
                          <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${item.label === 'NEW' ? 'bg-green-500' : item.label === 'Luxe' ? 'bg-amber-500' : 'bg-rose-500'} text-white font-medium`}>
                            {item.label}
                          </span>
                        )}
                      </div> */}
                      <ChevronDown size={16} className={activeMenu === item.name ? 'rotate-180 transform' : ''} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center text-gray-700 hover:text-amber-600 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {item.label && (
                        <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${item.label === 'NEW' ? 'bg-green-500' : item.label === 'Luxe' ? 'bg-amber-500' : 'bg-rose-500'} text-white font-medium`}>
                          {item.label}
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Mega Menu */}
      {showMegaMenu && (
        <MegaMenu
          activeMenu={activeMenu}
          collections={collections}
          shopByCategories={shopByCategories}
          giftingOptions={giftingOptions}
          onClose={() => {
            setShowMegaMenu(false);
            setActiveMenu('');
          }}
        />
      )}
    </>
  );
};

export default Header;