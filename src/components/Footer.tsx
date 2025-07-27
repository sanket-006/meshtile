import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Sanket Dinkar Nikam</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Software Developer passionate about creating meaningful digital solutions 
              and exploring new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-background transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Let's Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="mailto:sanket.nikam@example.com"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sanket-nikam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/sanket-nikam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-background/60 text-sm">
              Open for collaborations and opportunities
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} Sanket Dinkar Nikam. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;