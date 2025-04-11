
import React from 'react';
import { Camera } from 'lucide-react';

interface ProfileInfoProps {
  bio: string;
  specialties: string[];
  equipment: string[];
}

const ProfileInfo = ({ bio, specialties, equipment }: ProfileInfoProps) => {
  return (
    <>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {bio}
        </p>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Specialties</h2>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-muted px-4 py-2 rounded-full text-sm flex items-center"
            >
              <Camera className="h-4 w-4 mr-2" />
              {specialty}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Equipment</h2>
        <ul className="space-y-2">
          {equipment.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileInfo;
