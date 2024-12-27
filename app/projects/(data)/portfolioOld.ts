import { Project } from "../types";

export const portfolioOld: Project = {
  name: "Portfolio Old",
  description: "My old portfolio and my first project",
  urls: {
    webPage: "https://giacomotolari.netlify.app/",
    gitHub: "https://github.com/giacomotolari/portfolio-old",
  },
  categories: ["portfolio"],
  assets: {
    images: {
      projectPhoto: "/public/images/projects/profolio-old.png",
    },
  },
  status: "completed",
  dates: {
    start: "November 2020",
    end: "Januar 2021",
  },
  type: "personal",
  level: "beginner",
  technologies: {
    frontend: {
      languages: ["JavaScript"],
      frameworks: ["React"],
      stateManagements: ["React Context API"],
      style: {
        languages: ["CSS"],
        preprocessor: "Sass",
      },
    },
    versionControl: ["Git", "GitHub"],
    hosting: ["Netlify"],
  },
  runsOn: ["web"],
  my: {
    chronologicalProjectOrder: 3,
    learned: { learnedAllUsedTechnologies: true },
  },
  goals: ["learning", "showcasing"],
};
