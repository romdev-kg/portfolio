import { cn } from "@/lib/utils";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

export default function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/romdev-kg",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/romdevv",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/romdevv",
      icon: Instagram,
    },
    {
      name: "Email",
      url: "mailto:romdevv@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={link.name}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
