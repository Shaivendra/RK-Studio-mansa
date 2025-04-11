
import React from 'react';
import { cn } from '@/lib/utils';

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const GalleryFilter = ({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          activeCategory === 'all' 
            ? "bg-primary text-primary-foreground" 
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
        onClick={() => onCategoryChange('all')}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === category 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
