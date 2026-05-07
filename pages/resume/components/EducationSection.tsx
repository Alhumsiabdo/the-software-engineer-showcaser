import { SectionContainer } from '#root/components/SectionContainer';
import { Education } from '#root/services/ContentLoader/types';
import React from 'react';

export { EducationSection };

type EducationSectionProps = { education: Education[] };
function EducationSection({ education }: EducationSectionProps) {
  const subSections = education.map((entry, index) => (
    <div className="mb-3" key={index}>
      <div className="flex items-baseline justify-between">
        {entry.url ? (
          <a href={entry.url} target="_blank" className="font-bold">
            {entry.institution}
          </a>
        ) : (
          <p className="font-bold">{entry.institution}</p>
        )}
        {entry.date && (
          <p className="text-xs sm:text-sm print:text-sm whitespace-nowrap ml-4 shrink-0">
            {entry.date}
          </p>
        )}
      </div>
      <p className="leading-snug mt-0.5">{entry.description}</p>
    </div>
  ));

  return (
    <SectionContainer title="Education & Certifications">{subSections}</SectionContainer>
  );
}
