import { SectionTags } from '#root/components/SectionTags';
import { SkillContainer } from '#root/services/ContentLoader/types';
import React from 'react';
import { LocalizedSection } from './LocalizedSection';
import { useLanguage } from './LanguageSection';

export { SkillsSection };

type SkillsProps = {
  skills: SkillContainer[];
};
function SkillsSection({ skills }: SkillsProps) {
  const { getLocalizedContent, currentLanguage } = useLanguage();
  
  // Get localized skills data if available, otherwise use default
  const localizedSkills = getLocalizedContent('skills') || skills;
  
  const skillContainersList = localizedSkills.map((skillContainer, index) => {
    return (
      <div key={`${index}-${currentLanguage}`} className="flex row items-center ml-2">
        <span>{skillContainer.name}: </span>
        <SectionTags tags={skillContainer.skills} big />
      </div>
    )
  })

  return (
    <LocalizedSection titleKey="skillsTitle" defaultTitle="Skills">
      <div className="mb-2">
        {skillContainersList}
      </div>
    </LocalizedSection>
  );
}
