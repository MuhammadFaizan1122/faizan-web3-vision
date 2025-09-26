'use client'
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all  duration-500 ${isScrolled
        ? 'glass-header py-3 backdrop-blur-xl border-b border-primary/20 shadow-glow-primary'
        : 'py-6 bg-transparent'
      }`}>
      <nav className="container max-w-[1510px] mx-auto px-6 flex items-center justify-between ">
        {/* Premium Logo */}
        <div className="flex items-center group">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-black text-xl">MF</span>
          </div>
          <h3 className="text-2xl font-bold text-gradient hidden sm:block">
            Muhammad Faizan
          </h3>
        </div>

        {/* Premium Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-foreground hover:text-primary transition-all duration-300 group font-medium py-2 px-1"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          ))}
        </div>

        {/* Premium CTA Button */}
        <Button
          onClick={() => scrollToSection('contact')}
          variant="outline"
          className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 hover-glow-primary hover-glass transition-all duration-500 font-semibold px-6 transform hover:scale-105"
        >
          <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
          {`Let's`} Connect
        </Button>
      </nav>
    </header>
  );
};

export default Header;