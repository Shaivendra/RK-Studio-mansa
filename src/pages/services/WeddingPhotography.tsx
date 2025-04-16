import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

const WeddingPhotography = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Wedding Photography</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capturing your special day with artistic vision and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding ceremony" 
                className="rounded-lg shadow-md h-80 w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">Your Story, Beautifully Told</h2>
              <p className="mb-4">
                Every wedding is unique, and your photography should reflect your individual love story. 
                Our wedding photography service focuses on capturing authentic moments that tell your story in a natural, 
                unobtrusive way.
              </p>
              <p>
                From the intimate moments getting ready to the celebration on the dance floor, we ensure 
                every special detail is preserved for generations to come.
              </p>
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Wedding Photography Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-md shadow-sm">
                <h3 className="text-xl font-medium mb-3">Essential</h3>
                <ul className="space-y-2 mb-4">
                  <li>• 6 hours of coverage</li>
                  <li>• 300+ edited images</li>
                  <li>• Online gallery</li>
                  <li>• One photographer</li>
                </ul>
                <p className="font-semibold">From ₹1,45,000</p>
              </div>
              <div className="bg-background p-6 rounded-md shadow-sm border-2 border-primary">
                <h3 className="text-xl font-medium mb-3">Premium</h3>
                <ul className="space-y-2 mb-4">
                  <li>• 8 hours of coverage</li>
                  <li>• 500+ edited images</li>
                  <li>• Online gallery</li>
                  <li>• Two photographers</li>
                  <li>• Engagement session</li>
                </ul>
                <p className="font-semibold">From ₹2,25,000</p>
              </div>
              <div className="bg-background p-6 rounded-md shadow-sm">
                <h3 className="text-xl font-medium mb-3">Luxury</h3>
                <ul className="space-y-2 mb-4">
                  <li>• Full day coverage</li>
                  <li>• 700+ edited images</li>
                  <li>• Online gallery</li>
                  <li>• Two photographers</li>
                  <li>• Engagement session</li>
                  <li>• Wedding album</li>
                </ul>
                <p className="font-semibold">From ₹3,05,000</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WeddingPhotography;
