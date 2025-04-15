
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Gift } from 'lucide-react';

const EventCoverage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Gift className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Event Coverage</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional photography for your special events and celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Birthday party" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Birthday Celebrations</h3>
                <p className="text-muted-foreground">
                  Capture the joy and excitement of birthday parties for all ages.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Corporate event" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
                <p className="text-muted-foreground">
                  Professional coverage of conferences, meetings, and company celebrations.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Anniversary party" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Special Celebrations</h3>
                <p className="text-muted-foreground">
                  Document anniversaries, graduations, and other milestone events.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Event Photography Pricing</h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-md shadow-sm">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="text-xl font-medium">Hourly Coverage</h3>
                  <p className="font-semibold">$250 per hour</p>
                </div>
                <p className="text-muted-foreground mt-2">
                  Perfect for shorter events. Includes professional editing and online gallery delivery.
                </p>
              </div>
              <div className="bg-background p-6 rounded-md shadow-sm">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="text-xl font-medium">Half-Day Package (4 hours)</h3>
                  <p className="font-semibold">$800</p>
                </div>
                <p className="text-muted-foreground mt-2">
                  Ideal for medium-sized events. Includes 150+ edited images and online gallery.
                </p>
              </div>
              <div className="bg-background p-6 rounded-md shadow-sm">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="text-xl font-medium">Full-Day Package (8 hours)</h3>
                  <p className="font-semibold">$1,500</p>
                </div>
                <p className="text-muted-foreground mt-2">
                  Complete coverage for larger events. Includes 300+ edited images and premium online gallery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventCoverage;
