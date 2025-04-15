
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users } from 'lucide-react';

const PortraitSessions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Portrait Sessions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional portrait photography that captures your unique personality and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Individual portrait" 
                className="rounded-full h-48 w-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Individual</h3>
              <p className="text-muted-foreground">
                Professional headshots and personal portraits to showcase your personality.
              </p>
            </div>
            <div className="text-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Couple portrait" 
                className="rounded-full h-48 w-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Couples</h3>
              <p className="text-muted-foreground">
                Capture your connection in beautiful, natural portraits together.
              </p>
            </div>
            <div className="text-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1551979084-b19e2ffd654f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Family portrait" 
                className="rounded-full h-48 w-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Family</h3>
              <p className="text-muted-foreground">
                Preserve precious family moments with timeless photography.
              </p>
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Portrait Session Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-md shadow-sm">
                <h3 className="text-xl font-medium mb-3">Standard Session</h3>
                <ul className="space-y-2 mb-4">
                  <li>• 1-hour photoshoot</li>
                  <li>• 1 location</li>
                  <li>• 2 outfit changes</li>
                  <li>• 20 edited digital images</li>
                  <li>• Online gallery</li>
                </ul>
                <p className="font-semibold">$350</p>
              </div>
              <div className="bg-background p-6 rounded-md shadow-sm">
                <h3 className="text-xl font-medium mb-3">Extended Session</h3>
                <ul className="space-y-2 mb-4">
                  <li>• 2-hour photoshoot</li>
                  <li>• Up to 2 locations</li>
                  <li>• 3-4 outfit changes</li>
                  <li>• 40 edited digital images</li>
                  <li>• Online gallery</li>
                  <li>• 5 printed photos</li>
                </ul>
                <p className="font-semibold">$550</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortraitSessions;
