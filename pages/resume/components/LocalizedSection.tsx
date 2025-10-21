import { SectionContainer } from '#root/components/SectionContainer';
import React from 'react';
import { useLanguage } from './LanguageSection';

export { LocalizedSection };

type LocalizedSectionProps = {
  titleKey: string;
  defaultTitle: string;
  children: React.ReactNode;
};

function LocalizedSection({ titleKey, defaultTitle, children }: LocalizedSectionProps) {
  const { getLocalizedContent, currentLanguage } = useLanguage();
  
  const localizedTitle = getLocalizedContent(titleKey) || defaultTitle;
  
  return (
    <SectionContainer title={localizedTitle} key={`${titleKey}-${currentLanguage}`}>
      {children}
    </SectionContainer>
  );
}
