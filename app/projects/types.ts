export * from "./as_employee/types";


/**
 * Enum representing the various statuses a project can have.
 *
 * @enum {string}
 * @property {string} Planned - The project is planned but not yet started.
 * @property {string} InProgress - The project is currently in progress.
 * @property {string} Completed - The project has been completed.
 * @property {string} Archived - The project has been archived.
 * @property {string} Canceled - The project has been canceled.
 * @property {string} Paused - The project is currently paused.
 * @property {string} Maintained - The project is being maintained.
 */
export enum Status {
  Planned = "planned",
  InProgress = "in-progress",
  Completed = "completed",
  Archived = "archived",
  Canceled = "canceled",
  Paused = "paused",
  Maintained = "maintained",
}

/**
 * Enum representing different types of projects.
 * @enum {string}
 * @property {string} Personal - A personal project.
 * @property {string} TeamOpenSource - A team project that is open source.
 * @property {string} TeamPrivate - A team project that is private for profit.
 * @property {string} asAsyee - A project that was done as an employee.
 */
export enum ProjectType {
  Personal = "personal",
  TeamOpenSource = "team-open-source",
  TeamPrivate = "team-private",
  asEmployee = "as-employee",
}

/**
 * Enum representing the various platforms a project can run on.
 * @enum {string}
 * @property {string} Web - The project runs on the web.
 * @property {string} Mobile - The project runs on mobile (iOS and/or Android).
 * @property {string} Desktop - The project runs on desktop.
 * @property {string} iOS - The project runs on iOS.
 * @property {string} Android - The project runs on Android.
 */
export enum RunsOn {
  Web = "web",
  Mobile = "mobile",
  Desktop = "desktop",
  iOS = "ios",
  Android = "android",
}

export enum ContributionRole {
  FrontendDeveloper = "Frontend Developer",
  CrossPlatformDeveloper = "Cross-Platform Developer",
  AndroidDeveloper = "Android Developer",
  MobileDeveloper = "Mobile Developer",
  iOSDeveloper = "iOS Developer",
  BackendDeveloper = "Backend Developer",
  FullStackDeveloper = "Full Stack Developer",
}

export interface Assets {
  images: Asset;
  videos: Asset;
  icons: Asset;
}

export type Asset = {
  [key: string]: string;
};

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

export interface TechnologyStack {
  frontend: FrontendStack;
  backend: BackendStack;
  hosting?: string[];
  versionControl?: ("Git" | "GitHub" | "GitLab")[];
  other?: string[];
}

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

export interface BackendStack {
  languages: BackendLanguage[];
  frameworks?: BackendFramework[];
  databases: Database[];
  testing?: string[];
}

export type BackendLanguage = "Node.js" | "Python";
export type BackendFramework = "Express.js" | "Django";
export type Database = "MongoDB" | "PostgreSQL" | "SQLite";

export enum Gaols {
  Learning = "learning",
  EarnMoney = "earn money",
  Showcasing = "showcasing",
}

export interface My {
  learned?: {
    technologies?: Partial<TechnologyStack>;
    softSkills?: string[];
    other?: string[];
    learnedAllUsedTechnologies?: boolean;
  };
  contribution: MyContribution;
  goals?: Gaols[];
  chronologicalProjectOrder: number;
}

export interface MyContribution {
  roles?: ContributionRole[];
  dates: {
    start: string;
    end?: string;
  };
}
export interface Project<T extends ProjectType> {
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
  type: T;
  technologies: Partial<TechnologyStack>;
  runsOn: RunsOn[];
  my?: My;
  goals?: ("learning" | "earn money" | "showcasing")[] | string[];
  customers?: string[];
  asyedBy?: string;
  extraInfos?: string;
}

export type Projects = Project<ProjectType>[];
