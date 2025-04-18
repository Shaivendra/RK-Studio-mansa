
import React from 'react';

const BusinessInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-2">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Email: </span>
            <a href="mailto:shivchavda85@gmail.com" className="text-primary hover:underline">
              shivchavda85@gmail.com
            </a>
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Phone: </span>
            <a href="tel:+1234567890" className="hover:underline">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Address: </span>
            123 Shutter Lane, Photo City, PC 12345
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monday - Friday</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Saturday</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Please book at least 48 hours in advance.</li>
          <li>A 50% deposit is required to secure your booking.</li>
          <li>Rescheduling is available up to 24 hours before the session.</li>
          <li>We'll contact you to confirm your booking within 24 hours.</li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessInfo;
