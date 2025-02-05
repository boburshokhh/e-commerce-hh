import React, { useState } from 'react';
import { products } from '../data';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

function CountdownTimer() {
  const [time, setTime] = React.useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return {
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <div className="text-center">
        <div className="text-2xl font-bold">{String(time.days).padStart(2, '0')}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{String(time.hours).padStart(2, '0')}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{String(time.minutes).padStart(2, '0')}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{String(time.seconds).padStart(2, '0')}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
}

export function FlashSale() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <div>
              <div className="text-red-500 font-medium mb-1">Today's</div>
              <h2 className="text-2xl font-bold">Flash Sales</h2>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <CountdownTimer />
            <div className="flex space-x-2">
              <button className="p-2 rounded-full border hover:bg-gray-100 transition-colors duration-200">
                <ChevronLeft size={24} />
              </button>
              <button className="p-2 rounded-full border hover:bg-gray-100 transition-colors duration-200">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-50 p-4 rounded-lg relative group hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-medium z-10">
                    -{product.discount}%
                  </span>
                )}
                <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-[180px] max-h-[180px] w-auto h-auto object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: ${product.image}`);
                      e.currentTarget.src = 'https://placehold.co/400x400';
                    }}
                  />
                  <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200">
                      <Eye className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
                    </button>
                  </div>

                  {hoveredProduct === product.id && (
                    <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2.5 font-medium opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-800">
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-bold text-lg">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < product.rating ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}