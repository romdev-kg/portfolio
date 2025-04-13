
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import SocialLinks from "@/components/common/SocialLinks";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if the link is an anchor link
      if (anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <SocialLinks className="justify-center mb-6" />
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Рамазан Джоробаев. Все права защищены.
          </p>
        </div>
      </footer>
      
      {showBackToTop && (
        <Button 
          size="icon"
          className="fixed right-6 bottom-6 z-40 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
}

export default Index;
