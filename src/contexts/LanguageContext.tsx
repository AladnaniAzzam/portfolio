import React, { createContext, useContext, useEffect, useState } from 'react';
import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';

type Language = 'en' | 'ar';
type Translations = typeof enTranslations;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
  isRTL: boolean;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    root.setAttribute('lang', language);
    localStorage.setItem('language', language);
    
    // Update font family based on language
    if (isRTL) {
      root.style.fontFamily = "'Tajawal', 'Cairo', sans-serif";
    } else {
      root.style.fontFamily = "'Inter', 'Poppins', sans-serif";
    }
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        toggleLanguage, 
        t: translations[language], 
        isRTL 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
