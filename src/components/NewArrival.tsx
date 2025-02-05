import { ChevronRight } from 'lucide-react';
import { newArrivalItems } from '../store/data';

interface ArrivalsCardProps {
  item: {
    id: number;
    name: string;
    image: string;
    text: string;
  };
  size: 'large' | 'medium' | 'small';
}

const ArrivalsCard = ({ item, size }: ArrivalsCardProps) => {
  const sizeClasses = {
    large: "h-[500px] p-8",
    medium: "h-[242px] p-6",
    small: "h-[200px] p-4"
  };

  const textClasses = {
    large: "bottom-8 left-8 max-w-[80%]",
    medium: "bottom-8 left-8 max-w-[80%]",
    small: "bottom-4 left-4 max-w-[90%]"
  };

  const titleClasses = {
    large: "text-2xl",
    medium: "text-2xl",
    small: "text-xl"
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden relative group">
      {/* Overlay при наведении */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <img 
        src={item.image} 
        alt={item.name}
        className={`
          w-full object-contain transition-transform duration-500
          ${sizeClasses[size]}
          group-hover:scale-105
        `}
      />

      <div className={`
        absolute ${textClasses[size]} text-white z-10
        transform transition-all duration-300
        group-hover:translate-y-[-8px]
      `}>
        <h3 className={`
          font-bold mb-2 
          ${titleClasses[size]}
          group-hover:text-[#DB4444]
          transition-colors duration-300
        `}>
          {item.name}
        </h3>
        <p className={`
          ${size === 'small' ? 'text-xs mb-2' : 'text-sm mb-4'}
          opacity-90
        `}>
          {item.text}
        </p>
        <button className="
          text-white flex items-center gap-2 group/btn
          hover:text-[#DB4444] transition-colors duration-300
        ">
          Shop Now 
          <ChevronRight 
            size={size === 'small' ? 16 : 20} 
            className="
              transition-transform duration-300
              group-hover/btn:translate-x-1
            "
          />
        </button>
      </div>
    </div>
  );
};

export function NewArrival() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
          <div>
            <div className="text-[#DB4444] font-medium mb-1">Featured</div>
            <h2 className="text-2xl font-bold">New Arrival</h2>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Large Card */}
          <ArrivalsCard 
            item={newArrivalItems[0]} 
            size="large"
          />

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-4">
            {/* Medium Card */}
            <ArrivalsCard 
              item={newArrivalItems[1]} 
              size="medium"
            />

            {/* Small Cards */}
            <div className="grid grid-cols-2 gap-4">
              <ArrivalsCard 
                item={newArrivalItems[2]} 
                size="small"
              />
              <ArrivalsCard 
                item={newArrivalItems[3]} 
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 