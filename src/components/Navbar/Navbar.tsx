import { Code2, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { useState } from 'react';

interface NavbarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

export function Navbar({ onPageChange, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => handleNavClick('home')}
        >
          <img src='/assets/AstexLogo.svg' className="w-9 h-9 text-[#C1FF72]" />
          <span className="text-white text-4xl font-bold">Astex</span>
        </div>
        
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-8 px-8 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <NavLink 
              active={currentPage === 'about'}
              onClick={() => handleNavClick('about')}
            >
              About Us
            </NavLink>
            <NavLink 
              active={currentPage === 'services'}
              onClick={() => handleNavClick('services')}
            >
              Services
            </NavLink>
            <NavLink 
              active={currentPage === 'pricing'}
              onClick={() => handleNavClick('pricing')}
            >
              Pricing
            </NavLink>
            <NavLink 
              active={currentPage === 'portfolio'}
              onClick={() => handleNavClick('portfolio')}
            >
              Portfolio
            </NavLink>
          </div>
        </div>

        <button 
          onClick={() => handleNavClick('contact')}
          className="hidden lg:block px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors"
        >
          Contact Us
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg lg:hidden p-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <NavLink 
                active={currentPage === 'about'}
                onClick={() => handleNavClick('about')}
              >
                About Us
              </NavLink>
              <NavLink 
                active={currentPage === 'services'}
                onClick={() => handleNavClick('services')}
              >
                Services
              </NavLink>
              <NavLink 
                active={currentPage === 'pricing'}
                onClick={() => handleNavClick('pricing')}
              >
                Pricing
              </NavLink>
              <NavLink 
                active={currentPage === 'portfolio'}
                onClick={() => handleNavClick('portfolio')}
              >
                Portfolio
              </NavLink>
              <button 
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors w-full"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}