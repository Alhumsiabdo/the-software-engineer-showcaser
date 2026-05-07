import React from 'react';
import { Header } from './components/Header';
import { EmploymentSection } from './components/EmploymentSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { SummarySection } from './components/SummarySection';
import { DocumentProps, PageProps } from '#root/renderer/types';
import {
  AdditionalExperience as AdditionalExperienceType,
  Awards,
  BasicInfo,
  Certificate,
  Education,
  TechnicalSkills,
  Work,
} from '#root/services/ContentLoader/types';
import { AdditionalExperience } from './components/AdditionalExperience';
export { Page };
export { ShowcaseLayout as Layout } from '#root/layouts/ShowcaseLayout';
export { DeploymentInfo as Footer } from './components/DeploymentInfo';

export const documentProps: DocumentProps = {
  title: 'Abdullah Alhumsi - Résumé',
  description: 'The résumé of Abdullah Alhumsi — Backend Developer.',
};

export type ResumePageProps = PageProps & {
  basicInfo: BasicInfo;
  work: Work[];
  awards: Awards;
  education: Education[];
  additionalExperience: AdditionalExperienceType;
  technicalSkills: TechnicalSkills;
};

function Page({
  basicInfo,
  work,
  awards,
  education,
  additionalExperience,
  technicalSkills,
}: ResumePageProps) {
  return (
    <>
      <base target="_blank"></base>
      <Header basicInfo={basicInfo} />
      <div className="mt-6">
        {basicInfo.summary && <SummarySection summary={basicInfo.summary} />}
        <TechnicalSkillsSection skills={technicalSkills} />
        <EmploymentSection work={work} />
        <EducationSection education={education} />
        <AdditionalExperience additionalExperience={additionalExperience} />
        <AwardsSection awards={awards} />
      </div>
    </>
  );
}
