import { GraduationCap, Code, Database, Globe, GitBranch, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="h-6 w-6" />,
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: <Code className="h-6 w-6" />,
      technologies: ['PHP', 'Node.js', 'Express.js', 'Python'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database',
      icon: <Database className="h-6 w-6" />,
      technologies: ['MySQL', 'MongoDB', 'SQLite'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      category: 'Tools & Others',
      icon: <GitBranch className="h-6 w-6" />,
      technologies: ['Git', 'Vite', 'Apache Spark', 'Salesforce'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const education = [
    {
      degree: 'B.Tech Computer Science Engineering',
      institution: 'Sandip University, Nashik',
      duration: '2021 - 2025',
      status: 'Final Year'
    },
    {
      degree: 'Diploma in Computer Technology',
      institution: 'Government Polytechnic',
      duration: 'Completed',
      status: '84.34%'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and always eager to learn new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-2xl transform rotate-6"></div>
                <img 
                  src={profilePhoto}
                  alt="Sanket Dinkar Nikam"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-muted-foreground">{edu.duration}</span>
                          <span className="text-sm font-medium text-primary">{edu.status}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-primary" />
                  Quick Facts
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🎯 Focused on MERN stack development</li>
                  <li>📊 Experienced in data engineering with Apache Spark</li>
                  <li>🚀 Built 6+ full-stack projects</li>
                  <li>💡 Passionate about problem-solving and innovation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-4`}>
                          {skill.icon}
                        </div>
                        <h4 className="text-lg font-semibold">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold mb-3 text-primary">Currently Learning</h3>
              <p className="text-muted-foreground">
                Advanced React patterns, Docker containerization, and exploring cloud technologies 
                to enhance my full-stack development capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;