
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: "fade" | "slide" | "scale" | "none";
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animation = "fade",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  const animationClass = {
    fade: "opacity-0 transition-opacity duration-700 ease-in",
    slide: "opacity-0 translate-y-10 transition-all duration-700 ease-out",
    scale: "opacity-0 scale-95 transition-all duration-500 ease-out",
    none: "",
  }[animation];

  const visibleClass = isVisible ? "opacity-100 translate-y-0 scale-100" : "";

  return (
    <div
      ref={ref}
      className={cn(animationClass, visibleClass, className)}
    >
      {children}
    </div>
  );
}
