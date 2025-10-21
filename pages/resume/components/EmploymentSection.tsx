import { ListType, SectionList } from '#root/components/SectionList';
import { SectionSummary } from '#root/components/SectionSummary';
import { SectionTags } from '#root/components/SectionTags';
import { SectionTitle } from '#root/components/SectionTitle';
import { Work } from '#root/services/ContentLoader/types';
import React from 'react';
import { LocalizedSection } from './LocalizedSection';
import { useLanguage } from './LanguageSection';

export { EmploymentSection };

type EmploymentSectionProps = { work: Work[] };
function EmploymentSection({ work }: EmploymentSectionProps) {
  const { getLocalizedContent, currentLanguage } = useLanguage();
  
  // Get localized work data if available, otherwise use default
  const localizedWork = getLocalizedContent('work') || work;
  
  const subSections = localizedWork.map((job, index) => {
    return (
      <div className="mb-2" key={`${index}-${currentLanguage}`}>
        <SectionTitle
          left={job.position}
          middle={job.name}
          middleUrl={job.url}
          right={`${job.startDate} - ${job.endDate}`}
        />

        <SectionSummary content={job.summary} />

        <SectionList type={ListType.CHECKMARK} points={job.highlights} />

        <SectionTags tags={job.keywords} />
      </div>
    );
  });

  return (
    <LocalizedSection titleKey="workTitle" defaultTitle="Employment">
      {subSections}
    </LocalizedSection>
  );
}
