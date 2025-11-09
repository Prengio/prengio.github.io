// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-a-level",
          title: "A-Level",
          description: "A collection of things for A-level students",
          section: "Navigation",
          handler: () => {
            window.location.href = "/alevel/";
          },
        },{id: "alevel-chemistry",
          title: 'Chemistry',
          description: "",
          section: "Alevel",handler: () => {
              window.location.href = "/alevel/Chemistry/";
            },},{id: "alevel-maths",
          title: 'Maths',
          description: "",
          section: "Alevel",handler: () => {
              window.location.href = "/alevel/Maths/";
            },},{id: "alevel-physics",
          title: 'Physics',
          description: "",
          section: "Alevel",handler: () => {
              window.location.href = "/alevel/Physics/";
            },},{id: "alevel-tmua",
          title: 'TMUA',
          description: "",
          section: "Alevel",handler: () => {
              window.location.href = "/alevel/TMUA/";
            },},{id: "alevel-maths-interview",
          title: 'Maths Interview',
          description: "",
          section: "Alevel",handler: () => {
              window.location.href = "/alevel/maths_interview/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%75%6D%61%68%6D%65%64%30%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Prengio", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/numair-ahmed-b6557b2b7", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
