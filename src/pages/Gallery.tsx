
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhotoCard from '@/components/PhotoCard';
import GalleryFilter from '@/components/GalleryFilter';
import { photos, getCategories, getPhotosByCategory } from '@/data/photos';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = getCategories();
  const filteredPhotos = getPhotosByCategory(activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my collection of photographs capturing moments of beauty, emotion, and wonder from around the world.
            </p>
          </div>
          
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="gallery-grid">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                id={photo.id}
                title={photo.title}
                imageUrl={photo.imageUrl}
                category={photo.category}
              />
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No photos found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
