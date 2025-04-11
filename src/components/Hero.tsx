
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop" 
          alt="Photography landscape" 
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
          Capturing Moments That Last Forever
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto text-shadow">
          Professional photography that tells your story through exceptional imagery
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white/90 text-black hover:bg-white">
            <Link to="/gallery">View Gallery</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20">
            <Link to="/about">About Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
