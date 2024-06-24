import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vite,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    java,
    python,
    c,
    cpp,
    dart,
    xml,
    sql,
    sqlite,
    android,
    flutter,
    bootstrap,
    uml,
    firebase,
    linux,
    threejs,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    portfolio,
    instarecipe,
    qrhunter,
    instagram,
    maherenterprise,
    navsystem,
    library,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Google Firebase",
        icon: firebase,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Android",
        icon: android,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Dart",
        icon: dart,
    },
    {
        name: "XML",
        icon: xml,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "SQLite",
        icon: sqlite,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "UML",
        icon: uml,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "C",
        icon: c,
    },
  ];

  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "Developed a responsive 3D portfolio website using ReactJS, Vite, Tailwind CSS, and ThreeJS. The site showcases my skills and projects, and provides an engaging and interactive user experience that highlights my capabilities in modern web development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
        {
          name: "three",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      url: "https://mahxr.com/",
      source_code_link: "https://github.com/MAl-l3R/",
    },
    {
      name: "InstaRecipe",
      description:
        "A full-stack recipe app, inspired by Instagram, allowing users to post and share recipes, follow others, and like or comment on posts. The UI was crafted using using Java in Android Development, with Firebase used for storing user data and media files.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: instarecipe,
      url: "https://drive.google.com/file/d/13hlFLcAuutNPob5JPcdRCN9EhWhSc2A7/view?usp=drivesdk",
      source_code_link: "https://github.com/MAl-l3R/InstaRecipe",
    },
    {
      name: "QR-Hunter",
      description:
        "An app similar to Pokémon Go, allowing users to scan QR codes for points and compete against others. Developed using Android Studio and Java, as well as Firebase. Tested with JUnit and Mockito, and implemented CI/CD via GitHub Actions.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "gradle",
          color: "pink-text-gradient",
        },
      ],
      image: qrhunter,
      url: "https://drive.google.com/file/d/1PBhf22yzDfJiKmDRuw7htEptPJJmrv6b/view?usp=drivesdk",
      source_code_link: "https://github.com/MAl-l3R/QR-Hunter",
    },
    {
      name: "Instagram Clone",
      description:
        "An Instagram clone that was developed using Flutter for the UI and Firebase for backend services, allowing users to share photos, follow other users, and interact with posts through likes and comments.",
      tags: [
        {
          name: "dart",
          color: "blue-text-gradient",
        },
        {
          name: "flutter",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: instagram,
      url: "https://drive.google.com/file/d/1qNJ4SIfXNNHpyjeZPA_hzr83CRTC677e/view?usp=drivesdk",
      source_code_link: "https://github.com/MAl-l3R/Instagram-Clone",
    },
    {
      name: "Maher Enterprise",
      description:
        "A website for my father's company, a premier source for used Japanese heavy construction equipment since 1999. Built with HTML, CSS, and JavaScript, the site allows customers to browse through the extensive inventory and easily contact the owner.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
      ],
      image: maherenterprise,
      url: "https://mal-l3r.github.io/Maher-Enterprise/",
      source_code_link: "https://github.com/MAl-l3R/Maher-Enterprise",
    },
    {
      name: "Trivial Navigation System",
      description:
        "A navigation system for Edmonton, AB, that uses a route-finding server to compute the shortest path between any two selected points on the map using Dijkstra’s Algorithm, and then displays the route on the map, like Google Maps.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "c++",
          color: "green-text-gradient",
        },
        {
          name: "makefile",
          color: "orange-text-gradient",
        },
      ],
      image: navsystem,
      url: navsystem,
      source_code_link: "https://github.com/MAl-l3R/Trivial-Navigation-System",
    },
    {
      name: "Library Database Management System",
      description:
        "A user-friendly library software interface that integrates a DBMS, built using SQLite & SQL, allowing users to sign in, search the catalog, return books, pay penalties, and more, enhancing the overall library experience.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "sqlite",
          color: "orange-text-gradient",
        },
      ],
      image: library,
      url: "https://drive.google.com/file/d/1sSW0UxeiG3Pa0xMNwfYmCsobEx4-crb8/view?usp=drive_link",
      source_code_link: "https://github.com/MAl-l3R/Library-Database-Management-System",
    },
  ];
  
  export { technologies, projects }; // include experiences
