
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  className?: string;
}

const VideoCard = ({ id, title, thumbnailUrl, duration, className }: VideoCardProps) => {
  return (
    <Link to={`/video/${id}`} className={cn("block group", className)}>
      <div className="image-container">
        <img src={thumbnailUrl} alt={title} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
            <Play className="h-8 w-8 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
          {duration}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white font-medium text-lg">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
