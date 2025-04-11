
import React from 'react';
import { Link } from 'react-router-dom';
import { Photographer } from '@/data/photographer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Camera, Instagram, Facebook, Twitter, Globe } from 'lucide-react';

interface PhotographerCardProps {
  photographer: Photographer;
}

const PhotographerCard = ({ photographer }: PhotographerCardProps) => {
  return (
    <div className="bg-muted p-6 rounded-lg h-full flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={photographer.profileImage} alt={photographer.name} className="object-cover" />
          <AvatarFallback>{photographer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold mb-1">{photographer.name}</h2>
        <p className="text-muted-foreground text-sm">{photographer.role}</p>
      </div>
      
      <div className="mb-4 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-4 mb-4">
          {photographer.bio.substring(0, 150)}...
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {photographer.specialties.slice(0, 3).map((specialty, index) => (
            <div key={index} className="bg-background px-2 py-1 rounded-full text-xs flex items-center">
              <Camera className="h-3 w-3 mr-1" />
              {specialty}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-center space-x-3 mb-4">
          {photographer.socialLinks.instagram && (
            <a 
              href={photographer.socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
          {photographer.socialLinks.facebook && (
            <a 
              href={photographer.socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          )}
          {photographer.socialLinks.twitter && (
            <a 
              href={photographer.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {photographer.socialLinks.website && (
            <a 
              href={photographer.socialLinks.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background p-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>
        
        <Button variant="outline" className="w-full text-sm" asChild>
          <Link to={`/photographer/${photographer.id}`}>View Profile</Link>
        </Button>
      </div>
    </div>
  );
};

export default PhotographerCard;
