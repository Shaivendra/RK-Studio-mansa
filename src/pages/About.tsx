
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Camera, Mail, Phone, Instagram, Facebook, Twitter, Globe } from 'lucide-react';
import { photographer } from '@/data/photographer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img 
                    src={photographer.profileImage} 
                    alt={photographer.name} 
                    className="w-full h-auto"
                  />
                </div>
                
                <h1 className="text-3xl font-bold mb-2">{photographer.name}</h1>
                <div className="text-muted-foreground mb-6">Professional Photographer</div>
                
                <div className="flex space-x-3 mb-8">
                  {photographer.socialLinks.instagram && (
                    <a 
                      href={photographer.socialLinks.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  
                  {photographer.socialLinks.facebook && (
                    <a 
                      href={photographer.socialLinks.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                  )}
                  
                  {photographer.socialLinks.twitter && (
                    <a 
                      href={photographer.socialLinks.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  
                  {photographer.socialLinks.website && (
                    <a 
                      href={photographer.socialLinks.website} 
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
                      <a href={`mailto:${photographer.contact.email}`} className="hover:text-primary">
                        {photographer.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Phone</div>
                      <a href={`tel:${photographer.contact.phone}`} className="hover:text-primary">
                        {photographer.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Contact Me</Button>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed whitespace-pre-line">
                  {photographer.bio}
                </p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {photographer.specialties.map((specialty, index) => (
                    <div 
                      key={index} 
                      className="bg-muted px-4 py-2 rounded-full text-sm flex items-center"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Equipment</h2>
                <ul className="space-y-2">
                  {photographer.equipment.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Form */}
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full border border-border rounded-md px-4 py-2 bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full border border-border rounded-md px-4 py-2 bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="What is this regarding?"
                      className="w-full border border-border rounded-md px-4 py-2 bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Enter your message"
                      className="w-full border border-border rounded-md px-4 py-2 bg-background resize-none"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
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

export default About;
