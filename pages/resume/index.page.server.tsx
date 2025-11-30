import resumeJson from '#root/resume.json';
import {
  getAdditionalExperience,
  getAwards,
  getBasicInfo,
  getEducation,
  getSkills,
  getWork,
  getLanguages,
  getSpokenLanguages,
} from '#root/services/ContentLoader';
import { ResumePageProps } from './index.page';

import { PageContextServer } from '#root/renderer/types';

export function onBeforeRender(pageContext: PageContextServer) {
  const languages = getLanguages(resumeJson);
  const locale = pageContext.locale || 'en';

  let basicInfo = getBasicInfo(resumeJson);
  let work = getWork(resumeJson);
  let skills = getSkills(resumeJson);
  let awards = getAwards(resumeJson);
  let education = getEducation(resumeJson);
  let additionalExperience = getAdditionalExperience(resumeJson);
  let spokenLanguages = getSpokenLanguages(resumeJson);

  // Find localized content
  const languageData = languages.find(l => Object.keys(l.content).includes(locale));
  if (languageData && languageData.content[locale]) {
    const content = languageData.content[locale];
    if (content.basics) basicInfo = { ...basicInfo, ...content.basics };
    if (content.work) work = content.work;
    if (content.skills) skills = content.skills;
    if (content.awards) awards = content.awards;
    if (content.education) education = content.education;
    if (content.additionalExperience) additionalExperience = content.additionalExperience;
    if (content.spokenLanguages) spokenLanguages = content.spokenLanguages;
  }

  const pageProps: ResumePageProps = {
    basicInfo,
    work,
    awards,
    skills,
    education,
    additionalExperience,
    languages,
    spokenLanguages,
  };

  return {
    pageContext: {
      pageProps,
    },
  };
}

export const passToClient = ['pageProps'];
