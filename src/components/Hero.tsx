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
      {/* Premium Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      
      {/* Advanced Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float opacity-20 ${
              i % 3 === 0 ? 'bg-primary w-3 h-3' : 
              i % 3 === 1 ? 'bg-secondary w-2 h-2' : 
              'bg-accent w-4 h-4'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-secondary/30 rounded-lg rotate-45 animate-bounce-gentle" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-accent/30 rounded-full animate-glow" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Premium Glass Card Container */}
        <div className="glass-card p-10 md:p-16 animate-scale-in backdrop-blur-xl border-2 border-primary/20 shadow-glass-lg">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Available for Web3 Projects
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-hero font-bold mb-8 animate-slide-up">
            <span className="text-gradient">Muhammad Faizan</span>
            <br />
            <span className="text-foreground font-light">Blockchain Developer</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-muted-foreground mb-12 animate-fade-in leading-relaxed max-w-4xl mx-auto">
            Crafting the future of <span className="text-gradient-secondary font-semibold">Web3</span> with 
            <span className="text-primary font-semibold"> Blockchain Innovation</span> and 
            <span className="text-accent font-semibold"> AI-Powered Solutions</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground hover-glow-primary transition-all duration-500 border-0 shadow-glow-primary font-semibold tracking-wide transform hover:scale-105"
            >
              <Eye className="w-6 h-6 mr-3" />
              Start Your Project
            </Button>
            
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg glass border-2 border-secondary/40 text-secondary hover:bg-secondary/15 hover-glow-secondary hover-glass transition-all duration-500 font-semibold tracking-wide transform hover:scale-105"
            >
              <Download className="w-6 h-6 mr-3" />
              Explore Portfolio
            </Button>
          </div>

          {/* Stats or Quick Info */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary/20">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-gradient-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Global Availability</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-primary hover:text-primary-glow transition-all duration-500 group"
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center mb-2 group-hover:border-primary transition-colors duration-300">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
            <ArrowDown className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;