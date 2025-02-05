import { useState } from 'react';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from "../data/products"
export function OurProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <div>
              <div className="text-red-500 font-medium">Our Products</div>
              <h2 className="text-2xl font-bold">Explore Our Products</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full border hover:bg-gray-100 transition-colors duration-200" 
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="p-2 rounded-full border hover:bg-gray-100 transition-colors duration-200" 
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-50 p-4 rounded-lg relative group hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1.5 rounded-full font-medium animate-pulse">
                  NEW
                </span>
              )}
              
              <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[180px] max-h-[180px] w-auto h-auto object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error(`Failed to load image: ${product.image}`);
                    e.currentTarget.src = 'https://placehold.co/400x400';
                  }}
                />
                
                {/* Action Buttons */}
                <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200" 
                    aria-label="Add to Wishlist"
                  >
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                  <button 
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200" 
                    aria-label="View Details"
                  >
                    <Eye className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                {hoveredProduct === product.id && (
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2.5 font-medium opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-800">
                    Add To Cart
                  </button>
                )}
              </div>

              <div className="space-y-2">
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

        {/* View All Products Button */}
        <div className="flex justify-center mt-12">
          <button className="px-12 py-4 bg-[#DB4444] text-white rounded hover:bg-red-600 transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
} 