
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PhotoCard from './PhotoCard';
import { photos } from '@/data/photos';

interface FeaturedSectionProps {
  title: string;
  subtitle: string;
  linkTo: string;
  linkText: string;
}

const FeaturedSection = ({ title, subtitle, linkTo, linkText }: FeaturedSectionProps) => {
  // Get the first 6 photos for the featured section
  const featuredPhotos = photos.slice(0, 6);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <Button asChild variant="link" className="mt-4 md:mt-0 p-0">
            <Link to={linkTo} className="flex items-center">
              {linkText} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="gallery-grid">
          {featuredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              id={photo.id}
              title={photo.title}
              imageUrl={photo.imageUrl}
              category={photo.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
