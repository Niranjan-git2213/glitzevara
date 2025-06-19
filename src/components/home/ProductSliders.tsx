import React from 'react';
import ProductCarousel from '../common/ProductCarousel';

const ProductSliders: React.FC = () => {
  // New Arrivals data
  const newArrivals = [
    {
      id: 1,
      name: 'Diamond Solitaire Pendant',
      price: 1299.99,
      originalPrice: 1599.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Necklaces',
      isNew: true
    },
    {
      id: 2,
      name: 'Emerald Halo Engagement Ring',
      price: 2499.99,
      originalPrice: 2999.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Rings',
      isNew: true
    },
    {
      id: 3,
      name: 'Pearl Drop Earrings',
      price: 899.99,
      originalPrice: 1099.99,
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Earrings',
      isNew: true
    },
    {
      id: 4,
      name: 'Rose Gold Tennis Bracelet',
      price: 1799.99,
      originalPrice: 2199.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Bracelets',
      isNew: true
    },
    {
      id: 5,
      name: 'Sapphire and Diamond Necklace',
      price: 3499.99,
      originalPrice: 3999.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Necklaces',
      isNew: true
    },
    {
      id: 6,
      name: 'Platinum Wedding Band',
      price: 1299.99,
      originalPrice: 1599.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Rings',
      isNew: true
    },
  ];

  // Best Sellers data
  const bestSellers = [
    {
      id: 7,
      name: 'Classic Diamond Stud Earrings',
      price: 999.99,
      originalPrice: 1299.99,
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Earrings',
      isBestSeller: true
    },
    {
      id: 8,
      name: 'Infinity Diamond Bracelet',
      price: 1499.99,
      originalPrice: 1899.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Bracelets',
      isBestSeller: true
    },
    {
      id: 9,
      name: 'Three Stone Diamond Ring',
      price: 2999.99,
      originalPrice: 3499.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Rings',
      isBestSeller: true
    },
    {
      id: 10,
      name: 'Diamond Heart Pendant',
      price: 1199.99,
      originalPrice: 1499.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Necklaces',
      isBestSeller: true
    },
    {
      id: 11,
      name: 'Diamond Hoop Earrings',
      price: 1299.99,
      originalPrice: 1599.99,
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Earrings',
      isBestSeller: true
    },
    {
      id: 12,
      name: 'Sapphire Tennis Bracelet',
      price: 1899.99,
      originalPrice: 2299.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Bracelets',
      isBestSeller: true
    },
  ];

  // Luxury Collection data
  const luxuryCollection = [
    {
      id: 13,
      name: 'Diamond Rivière Necklace',
      price: 12999.99,
      originalPrice: 15999.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Luxury',
      isNew: true
    },
    {
      id: 14,
      name: 'Emerald Cut Diamond Ring',
      price: 8999.99,
      originalPrice: 10999.99,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Luxury',
      isBestSeller: true
    },
    {
      id: 15,
      name: 'Chandelier Diamond Earrings',
      price: 7499.99,
      originalPrice: 8999.99,
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Luxury',
      isNew: true
    },
    {
      id: 16,
      name: 'Diamond and Ruby Bracelet',
      price: 9999.99,
      originalPrice: 11999.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Luxury',
      isBestSeller: true
    },
    {
      id: 17,
      name: 'Sapphire and Diamond Tiara',
      price: 24999.99,
      originalPrice: 29999.99,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Luxury',
      isNew: true
    },
    {
      id: 18,
      name: 'Diamond Encrusted Watch',
      price: 18999.99,
      originalPrice: 22999.99,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Luxury',
      isBestSeller: true
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* New Arrivals Carousel */}
        <ProductCarousel
          title="New Arrivals"
          subtitle="Be the first to showcase our latest designs"
          products={newArrivals}
          viewAllLink="/collections/new-arrivals"
        />
        
        {/* Best Sellers Carousel */}
        <div className="mt-20">
          <ProductCarousel
            title="Best Sellers"
            subtitle="Our most loved pieces that stand the test of time"
            products={bestSellers}
            viewAllLink="/collections/best-sellers"
          />
        </div>
        
        {/* Luxury Collection Carousel */}
        <div className="mt-20">
          <ProductCarousel
            title="Luxury Collection"
            subtitle="Exquisite pieces for those who appreciate the extraordinary"
            products={luxuryCollection}
            viewAllLink="/collections/luxury"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSliders;