import * as ProjectTypes from "../../types";

export const weDart: ProjectTypes.Project = {
  id: "weDart",
  name: "weDart",
  description:
    "Dart Game, where you can play online and offline. The weDart Hardware help to calculate the points. Make it easy to play Dart, calculate players statistics and the points",
  urls: {
    webPage: "https://www.wedart.io/",
    download: {
      playStore: "https://play.google.com/store/apps/details?id=io.wedart.app",
      appStore: "https://apps.apple.com/de/app/wedart/id6443843436",
    },
  },
  categories: ["Dart Game"],
  assets: {
    images: {
      projectPhoto: "/public/images/projects/profolio-old.png",
    },
  },
  status: ProjectTypes.Status.Paused,
  dates: {
    start: "2022",
  },
  type: ProjectTypes.ProjectType.asEmployee,
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
    backend: {
      languages: ["Python"],
      frameworks: ["Django"],
      databases: ["PostgreSQL"],
    },
    versionControl: ["Git", "GitLab"],
  },
  runsOn: [ProjectTypes.RunsOn.Mobile],
  my: {
    chronologicalProjectOrder: 6,
    learned: {
      learnedAllUsedTechnologies: true,
    },
    contribution: {
      roles: [
        ProjectTypes.ContributionRole.CrossPlatformDeveloper,
        ProjectTypes.ContributionRole.FrontendDeveloper,
      ],
      dates: {
        start: "Juni 2022",
        end: "Juli 2023",
      },
    },
  },
  workedFor: "Taliox",
  customers: ["weDart"],
};
