
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { photographerTeam, Photographer } from '@/data/photographer';
import ProfileInfo from '@/components/about/ProfileInfo';
import ContactForm from '@/components/about/ContactForm';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Facebook, Twitter, Globe, ArrowLeft } from 'lucide-react';

const PhotographerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [photographer, setPhotographer] = useState<Photographer | null>(null);

  useEffect(() => {
    const foundPhotographer = photographerTeam.find(p => p.id === id);
    if (foundPhotographer) {
      setPhotographer(foundPhotographer);
    } else {
      navigate('/photographer');
    }
  }, [id, navigate]);

  if (!photographer) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/photographer')} 
            className="mb-6 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Team
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Photographer Info */}
            <div className="lg:col-span-1">
              <div className="bg-muted p-6 rounded-lg sticky top-24">
                <div className="flex flex-col items-center mb-6">
                  <img 
                    src={photographer.profileImage} 
                    alt={photographer.name} 
                    className="w-32 h-32 object-cover rounded-full mb-4" 
                  />
                  <h1 className="text-2xl font-bold mb-1">{photographer.name}</h1>
                  <p className="text-muted-foreground text-sm">{photographer.role}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <a href={`mailto:${photographer.contact.email}`} className="hover:text-primary">
                      {photographer.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <a href={`tel:${photographer.contact.phone}`} className="hover:text-primary">
                      {photographer.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 mb-6">
                  {photographer.socialLinks.instagram && (
                    <a 
                      href={photographer.socialLinks.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-background p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {photographer.socialLinks.facebook && (
                    <a 
                      href={photographer.socialLinks.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-background p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {photographer.socialLinks.twitter && (
                    <a 
                      href={photographer.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-background p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {photographer.socialLinks.website && (
                    <a 
                      href={photographer.socialLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-background p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Website"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <Button className="w-full" asChild>
                  <a href="#contact-form">Contact Me</a>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Bio and Details */}
            <div className="lg:col-span-2">
              <ProfileInfo 
                bio={photographer.bio}
                specialties={photographer.specialties}
                equipment={photographer.equipment}
              />
              
              <div id="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PhotographerDetail;
