import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <span className="text-xs sm:text-sm mb-2 sm:mb-0">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm">English</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold">Exclusive</div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                }
              >
                Contact
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/signup" 
                className={({ isActive }) => 
                  isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                }
              >
                Sign Up
              </NavLink>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Search Icon for Mobile */}
              <button 
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>

              {/* Search Input - Desktop */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-[200px] lg:w-[300px] pl-4 pr-10 py-2 bg-gray-100 rounded-md focus:outline-none"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-500 transition-colors" />
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-red-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Mobile Search - Conditional Render */}
          {isSearchOpen && (
            <div className="mt-4 md:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-4 pr-10 py-2 bg-gray-100 rounded-md focus:outline-none"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          )}

          {/* Mobile Navigation Menu - Conditional Render */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                  }
                >
                  Contact
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                  }
                >
                  About
                </NavLink>
                <NavLink 
                  to="/signup" 
                  className={({ isActive }) => 
                    isActive ? "hover:text-red-500 transition-colors border-b-2 border-red-500" : "hover:text-red-500 transition-colors"
                  }
                >
                  Sign Up
                </NavLink>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}