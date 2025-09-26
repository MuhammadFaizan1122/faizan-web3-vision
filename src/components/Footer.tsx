'use client'
import { Button } from '@/components/ui/button';
import { ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Send } from 'lucide-react';

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


  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-primary" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-secondary" },
    { icon: Mail, href: "mailto:muh.faizaan@gmail.com", label: "Email", color: "hover:text-primary" }
  ];

  const services = [
    'Smart Contract Development',
    'DeFi Protocol Design',
    'NFT Marketplace Creation',
    'Blockchain Consulting'
  ];

  return (
    <footer className="relative py-20 px-6 glass-header border-t-2 border-primary/20 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-accent/3 pointer-events-none" />
      <div className="container mx-auto relative z-10 max-w-[1510px]">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-xl">MF</span>
              </div>
              <h3 className="text-3xl font-bold text-gradient">
                Muhammad Faizan
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
              Pioneering the future of Web3 with innovative blockchain solutions.
              Transforming ideas into decentralized reality through cutting-edge technology and expert craftsmanship.
            </p>

            <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 glass border-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover-glow-primary ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gradient-secondary">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center text-muted-foreground hover:text-primary transition-all duration-300 text-left group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3 group-hover:bg-primary transition-colors duration-300" />
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-accent">
              Services
            </h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-2 text-sm text-muted-foreground">
              <p className="text-primary font-semibold">📧 muh.faizaan@gmail.com</p>
              <p className="text-secondary">🌍 Available Worldwide</p>
              <p className="text-accent">⚡ 24/7 Response Time</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-primary opacity-30 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3 text-muted-foreground">
            <span>© {new Date().getFullYear()} Muhammad Faizan.</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 hover-glow-primary hover-glass transition-all duration-500 font-semibold px-6 transform hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;