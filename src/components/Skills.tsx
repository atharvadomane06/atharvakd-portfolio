import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "C++"],
      color: "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20"
    },
    {
      title: "Database",
      skills: ["SQL", "Oracle"],
      color: "bg-green-500/10 text-green-700 hover:bg-green-500/20"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-purple-500/10 text-purple-700 hover:bg-purple-500/20"
    },
    {
      title: "Technology",
      skills: ["Git", "GitHub"],
      color: "bg-orange-500/10 text-orange-700 hover:bg-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-center text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.color} transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Always learning new technologies and staying updated with the latest industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;