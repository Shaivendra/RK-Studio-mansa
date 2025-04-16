import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building } from 'lucide-react';

const CommercialPhotography = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Building className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Commercial Photography</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional photography services for businesses, products, and brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">Elevate Your Brand</h2>
              <p className="mb-4">
                In today's visual marketplace, high-quality commercial photography is essential to stand out from the competition. 
                Our commercial photography services are designed to showcase your products, services, and brand identity in the best possible light.
              </p>
              <p>
                Whether you need product photography, corporate headshots, real estate imagery, or lifestyle brand content, 
                we create compelling visual assets that engage your audience and drive results.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Product photography" 
                className="rounded-lg shadow-md h-80 w-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Product Photography</h3>
              <p className="text-muted-foreground mb-4">
                High-quality product images for e-commerce, catalogs, and marketing materials.
              </p>
              <p className="font-medium">Starting at ₹6,000 per product</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Corporate Portraits</h3>
              <p className="text-muted-foreground mb-4">
                Professional headshots and team photos for your website and marketing.
              </p>
              <p className="font-medium">Starting at ₹12,000 per person</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
              <p className="text-muted-foreground mb-4">
                Interior and exterior photography to showcase properties at their best.
              </p>
              <p className="font-medium">Starting at ₹25,000 per property</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Food Photography</h3>
              <p className="text-muted-foreground mb-4">
                Appetizing images of your culinary creations for menus and advertising.
              </p>
              <p className="font-medium">Starting at ₹32,000 per session</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommercialPhotography;
