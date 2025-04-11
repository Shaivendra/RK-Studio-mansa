
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { photographerTeam } from '@/data/photographer';
import PhotographerCard from '@/components/photographer/PhotographerCard';
import { Link } from 'react-router-dom';

const Photographer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of professional photographers brings unique skills and perspectives to every project. 
              Each photographer specializes in different areas, ensuring we can meet all your photography needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {photographerTeam.map((photographer) => (
              <PhotographerCard key={photographer.id} photographer={photographer} />
            ))}
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3">Work With Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your vision to life? Our team of professional photographers is here to help with your next project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-background p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Book a Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a free consultation to discuss your photography needs and vision.
                </p>
                <Link 
                  to="/about" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">View Our Portfolio</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore our photographers' work to find the perfect style for your project.
                </p>
                <Link 
                  to="/gallery" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  See Gallery
                </Link>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Learn About Pricing</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Find out about our photography packages and custom pricing options.
                </p>
                <Link 
                  to="/about" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Get Quote
                </Link>
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
