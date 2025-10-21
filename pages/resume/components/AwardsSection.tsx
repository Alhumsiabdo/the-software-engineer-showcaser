import { ListType, SectionList } from '#root/components/SectionList';
import { Awards } from '#root/services/ContentLoader/types';
import React from 'react';
import { LocalizedSection } from './LocalizedSection';
import { useLanguage } from './LanguageSection';

export { AwardsSection };

type AwardsSectionProps = { awards: Awards };
function AwardsSection({ awards }: AwardsSectionProps) {
  const { getLocalizedContent, currentLanguage } = useLanguage();
  
  // Get localized awards data if available, otherwise use default
  const localizedAwards = getLocalizedContent('awards') || awards;
  
  return (
    <LocalizedSection titleKey="awardsTitle" defaultTitle="Awards and Most Proud of">
      <div className="mb-2" key={currentLanguage}>
        <SectionList type={ListType.BULLET} points={localizedAwards} />
      </div>
    </LocalizedSection>
  );
}
