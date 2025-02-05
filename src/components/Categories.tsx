import { categories } from '../data';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryIcons: Record<string, keyof typeof Icons> = {
  "Phones": "Smartphone",
  "Computers": "Monitor",
  "SmartWatch": "Watch",
  "Camera": "Camera",
  "HeadPhones": "Headphones",
  "Gaming": "Gamepad",
  "Electronics": "Cpu",
  "Furniture": "Sofa",
  "Fashion": "Shirt",
  "Accessories": "Watch",
  "Sports": "Dumbbell",
  "Beauty": "Sparkles",
  "Health": "Heart",
  "Medicine": "Pill",
  "Books": "BookOpen",
  "Groceries": "ShoppingCart",
  "Pets": "Cat",
  "Baby": "Baby",
  "Toys": "Puzzle",
  "Outdoor": "Tent"
};

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Browse By Category</h2>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border hover:border-red-500"
            >
              <Icons.ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border hover:border-red-500"
            >
              <Icons.ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            // Получаем название иконки из маппинга или используем дефолтную иконку
            const iconName = categoryIcons[category.name] || category.icon;
            const IconComponent = Icons[iconName as keyof typeof Icons] as LucideIcon;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={category.id}
                className="flex flex-col items-center justify-center p-6 bg-white border rounded-xl hover:border-red-500 cursor-pointer transition-all hover:shadow-lg group"
              >
                {IconComponent ? (
                  <IconComponent 
                    size={32} 
                    className="mb-3 group-hover:text-red-500 transition-colors" 
                  />
                ) : (
                  <div className="w-16 h-16 mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icons.Package size={24} className="text-gray-400" />
                  </div>
                )}
                <span className="text-sm font-medium group-hover:text-red-500 transition-colors">
                  {category.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}