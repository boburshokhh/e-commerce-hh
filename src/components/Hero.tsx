import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?w=1200',
    title: 'iPhone 14 Series',
    discount: '10%',
    buttonText: 'Shop Now'
  },
  {
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200',
    title: 'Latest Smartphones',
    discount: '15%',
    buttonText: 'Learn More'
  },
  {
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200',
    title: 'Smart Watches',
    discount: '20%',
    buttonText: 'Buy Now'
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg text-white">
                    <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-2xl mb-8">Up to {slide.discount} off Voucher</p>
                    <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center space-x-2">
                      <span>{slide.buttonText}</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/75 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-100' 
                : 'bg-white/50 scale-75 hover:scale-90'
            }`}
          />
        ))}
      </div>
    </div>
  );
}