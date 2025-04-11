
export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export const photos: Photo[] = [
  {
    id: "1",
    title: "Mountain Sunrise",
    description: "A breathtaking sunrise captured from the top of Mount Rainier, showcasing the natural beauty of the Pacific Northwest.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop",
    category: "Landscape",
    date: "2024-02-15"
  },
  {
    id: "2",
    title: "Tranquil Forest",
    description: "Sunbeams filtering through a misty forest, creating a magical atmosphere in the early morning.",
    imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2400&auto=format&fit=crop",
    category: "Landscape",
    date: "2024-01-28"
  },
  {
    id: "3",
    title: "Ocean Waves",
    description: "The powerful beauty of ocean waves crashing against the shore, showcasing nature's raw energy.",
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2400&auto=format&fit=crop",
    category: "Seascape",
    date: "2023-12-12"
  },
  {
    id: "4",
    title: "Mountain Vista",
    description: "A bird's eye view of majestic green mountains stretching as far as the eye can see.",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2400&auto=format&fit=crop",
    category: "Aerial",
    date: "2023-09-20"
  },
  {
    id: "5",
    title: "Night Lights",
    description: "Yellow lights illuminating the path between trees in a dark forest, creating a magical nighttime scene.",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2400&auto=format&fit=crop",
    category: "Night",
    date: "2023-11-05"
  },
  {
    id: "6",
    title: "Working Remote",
    description: "A woman sitting comfortably on a bed with her laptop, representing the modern remote work lifestyle.",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2400&auto=format&fit=crop",
    category: "Lifestyle",
    date: "2023-08-17"
  },
  {
    id: "7",
    title: "Tech Focus",
    description: "A close-up of a gray laptop computer, representing technology and the digital age.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2400&auto=format&fit=crop",
    category: "Technology",
    date: "2023-07-23"
  },
  {
    id: "8",
    title: "Remote Work",
    description: "A woman in a white long sleeve shirt using a black laptop computer, showcasing modern work environments.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2400&auto=format&fit=crop",
    category: "Lifestyle",
    date: "2023-10-09"
  },
  {
    id: "9",
    title: "Desert Sunset",
    description: "The warm colors of a desert sunset painting the sky with hues of orange and purple.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop",
    category: "Landscape",
    date: "2023-06-18"
  }
];

export const getCategories = (): string[] => {
  const categoriesSet = new Set(photos.map(photo => photo.category));
  return Array.from(categoriesSet);
};

export const getPhotoById = (id: string): Photo | undefined => {
  return photos.find(photo => photo.id === id);
};

export const getPhotosByCategory = (category: string): Photo[] => {
  if (category === 'all') return photos;
  return photos.filter(photo => photo.category === category);
};
