import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { LangSwitcher } from "@/components/common/LangSwitcher";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LangContext"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang } = useLang();

  const navLinks = [
    { name: lang === "ru" ? "Главная" : "Home", href: "#home" },
    { name: lang === "ru" ? "Обо мне" : "About", href: "#about" },
    { name: lang === "ru" ? "Проекты" : "Projects", href: "#projects" },
    { name: lang === "ru" ? "Навыки" : "Skills", href: "#skills" },
    { name: lang === "ru" ? "Контакты" : "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl md:text-2xl font-heading font-bold gradient-text"
        >
          {lang === "ru" ? "Портфолио" : "Portfolio"}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-3">
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitcher />
          <ThemeToggle />
          
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-background z-40 transform transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 gap-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
