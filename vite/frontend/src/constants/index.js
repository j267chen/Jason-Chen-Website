// contains all constants to be used throughout the project
// dont' remove anything from here if not sure


//importing icons of work experiences
import {uwms, uwfe, eyci} from "../assets/images";

//importing icons of skills
import {
  car,
  css,
  cpp,
  git,
  github,
  html,
  javascript,
  nodejs,
  python,
  react,

  autocad,
  ansys,
  revit,
  solidworks,
  fusion,

  linkedin,

  close,

  rocket,
  www,
  keyboard,
  watergun,

} from "../assets/icons";

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },

];

// skills
export const SKILLS = [
  {
    imageUrl: solidworks,
    name: "SolidWorks",
    type: "3D CAD",
  },
  {
    imageUrl: autocad,
    name: "AutoCAD",
    type: "2D CAD",
  },
  {
    imageUrl: ansys,
    name: "Ansys",
    type: "Finite Element Analysis (FEA)",
  },
  {
    imageUrl: fusion,
    name: "Fusion360",
    type: "3D CAD",
  },
  //{
    //imageUrl: revit,
    //name: "Revit",
    //type: "Building Information Modelling (BIM)",
  //},

  {
    imageUrl: cpp,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

];



// site name
export const SITE_NAME = "Jason Chen";

// extra links 
export const EXTRA_LINKS = {
  github: "https://github.com/j267chen",
  linkedin: "https://www.linkedin.com/in/jasonqchen/",
};

export const socialLinks = [
  {
      name: "GitHub",
      iconUrl: github,
      link: "https://github.com/j267chen",
  },
  {
      name: "LinkedIn",
      iconUrl: linkedin,
      link: "https://www.linkedin.com/in/jasonqchen/",
  },
];

export const returnhome = [
  {
    name: "Return Home",
    iconUrl: close,
    link: "/",
  }
];

// experiences
export const EXPERIENCES = [
  {
    title: "Mechanical Designer Co-op",
    company_name: "UW Midnight Sun",
    icon: uwms,
    iconBg: "#fac36b",
    date: "Jan 2024 - Present",
    points: [
      "I performed part failure analysis through SolidWorks FEA to identify minimal amount/size",
      "I developed R&D experiments to validate product performance",
      "I modelled, drew, and prototyped 18 DFM/A vehicle parts under comp regulations for CNC waterjetting and manufacturing",
      "I presented design logs for feedback, ensuring alignment with project objectives while creating a repo for future integrity",
      "I operated machinery to fabricate the vehicle's steering mechanism",
    ],
  },
  {
    title: "Mechanical Subteam Member",
    company_name: "UW Formula Electric",
    icon: uwfe,
    iconBg: "#fbc3bc",
    date: "Sep 2023 - Dec 2023",
    points: [
      "I collaborated on designing a bidirectional motor stand that was used to establish precise positioning during water dyno tuning.",
    ],
  },
  {
    title: "Student Representative",
    company_name: "EYCI Student Activity Council",
    icon: eyci,
    iconBg: "#accbe1",
    date: "Oct 2021 - Jun 2022",
    points: [
      "I was elected as the schools student representative and advocated for 250 students who were both online and in-person.",
      "I led a 5-membered team towards a school-wide talent show to revitalize student/school involvement after the COVID-19 pandemic.",
      "I solo-managed the 2022 graduate apparel to foster a sense of community.",
    ],
  },
];

//"Developing and maintaining web applications using React.js and other related technologies.",
//"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//"Implementing responsive design and ensuring cross-browser compatibility.",
//"Participating in code reviews and providing constructive feedback to other developers.",

// projects
export const PROJECTS = [
  {
    iconUrl: keyboard,
    theme: "btn-back-red",
    name: "Mechanical Keyboard",
    description:
      "Introducing my cutting-edge mechanical keyboard, an ongoing project built from complete scratch!",
    link: "",
    target: "",
    date: "May 2024 - Present",
    type: "mechanical"
  },
  {
    iconUrl: www,
    theme: "btn-back-green",
    name: "Mindbridge",
    description: 'Co-built a WebApp that bridges communicative barriers for children on the spectrum, garnering a win against 300 others in a MLH Hackathon',
    link: "www.mindbridge.com",
    target: "_blank",
    date: "Mar 2024",
    type: "software"
  },
  {
    iconUrl: www,
    theme: "btn-back-green",
    name: "Portfolio Website",
    description: 'Welcome to my Portfolio Website! A means to showcase my creative side - built with JavaScript, React, CSS, and much more. Learn more about me or the projects that I’ve done so far!',
    link: "/",
    target: "_blank",
    date: "Feb 2024 - Present",
    type: "software"
  },
  {
    iconUrl: rocket,
    theme: "btn-back-pink",
    name: "Model Rocket",
    description: "Embark on a journey into the sky with my Model Rocket project! Satisfy the love and get a glimpse of the aerospace industry. Thoroughly applied design optimization, finite element analysis, and computational fluid dynamic simulations.",
    link: "",
    target: "",
    date: "Jan 2024",
    type: "",

  },
  {
    iconUrl: watergun,
    theme: "btn-back-blue",
    name: "Iron-Man-Inspired Water Blaster",
    description: "Unleash your inner superhero with my team’s Water Blaster! Mechanically prototyped, 3D printed, and activated by water-pumped propulsion to reach a distance of 6 meters.",
    link: "",
    target: "",
    date: "Oct 2023 - Nov 2024",
    type: "",
  },
];
//here we want to talk about purpose, and GENERAL result towards that purpose