import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/context/LangContext";

export default function Projects() {
  const { lang } = useLang();
  
  // Статический массив проектов вместо запроса к Supabase
  const projects = [
    {
      id: 1,
      title: "RoboIQ Financial",
      description: lang === "ru" 
        ? "Веб-сайт финансовой компании, разработанный совместно с коллегой из Украины. Я полностью отвечал за интерфейс проекта и создал целевую страницу."
        : "Financial company website developed in collaboration with a colleague from Ukraine. I was fully responsible for the project interface and created the landing page.",
      image: "/images/projects/roboiq.png",
      tags: ["React", "HTML", "CSS", "JavaScript", "UI/UX"],
      demo_url: "https://roboiq.financial/welcome",
      repo_url: ""
    },
    {
      id: 2,
      title: "Meiman",
      description: lang === "ru" 
        ? "Платформа для бронирования жилья с современным интерфейсом. Разработка административной части на Vue.js в компании DevAs."
        : "Housing booking platform with a modern interface. Development of the admin part using Vue.js at DevAs company.",
      image: "/images/projects/maiman.png",
      tags: ["Vue.js", "JavaScript", "Tailwind CSS", "Admin Panel"],
      demo_url: "https://meiman.kg",
      repo_url: ""
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <AnimatedSection animation="fade">
          <h2 className="section-title text-center">
            {lang === "ru" ? "Мои проекты" : "My Projects"}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            {lang === "ru" 
              ? "Исследуйте разнообразные проекты, которые я создал, демонстрирующие мои навыки и опыт в разработке веб-приложений"
              : "Explore the various projects I've created, showcasing my skills and experience in web application development"}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              className="card-hover rounded-xl overflow-hidden bg-background border border-border" 
              animation="scale" 
              delay={100 * index}
            >
              <div className="aspect-video w-full bg-muted relative">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.demo_url && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        {lang === "ru" ? "Смотреть проект" : "View Project"}
                      </a>
                    </Button>
                  )}
                  {project.repo_url && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.repo_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        {lang === "ru" ? "Код" : "Code"}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
