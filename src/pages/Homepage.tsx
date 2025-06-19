import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import ProductSliders from '../components/home/ProductSliders';
import PromoBanner from '../components/home/PromoBanner';
import TestimonialsSection from '../components/home/TestimonialsSection';
// import InstagramFeed from '../components/home/InstagramFeed';
import NewsletterSignup from '../components/home/NewsletterSignup';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <CategoryGrid />
      <ProductSliders />
      <PromoBanner />
      <TestimonialsSection />
      {/* <InstagramFeed /> */}
      <NewsletterSignup />
    </div>
  );
};

export default Homepage;