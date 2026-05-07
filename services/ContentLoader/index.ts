import {
  AdditionalExperience,
  Awards,
  BasicInfo,
  Certificate,
  Education,
  TechnicalSkills,
  Work,
} from './types';

const makeMissingFieldErrorMessage = (field: string) =>
  `resume.json is missing the ${field}`;

export function getAdditionalExperience(
  resumeData: unknown,
): AdditionalExperience {
  const field = 'additionalExperience';
  if (resumeData === null || typeof resumeData !== 'object' || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field] as AdditionalExperience;
}

export function getEducation(resumeData: unknown): Education[] {
  const field = 'education';
  if (resumeData === null || typeof resumeData !== 'object' || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field] as Education[];
}

export function getCertificates(resumeData: unknown): Certificate[] {
  const field = 'certificates';

  if (
    resumeData === null ||
    typeof resumeData !== 'object' ||
    !(field in resumeData)
  ) {
    return [];
  }

  return resumeData[field] as Certificate[];
}

export function getAwards(resumeData: unknown): Awards {
  const field = 'awards';
  if (resumeData === null || typeof resumeData !== 'object' || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field] as Awards;
}

export function getWork(resumeData: unknown): Work[] {
  const field = 'work';
  if (resumeData === null || typeof resumeData !== 'object' || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field] as Work[];
}

export function getTechnicalSkills(resumeData: unknown): TechnicalSkills {
  const field = 'technicalSkills';
  if (resumeData === null || typeof resumeData !== 'object' || !(field in resumeData)) {
    return [];
  }
  return resumeData[field] as TechnicalSkills;
}

export const getBasicInfo = (resumeData: unknown): BasicInfo => {
  const field = 'basics';
  if (resumeData === null || typeof resumeData !== 'object' || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field] as BasicInfo;
};
