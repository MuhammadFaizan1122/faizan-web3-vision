import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const About = () => {
  const achievements = [
    "5+ Years Blockchain Experience",
    "50+ Smart Contracts Deployed",
    "Web3 & DeFi Specialist",
    "AI Integration Expert"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting the future of decentralized technologies with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo Placeholder */}
          <div className="animate-slide-up">
            <Card className="glass-card p-8 hover-tilt">
              <div className="aspect-square rounded-lg bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-primary/20 border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gradient">MF</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="glass border-primary/30 text-primary hover-glow-primary"
                  >
                    {achievement}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-card p-8 hover-glow-primary">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Blockchain Pioneer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in blockchain development, I specialize in creating 
                cutting-edge Web3 solutions that bridge the gap between traditional systems and 
                decentralized technologies. My expertise spans across multiple blockchain ecosystems, 
                smart contract development, and DeFi protocols.
              </p>
            </Card>

            <Card className="glass-card p-8 hover-glow-secondary">
              <h3 className="text-2xl font-bold text-gradient-secondary mb-4">
                Innovation & Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about leveraging blockchain technology to solve real-world problems. 
                From NFT marketplaces to complex DeFi protocols, I deliver scalable solutions that 
                combine security, efficiency, and user experience. My work integrates AI and machine 
                learning to create next-generation decentralized applications.
              </p>
            </Card>

            <Card className="glass-card p-8 hover-glow-accent">
              <h3 className="text-2xl font-bold text-accent mb-4">
                Technical Mastery
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in Solidity, Rust, and modern web technologies, I build end-to-end 
                blockchain solutions. My expertise includes smart contract auditing, gas optimization, 
                cross-chain integrations, and building intuitive dApps that users love to interact with.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;