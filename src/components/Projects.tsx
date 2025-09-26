'use client'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DeFi Yield Optimizer",
      description: "Advanced yield farming protocol with AI-driven portfolio optimization and automated rebalancing for maximum returns.",
      technologies: ["Solidity", "React", "Node.js", "Web3.js"],
      features: ["Smart Contract Automation", "AI Optimization", "Cross-chain Support"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "NFT Marketplace",
      description: "Next-generation NFT trading platform with advanced analytics, fractional ownership, and social features.",
      technologies: ["Rust", "Next.js", "Solana", "TypeScript"],
      features: ["Fractional NFTs", "Real-time Analytics", "Social Trading"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Cross-Chain Bridge",
      description: "Secure and efficient bridge protocol enabling seamless asset transfers between multiple blockchain networks.",
      technologies: ["Solidity", "Python", "Ethereum", "Polygon"],
      features: ["Multi-chain Support", "Security Audited", "Low Gas Fees"],
      gradient: "bg-accent/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative blockchain solutions that push the boundaries of Web3 technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover-tilt hover-glow-primary group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className={`h-32 rounded-lg ${project.gradient} border border-primary/20 mb-6 flex items-center justify-center relative overflow-hidden`}>
                <Zap className="w-12 h-12 text-white/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gradient group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="glass border-primary/20 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass border-primary/30 text-primary hover:bg-primary/10 flex-1"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass border-secondary/30 text-secondary hover:bg-secondary/10 flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;