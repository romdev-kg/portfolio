import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import SocialLinks from "@/components/common/SocialLinks";
import { useLang } from "@/context/LangContext";

export default function Contact() {
  const { lang } = useLang();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success(
        lang === "ru" 
          ? "Сообщение отправлено! Я свяжусь с вами в ближайшее время."
          : "Message sent! I will contact you soon."
      );
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: lang === "ru" ? "Местоположение" : "Location",
      details: lang === "ru" ? "Бишкек, Кыргызстан" : "Bishkek, Kyrgyzstan",
    },
    {
      icon: Mail,
      title: "Email",
      details: "romdevv@gmail.com",
    },
    {
      icon: Phone,
      title: "Telegram",
      details: "@romdevv",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <AnimatedSection animation="fade">
          <h2 className="section-title text-center">
            {lang === "ru" ? "Свяжитесь со мной" : "Contact Me"}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            {lang === "ru" 
              ? "Готовы обсудить проект или у вас есть вопросы? Заполните форму ниже, и я свяжусь с вами в ближайшее время"
              : "Ready to discuss a project or have questions? Fill out the form below, and I'll get back to you as soon as possible"
            }
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection animation="slide" delay={100}>
            <div className="space-y-8">
              <h3 className="section-subtitle">
                {lang === "ru" ? "Контактная информация" : "Contact Information"}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="font-medium mb-3">
                  {lang === "ru" ? "Социальные сети" : "Social Media"}
                </h4>
                <SocialLinks iconSize={24} />
              </div>
              
              <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                <h4 className="font-medium mb-2">
                  {lang === "ru" ? "Языки" : "Languages"}
                </h4>
                <p className="text-muted-foreground">
                  English (B1), Russian (C2), Kyrgyz (C2)
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide" delay={200}>
            <div className="bg-background rounded-lg border border-border p-6 md:p-8">
              <h3 className="section-subtitle mb-6">
                {lang === "ru" ? "Отправьте сообщение" : "Send a Message"}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {lang === "ru" ? "Имя" : "Name"}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={lang === "ru" ? "Ваше имя" : "Your name"}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={lang === "ru" ? "ваш@email.com" : "your@email.com"}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {lang === "ru" ? "Сообщение" : "Message"}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={lang === "ru" ? "Опишите ваш проект или вопрос" : "Describe your project or question"}
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (lang === "ru" ? "Отправка..." : "Sending...") 
                    : (lang === "ru" ? "Отправить сообщение" : "Send Message")
                  }
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
