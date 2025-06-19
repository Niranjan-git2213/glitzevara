import React, { useState } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

// Define interface for Instagram post
interface InstagramPost {
  id: number;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  username: string;
}

const InstagramFeed: React.FC = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const instagramPosts: InstagramPost[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
      likes: 1834,
      comments: 42,
      caption: 'Our signature diamond collection has arrived ✨ #LuxuryJewelry',
      username: 'Glitzevara_official'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
      likes: 2187,
      comments: 63,
      caption: 'Handcrafted with love and precision 💎 #ArtisanJewelry',
      username: 'Glitzevara_official'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
      likes: 1956,
      comments: 38,
      caption: 'The perfect gift for that special someone 🎁 #GiftIdeas',
      username: 'Glitzevara_official'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
      likes: 2476,
      comments: 71,
      caption: 'Elegance is an attitude ✨ #LuxuryLifestyle',
      username: 'Glitzevara_official'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1633810542706-90e5ff7557be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
      likes: 1843,
      comments: 52,
      caption: 'Behind the scenes at our atelier in Paris 🇫🇷 #CraftedWithLove',
      username: 'Glitzevara_official'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80',
      likes: 2198,
      comments: 47,
      caption: 'Timeless pieces for the modern gentleman 🕰️ #MensCollection',
      username: 'Glitzevara_official'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeDown">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-8 h-8 text-gradient" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gradient">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>
            Discover our latest creations, behind-the-scenes moments, and styling inspiration
          </p>
          <a
            href="https://instagram.com/Glitzevara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gradient hover:opacity-80 font-medium mt-4 transition-all"
            style={{animationDelay: '0.3s'}}
          >
            <span>@Glitzevara_official</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 animate-floatUp">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer luxury-card"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-between p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-left">
                  <div className="text-xs font-medium">{post.username}</div>
                </div>
                
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs line-clamp-2 mb-2">{post.caption}</p>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3 fill-current" />
                      <span className="text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span className="text-xs">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeDown" style={{animationDelay: '0.4s'}}>
          <a
            href="https://instagram.com/Glitzevara"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button-outline inline-flex items-center space-x-2 hover:scale-105 transition-transform"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={20} />
            <span>Follow Our Collection</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;