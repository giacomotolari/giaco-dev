const giacoDev: projectTS.personal.PersonalProject = {
  id: "giaco-dev",
  name: "giaco-dev",
  description:
    "My portfolio website where I showcase my projects, companies and skills.",
  urls: {
    webPage: "https://giaco-dev.vercel.app/",
  },
  categories: ["Portfolio"],
  assets: {
    images: {
      projectPhoto: "/public/images/projects/profolio-old.png",
    },
  },
  status: projectTS.ProjectStatus.IN_PROGRESS,
  dates: {
    start: "2024",
  },
  type: projectTS.ProjectType.PERSONAL,
  technologies: {
    frontend: {
      languages: ["JavaScript"],
      frameworks: ["React", "Next.js"],
      stateManagements: ["React Context API"],
      style: {
        languages: ["CSS"],
        frameworks: ["Tailwind CSS"],
      },
    },
    backend: {
      languages: ["Python"],
      frameworks: ["Django"],
      databases: ["PostgreSQL"],
    },
    versionControl: ["Git", "GitHub"],
  },
  runsOn: [projectTS.RunsOn.WEB],
  my: {
    chronologicalProjectOrder: 7,
    learned: {
      learnedAllUsedTechnologies: true,
    },
    goals: [projectTS.Gaols.SHOWCASING],
  },
};

export default giacoDev;
