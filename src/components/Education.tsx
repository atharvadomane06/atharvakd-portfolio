import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B. Tech in Computer Science & Engineering",
      institution: "Dr. J.J. Magdum College of Engineering, Jaysingpur",
      year: "2023",
      grade: "CGPA: 6.79",
      type: "Bachelor's Degree"
    },
    {
      degree: "Class XII (HSC)",
      institution: "Sadhana Jr. College of Science, Gadhinglaj",
      year: "2021 - April 2022",
      grade: "Percentage: 78.17%",
      type: "Higher Secondary"
    },
    {
      degree: "Class X (SSC)",
      institution: "Sadhana High School, Gadhinglaj",
      year: "2019 - March 2020",
      grade: "Percentage: 83.40%",
      type: "Secondary"
    }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Bachelor's Degree":
        return "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20";
      case "Higher Secondary":
        return "bg-green-500/10 text-green-700 hover:bg-green-500/20";
      case "Secondary":
        return "bg-purple-500/10 text-purple-700 hover:bg-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 hover:bg-gray-500/20";
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational journey and academic achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className={getBadgeColor(edu.type)}>
                    {edu.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                  <div className="text-primary font-semibold">
                    {edu.grade}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;