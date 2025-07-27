import { ExternalLink, Github, Code, Database, Globe, Bot, Map, Chrome } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'EduTrade',
      description: 'A comprehensive MERN stack application for student book and note exchange featuring an intelligent chatbot and secure authentication system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Book Exchange', 'Chat System', 'User Authentication', 'Real-time Messaging'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'EDUTech Platform',
      description: 'A modern learning management system built with PHP and MySQL, providing seamless educational experiences for students and instructors.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      icon: <Globe className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Course Management', 'Student Dashboard', 'Assignment System', 'Progress Tracking'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Expense Tracker CLI',
      description: 'Python-based command-line expense tracking tool with SQLite database integration and matplotlib data visualization.',
      technologies: ['Python', 'SQLite', 'Matplotlib', 'CLI'],
      icon: <Database className="h-6 w-6" />,
      color: 'from-orange-500 to-red-500',
      features: ['CLI Interface', 'Data Visualization', 'SQLite Storage', 'Expense Analytics'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey through various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-0 bg-gradient-to-br from-card to-card/50 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-foreground hover:text-background transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="px-8 py-3 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/sanket-nikam" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;