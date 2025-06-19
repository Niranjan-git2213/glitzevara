import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Clock, ArrowRight } from 'lucide-react';

const PromoBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fadeDown">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium">Limited Time Exclusive</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-6">
              Luxury Collection<br />Private Access
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Experience our most exclusive pieces with 30% off for VIP members. Each piece is handcrafted by master artisans using ethically sourced materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                to="/collections/luxury"
                className="luxury-button inline-flex items-center space-x-2 group px-8 py-4 text-base"
                aria-label="Shop luxury collection"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="glass-card px-6 py-4 rounded-lg flex items-center space-x-3 border border-white/20 hover:border-gold-400/50 transition-all duration-300 group">
                <Gift className="w-5 h-5 text-gold-400 group-hover:animate-pulse" />
                <div>
                  <span className="text-sm text-gray-300 block">Use Code:</span>
                  <span className="font-bold text-gradient text-lg tracking-wider">LUXE30</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Luxury Gift Box</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Certificate of Authenticity</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-floatUp">
            <div className="luxury-card p-2 rounded-lg overflow-hidden shadow-glow">
              <div className="image-zoom overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Luxury Jewelry Collection"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 animate-pulse">
              <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-6 py-6 rounded-full font-bold transform rotate-12 shadow-glow-sm flex items-center justify-center">
                <div className="text-center transform -rotate-12">
                  <div className="text-sm font-normal">SAVE</div>
                  <div className="text-2xl font-bold">30%</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-glow-sm">
              <div className="text-sm font-medium text-gradient">Ends in 48 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;