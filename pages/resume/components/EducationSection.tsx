import { SectionList } from '#root/components/SectionList';
import { SectionTitle } from '#root/components/SectionTitle';
import { Education } from '#root/services/ContentLoader/types';
import { ListType } from '#root/components/SectionList';
import React from 'react';
import { LocalizedSection } from './LocalizedSection';
import { useLanguage } from './LanguageSection';

export { EducationSection };

type EducationSectionProps = { education: Education[] };
function EducationSection({ education }: EducationSectionProps) {
  const { getLocalizedContent, currentLanguage } = useLanguage();
  
  // Get localized education data if available, otherwise use default
  const localizedEducation = getLocalizedContent('education') || education;
  
  const subSections = localizedEducation.map((level: Education, index: number) => {
    return (
      <div className="mb-2" key={`${index}-${currentLanguage}`}>
        <SectionTitle
          left={level.area}
          middle={level.institution}
          middleUrl={level.url}
          right={`${level.startDate} - ${level.endDate}`}
        />

        <SectionList type={ListType.BULLET} points={level.highlights} />
      </div>
    );
  });

  return (
    <LocalizedSection titleKey="educationTitle" defaultTitle="Education">
      {subSections}
    </LocalizedSection>
  );
}
