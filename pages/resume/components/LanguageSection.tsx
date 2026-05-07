import { SectionContainer } from '#root/components/SectionContainer';
import { Language } from '#root/services/ContentLoader/types';
import React, { useState, useContext, createContext, useEffect } from 'react';

export { LanguageSection, LanguageProvider, useLanguage };

// Create language context
const LanguageContext = createContext<{
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  availableLanguages: Language[];
  getLocalizedContent: (key: string) => any;
}>({
  currentLanguage: 'en',
  setCurrentLanguage: () => {},
  availableLanguages: [],
  getLocalizedContent: () => null
});

// Language provider component
function LanguageProvider({ 
  children, 
  languages 
}: { 
  children: React.ReactNode; 
  languages: Language[] 
}) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const getLocalizedContent = (key: string) => {
    const currentLang = languages.find(lang => 
      Object.keys(lang.content)[0] === currentLanguage
    );
    
    if (currentLang) {
      const langCode = Object.keys(currentLang.content)[0];
      return currentLang.content[langCode][key];
    }
    
    return null;
  };

  // Update document title and meta when language changes
  useEffect(() => {
    const localizedBasics = getLocalizedContent('basics');
    if (localizedBasics && localizedBasics.name) {
      document.title = `${localizedBasics.name} - Résumé`;
    }
  }, [currentLanguage]);
  
  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
      availableLanguages: languages,
      getLocalizedContent
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use language context
function useLanguage() {
  return useContext(LanguageContext);
}

type LanguageSectionProps = {
  languages: Language[];
};

function LanguageSection({ languages }: LanguageSectionProps) {
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const handleLanguageClick = (languageCode: string) => {
    setCurrentLanguage(languageCode);
  };

  const languageList = languages.map((language, index) => {
    const languageCode = Object.keys(language.content)[0];
    const isActive = currentLanguage === languageCode;
    
    return (
      <button
        key={index}
        className={`px-3 py-2 text-sm rounded transition-colors ${
          isActive 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleLanguageClick(languageCode)}
      >
        <div className="font-semibold">{language.name}</div>
        <div className="text-xs opacity-75">({language.level})</div>
      </button>
    );
  });

  return (
    <div className="mb-4 text-center">
      <div className="inline-flex gap-2">
        {languageList}
      </div>
    </div>
  );
}
