
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react';
import { getPhotoById, photos } from '@/data/photos';

const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const photo = getPhotoById(id || '');
  
  if (!photo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center flex-grow">
          <h1 className="text-2xl font-semibold mb-4">Photo not found</h1>
          <p className="mb-8">The photo you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/gallery">Back to Gallery</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Find current photo index and adjacent photos for navigation
  const currentIndex = photos.findIndex(p => p.id === id);
  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={photo.imageUrl} 
                  alt={photo.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{photo.title}</h1>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <Tag className="h-4 w-4 mr-2" />
                <span>{photo.category}</span>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span>{photo.date}</span>
              </div>
              
              <p className="text-lg mb-8">{photo.description}</p>
              
              <div className="flex justify-between mt-12">
                {prevPhoto ? (
                  <Button asChild variant="outline">
                    <Link to={`/photo/${prevPhoto.id}`} className="flex items-center">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                    </Link>
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {nextPhoto && (
                  <Button asChild variant="outline">
                    <Link to={`/photo/${nextPhoto.id}`} className="flex items-center">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PhotoDetail;
