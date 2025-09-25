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

      <div className="relative z-10 text-center px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Premium Glass Morphism Container */}
        <div className="relative group">
          {/* Multi-layered Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-[2rem] blur-3xl transform rotate-1 scale-105 opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-tl from-accent/8 via-primary/8 to-secondary/8 rounded-[2rem] blur-2xl transform -rotate-1 scale-110 opacity-50" />
          
          {/* Main Glass Container */}
          <div className="relative backdrop-blur-[40px] bg-gradient-to-br from-background/20 via-background/10 to-background/20 border border-white/20 rounded-[2rem] p-10 sm:p-16 lg:p-24 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] animate-scale-in overflow-hidden">
            
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-full h-full bg-gradient-to-br from-background/20 to-background/10 rounded-[2rem]" />
            </div>
            
            {/* Status Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full backdrop-blur-xl bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15 border border-primary/20 text-primary text-base font-semibold mb-16 animate-fade-in shadow-[0_4px_20px_0_rgba(31,38,135,0.2)] hover:scale-105 hover:shadow-[0_8px_30px_0_rgba(31,38,135,0.3)] transition-all duration-500 cursor-pointer">
              <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full mr-4 animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
              ✨ Available for Next-Gen Web3 Projects
            </div>

            {/* Hero Typography */}
            <div className="mb-16 space-y-8 animate-slide-up">
              {/* Main Title */}
              <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.8] tracking-tighter">
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-flow drop-shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
                  Muhammad
                </span>
                <span className="block bg-gradient-to-l from-accent via-primary to-secondary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-flow-reverse drop-shadow-[0_4px_20px_rgba(139,92,246,0.3)] mt-2">
                  Faizan
                </span>
              </h1>
              
              {/* Subtitle with Enhanced Design */}
              <div className="relative space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground/90 tracking-wide leading-tight">
                  <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold px-2 py-1 rounded-lg backdrop-blur-sm bg-primary/5 border border-primary/10">
                    Blockchain Architect
                  </span>
                  <span className="text-foreground/50 mx-4 text-4xl">×</span>
                  <span className="inline-block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-semibold px-2 py-1 rounded-lg backdrop-blur-sm bg-secondary/5 border border-secondary/10">
                    Web3 Innovator
                  </span>
                </h2>
                
                {/* Decorative Elements */}
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce" />
                  <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-20 leading-relaxed max-w-6xl mx-auto font-light animate-fade-in tracking-wide">
              Crafting the future of 
              <span className="relative inline-block mx-3">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                  decentralized ecosystems
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary opacity-50" />
              </span>
              through revolutionary blockchain architecture,
              <span className="relative inline-block mx-3">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-bold">
                  AI-powered solutions
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-secondary to-accent opacity-50" />
              </span>
              and next-generation Web3 experiences.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-slide-up">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="group relative px-12 py-8 text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white rounded-2xl transition-all duration-700 shadow-[0_8px_32px_0_rgba(59,130,246,0.3)] hover:shadow-[0_16px_48px_0_rgba(59,130,246,0.4)] transform hover:scale-110 hover:-translate-y-2 border-0 overflow-hidden min-w-[280px] backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl" />
                <div className="relative flex items-center justify-center">
                  <Eye className="w-7 h-7 mr-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                  Launch Collaboration
                </div>
              </Button>
              
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                size="lg"
                className="group relative px-12 py-8 text-xl font-bold backdrop-blur-xl bg-gradient-to-r from-background/20 to-background/10 border-2 border-secondary/30 hover:border-primary/50 text-secondary hover:text-primary rounded-2xl transition-all duration-700 shadow-[0_8px_32px_0_rgba(139,92,246,0.2)] hover:shadow-[0_16px_48px_0_rgba(139,92,246,0.3)] transform hover:scale-110 hover:-translate-y-2 min-w-[280px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-center justify-center">
                  <Download className="w-7 h-7 mr-4 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-500" />
                  Explore Portfolio
                </div>
              </Button>
            </div>

            {/* Enhanced Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-gradient-to-r from-primary/10 via-secondary/20 to-accent/10 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              {[
                { number: "5+", label: "Years Mastering Web3", gradient: "from-primary to-secondary", delay: "0s" },
                { number: "50+", label: "Blockchain Solutions", gradient: "from-secondary to-accent", delay: "0.2s" },
                { number: "24/7", label: "Global Innovation", gradient: "from-accent to-primary", delay: "0.4s" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group text-center animate-fade-in hover:scale-110 transition-all duration-500 cursor-pointer p-6 rounded-2xl backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 border border-transparent hover:border-primary/20"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className={`text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4 group-hover:animate-pulse group-hover:scale-105 transition-all duration-500 drop-shadow-[0_4px_20px_rgba(59,130,246,0.2)]`}>
                    {stat.number}
                  </div>
                  <div className="text-lg text-foreground/70 font-medium tracking-wider group-hover:text-foreground/90 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full opacity-20 animate-float ${
                    i % 4 === 0 ? 'w-3 h-3 bg-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 
                    i % 4 === 1 ? 'w-2 h-2 bg-secondary shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 
                    i % 4 === 2 ? 'w-4 h-4 bg-accent shadow-[0_0_25px_rgba(6,182,212,0.3)]' :
                    'w-1 h-1 bg-gradient-to-r from-primary to-secondary'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${6 + Math.random() * 8}s`
                  }}
                />
              ))}
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