import React, { useState } from 'react';
import Link from 'next/link';
import { X, Compass, Zap, Leaf, Heart, Briefcase, Code, Gamepad2, ShoppingCart, GraduationCap, Camera, Music } from 'lucide-react';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { 
    name: 'Technology', 
    icon: Code, 
    color: 'from-blue-500 to-purple-600',
    description: 'AI, Software, Hardware & Innovation'
  },
  { 
    name: 'Environment', 
    icon: Leaf, 
    color: 'from-green-500 to-emerald-600',
    description: 'Sustainability & Green Solutions'
  },
  { 
    name: 'Social', 
    icon: Heart, 
    color: 'from-pink-500 to-rose-600',
    description: 'Community & Social Impact'
  },
  { 
    name: 'Business', 
    icon: Briefcase, 
    color: 'from-orange-500 to-amber-600',
    description: 'Enterprise & B2B Solutions'
  },
  { 
    name: 'Gaming', 
    icon: Gamepad2, 
    color: 'from-purple-500 to-indigo-600',
    description: 'Games & Entertainment'
  },
  { 
    name: 'E-commerce', 
    icon: ShoppingCart, 
    color: 'from-cyan-500 to-blue-600',
    description: 'Online Retail & Marketplaces'
  },
  { 
    name: 'Education', 
    icon: GraduationCap, 
    color: 'from-violet-500 to-purple-600',
    description: 'Learning & EdTech'
  },
  { 
    name: 'Media', 
    icon: Camera, 
    color: 'from-red-500 to-pink-600',
    description: 'Content & Creative Tools'
  }
];

const ExploreModal: React.FC<ExploreModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Compass className="size-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Explore Categories</h2>
                <p className="text-white/80 text-sm">Discover startups by category</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="size-4 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  href={`/category/${category.name}`}
                  onClick={onClose}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="size-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                          {category.description}
                        </p>
                      </div>
                      <Zap className="size-4 text-gray-400 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Can't find what you're looking for? 
            <Link href="/startup/create" className="text-purple-600 hover:text-purple-700 font-semibold ml-1 transition-colors duration-200">
              Create your own startup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreModal;