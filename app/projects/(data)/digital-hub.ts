import { TeamProject } from "../types";

export const digitalHUb: TeamProject = {
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
  status: "maintained",
  dates: {
    start: "2021",
  },
  type: "for-company",
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
  runsOn: ["web"],
  my: {
    chronologicalProjectOrder: 5,
    learned: {
      learnedAllUsedTechnologies: true,
    },
  },
  workedFor: "Taliox",
  customers: ["digital Hub"],
  myContribution: {
    roles: ["Frontend Developer"],
    dates: {
      start: "April 2022",
    },
  },
};
