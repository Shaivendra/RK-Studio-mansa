
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
          RK Studio
        </Link>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        ) : (
          <div className="flex items-center space-x-8">
            <NavLinks onClick={() => {}} />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background pt-20 px-4 transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 text-xl">
          <NavLinks onClick={closeMenu} />
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ onClick }: { onClick: () => void }) => (
  <>
    <Link to="/" className="hover:text-primary/80 transition-colors" onClick={onClick}>
      Home
    </Link>
    <Link to="/gallery" className="hover:text-primary/80 transition-colors" onClick={onClick}>
      Gallery
    </Link>
    <Link to="/videos" className="hover:text-primary/80 transition-colors" onClick={onClick}>
      Videos
    </Link>
    <Link to="/photographer" className="hover:text-primary/80 transition-colors" onClick={onClick}>
      Photographer
    </Link>
    <Link to="/about" className="hover:text-primary/80 transition-colors" onClick={onClick}>
      About
    </Link>
  </>
);

export default Navbar;
