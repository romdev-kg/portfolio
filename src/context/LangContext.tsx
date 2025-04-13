
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Language = "ru" | "en";

type TranslationsType = Record<string, {
  ru: string;
  en: string;
}>;

type LangContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  translations: TranslationsType;
  isLoading: boolean;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    return savedLang || "ru";
  });
  const [translations, setTranslations] = useState<TranslationsType>({});
  const [isLoading, setIsLoading] = useState(true);

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][lang];
  };

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from("translations")
          .select("key, ru, en");

        if (error) {
          console.error("Error fetching translations:", error);
          return;
        }

        const formattedTranslations: TranslationsType = {};
        data.forEach((item) => {
          formattedTranslations[item.key] = {
            ru: item.ru,
            en: item.en,
          };
        });

        setTranslations(formattedTranslations);
      } catch (error) {
        console.error("Error in fetchTranslations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t, translations, isLoading }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
