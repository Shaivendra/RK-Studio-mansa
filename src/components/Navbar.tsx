import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Users, Building, Gift, X, LogIn, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

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

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks onClick={closeMenu} />
          <AuthButtons />
        </div>

        {isMobile && (
          <>
            <div className="flex items-center gap-4">
              <AuthButtons />
              <button 
                onClick={toggleMenu} 
                className="block p-2 rounded-md border border-gray-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetContent className="w-4/5 sm:max-w-md">
                <SheetHeader className="text-left border-b pb-4 mb-4">
                  <SheetTitle className="text-2xl font-bold">RK Studio</SheetTitle>
                  <SheetClose className="absolute right-4 top-4">
                    <X className="h-6 w-6" />
                  </SheetClose>
                </SheetHeader>
                <div className="flex flex-col space-y-6">
                  <MobileNavLink to="/" label="Home" onClick={closeMenu} />
                  <MobileNavLink to="/gallery" label="Work" onClick={closeMenu} />
                  <MobileNavLink to="/photographer" label="Photographer" onClick={closeMenu} />
                  <MobileNavLink to="/about" label="About" onClick={closeMenu} />
                  <MobileNavLink to="/about" label="Contact" onClick={closeMenu} />
                </div>
              </SheetContent>
            </Sheet>
          </>
        )}
      </div>
    </nav>
  );
};

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => {
  return (
    <Link to={to} className="w-full text-center py-2" onClick={onClick}>
      {label}
    </Link>
  );
};

const NavLinks = ({ onClick }: { onClick: () => void }) => {
  return (
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
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:text-primary/80 transition-colors">
          Services
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuItem asChild>
            <Link to="/services/wedding" className="flex items-center">
              <Heart className="mr-2 h-4 w-4" /> Wedding Photography
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/services/portrait" className="flex items-center">
              <Users className="mr-2 h-4 w-4" /> Portrait Sessions
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/services/commercial" className="flex items-center">
              <Building className="mr-2 h-4 w-4" /> Commercial Photography
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/services/events" className="flex items-center">
              <Gift className="mr-2 h-4 w-4" /> Event Coverage
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/about" className="hover:text-primary/80 transition-colors" onClick={onClick}>
        About
      </Link>
    </>
  );
};

export default Navbar;
