
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { photographer } from '@/data/photographer';
import ContactInfo from '@/components/about/ContactInfo';
import ProfileInfo from '@/components/about/ProfileInfo';
import ContactForm from '@/components/about/ContactForm';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <ContactInfo 
                profileImage={photographer.profileImage}
                name={photographer.name}
                email={photographer.contact.email}
                phone={photographer.contact.phone}
                socialLinks={photographer.socialLinks}
              />
              
              <Button 
                className="w-full mt-4"
                onClick={() => {
                  // Scroll to contact form
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Contact Me
              </Button>
            </div>
            
            <div className="md:col-span-2">
              <ProfileInfo 
                bio={photographer.bio}
                specialties={photographer.specialties}
                equipment={photographer.equipment}
              />
              
              <div id="contact-form" className="mt-12 pt-8 border-t border-border">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
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

export default About;
