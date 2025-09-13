import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Alumni Association Platform",
      description: "Developed a responsive portfolio website using HTML, CSS to showcase skills and projects. Implemented back-end logic using Java, Spring, and Spring Boot for managing alumni connections and networking.",
      role: "Frontend Developer",
      technologies: ["HTML", "CSS", "Java", "Spring", "Spring Boot"],
      type: "Web Application",
      icon: Users
    },
    {
      title: "Quiz Web Application", 
      description: "Designed and developed an interactive quiz platform with multiple categories using HTML, CSS, and JavaScript for an engaging user experience. Integrated backend services using Java and Spring Boot to manage quiz data, evaluate responses, and generate results.",
      role: "Full Stack Developer",
      technologies: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
      type: "Interactive Platform",
      icon: Code2
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on showcasing my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{project.role}</p>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="bg-background hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3 pt-6">
                <Button variant="outline" className="flex-1" disabled>
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="outline" className="flex-1" disabled>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More projects coming soon! I'm continuously working on new and exciting challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;