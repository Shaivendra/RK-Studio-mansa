
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/about/BookingForm';
import BusinessInfo from '@/components/about/BusinessInfo';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 md:py-12">
        <div className="container mx-auto">
          <div className="space-y-8 md:space-y-12">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <BusinessInfo />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
