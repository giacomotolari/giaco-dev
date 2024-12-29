export const weDart: projectTS.asEmployee.AsEmployeeProject = {
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
  status: projectTS.ProjectStatus.Paused,
  dates: {
    start: "2022",
  },
  type: projectTS.ProjectType.asEmployee,
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
  runsOn: [projectTS.RunsOn.Mobile],
  my: {
    chronologicalProjectOrder: 6,
    learned: {
      learnedAllUsedTechnologies: true,
    },
    contribution: {
      roles: [
        projectTS.ContributionRole.CrossPlatformDeveloper,
        projectTS.ContributionRole.FrontendDeveloper,
      ],
      dates: {
        start: "Juni 2022",
        end: "Juli 2023",
      },
    },
  },
  employedBy: companiesTS.employer.IDs.TALIOX,
  customers: ["weDart"],
};
