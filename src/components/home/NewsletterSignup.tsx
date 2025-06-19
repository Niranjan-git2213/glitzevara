import React, { useState, useRef, useEffect } from 'react';
import { Mail, Check, ArrowRight, Gift, Shield, Bell } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => setIsSubscribed(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 animate-fadeDown">
            <Mail className="w-8 h-8 text-gold-400" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient">
              Join Our Exclusive Circle
            </h2>
          </div>
          
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto animate-fadeDown" style={{animationDelay: '0.2s'}}>
            Subscribe to receive VIP access to new collections, private events, and personalized styling advice from our jewelry experts.
          </p>

          {isSubscribed ? (
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg p-8 max-w-md mx-auto animate-fadeDown shadow-glow-sm">
              <div className="flex items-center justify-center space-x-3 text-green-400">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium text-lg">Successfully subscribed!</span>
              </div>
              <p className="text-green-300 mt-3">
                Thank you for joining our exclusive circle. We've sent a welcome gift to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-fadeDown" style={{animationDelay: '0.3s'}}>
              <div className={`flex flex-col sm:flex-row gap-4 relative transition-all duration-300 ${isInputFocused ? 'transform -translate-y-1' : ''}`}>
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 shadow-glow-sm"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="luxury-button px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed group transition-all duration-300 hover:shadow-glow-sm"
                  aria-label="Subscribe to newsletter"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>{isLoading ? 'Subscribing...' : 'Subscribe'}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </form>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-floatUp">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-transform hover:transform hover:scale-105 hover:shadow-glow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-400/20 mb-4">
                <Gift className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-gray-300">Satisfied Clients</div>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-transform hover:transform hover:scale-105 hover:shadow-glow-sm" style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-400/20 mb-4">
                <Shield className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">1500+</div>
              <div className="text-gray-300">Artisan Creations</div>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-transform hover:transform hover:scale-105 hover:shadow-glow-sm" style={{animationDelay: '0.4s'}}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-400/20 mb-4">
                <Bell className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">5★</div>
              <div className="text-gray-300">Excellence Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;