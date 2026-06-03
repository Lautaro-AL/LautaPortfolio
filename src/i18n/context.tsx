import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { es } from './es';
import type { Translations } from './es';
import { en } from './en';
import type { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es');
  const t = lang === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
