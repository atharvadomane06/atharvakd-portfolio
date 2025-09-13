import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, GitBranch } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software developer with full-stack programming expertise using Java. Adept at working with databases, 
            solving algorithmic challenges, and building intelligent web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground">
                Experienced in both frontend and backend technologies with Java ecosystem
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Database Management</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in SQL and Oracle database design and optimization
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Web Technologies</h3>
              <p className="text-sm text-muted-foreground">
                Modern web development with HTML, CSS, JavaScript and frameworks
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <GitBranch className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Version Control</h3>
              <p className="text-sm text-muted-foreground">
                Expert in Git & GitHub for collaborative development and project management
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;