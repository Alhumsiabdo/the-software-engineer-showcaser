import { SectionContainer } from '#root/components/SectionContainer';
import { Awards } from '#root/services/ContentLoader/types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export { AwardsSection };

type AwardsSectionProps = { awards: Awards };
function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <SectionContainer title="Notable Achievements">
      <ul className="list-disc ml-5 space-y-1.5 mb-2">
        {awards.map((item, i) => (
          <li key={i} className="leading-snug markdown-content">
            <ReactMarkdown>{item}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
