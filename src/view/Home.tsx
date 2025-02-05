import React from 'react';
import { Hero } from '../components/Hero';
import { FlashSale } from '../components/FlashSale';
import { Categories } from '../components/Categories';
import { BestSellers } from '../components/BestSellers';
import { EnhanceMusic } from '../components/EnhanceMusic';
import { OurProducts } from '../components/OurProducts';
import { NewArrival } from '../components/NewArrival';
import { Services } from '../components/Services';

function Home() {
  return (
    <div>
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 py-8">
          <ul className="space-y-4">
            <li className="flex items-center justify-between cursor-pointer hover:text-red-500">
              <span>Woman's Fashion</span>
              <span>›</span>
            </li>
            <li className="flex items-center justify-between cursor-pointer hover:text-red-500">
              <span>Men's Fashion</span>
              <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-red-500">Electronics</li>
            <li className="cursor-pointer hover:text-red-500">Home & Lifestyle</li>
            <li className="cursor-pointer hover:text-red-500">Medicine</li>
            <li className="cursor-pointer hover:text-red-500">Sports & Outdoor</li>
            <li className="cursor-pointer hover:text-red-500">Baby's & Toys</li>
            <li className="cursor-pointer hover:text-red-500">Groceries & Pets</li>
            <li className="cursor-pointer hover:text-red-500">Health & Beauty</li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <Hero />
        </div>
      </div>
      
      <FlashSale />
      <Categories />
      <BestSellers />
      <EnhanceMusic />
      <OurProducts />
      <NewArrival />
      <Services />
    </div>
  );
}

export default Home;
