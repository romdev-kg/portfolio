
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LangContext";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  
  const toggleLang = () => {
    setLang(lang === "ru" ? "en" : "ru");
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="w-16 font-medium" 
      onClick={toggleLang}
    >
      {lang === "ru" ? "EN" : "RU"}
    </Button>
  );
}
