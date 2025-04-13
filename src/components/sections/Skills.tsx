import { useEffect, useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLang } from "@/context/LangContext";

const skillCategories = {
  frontend: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "Vite", level: 80 },
    { name: "Redux", level: 75 },
    { name: "Tailwind", level: 85 },
  ],
  backend: [
    { name: "Python", level: 70 },
    { name: "Django", level: 60 },
    { name: "Docker", level: 75 },
  ],
  devops: [
    { name: "Git", level: 80 },
    { name: "GitOPS", level: 75 },
    { name: "ArgoCD", level: 70 },
    { name: "Kubernetes", level: 65 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default function Skills() {
  const { lang } = useLang();
  
  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection animation="fade">
          <h2 className="section-title text-center">
            {lang === "ru" ? "Мои навыки" : "My Skills"}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            {lang === "ru" 
              ? "За годы работы я освоил различные технологии и инструменты, необходимые для создания современных веб-приложений, включая блокчейн-интеграцию"
              : "Over the years, I have mastered various technologies and tools necessary for creating modern web applications, including blockchain integration"
            }
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade" delay={200}>
          <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend">
                Backend
              </TabsTrigger>
              <TabsTrigger value="devops">
                DevOps
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="frontend" className="mt-6">
              {skillCategories.frontend.map((skill, index) => (
                <AnimatedSection key={index} animation="slide" delay={index * 100}>
                  <SkillBar name={skill.name} level={skill.level} />
                </AnimatedSection>
              ))}
            </TabsContent>
            
            <TabsContent value="backend" className="mt-6">
              {skillCategories.backend.map((skill, index) => (
                <AnimatedSection key={index} animation="slide" delay={index * 100}>
                  <SkillBar name={skill.name} level={skill.level} />
                </AnimatedSection>
              ))}
            </TabsContent>
            
            <TabsContent value="devops" className="mt-6">
              {skillCategories.devops.map((skill, index) => (
                <AnimatedSection key={index} animation="slide" delay={index * 100}>
                  <SkillBar name={skill.name} level={skill.level} />
                </AnimatedSection>
              ))}
            </TabsContent>
          </Tabs>
        </AnimatedSection>
        
        <AnimatedSection animation="fade" delay={400} className="mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {[
              "JavaScript", "React", "Vue.js", "Python", 
              "Tailwind", "Docker", "Git", "Kubernetes"
            ].map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{tech.charAt(0)}</span>
                </div>
                <h4 className="font-medium">{tech}</h4>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
