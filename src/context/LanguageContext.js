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
    // Tela Habilidade
    'expoloreHabilidades': 'Explore minhas habilidades clicando nos ícones abaixo.',
    'ferramentas': 'Ferramentas:',
    'outros': 'Outros:',
    'LogicaDeProgramacao': 'Lógica de Programação',
    'certificado': 'Certificados',
    // Certificados
    'Lógica de Programação': 'Lógica de Programação',
    'Complementares': 'Complementares',
    // Projetos
    'meusTrabalhos':'Meus Trabalhos',
    'subTituloTrabalho':'Detalhes e informações sobre cada trabalho estão disponíveis ao clicar abaixo.',
    'Jogo Detona Ralph': 'Jogo Detona Ralph',
    'Spotify Clone': 'Spotify Clone',
    'DevLinks': 'DevLinks',
    'Jogo da Memória': 'Jogo da Memória',
    'PetLife': 'PetLife',
    'Travelgram': 'Travelgram',
    'paragraph': 'Meu compromisso é entregar experiências web que inspirem e engajem.',
  },
  en: {
    'euSou': `I'm`,
    'desenvolvedorFrontEnd': 'Front-End Developer',
    'sobreMim': 'Front-End Developer with dedication to transforming ideas into impactful web experiences.',
    'projetos': 'Projects',
    'habilidades': 'Skills',
    'imagemDeBruno': 'Bruno Teixeira wearing glasses image',
    // Tela Skills
    'expoloreHabilidades': 'Explore my skills by clicking the icons below.',
    'ferramentas': 'Tools:',
    'outros': 'Others:',
    'LogicaDeProgramacao': 'Programming Logic',
    'certificado': 'Certificates',
    // Certificates
    'Lógica de Programação': 'Programming Logic',
    'Complementares': 'Complementary',
    // Projetos
    'meusTrabalhos':'My Works',
    'subTituloTrabalho':'Details and information about each job are available by clicking below.',
    'Jogo Detona Ralph': 'Wreck-It Ralph Game',
    'Spotify Clone': 'Spotify Clone',
    'DevLinks': 'DevLinks',
    'Jogo da Memória': 'Memory Game',
    'PetLife': 'PetLife',
    'Travelgram': 'Travelgram',
    'paragraph': 'My commitment is to deliver web experiences that inspire and engage.',
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