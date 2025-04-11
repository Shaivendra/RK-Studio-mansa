
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  className?: string;
}

const PhotoCard = ({ id, title, imageUrl, category, className }: PhotoCardProps) => {
  return (
    <Link to={`/photo/${id}`} className={cn("block group", className)}>
      <div className="image-container">
        <img src={imageUrl} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white font-medium text-lg">{title}</h3>
            <p className="text-white/80 text-sm">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
