import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/your-video.mp4" type="video/mp4" />
        <source src="/your-video.webm" type="video/webm" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10"></div>
      
      <div className="container-width relative z-20">
        <div className="text-center space-y-8">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Sanket Dinkar</span>
              <span className="block gradient-text">Nikam</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Software Developer | Web Enthusiast | Tech Explorer
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Final-year Computer Science student with a passion for building meaningful digital solutions. 
              Focused on web development, data engineering, and storytelling through creative content.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              className="btn-primary px-8 py-3 text-lg group"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="mailto:sanket@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sanket-nikam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/sanket-nikam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 card-hover"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;