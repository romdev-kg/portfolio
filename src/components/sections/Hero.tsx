import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/common/SocialLinks";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { lang } = useLang();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.05),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-12 flex flex-col items-center justify-center">
        <AnimatedSection animation="slide" className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {lang === "ru" 
              ? <>Привет, я <span className="gradient-text">Рамазан Джоробаев</span></>
              : <>Hi, I'm <span className="gradient-text">Ramazan Dzhorobaev</span></>
            }
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            {lang === "ru"
              ? "Frontend-разработчик, специализирующийся на создании веб-сайтов, интегрированных с блокчейном"
              : "Frontend Developer specializing in creating blockchain-integrated websites"
            }
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {lang === "ru"
              ? "Я разрабатываю адаптивные веб-приложения, выполняю безопасную интеграцию криптовалютных кошельков и создаю серверные решения на Django."
              : "I develop responsive web applications, implement secure cryptocurrency wallet integrations, and create server-side solutions with Django."
            }
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button asChild size="lg" className="shiny-button">
              <a href="#projects">
                {lang === "ru" ? "Смотреть проекты" : "View Projects"}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">{lang === "ru" ? "Связаться со мной" : "Contact Me"}</a>
            </Button>
          </div>
          
          <SocialLinks className="justify-center" iconSize={24} />
        </AnimatedSection>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-sm mb-1">{lang === "ru" ? "Узнать больше" : "Learn More"}</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
