import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Shield, 
  Layers,
  Zap,
  Blocks,
  Brain,
  Server,
  GitBranch,
  Cloud
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain",
      icon: Blocks,
      skills: ["Solidity", "Rust", "Ethereum", "Solana"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Smart Contracts",
      icon: Shield,
      skills: ["DeFi Protocols", "NFT Standards", "Security Auditing", "Gas Optimization"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      gradient: "bg-accent/20"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Python", "MongoDB", "Firebase"],
      gradient: "bg-primary/20"
    },
    {
      title: "Web3 Tools",
      icon: Layers,
      skills: ["Web3.js", "Ethers.js", "Hardhat", "Truffle"],
      gradient: "bg-secondary/20"
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: ["Machine Learning", "Neural Networks", "Data Analysis", "Automation"],
      gradient: "bg-accent/30"
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["AWS", "Vercel", "Docker", "CI/CD"],
      gradient: "bg-primary/30"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Code Review", "Team Collaboration"],
      gradient: "bg-secondary/30"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the entire blockchain development stack
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 hover-glow-primary hover-tilt group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Header */}
                <div className={`w-16 h-16 rounded-lg ${category.gradient} border border-primary/20 flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                  <IconComponent className="w-8 h-8 text-white/90" />
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-bold text-gradient group-hover:text-primary transition-colors duration-300 mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 group-hover:animate-pulse" />
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[Code2, Database, Cpu, Zap].map((Icon, index) => (
              <div key={index} className="animate-float hover:text-primary transition-colors duration-300 cursor-pointer">
                <Icon 
                  className="w-8 h-8" 
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;