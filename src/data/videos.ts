
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Sunrise Timelapse",
    description: "A beautiful timelapse of the sun rising over mountain peaks, captured over three hours condensed into 30 seconds.",
    thumbnailUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "https://example.com/videos/sunrise-timelapse.mp4",
    duration: "0:32",
    category: "Timelapse",
    date: "2024-03-05"
  },
  {
    id: "2",
    title: "Ocean Waves in Slow Motion",
    description: "Mesmerizing slow-motion footage of ocean waves breaking on a sandy beach, showcasing the raw power and beauty of the ocean.",
    thumbnailUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "https://example.com/videos/ocean-slow-motion.mp4",
    duration: "1:45",
    category: "Slow Motion",
    date: "2024-02-18"
  },
  {
    id: "3",
    title: "Wildlife in the Forest",
    description: "A documentary-style video capturing various wildlife in their natural forest habitat, including deer, birds, and small mammals.",
    thumbnailUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "https://example.com/videos/forest-wildlife.mp4",
    duration: "3:12",
    category: "Wildlife",
    date: "2024-01-30"
  },
  {
    id: "4",
    title: "Drone Flight Over Mountains",
    description: "Breathtaking aerial footage captured by a drone flying over mountain ranges, revealing the stunning landscape from above.",
    thumbnailUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "https://example.com/videos/mountain-drone.mp4",
    duration: "2:38",
    category: "Aerial",
    date: "2023-12-12"
  },
  {
    id: "5",
    title: "Night Forest Ambience",
    description: "A peaceful night scene in the forest with ambient sounds of rustling leaves, distant owl calls, and a gentle breeze.",
    thumbnailUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "https://example.com/videos/night-forest.mp4",
    duration: "5:20",
    category: "Ambient",
    date: "2023-11-05"
  },
  {
    id: "6",
    title: "Modern Workspace",
    description: "A day in the life of a digital nomad, showcasing the blend of technology and comfort in modern remote work.",
    thumbnailUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2400&auto=format&fit=crop",
    videoUrl: "https://example.com/videos/modern-workspace.mp4",
    duration: "4:15",
    category: "Lifestyle",
    date: "2023-10-20"
  }
];

export const getVideoCategories = (): string[] => {
  const categoriesSet = new Set(videos.map(video => video.category));
  return Array.from(categoriesSet);
};

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

export const getVideosByCategory = (category: string): Video[] => {
  if (category === 'all') return videos;
  return videos.filter(video => video.category === category);
};
