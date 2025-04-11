
import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter, Globe } from 'lucide-react';

interface ContactInfoProps {
  profileImage: string;
  name: string;
  email: string;
  phone: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    website?: string;
  };
}

const ContactInfo = ({ profileImage, name, email, phone, socialLinks }: ContactInfoProps) => {
  return (
    <div className="sticky top-24">
      <div className="rounded-lg overflow-hidden mb-6">
        <img 
          src={profileImage} 
          alt={name} 
          className="w-full h-auto"
        />
      </div>
      
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <div className="text-muted-foreground mb-6">Professional Photographer</div>
      
      <div className="flex space-x-3 mb-8">
        {socialLinks.instagram && (
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        )}
        
        {socialLinks.facebook && (
          <a 
            href={socialLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
        )}
        
        {socialLinks.twitter && (
          <a 
            href={socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
        )}
        
        {socialLinks.website && (
          <a 
            href={socialLinks.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Website"
          >
            <Globe size={18} />
          </a>
        )}
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Email</div>
            <a href={`mailto:${email}`} className="hover:text-primary">
              {email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground mb-1">Phone</div>
            <a href={`tel:${phone}`} className="hover:text-primary">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
