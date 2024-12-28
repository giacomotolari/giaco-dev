import * as ProjectTypes from "../types";

export const digitalHUb: ProjectTypes.Project = {
  id: "digital-hub",
  name: "digital Hub",
  description:
    "Privat community for digital Hub, rent a desk, meeting rooms and events.",
  urls: {
    webPage: "https://www.wedart.io/",
    download: {
      playStore: "https://play.google.com/store/apps/details?id=io.wedart.app",
      appStore: "https://apps.apple.com/de/app/wedart/id6443843436",
    },
  },
  categories: ["Community", "Rent a Desk", "Meeting Rooms", "Events"],
  assets: {
    images: {
      projectPhoto: "/public/images/projects/profolio-old.png",
    },
  },
  status: ProjectTypes.Status.Paused,
  dates: {
    start: "2021",
  },
  type: ProjectTypes.ProjectType.asEmployee,
  technologies: {
    frontend: {
      languages: ["JavaScript"],
      libraries: ["jQuery"],
      style: {
        languages: ["CSS"],
        frameworks: ["Bootstrap"],
      },
    },
    backend: {
      languages: ["Python"],
      frameworks: ["Django"],
      databases: ["PostgreSQL"],
    },
    versionControl: ["Git", "GitLab"],
  },
  runsOn: [ProjectTypes.RunsOn.Web],
  my: {
    chronologicalProjectOrder: 5,
    learned: {
      learnedAllUsedTechnologies: true,
    },
    contribution: {
      roles: [ProjectTypes.ContributionRole.FrontendDeveloper],
      dates: {
        start: "April 2022",
      },
    },
  },
  workedFor: "Taliox",
  customers: ["digital Hub"],
};
