interface TechnologyStack {
  frontend: string[];
  backend: string[];
  database: string[];
}

type Asset = {
  [key: string]: string;
};

interface Assests {
  images: Asset;
  videos: Asset;
  icons: Asset;
}

interface Urls {
  webPage?: string;
  gitHub?: string;
}

interface Team {
  name: string;
}

interface Developers {
  name: string;
}

interface Project {
  name: string;
  urls: Partial<Urls>;
  description: string;
  categories?: string[];
  assets: Partial<Assests>;
  status: "planned" | "in-progress" | "completed";
  dates: {
    start: string;
    end?: string;
  };
  type: "personal" | "group" | "company";
  teams: Team[];
  developers: Developers[];
  technologies: Partial<TechnologyStack>;
}

type Projects = Project[];

export type { Projects, Project, TechnologyStack, Urls, Team, Developers };
