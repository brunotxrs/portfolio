import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  pt: {
    'euSou': 'Eu sou',
    'desenvolvedorFrontEnd': 'Desenvolvedor Front-End',
    'sobreMim': 'Desenvolvedor Front-End com dedicação por transformar ideias em experiências web impactantes.',
    'projetos': 'Projetos',
    'habilidades': 'Habilidades',
    'imagemDeBruno': 'imagem de Bruno Teixeira de Óculos',
  },
  en: {
    'euSou': 'I am',
    'desenvolvedorFrontEnd': 'Front-End Developer',
    'sobreMim': 'Front-End Developer with dedication to transforming ideas into impactful web experiences.',
    'projetos': 'Projects',
    'habilidades': 'Skills',
    'imagemDeBruno': 'Bruno Teixeira wearing glasses image',
  },
};

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt'); // Idioma padrão é português

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const getTranslation = (key) => {
    return translations[language][key] || key; // Retorna a tradução ou a chave se não encontrada
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
}