import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Necklaces',
      description: 'Elegant pieces for every occasion',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: '/category/necklaces'
    },
    {
      id: 2,
      name: 'Rings',
      description: 'Symbols of commitment and style',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: '/category/rings'
    },
    {
      id: 3,
      name: 'Earrings',
      description: 'From subtle studs to statement pieces',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: '/category/earrings'
    },
    {
      id: 4,
      name: 'Bracelets',
      description: 'Timeless elegance for your wrist',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: '/category/bracelets'
    },
    {
      id: 5,
      name: 'Mangalsutra',
      description: 'Sacred symbols of marriage',
      image: 'https://images.unsplash.com/photo-1630018548696-e1900d7172dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: '/category/mangalsutra'
    },
    {
      id: 6,
      name: "Men's Collection",
      description: 'Sophisticated pieces for the modern man',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      link: '/category/mens-collection'
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gradient">Explore Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our curated selection of fine jewelry, each piece meticulously crafted to perfection.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="block group"
            >
              <div className="luxury-card h-full overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="relative h-80 image-zoom">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-white/90 mb-4">{category.description}</p>
                    <span className="inline-block py-2 px-4 border border-white/30 rounded hover:bg-white/20 transition-colors duration-300">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;