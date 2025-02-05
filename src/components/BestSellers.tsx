import { bestSellers } from '../data';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function BestSellers() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-3 sm:w-5 h-8 sm:h-10 bg-red-500 rounded-sm" />
            <div>
              <div className="text-red-500 font-medium mb-1 text-sm sm:text-base">This Month</div>
              <h2 className="text-xl sm:text-2xl font-bold">Best Selling Products</h2>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
            <button className="px-4 sm:px-8 py-2 bg-red-500 text-white text-sm sm:text-base rounded hover:bg-red-600 transition-colors duration-300">
              View All
            </button>
            <div className="flex space-x-2">
              <button className="p-1.5 sm:p-2 rounded-full border hover:bg-gray-100 transition-colors duration-200" aria-label="Previous">
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button className="p-1.5 sm:p-2 rounded-full border hover:bg-gray-100 transition-colors duration-200" aria-label="Next">
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bestSellers.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-50 p-2 sm:p-4 rounded-lg relative group hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-[140px] sm:h-[200px] flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[120px] sm:max-w-[180px] max-h-[120px] sm:max-h-[180px] w-auto h-auto object-contain mb-4"
                  onError={(e) => {
                    console.error(`Failed to load image: ${product.image}`);
                    e.currentTarget.src = 'https://placehold.co/400x400';
                  }}
                />
                
                {/* Action Buttons */}
                <div className="absolute top-2 right-2 space-y-1 sm:space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-white p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200" 
                    aria-label="Add to Wishlist"
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                  <button 
                    className="bg-white p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200" 
                    aria-label="View Details"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-blue-500 transition-colors" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                {hoveredProduct === product.id && (
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 sm:py-2.5 text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-800">
                    Add To Cart
                  </button>
                )}
              </div>

              <div className="space-y-1 sm:space-y-2">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-red-500 transition-colors duration-200 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-bold text-base sm:text-lg">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-xs sm:text-sm">${product.oldPrice}</span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className="transform hover:scale-110 transition-transform duration-200"
                      >
                        {i < product.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>

                {/* Color Options */}
                {product.colors && (
                  <div className="flex space-x-2 mt-2">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-4 h-4 rounded-full border hover:scale-125 transition-transform duration-200 cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
