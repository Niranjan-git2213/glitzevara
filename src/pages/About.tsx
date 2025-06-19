import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Quality Craftsmanship',
      description: 'Every piece is meticulously crafted by skilled artisans using the finest materials and traditional techniques.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction and strive to exceed expectations with every interaction.'
    },
    {
      icon: Award,
      title: 'Authentic Excellence',
      description: 'All our jewelry comes with certificates of authenticity and lifetime warranty on manufacturing defects.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'We support local artisan communities and contribute to sustainable jewelry practices.'
    }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'With over 15 years in luxury jewelry, Priya founded Glitzevara to make exquisite jewelry accessible to everyone.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Rajesh brings traditional craftsmanship into modern designs, creating timeless pieces that tell stories.'
    },
    {
      name: 'Anita Desai',
      role: 'Quality Assurance',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Anita ensures every piece meets our highest standards before reaching our customers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Founded with a passion for exquisite craftsmanship and timeless elegance, 
              Glitzevara has been creating jewelry that speaks volumes about your unique style and personality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Glitzevara, we believe that jewelry is more than just an accessory – it's a form of self-expression, 
                a celebration of life's precious moments, and a legacy that passes from generation to generation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is to create exceptional jewelry pieces that combine traditional craftsmanship with 
                contemporary design, making luxury accessible to everyone who appreciates beauty and quality.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">1000+</div>
                  <div className="text-sm text-gray-600">Unique Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values guide everything we do, from design to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="luxury-card p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate individuals behind Glitzevara who bring your jewelry dreams to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="luxury-card p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              From our humble beginnings as a small family business to becoming a trusted name in luxury jewelry, 
              our journey has been guided by an unwavering commitment to quality, authenticity, and customer satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">2009</div>
                <div className="text-gray-300">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-gray-300">Authentic Jewelry</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-gray-300">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;