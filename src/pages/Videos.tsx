
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';
import GalleryFilter from '@/components/GalleryFilter';
import { videos, getVideoCategories, getVideosByCategory } from '@/data/videos';

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = getVideoCategories();
  const filteredVideos = getVideosByCategory(activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Video Collection</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through my collection of video productions, from timelapses to documentary-style narratives.
            </p>
          </div>
          
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="gallery-grid">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                duration={video.duration}
              />
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No videos found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
