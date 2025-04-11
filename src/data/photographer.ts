export interface Photographer {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
  role: string;
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

export const alexMorgan: Photographer = {
  id: "alex-morgan",
  name: "Alex Morgan",
  role: "Lead Photographer",
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
    email: "alex@rkstudio.com",
    phone: "(123) 456-7890"
  }
};

export const sophiaLee: Photographer = {
  id: "sophia-lee",
  name: "Sophia Lee",
  role: "Portrait Specialist",
  bio: "With a background in fine arts and fashion photography, I bring a unique aesthetic to portrait and lifestyle photography. I believe every person has a story to tell, and I'm passionate about capturing authentic moments that reflect your personality and style. My approach is relaxed and collaborative, ensuring that you feel comfortable in front of the camera. When not photographing clients, I'm usually exploring new coffee shops or working on my personal street photography projects.",
  profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2400&auto=format&fit=crop",
  socialLinks: {
    instagram: "https://instagram.com/sophialee_portraits",
    facebook: "https://facebook.com/sophialeephotography",
    twitter: "https://twitter.com/sophia_leephoto",
    website: "https://sophialeephotography.com"
  },
  specialties: [
    "Portrait Photography",
    "Fashion Photography",
    "Lifestyle Photography",
    "Studio Lighting",
    "Editorial Shoots"
  ],
  equipment: [
    "Sony Alpha A7 IV",
    "Sony 85mm f/1.4 GM",
    "Sony 35mm f/1.4 GM",
    "Profoto B10 Plus Lights",
    "Capture One Pro"
  ],
  contact: {
    email: "sophia@rkstudio.com",
    phone: "(123) 456-7891"
  }
};

export const marcusJohnson: Photographer = {
  id: "marcus-johnson",
  name: "Marcus Johnson",
  role: "Wedding & Events",
  bio: "I've been capturing weddings and special events for over 8 years, documenting hundreds of celebrations across the country. My photojournalistic approach focuses on authentic emotions and candid moments that tell the unique story of your day. I'm known for my ability to make couples and guests feel at ease, allowing me to capture natural expressions and genuine interactions. When I'm not photographing weddings, I enjoy traveling with my family and exploring culinary adventures.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2400&auto=format&fit=crop",
  socialLinks: {
    instagram: "https://instagram.com/marcusjweddings",
    facebook: "https://facebook.com/marcusjohnsonphotography",
    website: "https://marcusjohnsonweddings.com"
  },
  specialties: [
    "Wedding Photography",
    "Event Coverage",
    "Engagement Sessions",
    "Documentary Style",
    "Album Design"
  ],
  equipment: [
    "Nikon Z9",
    "Nikon 24-70mm f/2.8 Z",
    "Nikon 70-200mm f/2.8 Z",
    "Godox AD200Pro Flashes",
    "DJI Ronin SC Gimbal"
  ],
  contact: {
    email: "marcus@rkstudio.com",
    phone: "(123) 456-7892"
  }
};

export const photographerTeam: Photographer[] = [
  alexMorgan,
  sophiaLee,
  marcusJohnson
];

// Keep the original photographer export for backward compatibility
export const photographer = alexMorgan;
