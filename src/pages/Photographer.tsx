
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { photographer } from '@/data/photographer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Camera, Mail, Phone, Instagram, Facebook, Twitter, Globe } from 'lucide-react';

const Photographer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Photographer Info */}
            <div className="lg:col-span-1">
              <div className="bg-muted p-6 rounded-lg sticky top-24">
                <div className="flex flex-col items-center mb-6">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src={photographer.profileImage} alt={photographer.name} className="object-cover" />
                    <AvatarFallback>{photographer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold mb-1">{photographer.name}</h1>
                  <p className="text-muted-foreground text-sm">Professional Photographer</p>
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
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">{photographer.bio}</p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">My Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {photographer.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center gap-2 bg-background p-3 rounded-md">
                      <Camera className="w-5 h-5 text-primary" />
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">My Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {photographer.equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 bg-background p-3 rounded-md">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div id="contact-form" className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-2 rounded-md border border-border bg-background" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-2 rounded-md border border-border bg-background" 
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full p-2 rounded-md border border-border bg-background" 
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full p-2 rounded-md border border-border bg-background resize-none" 
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Photographer;
