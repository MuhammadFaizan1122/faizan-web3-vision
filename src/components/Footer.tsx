import { Button } from '@/components/ui/button';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="relative py-12 px-6 glass-header border-t border-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Muhammad Faizan
            </h3>
            <p className="text-muted-foreground">
              Blockchain Developer crafting the future of Web3 with innovative decentralized solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Let's Connect
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Available for blockchain projects</p>
              <p>muhammad.faizan@example.com</p>
              <p>Worldwide Remote</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Muhammad Faizan. Made with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span>and lots of code</span>
          </div>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="glass border-primary/30 text-primary hover:bg-primary/10 hover-glow-primary"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;