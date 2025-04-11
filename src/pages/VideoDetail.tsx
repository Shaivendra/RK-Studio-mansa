
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Tag, Clock } from 'lucide-react';
import { getVideoById, videos } from '@/data/videos';

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const video = getVideoById(id || '');
  
  if (!video) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center flex-grow">
          <h1 className="text-2xl font-semibold mb-4">Video not found</h1>
          <p className="mb-8">The video you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/videos">Back to Videos</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Find current video index and adjacent videos for navigation
  const currentIndex = videos.findIndex(v => v.id === id);
  const prevVideo = currentIndex > 0 ? videos[currentIndex - 1] : null;
  const nextVideo = currentIndex < videos.length - 1 ? videos[currentIndex + 1] : null;
  
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden bg-black aspect-video flex items-center justify-center">
                {/* This is a placeholder for the video player */}
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mt-6 mb-4">{video.title}</h1>
              
              <div className="flex flex-wrap items-center text-muted-foreground mb-6 gap-4">
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{video.category}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{video.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{video.duration}</span>
                </div>
              </div>
              
              <p className="text-lg">{video.description}</p>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4">More Videos</h3>
              
              <div className="space-y-4">
                {videos
                  .filter(v => v.id !== id)
                  .slice(0, 3)
                  .map(v => (
                    <Link key={v.id} to={`/video/${v.id}`} className="flex gap-3 group">
                      <div className="w-24 h-16 relative rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={v.thumbnailUrl} 
                          alt={v.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {v.duration}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                          {v.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{v.category}</p>
                      </div>
                    </Link>
                  ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link to="/videos">View All Videos</Link>
                </Button>
              </div>
              
              <div className="flex justify-between mt-8">
                {prevVideo ? (
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/video/${prevVideo.id}`} className="flex items-center">
                      <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                    </Link>
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {nextVideo && (
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/video/${nextVideo.id}`} className="flex items-center">
                      Next <ArrowRight className="ml-1 h-4 w-4" />
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

export default VideoDetail;
