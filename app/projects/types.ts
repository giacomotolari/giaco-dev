// Description: Types for projects.
interface Project {
  name: string;
  description: string;
  urls: Partial<Urls>;
  categories: string[];
  assets?: Partial<Assests>;
  status: "planned" | "in-progress" | "completed" | "archived" | "canceled"| "paused";
  dates: {
    start: string;
    end?: string;
  };
  type: "personal" | "team" | "company";
  level: "beginner" | "intermediate" | "advanced";
  technologies: Partial<TechnologyStack>;
  runsOn: RunsOn[];
  my?: My;
  goals?: ("learning" | "earn money" | "showcasing")[] | string[];
  customers?: string[];
  workedFor?: string;
  extraInfos?: string;
}

// URLS
interface Urls {
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

// ASSETS
interface Assests {
  images: Asset;
  videos: Asset;
  icons: Asset;
}

type Asset = {
  [key: string]: string;
};

// TECHNOLOGY STACK

interface TechnologyStack {
  frontend: FrontendStack;
  backend: BackendStack;
  hosting?: string[];
  versionControl?: ("Git" | "GitHub" | "GitLab")[];
  other?: string[];
}

// FRONTEND

interface FrontendStack {
  languages: ("JavaScript" | "Typescript")[];
  frameworks?: FrontendFramework[];
  style?: Style;
  uiFramework?: ("Ionic" | "shadcn/UI")[];
  stateManagements?: ("Redux" | "React Context API")[];
  testing?: ("Jest" | "React Testing Library")[];
  errorHandling?: "Sentry"[];
}

type FrontendFramework = "React" | "Next.js";
interface Style {
  languages: "CSS"[];
  preprocessor?: "Sass";
  frameworks?: CSSFramework[];
}

type CSSFramework = "Bootstrap" | "TailwindCSS";

// BACKEND

interface BackendStack {
  languages: BackendLanguage[];
  frameworks?: BackendFramework[];
  databases: Database[];
  testing?: string[];
}

type BackendLanguage = "Node.js" | "Python";
type BackendFramework = "Express.js" | "Django";
type Database = "MongoDB" | "PostgreSQL" | "SQLite";

// RUNS ON

type RunsOn = "web" | "mobile" | "desktop" | "ios" | "android" | "server";

// MY

interface My {
  learned?: {
    technologies?: Partial<TechnologyStack>;
    softSkills?: string[];
    other?: string[];
    learnedAllUsedTechnologies?: boolean;
  };
  chronologicalProjectOrder: number;
}

// TEAM

interface Team {
  name: string;
}

// DEVELOPERS

interface Developers {
  name: string;
}

// TEAM PROJECT
interface TeamProject extends Project {
  teams?: Team[]; // If other teams are involved
  developers?: Developers[];
  myContribution: MyContribution;
}

// MyContribution

interface MyContribution {
  roles?: (
    | "Frontend Developer"
    | "Backend Developer"
    | "Full Stack Developer"
  )[];
  used?: Partial<TechnologyStack>;
  dates: {
    start: string;
    end?: string;
  };
}

type Projects = Project[];
type TeamProjects = TeamProject[];

export type {
  Projects,
  Project,
  TeamProjects,
  TeamProject,
  TechnologyStack,
  Urls,
  Team,
  Developers,
};
