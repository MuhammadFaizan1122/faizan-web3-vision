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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-header py-2' : 'py-4'
    }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-bold text-gradient">
          MF
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-foreground hover:text-primary transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <Button 
          onClick={() => scrollToSection('contact')} 
          variant="outline"
          className="glass border-primary/30 text-primary hover:bg-primary/10 hover:glow-primary"
        >
          Let's Connect
        </Button>
      </nav>
    </header>
  );
};

export default Header;