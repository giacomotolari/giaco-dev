import { TeamProject } from "../types";

export const weDart: TeamProject = {
  name: "weDart",
  description:
    "Dart Game, where you can play online and offline. The weDart Hardware help to calculate the points",
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
  status: "in-progress",
  dates: {
    start: "2022",
  },
  type: "company",
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
  },
  runsOn: ["web"],
  my: {
    chronologicalProjectOrder: 6,
    learned: {},
  },
  goals: ["Make it easy to play Dart and calculate the points"],
  customers: ["weDart"],
  teams: [{ name: "weDart" }, { name: "Taliox" }],
};
