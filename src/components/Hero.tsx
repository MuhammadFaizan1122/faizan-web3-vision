import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Radial Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-secondary/15 via-secondary/5 to-transparent blur-3xl" />
      
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Content */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="max-w-2xl space-y-12">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for freelance
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                <span className="block text-foreground">Muhammad</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Faizan
                </span>
              </h1>
              
              <div className="flex items-center gap-4 text-xl lg:text-2xl text-muted-foreground font-light">
                <span>Full-Stack Developer</span>
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Web3 Enthusiast</span>
              </div>
            </div>

            {/* Description */}
            <div className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              I craft exceptional digital experiences through innovative web development, 
              blockchain solutions, and cutting-edge design that brings ideas to life.
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Let's Work Together
              </Button>
              
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-base font-semibold border-primary/20 hover:border-primary/40 text-foreground hover:bg-primary/5"
              >
                <Code className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Element */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          {/* Main Circle */}
          <div className="relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">Innovation</div>
                  <div className="text-sm text-muted-foreground max-w-[200px]">
                    Pushing boundaries in web development and blockchain technology
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 animate-float" />
            <div className="absolute -bottom-12 -right-12 w-12 h-12 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-16 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute -top-4 right-1/4 w-6 h-6 rounded-full bg-primary/30 animate-pulse" />
            <div className="absolute bottom-1/4 -left-12 w-4 h-4 rounded-full bg-secondary/30 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center mb-2 group-hover:border-primary">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
          <ArrowDown className="w-4 h-4 opacity-60 group-hover:opacity-100" />
        </button>
      </div>
    </section>
  );
};

export default Hero;