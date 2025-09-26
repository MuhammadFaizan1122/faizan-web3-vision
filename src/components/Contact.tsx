'use client'
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-primary" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-secondary" },
    { icon: Mail, href: "mailto:muh.faizaan@gmail.com", label: "Email", color: "hover:text-primary" }
  ];

  const contactInfo = [
    { icon: Mail, text: "muh.faizaan@gmail.com", color: "text-primary" },
    { icon: Phone, text: "+92 (300) 249-3788", color: "text-secondary" },
    { icon: MapPin, text: "Available Worldwide", color: "text-accent" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {`Let's`} <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your Web3 vision to life? {`Let's`} discuss your next blockchain project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="glass-card p-8 hover-glow-primary">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {`I'm`} always excited to discuss new opportunities and innovative blockchain projects. 
                Whether you need a smart contract audit, DeFi protocol development, or complete 
                Web3 solution, {`I'm`} here to help.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg glass border-primary/20 flex items-center justify-center ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
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
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="glass-card p-8 hover-glow-secondary">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass bg-muted/5 border-primary/20 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass bg-muted/5 border-primary/20 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass bg-muted/5 border-primary/20 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="glass bg-muted/5 border-primary/20 focus:border-primary focus:ring-primary/20 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full glass bg-primary/20 text-primary border-primary hover:bg-primary hover:text-primary-foreground hover-glow-primary transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;