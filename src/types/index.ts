export interface PersonalInfo {
  name: string;
  role: string;
  degree: string;
  college: string;
  collegeLocation: string;
  duration: string;
  currentStatus: string;
  location: string;
  cgpa: string;
  cgpaNote: string;
  heroBadge: string;
  heroHeading: string;
  heroSubtext: string;
  statusCard: {
    status: string;
    projectName: string;
    tagline: string;
  };
  aboutSummary: string[];
  aboutCards: {
    title: string;
    value: string;
    subtext: string;
  }[];
  currentInternship: {
    role: string;
    company: string;
    period: string;
    status: 'ACTIVE' | 'COMPLETED';
    description: string;
    responsibilities: string[];
    technologies: string[];
  };
  interests: string[];
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  phone?: string;
  location?: string;
  resumeUrl: string;
}

export type SkillCategory = 
  | 'Frontend' 
  | 'Programming' 
  | 'AI / GenAI' 
  | 'Tools' 
  | 'Backend / Database';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  description?: string;
  iconName?: string;
}

export interface FlagshipProject {
  id: string;
  name: string;
  code?: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  status: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  pillars: {
    title: string;
    description: string;
  }[];
  highlights: string[];
  conceptMetrics: {
    label: string;
    value: string;
    description: string;
    type: 'concept';
  }[];
  caseStudy: {
    problem: string;
    limitationsOfExisting: string;
    proposedSolution: string;
    architecture: {
      step: string;
      title: string;
      details: string;
    }[];
    mlPipeline: {
      stage: string;
      description: string;
      tech: string;
    }[];
    realTimeRiskScoring: string;
    privacyApproach: string;
    currentPrototype: string[];
    researchFutureWork: string[];
    limitations: string[];
    technologyStack: {
      category: string;
      items: string[];
    }[];
    githubAndDemo: {
      statusNote: string;
      demoAvailable: boolean;
      repoAvailable: boolean;
      repoUrl?: string;
    };
    experimentalDisclaimer: string;
  };
}

export interface ProjectCardItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  role: string;
  status: string;
  sourceStatus: string;
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyAvailable?: boolean;
  isFeatured?: boolean;
  accentColor?: string;
}

export interface MissionLogItem {
  id: string;
  missionCode: string;
  period: string;
  organization: string;
  role: string;
  status: 'ACTIVE' | 'COMPLETED';
  location: string;
  summary: string;
  directives: string[];
  stack: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  projectOrRole?: string;
  event: string;
  organizer: string;
  date: string;
  category: string;
  description: string;
  badge: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  skillsCovered: string[];
  type: 'Certification' | 'Professional Development';
}

export interface SchoolRecord {
  standard: string;
  school: string;
  location: string;
  score: string;
  year: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  currentStatus: string;
  cgpa: string;
  cgpaNote: string;
  highlights: string[];
  secondaryEducation?: SchoolRecord[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLinks;
  skills: SkillItem[];
  featuredProject: FlagshipProject;
  projects: ProjectCardItem[];
  missionLog: MissionLogItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  education: EducationItem;
}
