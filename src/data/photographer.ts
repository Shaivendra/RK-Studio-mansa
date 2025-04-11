
export interface Photographer {
  name: string;
  bio: string;
  profileImage: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    website?: string;
  };
  specialties: string[];
  equipment: string[];
  contact: {
    email: string;
    phone: string;
  };
}

export const photographer: Photographer = {
  name: "Alex Morgan",
  bio: "Professional photographer with over 10 years of experience capturing the beauty of landscapes, wildlife, and urban environments. My passion for photography began during my travels across Asia and has evolved into a lifelong pursuit of finding and preserving moments of natural beauty and human connection. I specialize in dramatic landscape photography, but also enjoy portrait and event photography that tells a compelling story. When I'm not behind the camera, I enjoy hiking, kayaking, and teaching photography workshops to aspiring photographers.",
  profileImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2400&auto=format&fit=crop",
  socialLinks: {
    instagram: "https://instagram.com/alexmorgan_photo",
    facebook: "https://facebook.com/alexmorganphotography",
    twitter: "https://twitter.com/alex_mphotography",
    website: "https://alexmorganphoto.com"
  },
  specialties: [
    "Landscape Photography",
    "Wildlife Photography",
    "Portrait Photography",
    "Aerial Photography",
    "Timelapse Videos"
  ],
  equipment: [
    "Canon EOS R5",
    "Canon EF 16-35mm f/2.8L III USM",
    "Canon EF 70-200mm f/2.8L IS III USM",
    "Canon EF 100-400mm f/4.5-5.6L IS II USM",
    "DJI Mavic 3 Pro",
    "GoPro Hero 11 Black"
  ],
  contact: {
    email: "contact@alexmorganphoto.com",
    phone: "(123) 456-7890"
  }
};
