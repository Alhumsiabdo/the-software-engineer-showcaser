interface Profile {
  icon: string;
  username: string;
  url: string;
}

export interface TechnicalSkill {
  category: string;
  items: string;
}

export interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  location?: string;
  highlights: string[];
  stack?: string | null;
  keywords: { name: string; link: string }[];
}

export interface BasicInfo {
  name: string;
  title?: string;
  summary?: string;
  image: string;
  phone: string;
  url: string;
  email: Profile;
  profiles: Profile[];
  nameKerned?: (string | { character: string; letterSpacing: string })[];
}

export interface Education {
  institution: string;
  description: string;
  date?: string;
  url?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  url: string;
  highlights?: string[];
}

export type Awards = string[];
export type AdditionalExperience = string[];
export type TechnicalSkills = TechnicalSkill[];

export interface Skill {
  name: string;
  link: string;
}

export interface SkillContainer {
  name: string;
  skills: Skill[];
}

export interface SpokenLanguage {
  language: string;
  fluency: string;
}

export interface Language {
  name: string;
  level: string;
  content: {
    [key: string]: any;
  };
}
