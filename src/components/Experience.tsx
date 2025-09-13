import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Internship",
      company: "Zidio Development",
      duration: "July 2025 – Onwards",
      type: "Current",
      description: "Acquiring knowledge of Java full stack development",
      skills: ["Java", "Full Stack Development"]
    },
    {
      position: "Internship", 
      company: "Codec Technologies",
      duration: "June 2025 - July 2025",
      type: "Completed",
      description: "Gained knowledge in Cloud Computing technologies and platforms",
      skills: ["Cloud Computing"]
    }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Current":
        return "bg-green-500/10 text-green-700 hover:bg-green-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 hover:bg-gray-500/20";
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and learning experiences
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className={getBadgeColor(exp.type)}>
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;