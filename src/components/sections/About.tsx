import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function About() {
  const { lang } = useLang();
  
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection animation="fade">
          <h2 className="section-title text-center">
            {lang === "ru" ? "Обо мне" : "About Me"}
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8">
          <AnimatedSection animation="slide" delay={200} className="md:col-span-1">
            <div className="rounded-lg overflow-hidden bg-background shadow-lg">
              <div className="aspect-square w-full bg-muted relative">
                <img 
                  src="/images/ramazan.png" 
                  alt={lang === "ru" ? "Рамазан Джоробаев" : "Ramazan Dzhorobaev"} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {lang === "ru" ? " Рамазан Джоробаев" : "Ramazan Dzhorobaev"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {lang === "ru" ? " Frontend-разработчик" : "Frontend Developer"}
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <div>
                    <span className="font-semibold">{lang === "ru" ? "Опыт:" : "Experience:"}</span> 
                    {lang === "ru" ? " 2+ года" : "2+ years"}
                  </div>
                  <div>
                    <span className="font-semibold">{lang === "ru" ? "Образование: " : "Education:"}</span> 
                    {lang === "ru" ? " Салымбеков Университет IT и Бизнеса" : "Salymbekov University of IT and Business"}
                  </div>
                  <div>
                    <span className="font-semibold">{lang === "ru" ? "Местонахождение:" : "Location:"}</span> 
                    {lang === "ru" ? "Бишкек, Кыргызстан" : "Bishkek, Kyrgyzstan"}
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <a href="/images/projects/resume.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    {lang === "ru" ? "Скачать резюме" : "Download Resume"}
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide" delay={300} className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="section-subtitle">
                  {lang === "ru" ? "Кто я?" : "Who am I?"}
                </h3>
                <p className="text-lg">
                  {lang === "ru" 
                    ? "Я frontend-разработчик с более чем двухлетним опытом работы и академической подготовкой. Я специализируюсь на React, Vue.js, Django и REST API, уделяя особое внимание созданию веб-сайтов, интегрированных с блокчейном. В настоящее время работаю в компании DevAs в качестве Middle Frontend разработчика."
                    : "I'm a frontend developer with over two years of experience and academic background. I specialize in React, Vue.js, Django, and REST APIs, with a focus on creating blockchain-integrated websites. Currently working at DevAs company as a Middle Frontend developer."
                  }
                </p>
              </div>
              
              <div>
                <h3 className="section-subtitle">
                  {lang === "ru" ? "Опыт" : "Experience"}
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">
                      {lang === "ru" ? "Middle Frontend developer в DevAs" : "Middle Frontend developer at DevAs"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {lang === "ru" ? "Бишкек, Кыргызстан • Март 2025 - настоящее время" : "Bishkek, Kyrgyzstan • March 2025 - Present"}
                    </p>
                    <p className="mt-1">
                      {lang === "ru" 
                        ? "Разработка административной части на Vue.js. Работа в гибридном формате. Создание современных пользовательских интерфейсов для веб-приложений."
                        : "Development of the admin part using Vue.js. Hybrid work format. Creating modern user interfaces for web applications."
                      }
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">
                      {lang === "ru" ? "Frontend Блокчейн, gitOPS, Python разработчик" : "Frontend Blockchain, gitOPS, Python Developer"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {lang === "ru" ? "Россия • Сентябрь 2024 - настоящее время" : "Russia • September 2024 - Present"}
                    </p>
                    <p className="mt-1">
                      {lang === "ru" 
                        ? "Разработка средства проверки кошельков Ton с помощью React. Работа с GitLab CI и Argo CD для развертывания в Kubernetes. Разработка автоматизированного бота для торговли на DEX StonFi (блокчейн TON)."
                        : "Development of a Ton wallet verification tool using React. Working with GitLab CI and Argo CD for Kubernetes deployments. Development of an automated trading bot for DEX StonFi (TON blockchain)."
                      }
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/70 pl-4">
                    <h4 className="font-semibold">
                      {lang === "ru" ? "Блокчейн React разработчик" : "Blockchain React Developer"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {lang === "ru" ? "Украина • Декабрь 2023 - Сентябрь 2024" : "Ukraine • December 2023 - September 2024"}
                    </p>
                    <p className="mt-1">
                      {lang === "ru" 
                        ? "Разработка интерфейса для проекта roboiq.financial. Создание целевой страницы и административной панели. Разработка приложения React для голосования с использованием TypeScript."
                        : "Interface development for the roboiq.financial project. Creation of landing page and admin panel. Development of a React voting application using TypeScript."
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="section-subtitle">
                  {lang === "ru" ? "Образование" : "Education"}
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/50 pl-4">
                    <h4 className="font-semibold">
                      {lang === "ru" ? "Компьютерная наука" : "Computer Science"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {lang === "ru" ? "INTI International University, Малайзия • Январь 2025 - Май 2025" : "INTI International University, Malaysia • January 2025 - May 2025"}
                    </p>
                    <p className="mt-1">
                      {lang === "ru" 
                        ? "Обучение по программе обмена в области компьютерных наук. Изучение передовых технологий разработки и международных практик программирования."
                        : "Exchange program in Computer Science. Study of advanced development technologies and international programming practices."
                      }
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/50 pl-4">
                    <h4 className="font-semibold">
                      {lang === "ru" ? "Компьютерная наука" : "Computer Science"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {lang === "ru" ? "Салымбеков Университет IT и Бизнеса • 2021 - 2025" : "Salymbekov University of IT and Business • 2021 - 2025"}
                    </p>
                    <p className="mt-1">
                      {lang === "ru" 
                        ? "Специализация в компьютерных науках и разработке. Разработал на React проект \"Вентстрой\" для компаний вентиляционных труб."
                        : "Specialization in computer science and development. Developed a React project \"Ventstroy\" for ventilation pipe companies."
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="section-subtitle">
                  {lang === "ru" ? "Интересы" : "Interests"}
                </h3>
                <p>
                  {lang === "ru" 
                    ? "Помимо разработки, я увлекаюсь шахматами (чемпион 2022-2023), футболом, PUBG, участием в хакатонах и пауэрлифтингом. Владею английским (B1), русским (C2) и кыргызским (C2) языками."
                    : "Besides development, I enjoy chess (champion 2022-2023), football, PUBG, participating in hackathons, and powerlifting. I speak English (B1), Russian (C2), and Kyrgyz (C2)."
                  }
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
