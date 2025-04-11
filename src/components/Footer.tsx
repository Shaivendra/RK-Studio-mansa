
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RK Studio</h3>
            <p className="text-muted-foreground">
              Capturing moments that last forever. Professional photography services for all your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/videos" className="text-muted-foreground hover:text-foreground transition-colors">Videos</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-foreground text-muted-foreground" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="hover:text-foreground text-muted-foreground" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-foreground text-muted-foreground" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="mailto:contact@rkstudio.com" className="hover:text-foreground text-muted-foreground" aria-label="Email">
                <Mail />
              </a>
            </div>
            <p className="mt-4 text-muted-foreground">
              Email: contact@rkstudio.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RK Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
