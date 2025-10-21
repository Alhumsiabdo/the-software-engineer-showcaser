import { ListType, SectionList } from '#root/components/SectionList';
import { AdditionalExperience as AdditionalExperienceType } from '#root/services/ContentLoader/types';
import React from 'react';
import { LocalizedSection } from './LocalizedSection';
import { useLanguage } from './LanguageSection';

export { AdditionalExperience };

type AdditionalExperienceProps = {
  additionalExperience: AdditionalExperienceType;
};
function AdditionalExperience({
  additionalExperience,
}: AdditionalExperienceProps) {
  const { getLocalizedContent, currentLanguage } = useLanguage();
  
  // Get localized additional experience data if available, otherwise use default
  const localizedAdditionalExperience = getLocalizedContent('additionalExperience') || additionalExperience;
  
  return (
    <LocalizedSection titleKey="additionalExperienceTitle" defaultTitle="Open Source">
      <div className="mb-2" key={currentLanguage}>
        <SectionList type={ListType.BULLET} points={localizedAdditionalExperience} />
      </div>
    </LocalizedSection>
  );
}
