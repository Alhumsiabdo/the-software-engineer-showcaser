import { SectionContainer } from '#root/components/SectionContainer';
import { TechnicalSkills } from '#root/services/ContentLoader/types';
import React from 'react';

export { TechnicalSkillsSection };

type TechnicalSkillsSectionProps = { skills: TechnicalSkills };
function TechnicalSkillsSection({ skills }: TechnicalSkillsSectionProps) {
  if (!skills.length) return null;
  return (
    <SectionContainer title="Technical Skills">
      <div className="mb-2 space-y-1.5">
        {skills.map((skill, i) => (
          <p key={i} className="leading-snug">
            <span className="font-bold">{skill.category}:</span> {skill.items}
          </p>
        ))}
      </div>
    </SectionContainer>
  );
}
