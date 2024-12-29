const digitalHUb: projectTS.asEmployee.AsEmployeeProject = {
  id: "digital-hub",
  name: "digital Hub",
  description:
    "Privat community for digital Hub, rent a desk, meeting rooms and events.",
  urls: {
    webPage: "https://hubclub.app/login/",
  },
  categories: ["Community", "Rent a Desk", "Meeting Rooms", "Events"],
  assets: {
    images: {
      projectPhoto:
        "https://www.de.digital/DIGITAL/Redaktion/DE/Bilder/Logos/de-hub-834x405.jpg?__blob=normal&v=1",
    },
  },
  status: projectTS.ProjectStatus.Paused,
  dates: {
    start: "2021",
  },
  type: projectTS.ProjectType.asEmployee,
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
  runsOn: [projectTS.RunsOn.Web],
  my: {
    chronologicalProjectOrder: 5,
    learned: {
      learnedAllUsedTechnologies: true,
    },
    contribution: {
      roles: [projectTS.ContributionRole.FrontendDeveloper],
      dates: {
        start: "April 2022",
      },
    },
  },
  employedBy: companiesTS.employer.IDs.TALIOX,
  customers: ["digital Hub"],
};

export default digitalHUb;
