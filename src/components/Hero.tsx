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

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Ultra Modern Glass Container */}
        <div className="relative backdrop-blur-2xl bg-gradient-to-br from-background/10 via-background/5 to-background/10 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-20 shadow-2xl animate-scale-in">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl -z-10 animate-pulse" />
          
          {/* Floating Status Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary text-sm font-semibold mb-12 animate-fade-in shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 animate-pulse shadow-glow-primary" />
            ✨ Available for Revolutionary Web3 Projects
          </div>

          {/* Hero Title with Advanced Typography */}
          <div className="mb-10 animate-slide-up">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-none tracking-tight">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-flow font-extrabold">
                Muhammad
              </span>
              <span className="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient-flow-reverse font-extrabold">
                Faizan
              </span>
            </h1>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground/90 tracking-wider">
                <span className="bg-gradient-to-r from-primary/80 to-secondary/80 bg-clip-text text-transparent">
                  Blockchain Architect
                </span>
                <span className="text-foreground/60"> & </span>
                <span className="bg-gradient-to-r from-secondary/80 to-accent/80 bg-clip-text text-transparent">
                  Web3 Innovator
                </span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse" />
            </div>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 mb-14 animate-fade-in leading-relaxed max-w-5xl mx-auto font-medium">
            Pioneering the next generation of 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold mx-2">
              decentralized applications
            </span>
            with cutting-edge blockchain technology,
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-bold mx-2">
              AI integration
            </span>
            and scalable Web3 solutions that reshape digital experiences.
          </p>

          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="group relative px-10 py-7 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-primary/25 transform hover:scale-105 hover:-translate-y-1 border-0 overflow-hidden min-w-[220px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Eye className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Launch Project
              </div>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline" 
              size="lg"
              className="group relative px-10 py-7 text-lg font-bold backdrop-blur-xl bg-gradient-to-r from-background/10 to-background/5 border-2 border-secondary/40 text-secondary hover:text-primary hover:border-primary/60 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-secondary/25 transform hover:scale-105 hover:-translate-y-1 min-w-[220px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center">
                <Download className="w-6 h-6 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
                View Portfolio
              </div>
            </Button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
            <div className="group text-center animate-fade-in hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 group-hover:animate-pulse">
                5+
              </div>
              <div className="text-sm lg:text-base text-foreground/60 font-medium tracking-wide">
                Years Mastering Web3
              </div>
            </div>
            <div className="group text-center animate-fade-in hover:scale-105 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-3 group-hover:animate-pulse">
                50+
              </div>
              <div className="text-sm lg:text-base text-foreground/60 font-medium tracking-wide">
                Blockchain Solutions
              </div>
            </div>
            <div className="group text-center animate-fade-in hover:scale-105 transition-transform duration-300 cursor-pointer" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3 group-hover:animate-pulse">
                24/7
              </div>
              <div className="text-sm lg:text-base text-foreground/60 font-medium tracking-wide">
                Global Innovation
              </div>
            </div>
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full opacity-30 animate-float ${
                  i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                }`}
                style={{
                  left: `${20 + (i * 10)}%`,
                  top: `${15 + (i * 8)}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${4 + i}s`
                }}
              />
            ))}
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