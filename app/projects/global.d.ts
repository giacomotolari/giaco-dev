export declare global {
  namespace projectTS {
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
    enum ProjectStatus {
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
    enum ProjectType {
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
    enum RunsOn {
      Web = "web",
      Mobile = "mobile",
      Desktop = "desktop",
      iOS = "ios",
      Android = "android",
    }

    enum ContributionRole {
      FrontendDeveloper = "Frontend Developer",
      CrossPlatformDeveloper = "Cross-Platform Developer",
      AndroidDeveloper = "Android Developer",
      MobileDeveloper = "Mobile Developer",
      iOSDeveloper = "iOS Developer",
      BackendDeveloper = "Backend Developer",
      FullStackDeveloper = "Full Stack Developer",
    }

    interface Assets {
      images: Asset;
      videos: Asset;
      icons: Asset;
    }

    type Asset = {
      [key: string]: string;
    };

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

    interface TechnologyStack {
      frontend: FrontendStack;
      backend: BackendStack;
      hosting?: string[];
      versionControl?: ("Git" | "GitHub" | "GitLab")[];
      other?: string[];
    }

    interface FrontendStack {
      languages: ("JavaScript" | "TypeScript")[];
      frameworks?: FrontendFramework[];
      libraries?: FrontendLibrary[];
      style?: Style;
      uiFramework?: ("Ionic" | "shadcn/UI")[];
      stateManagements?: ("Redux" | "React Context API")[];
      testing?: ("Jest" | "React Testing Library")[];
      errorHandling?: "Sentry"[];
    }

    type FrontendFramework = "React" | "Next.js";
    type FrontendLibrary = "jQuery";

    interface Style {
      languages: "CSS"[];
      preprocessor?: "Sass";
      frameworks?: CSSFramework[];
    }

    type CSSFramework = "Bootstrap" | "TailwindCSS";

    interface BackendStack {
      languages: BackendLanguage[];
      frameworks?: BackendFramework[];
      databases: Database[];
      testing?: string[];
    }

    type BackendLanguage = "Node.js" | "Python";
    type BackendFramework = "Express.js" | "Django";
    type Database = "MongoDB" | "PostgreSQL" | "SQLite";

    enum Gaols {
      Learning = "learning",
      EarnMoney = "earn money",
      Showcasing = "showcasing",
    }

    interface My {
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

    interface MyContribution {
      roles?: ContributionRole[];
      dates: {
        start: string;
        end?: string;
      };
    }
    interface Project<T extends ProjectType> {
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

    type Projects = Project<ProjectType>[];

    namespace asEmployee {
      interface AsEmployeeProject
        extends projectTS.Project<projectTS.ProjectType.asEmployee> {
        employedBy: companiesTS.employer.IDs;
      }

      type AsEmployeeProjects = AsEmployeeProject[];
    }
  }
}
