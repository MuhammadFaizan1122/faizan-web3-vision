import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Eye } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center animated-bg overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Glass Card Container */}
        <div className="glass-card p-8 md:p-12 animate-scale-in">
          <h1 className="text-4xl md:text-6xl lg:text-hero font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Muhammad Faizan</span>
            <br />
            <span className="text-foreground">Blockchain Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Empowering Web3 with <span className="text-gradient-secondary">Blockchain, AI & Digital Solutions</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow-primary transition-all duration-300 border-0"
            >
              <Eye className="w-5 h-5 mr-2" />
              Hire Me
            </Button>
            
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline" 
              size="lg"
              className="glass border-primary/30 text-primary hover:bg-primary/10 hover-glow-primary hover-glass transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary hover:text-primary-glow transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;