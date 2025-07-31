import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You need to replace these with your actual EmailJS credentials
      // Get them from https://www.emailjs.com/
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'sanketn317@gmail.com', // Your email
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'sanketn317@gmail.com',
      link: 'mailto:sanketn317@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sanket-nikam-65690b190',
      link: 'https://www.linkedin.com/in/sanket-nikam-65690b190/',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      value: 'github.com/Sanket-nikam06',
      link: 'https://github.com/Sanket-nikam06',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Nashik, Maharashtra, India',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or explore collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Whether you have a project in mind, need technical advice, or just want to say hello, 
                feel free to reach out!
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover border-0 bg-gradient-to-r from-card to-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <a 
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold mb-3">Available For</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Frontend Development (React, JavaScript)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Full-stack Web Applications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Technical Consultations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Open Source Contributions
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3 text-lg group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-xl border border-primary/20">
              <h4 className="text-lg font-semibold text-primary mb-2">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;