import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs as SiNextjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs as SiNodejs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiGit,
  SiBootstrap,
  SiGithub,
} from 'react-icons/si';
import { VscVscode as SiVscode } from 'react-icons/vsc';

export const SkillList = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextjs, color: "text-neutral-800 dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]" },
  { name: "Node.js", icon: SiNodejs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-neutral-600 dark:text-neutral-400" },
  { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
  { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-neutral-800 dark:text-white" },
  { name: "VS Code", icon: SiVscode, color: "text-[#007ACC]" },
];

export const skillCategories = {
  frontend: [
    { 
      title: "HTML", 
      level: "Advanced", 
      icon: SiHtml5,
      color: "text-[#E34F26]",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    { 
      title: "CSS", 
      level: "Advanced", 
      icon: SiCss3,
      color: "text-[#1572B6]",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    { 
      title: "JavaScript", 
      level: "Advanced", 
      icon: SiJavascript,
      color: "text-[#F7DF1E]",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    { 
      title: "TypeScript", 
      level: "Intermediate", 
      icon: SiTypescript,
      color: "text-[#3178C6]",
      link: "https://www.typescriptlang.org/"
    },
    { 
      title: "React", 
      level: "Intermediate", 
      icon: SiReact,
      color: "text-[#61DAFB]",
      link: "https://react.dev/"
    },
    { 
      title: "Next.js", 
      level: "Intermediate", 
      icon: SiNextjs,
      color: "text-neutral-800 dark:text-white",
      link: "https://nextjs.org/"
    },
    { 
      title: "Tailwind CSS", 
      level: "Advanced", 
      icon: SiTailwindcss,
      color: "text-[#06B6D4]",
      link: "https://tailwindcss.com/"
    },
  ],
  backend: [
    { 
      title: "Node.js", 
      level: "Intermediate", 
      icon: SiNodejs,
      color: "text-[#339933]",
      link: "https://nodejs.org/"
    },
    { 
      title: "Express.js", 
      level: "Intermediate", 
      icon: SiExpress,
      color: "text-neutral-600 dark:text-neutral-400",
      link: "https://expressjs.com/"
    },
    { 
      title: "PHP", 
      level: "Intermediate", 
      icon: SiPhp,
      color: "text-[#777BB4]",
      link: "https://www.php.net/"
    },
    { 
      title: "Laravel", 
      level: "Intermediate", 
      icon: SiLaravel,
      color: "text-[#FF2D20]",
      link: "https://laravel.com/"
    },
    { 
      title: "MySQL", 
      level: "Intermediate", 
      icon: SiMysql,
      color: "text-[#4479A1]",
      link: "https://www.mysql.com/"
    },
    { 
      title: "PostgreSQL", 
      level: "Basic", 
      icon: SiPostgresql,
      color: "text-[#4169E1]",
      link: "https://www.postgresql.org/"
    },
    { 
      title: "Firebase", 
      level: "Basic", 
      icon: SiFirebase,
      color: "text-[#FFCA28]",
      link: "https://firebase.google.com/"
    },
  ],
  design: [
    { 
      title: "Figma", 
      level: "Advanced", 
      icon: SiFigma,
      color: "text-[#F24E1E]",
      link: "https://www.figma.com/"
    },
    { 
      title: "UI/UX Design", 
      level: "Advanced", 
      icon: SiFigma,
      color: "text-pink-500",
      link: "#"
    },
    { 
      title: "Responsive Design", 
      level: "Advanced", 
      icon: SiHtml5,
      color: "text-[#E34F26]",
      link: "#"
    },
  ],
  tools: [
    { 
      title: "Git", 
      level: "Advanced", 
      icon: SiGit,
      color: "text-[#F05032]",
      link: "https://git-scm.com/"
    },
    { 
      title: "GitHub", 
      level: "Advanced", 
      icon: SiGithub,
      color: "text-neutral-800 dark:text-white",
      link: "https://github.com"
    },
    { 
      title: "VS Code", 
      level: "Advanced", 
      icon: SiVscode,
      color: "text-[#007ACC]",
      link: "https://code.visualstudio.com/"
    },
  ],
};
