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

  triumf,

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
    imageUrl: ansys,
    name: "Ansys",
    type: "Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), Thermal Analysis",
  },
  {
    imageUrl: autocad,
    name: "AutoCAD",
    type: "2D CAD",
  },
  //{
    //imageUrl: fusion,
    //name: "Fusion360",
    //type: "3D CAD",
  //},
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
/*
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
*/

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
    title: "Target R&D Engineering Student",
    company_name: "TRIUMF",
    icon: triumf,
    iconBg: "#F5FBFF",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Revolutionized a reusable target rabbit in SolidWorks to seal and cool radioactive material, applying DFMA principles and worst-case tolerance analysis, reducing annual operation costs by $40,000 (70%)",
      "Led a cross-functional team of 9 through the end-to-end product life cycle, enhancing reliability, scalability, and sustainability",
      "Conducted coupled fluid flow and conjugate heat transfer simulations in Ansys, implementing a mesh sensitivity study and parametrically optimizing geometry to balance heat dissipation by 8% and increase isotope production by 200%",
      "Developed and tested 3D printed prototypes, iterating design and validating remote assembly, enabling drawing release",
      "Prototyped a pneumatically-controlled transport system, performing motion studies and tests to control movement and mitigate collision impulse, extending component lifespan by 12%",
      "Developed a magnetic rabbit detection system, researching into active induction, material properties, and manufacturing effects on stainless steel composition"
    ],
  },
  {
    title: "Mechanical Designer",
    company_name: "UW Midnight Sun Solar Car Team",
    icon: uwms,
    iconBg: "#fac36b",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Designed, drafted, and toleranced 18 DFMA vehicle parts and assembly jigs, ensuring seamless subsystem integration",
      "Innovated a bolt drill guide from scrap metal, streamlined for efficient 3-axis milling, enabling in-house production of 116 holes for safety wiring and cotter pinning, cutting lead times by 50%",
      "Performed Tresca failure analysis on battery box bars in Ansys, reducing testing by 66% and accelerating part release",
      "Developed R&D experiments and stress tests to validate the load capacity and fracture points of a chassis-to-aerobody integration system, achieving a 2x safety factor to guarantee functionality before implementation",
      "Generated CAD models of outsourced components to create functional assemblies, facilitating integration with existing systems",
      "Presented design logs for feedback, ensuring alignment with project objectives while creating a repo for future integrity",
    ],
  },
  {
    title: "Powertrain Member",
    company_name: "UW Formula Electric Race Team",
    icon: uwfe,
    iconBg: "#fbc3bc",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Co-designed a bidirectional motor stand with a team of 5, utilizing GD&T to streamline assembly and enhance accuracy to 12 thou during water dyno fine-tuning, reducing damage to plastic shaft couplers by 50%",
      "Conducted modal analysis in Ansys to mitigate vibrational resonance, minimizing component fatigue by X%",
      "Performed a motion study to determine the motor’s range of movement, ensuring 0 collisions and ample spacial coverage",
      "Operated a 3-axis mill to fabricate the vehicle’s steering mechanism, maintaining accuracy within 2-5 thou",
    ],
  },
  {
    title: "Student Representative",
    company_name: "EYCI Student Activity Council",
    icon: eyci,
    iconBg: "#accbe1",
    date: "Oct 2021 - Jun 2022",
    points: [
      "Solo-advocated for 250 students by facilitating active communication to ensure each voice was addressed, achieving a 95% rating",
      "Spearheaded a 5-membered team towards a school-wide talent show to revitalize student and school involvement after a 2-year COVID hiatus, managing auditions, rehearsals, schedules, and administrative tasks within a 3-week timeline",
      "Managed the 2022 graduate apparel served to foster a sense of community, designing 3 styles, holding online voting polls, and outsourcing to a clothing company, delivering results 3 months ahead of schedule",
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
    iconUrl: www,
    theme: "btn-back-blue",
    name: "Canva Portfolio",
    description: "Introducing my Canva Portfolio, a collection of my recent projects and experiences!",
    link: "https://www.canva.com/design/DAGIT572qkk/Z5Cg2OtrbEQQ3sScuDQdeg/view?utm_content=DAGIT572qkk&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    target: "_blank",
    date: "",
    type: "mechanical"


  },
    /*
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
    link: "https://www.mindbridge.study",
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
  */
];
//here we want to talk about purpose, and GENERAL result towards that purpose