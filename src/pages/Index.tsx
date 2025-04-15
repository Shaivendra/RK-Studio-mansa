
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, User } from 'lucide-react';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/data/videos';

const Index = () => {
  const featuredVideos = videos.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedSection 
          title="Featured Works" 
          subtitle="Explore a selection of my best photographs"
          linkTo="/gallery"
          linkText="View all photos"
        />
        
        {/* Photography Services Section */}
        <section className="py-8 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Photography Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-background p-4 md:p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Camera className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Photo Sessions</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">Professional photography sessions for portraits, events, and special occasions.</p>
                <Button asChild variant="outline" size="sm" className="mt-auto">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              
              <div className="bg-background p-4 md:p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Video className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Video Production</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">High-quality video content for personal projects, events, and promotional materials.</p>
                <Button asChild variant="outline" size="sm" className="mt-auto">
                  <Link to="/videos">View Videos</Link>
                </Button>
              </div>
              
              <div className="bg-background p-4 md:p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <User className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Photography Workshops</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">Learn photography techniques and skills through personalized workshops.</p>
                <Button asChild variant="outline" size="sm" className="mt-auto">
                  <Link to="/about">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Videos Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">Featured Videos</h2>
                <p className="text-muted-foreground text-sm md:text-base text-center md:text-left">Watch some of my recent video productions</p>
              </div>
              <Button asChild variant="link" className="mt-4 md:mt-0 p-0">
                <Link to="/videos" className="flex items-center text-sm md:text-base">
                  View all videos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {featuredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  thumbnailUrl={video.thumbnailUrl}
                  duration={video.duration}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-8 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Let's Work Together</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
              Ready to capture your special moments or discuss a project? Get in touch today and let's create something beautiful together.
            </p>
            <Button asChild size="sm" className="bg-white text-primary hover:bg-white/90">
              <Link to="/about">Contact Me</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
