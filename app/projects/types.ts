// ENUMS

// Project Status
export enum Status {
  Planned = "planned",
  InProgress = "in-progress",
  Completed = "completed",
  Archived = "archived",
  Canceled = "canceled",
  Paused = "paused",
  Maintained = "maintained",
}

// Project Types
export enum ProjectType {
  Personal = "personal",
  Team = "team",
  ForCompany = "for-company",
}

// Runs On
export enum RunsOn {
  Web = "web",
  Mobile = "mobile",
  Desktop = "desktop",
  iOS = "ios",
  Android = "android",
  Server = "server",
}

// Contribution Roles
export enum ContributionRole {
  FrontendDeveloper = "Frontend Developer",
  CrossPlatformDeveloper = "Cross-Platform Developer",
  AndroidDeveloper = "Android Developer",
  iOSDeveloper = "iOS Developer",
  BackendDeveloper = "Backend Developer",
  FullStackDeveloper = "Full Stack Developer",
}

// ASSETS
export interface Assets {
  images: Asset;
  videos: Asset;
  icons: Asset;
}

export type Asset = {
  [key: string]: string; // Key-value pairs for asset paths or URLs
};

// URLS
export interface Urls {
  webPage?: string;
  gitHub?: string;
  download?: {
    playStore?: string;
    appStore?: string;
    desktop?: string;
    other?: string;
  };
  other?: string;
}

// TECHNOLOGY STACK

export interface TechnologyStack {
  frontend: FrontendStack;
  backend: BackendStack;
  hosting?: string[];
  versionControl?: ("Git" | "GitHub" | "GitLab")[];
  other?: string[];
}

// FRONTEND

export interface FrontendStack {
  languages: ("JavaScript" | "TypeScript")[];
  frameworks?: FrontendFramework[];
  libraries?: FrontendLibrary[];
  style?: Style;
  uiFramework?: ("Ionic" | "shadcn/UI")[];
  stateManagements?: ("Redux" | "React Context API")[];
  testing?: ("Jest" | "React Testing Library")[];
  errorHandling?: "Sentry"[];
}

export type FrontendFramework = "React" | "Next.js";
export type FrontendLibrary = "jQuery";

export interface Style {
  languages: "CSS"[];
  preprocessor?: "Sass";
  frameworks?: CSSFramework[];
}

export type CSSFramework = "Bootstrap" | "TailwindCSS";

// BACKEND

export interface BackendStack {
  languages: BackendLanguage[];
  frameworks?: BackendFramework[];
  databases: Database[];
  testing?: string[];
}

export type BackendLanguage = "Node.js" | "Python";
export type BackendFramework = "Express.js" | "Django";
export type Database = "MongoDB" | "PostgreSQL" | "SQLite";

// PROJECTS

export interface Project {
  id: string;
  name: string;
  description: string;
  urls: Partial<Urls>;
  categories: string[];
  assets?: Partial<Assets>;
  status: Status;
  dates: {
    start: string;
    end?: string;
  };
  type: ProjectType;
  technologies: Partial<TechnologyStack>;
  runsOn: RunsOn[];
  my?: My;
  goals?: ("learning" | "earn money" | "showcasing")[] | string[];
  customers?: string[];
  workedFor?: string;
  extraInfos?: string;
}

// MY CONTRIBUTION

export interface My {
  learned?: {
    technologies?: Partial<TechnologyStack>;
    softSkills?: string[];
    other?: string[];
    learnedAllUsedTechnologies?: boolean;
  };
  contribution: MyContribution;
  chronologicalProjectOrder: number;
}

export interface MyContribution {
  roles?: ContributionRole[];
  dates: {
    start: string;
    end?: string;
  };
}

export type Projects = Project[];
