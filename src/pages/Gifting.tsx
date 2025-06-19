import React from 'react';
import { Gift, Heart, Star, Crown } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';

const Gifting: React.FC = () => {
  const giftCategories = [
    {
      title: 'Gifts for Her',
      description: 'Elegant pieces that celebrate her unique style',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/products/gifts-for-her'
    },
    {
      title: 'Gifts for Him',
      description: 'Sophisticated jewelry for the modern gentleman',
      icon: Crown,
      image: 'https://images.pexels.com/photos/8839847/pexels-photo-8839847.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/products/gifts-for-him'
    },
    {
      title: 'Luxury Collection',
      description: 'Premium pieces for special occasions',
      icon: Star,
      image: 'https://images.pexels.com/photos/1721988/pexels-photo-1721988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/products/luxury-gifts'
    },
    {
      title: 'Under ₹5,000',
      description: 'Beautiful gifts that won\'t break the bank',
      icon: Gift,
      image: 'https://images.pexels.com/photos/1927363/pexels-photo-1927363.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/products/gifts-under-5000'
    }
  ];

  const featuredGifts = [
    {
      id: 'gift-1',
      name: 'Elegant Pearl Necklace',
      price: 2899,
      originalPrice: 3299,
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'necklaces',
      isNew: true
    },
    {
      id: 'gift-2',
      name: 'Diamond Stud Earrings',
      price: 4599,
      originalPrice: 5299,
      image: 'https://images.pexels.com/photos/1927363/pexels-photo-1927363.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'earrings',
      isBestSeller: true
    },
    {
      id: 'gift-3',
      name: 'Rose Gold Bracelet',
      price: 1899,
      originalPrice: 2199,
      image: 'https://images.pexels.com/photos/1445704/pexels-photo-1445704.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'bracelets'
    },
    {
      id: 'gift-4',
      name: 'Vintage Ring Set',
      price: 3299,
      originalPrice: 3899,
      image: 'https://images.pexels.com/photos/1721988/pexels-photo-1721988.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      category: 'rings'
    }
  ];

  const occasions = [
    { name: 'Anniversary', image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Birthday', image: 'https://images.pexels.com/photos/1927363/pexels-photo-1927363.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Wedding', image: 'https://images.pexels.com/photos/1721988/pexels-photo-1721988.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Graduation', image: 'https://images.pexels.com/photos/1445704/pexels-photo-1445704.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Valentine\'s Day', image: 'https://images.pexels.com/photos/8839869/pexels-photo-8839869.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Mother\'s Day', image: 'https://images.pexels.com/photos/8839847/pexels-photo-8839847.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Gift className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Perfect Gifts for Every Occasion
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover our curated collection of jewelry gifts that create lasting memories 
              and celebrate life's most precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Gift Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find the perfect gift for your loved ones with our specially curated collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {giftCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group luxury-card overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-pink-500" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <button className="text-pink-600 hover:text-pink-700 font-medium text-sm">
                      Explore Collection →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Gifts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Gift Ideas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked pieces that make unforgettable gifts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredGifts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Occasion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Occasion
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find the perfect piece for every special moment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {occasions.map((occasion, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                  {occasion.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Services */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Gift Services
              </h2>
              <p className="text-gray-600 text-lg">
                We make gifting effortless with our premium services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Luxury Gift Wrapping</h3>
                <p className="text-gray-600 text-sm">
                  Complimentary premium gift wrapping with every purchase
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Message</h3>
                <p className="text-gray-600 text-sm">
                  Add a personalized message card to make it extra special
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Gift Cards</h3>
                <p className="text-gray-600 text-sm">
                  Let them choose with our digital and physical gift cards
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="luxury-button px-8 py-3">
                Buy Gift Card
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gifting;