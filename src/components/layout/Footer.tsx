import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, CreditCard, Shield, Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Badges Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-4 hover:bg-gray-800/30 rounded-lg transition-all duration-300">
              <Truck size={24} className="text-gold-400 mb-3" />
              <h4 className="font-medium mb-1">Free Shipping</h4>
              <p className="text-sm text-gray-400">On all orders over $500</p>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-800/30 rounded-lg transition-all duration-300">
              <Shield size={24} className="text-gold-400 mb-3" />
              <h4 className="font-medium mb-1">Secure Payment</h4>
              <p className="text-sm text-gray-400">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center p-4 hover:bg-gray-800/30 rounded-lg transition-all duration-300">
              <CreditCard size={24} className="text-gold-400 mb-3" />
              <h4 className="font-medium mb-1">Easy Returns</h4>
              <p className="text-sm text-gray-400">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fadeDown" style={{animationDelay: '0.1s'}}>
            <Link to="/" className="block mb-4">
              <div className="font-serif text-3xl font-bold text-gradient">
              Glitzevara
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover luxury jewelry that speaks volumes. Each piece is meticulously crafted with precision and designed with passion to elevate your style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeDown" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/new-arrivals" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">New Arrivals</span>
                </Link>
              </li>
              <li>
                <Link to="/products/best-seller" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Best Sellers</span>
                </Link>
              </li>
              <li>
                <Link to="/products/lab-grown-diamond" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Lab Grown Diamond</span>
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Gifting</span>
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Track Order</span>
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Returns & Exchange</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="animate-fadeDown" style={{animationDelay: '0.3s'}}>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gradient">Shop By Category</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/category/necklaces" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Necklaces</span>
                </Link>
              </li>
              <li>
                <Link to="/products/category/rings" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Rings</span>
                </Link>
              </li>
              <li>
                <Link to="/products/category/earrings" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Earrings</span>
                </Link>
              </li>
              <li>
                <Link to="/products/category/bracelets" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Bracelets</span>
                </Link>
              </li>
              <li>
                <Link to="/products/category/mens-collection" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Men's Collection</span>
                </Link>
              </li>
              <li>
                <Link to="/products/category/luxury-collection" className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Luxury Collection</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="animate-fadeDown" style={{animationDelay: '0.4s'}}>
            <h3 className="text-lg font-serif font-semibold mb-4 text-gradient">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 group hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                <Phone size={16} className="text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">+91 xxx-xxxx</span>
              </div>
              <div className="flex items-center space-x-3 group hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                <Mail size={16} className="text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">contact@Glitzevara.com</span>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                <MapPin size={16} className="text-gold-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">123 pune, 411001</span>
              </div>
            </div>
            
            <h4 className="text-md font-serif font-semibold mb-3">Join Our Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                aria-label="Email for newsletter"
              />
              <button 
                className="px-4 py-2 bg-gold-600 hover:bg-gold-700 rounded-r-md transition-colors duration-300 flex items-center"
                aria-label="Subscribe to newsletter"
              >
                <span className="mr-1">Join</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Glitzevara. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/shipping-info" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Shipping Info
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;