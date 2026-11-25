
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-sano-blue font-bold text-2xl">SANO</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#problems" className="text-sano-blue/80 hover:text-sano-blue transition-colors">
            Problématiques
          </a>
          <a href="#solution" className="text-sano-blue/80 hover:text-sano-blue transition-colors">
            Solution
          </a>
          <a href="#team" className="text-sano-blue/80 hover:text-sano-blue transition-colors">
            Équipe
          </a>
          <a href="#ambitions" className="text-sano-blue/80 hover:text-sano-blue transition-colors">
            Ambitions
          </a>
          <a href="#contact" onClick={scrollToContact} className="text-sano-blue/80 hover:text-sano-blue transition-colors">
            Contact
          </a>
          <a 
            href="#discover" 
            className="bg-gradient-to-r from-sano-blue to-sano-green text-white px-5 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            Découvrir
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-sano-blue p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 md:hidden transform transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 text-lg">
          <a 
            href="#problems" 
            className="text-sano-blue/80 hover:text-sano-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Problématiques
          </a>
          <a 
            href="#solution" 
            className="text-sano-blue/80 hover:text-sano-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Solution
          </a>
          <a 
            href="#team" 
            className="text-sano-blue/80 hover:text-sano-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Équipe
          </a>
          <a 
            href="#ambitions" 
            className="text-sano-blue/80 hover:text-sano-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Ambitions
          </a>
          <a 
            href="#contact" 
            className="text-sano-blue/80 hover:text-sano-blue transition-colors py-2 border-b border-gray-100"
            onClick={scrollToContact}
          >
            Contact
          </a>
          <a 
            href="#discover" 
            className="bg-gradient-to-r from-sano-blue to-sano-green text-white px-5 py-3 rounded-full text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Découvrir
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
