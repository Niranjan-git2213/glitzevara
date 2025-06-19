import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  
  const slides = [
    {
      id: 1,
      title: "Timeless Elegance",
      subtitle: "Discover our exclusive collection of handcrafted jewelry",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      cta: "Explore Collection",
      link: "/collections/all",
      align: "left",
      textColor: "text-white",
      overlayOpacity: "bg-black/30"
    },
    {
      id: 2,
      title: "Luxury Redefined",
      subtitle: "Elevate your style with our premium diamond jewelry",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      cta: "Shop Diamonds",
      link: "/category/diamonds",
      align: "center",
      textColor: "text-white",
      overlayOpacity: "bg-black/40"
    },
    {
      id: 3,
      title: "Artisan Craftsmanship",
      subtitle: "Each piece tells a story of heritage and excellence",
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      cta: "Our Story",
      link: "/about",
      align: "right",
      textColor: "text-white",
      overlayOpacity: "bg-black/30"
    },
  ];

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, slides.length]);

  useEffect(() => {
    if (!autoplayPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [nextSlide, autoplayPaused]);

  const handleMouseEnter = () => {
    setAutoplayPaused(true);
  };

  const handleMouseLeave = () => {
    setAutoplayPaused(false);
  };

  return (
    <div 
      className="relative h-[80vh] overflow-hidden" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background Image with Overlay */}
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 ${slide.overlayOpacity}`}></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Content */}
          <div className={`absolute inset-0 flex items-center ${slide.align === 'left' ? 'justify-start' : slide.align === 'right' ? 'justify-end' : 'justify-center'} p-8 md:p-16`}>
            <div className={`max-w-lg ${currentSlide === index ? 'animate-fadeDown' : ''}`}>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 ${slide.textColor} text-gradient`}>
                {slide.title}
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${slide.textColor}`}>
                {slide.subtitle}
              </p>
              <Link 
                to={slide.link} 
                className="luxury-button inline-block"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold-500"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;