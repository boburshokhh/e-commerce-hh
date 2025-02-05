import { newArrivals } from '../data';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export function NewArrivals() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-red-500 font-medium mb-1">New Arrivals</div>
            <h2 className="text-2xl font-bold">Latest Products</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
              View All
            </button>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full border hover:bg-gray-100" aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <button className="p-2 rounded-full border hover:bg-gray-100" aria-label="Next">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute top-2 right-2 space-y-2">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100" aria-label="Add to Wishlist">
                    <Heart size={20} />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100" aria-label="View Details">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              <h3 className="font-semibold mb-2">{product.name}</h3>

              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through">${product.oldPrice}</span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < product.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <span className="text-gray-500">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
