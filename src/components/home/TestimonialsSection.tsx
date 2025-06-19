import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Define interface for testimonial data
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sophia Reynolds',
      location: 'New York',
      rating: 5,
      text: 'Absolutely stunning jewelry! The craftsmanship is exceptional and the designs are timeless. I have received countless compliments on my necklace from the Luxury Collection.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      id: 2,
      name: 'James Wilson',
      location: 'Los Angeles',
      rating: 5,
      text: 'The customer service at Glitzevara is outstanding. My custom ring exceeded all expectations - the attention to detail is remarkable. The packaging was also exquisite!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      id: 3,
      name: 'Emma Chen',
      location: 'Chicago',
      rating: 5,
      text: 'I purchased a bracelet for my anniversary and was blown away by the quality. The diamonds catch the light perfectly, and the design is both modern and elegant. Worth every penny!',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      location: 'Miami',
      rating: 5,
      text: 'As someone who rarely wears jewelry, I was hesitant to invest in a luxury piece. The team at Glitzevara guided me to the perfect watch that I now wear daily. Exceptional quality and service.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      id: 5,
      name: 'Olivia Parker',
      location: 'Boston',
      rating: 5,
      text: 'The earrings I purchased for my daughter\'s graduation were simply perfect. The packaging was luxurious, and the personalized note was a thoughtful touch. We will be customers for life!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (autoplay) {
      interval = setInterval(() => {
        changeTestimonial((currentTestimonial + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentTestimonial, autoplay, testimonials.length]);

  const changeTestimonial = (index: number) => {
    if (currentTestimonial === index || isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextTestimonial = () => {
    changeTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    changeTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient animate-fadeDown">
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fadeDown" style={{animationDelay: '0.2s'}}>
            Discover what our valued clients have to say about their Glitzevara experience
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="luxury-card p-8 md:p-10 text-center shadow-xl relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote size={60} className="text-gold-600" />
            </div>
            
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic font-light leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-amber-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;