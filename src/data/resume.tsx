// Import semua ikon yang diperlukan
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  // FaJava,
  FaGitAlt,
  FaGithubAlt,
  FaGitlab,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiTypescript,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  // SiGulp,
  SiJavascript,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import {
  // BiEditAlt as BlogIcon,
  BiPaperPlane as ContactIcon,
  // BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
} from 'react-icons/bi';
// import { PiChatTeardropDotsBold as ChatIcon } from 'react-icons/pi';
import { LuWorkflow } from 'react-icons/lu';
import { MenuItemType } from '@/types/menu';

// Menu Item
export const MENU_ITEMS: MenuItemType[] = [
  {
    title: 'Home',
    href: '/',
    icon: HomeIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
  },
  {
    title: 'About',
    href: '/about',
    icon: ProfileIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
  },
  // {
  //   title: 'Blog',
  //   href: '/blog?category=home',
  //   icon: BlogIcon,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Blog',
  // },
  {
    title: 'Projects',
    href: '/projects',
    icon: ProjectIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
  },  
  {
    title: 'Roadmap',
    href: '/roadmap',
    icon: LuWorkflow,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Roadmap',
  },
  // {
  //   title: 'Chat Room',
  //   href: '/chatroom',
  //   icon: ChatIcon,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Chat Room',
  // },
  {
    title: 'Contact',
    href: '/contact',
    icon: ContactIcon,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
  },
  // {
  //   title: 'Dashboard',
  //   href: '/dashboard',
  //   icon: DashboardIcon,
  //   isShow: true,
  //   isExternal: false,
  //   eventName: 'Pages: Dashboard',
  // },
];

// Data projects
export const projects = [
  {
    src: "/projects/marketplace.png",
    title: "Eco Marketplace",
    date: "2025-04-14", 
    isNew: true,
    description: "Digital platforms to support green economy and green jobs.",
    technologies: ["Next.js", "MySQL", "TailwindCss", "Typescript", "Express.js"]
  },
  {
    src: "/projects/kasirapp.png",
    title: "Kasir App",
    date: "2025-04-15", 
    isNew: true,
    description: "A simple and responsive cashier app for managing sales and products in small businesses.",
    technologies: ["Next.js", "MySQL", "TailwindCss", "Typescript", "Express.js"]
  },
  {
    src: "/projects/studi.png",
    title: "Studi Pemodelan",
    date: "2025-02-01",
    isNew: false,
    description: "Modeling case study for goods distribution with 4 main roles.",
    technologies: ["Figma"]
  },
  {
    src: "/projects/jokigames.png", 
    title: "JokiGames & TopUpGames",
    date: "2024-09-15",
    isNew: false,
    description: "A game jockey and top up website with various interesting features.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MidTrans", "Bootstrap"]
  },
  {
    src: "/projects/ciudigital.png",
    title: "Ciu Insurance",
    date: "2024-01-15",
    isNew: false,
    description: "Insurance bank handling app with attractive design.",
    technologies: ["Next.js", "PostgreSQL", "Bootstrap", "Golang", "Node.js"]
  }
];

// Skill List
export const SkillList = [
  { name: "HTML", icon: <FaHtml5 className="text-2xl" style={{ color: "#E34F26" }} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-2xl" style={{ color: "#1572B6" }} /> },
  { name: "JavaScript", icon: <FaJs className="text-2xl" style={{ color: "#F7DF1E" }} /> },
  { name: "React", icon: <FaReact className="text-2xl" style={{ color: "#61DAFB" }} /> },
  { name: "Redux", icon: <SiRedux className="text-2xl" style={{ color: "#764ABC" }} /> },
  { name: "SASS", icon: <FaSass className="text-2xl" style={{ color: "#CC6699" }} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-2xl" style={{ color: "#D1D5DB" }} /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-2xl" style={{ color: "#7952B3" }} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-2xl" style={{ color: "#38B2AC" }} /> },
  { name: "Figma", icon: <FaFigma className="text-2xl" style={{ color: "#F24E1E" }} /> },
  { name: "React Query", icon: <SiReactquery className="text-2xl" style={{ color: "#FF4154" }} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-2xl" style={{ color: "#3178C6" }} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl" style={{ color: "#339933" }} /> },
  { name: "Express.js", icon: <SiExpress className="text-2xl" style={{ color: "#1F2937" }} /> },
  { name: "Laravel", icon: <SiLaravel className="text-2xl" style={{ color: "#FF2D20" }} /> },
  { name: "MySQL", icon: <SiMysql className="text-2xl" style={{ color: "#4479A1" }} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" style={{ color: "#336791" }} /> },
  // { name: "Java", icon: <FaJava className="text-2xl" style={{ color: "#007396" }} /> },
  { name: "Git", icon: <FaGitAlt className="text-2xl" style={{ color: "#F05032" }} /> },
  { name: "GitHub", icon: <FaGithubAlt className="text-2xl" style={{ color: "#D1D5DB" }} /> },
  { name: "GitLab", icon: <FaGitlab className="text-2xl" style={{ color: "#FC6D26" }} /> },
  { name: "Prisma", icon: <SiPrisma className="text-2xl" style={{ color: "#2D3748" }} /> },
  // { name: "GraphQL", icon: <SiGraphql className="text-2xl" style={{ color: "#E10098" }} /> },
  // { name: "Gulp", icon: <SiGulp className="text-2xl" style={{ color: "#CF4647" }} /> },
];

// Career data array to be imported in components
export const careerData = [
  {
    id: 1,
    company: "SMK Wikrama Bogor",
    position: "Frontend Developer | UI UX Designer | Web Developer",
    location: "Bogor, Indonesia", 
    startDate: "Jun 2022",
    endDate: "Jun 2025",
    duration: "~31 Months",
    logo: "/career/wikrama.png"
  },
  {
    id: 2,
    company: "PT Narantraya Teknologi Digital",
    position: "Frontend Developer | UI UX Designer | Frontend Website",
    location: "Jakarta, Indonesia",
    startDate: "Jan 2024", 
    endDate: "Jun 2024",
    duration: "~6 Months",
    logo: "/career/narantraya.jpg"
  },
  {
    id: 3,
    company: "PT Narantraya Teknologi Digital",
    position: "UI UX Designer | Frontend Web Developer",
    location: "Bogor, Indonesia",
    startDate: "Aug 2024",
    endDate: "Nov 2024", 
    duration: "~3 Months",
    logo: "/career/narantraya.jpg"
  },
  {
    id: 4,
    company: "Coding Camp X DBS Fundation",
    position: "Fullstack Developer Cohort",
    location: "Jakarta, Indonesia",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    duration: "~4 Months",
    logo: "/career/dbs.jpg"
  },
];

// Data categories
export const categories = {
  React: {
    color: "blue",
    posts: [
      {
        id: 1,
        title: "React Server Components: The Future of React",
        excerpt:
          "Discover how React Server Components are revolutionizing the way we build React applications with improved performance and better user experience.",
        date: "June 23, 2023",
        views: 2519,
        category: "React",
        readTime: "10 min read",
        author: "Fajar Fauzian",
        authorRole: "React Expert",
      },
      {
        id: 2,
        title: "React 19 Features You Need to Know",
        excerpt:
          "An in-depth look at the upcoming features in React 19 and how they will change the way we develop applications.",
        date: "June 25, 2023",
        views: 1850,
        category: "React",
        readTime: "8 min read",
        author: "Sarah Wilson",
        authorRole: "Frontend Developer",
      },
    ],
  },
  TypeScript: {
    color: "indigo",
    posts: [
      {
        id: 3,
        title: "Advanced TypeScript Patterns in React",
        excerpt:
          "Learn how to leverage TypeScript's powerful type system to write more maintainable React applications.",
        date: "June 28, 2023",
        views: 1982,
        category: "TypeScript",
        readTime: "12 min read",
        author: "Mike Johnson",
        authorRole: "TypeScript Advocate",
      },
    ],
  },
  Performance: {
    color: "green",
    posts: [
      {
        id: 4,
        title: "Web Vitals Optimization in React",
        excerpt:
          "A comprehensive guide to optimizing Core Web Vitals in your React applications for better performance and SEO.",
        date: "July 1, 2023",
        views: 1567,
        category: "Performance",
        readTime: "15 min read",
        author: "Emily Chen",
        authorRole: "Performance Engineer",
      },
    ],
  },
  "State Management": {
    color: "purple",
    posts: [
      {
        id: 5,
        title: "Understanding Zustand vs Redux",
        excerpt:
          "A detailed comparison of Zustand and Redux for state management in React applications.",
        date: "July 3, 2023",
        views: 2102,
        category: "State Management",
        readTime: "10 min read",
        author: "Alex Turner",
        authorRole: "Frontend Architect",
      },
    ],
  },
  "Next.js": {
    color: "yellow",
    posts: [
      {
        id: 7,
        title: "Next.js 14 Server Actions Guide",
        excerpt:
          "A comprehensive guide to using Server Actions in Next.js 14 for better performance and user experience.",
        date: "July 7, 2023",
        views: 2890,
        category: "Next.js",
        readTime: "12 min read",
        author: "Lisa Wang",
        authorRole: "Next.js Developer",
      },
    ],
  },
};

// Data projects dengan id
export const detailedProjects = [
  {
    id: 1,
    title: "Eco Marketplace",
    description: "Digital platforms to support green economy and green jobs.",
    detailedDescription: 'This project is based on the big theme of “Green Economy and Green Jobs”, which is the main focus of developing sustainable digital solutions in the era of green economic transformation. The platform is designed to connect manufacturers of eco-friendly products with consumers who care about sustainability. With advanced search features, a secure payment system, and a comprehensive admin dashboard, Eco Marketplace is a complete solution to support the green economy.',
    technologies: ["Next.js", "MySQL", "TailwindCss", "Typescript", "Express.js"],
    image: "/projects/marketplace.png",
    link: "#",
    slug: "eco-marketplace",
    gallery: [
      "/projects/detailsprojects/market/1.png",
      "/projects/detailsprojects/market/2.png",
      "/projects/detailsprojects/market/3.png",
      "/projects/detailsprojects/market/4.png",
      "/projects/detailsprojects/market/5.png",
      "/projects/detailsprojects/market/6.png",
      "/projects/detailsprojects/market/7.png",
    ],
    features: [
      "Advanced product search system",
      "Secure payment integration",
      "Comprehensive admin dashboard",
      "Rating and review system",
      "Wishlist and shopping cart features",
    ]
  },
  {
    id: 2,
    title: "Kasir App",
    description: "A simple and responsive cashier app for managing sales and products in small businesses.",
    detailedDescription: "Kasir App is a web-based POS system built with Laravel and React.js. It allows users to manage products, process sales, handle user roles, and view transaction history. The app is designed for ease of use and optimized for small to medium-sized businesses.",
    technologies: ["Laravel", "PHP", "MySql", "JavaScript", "TailwindCss"],
    image: "/projects/kasirapp.png",
    link: "#",
    slug: "kasir-app",
    gallery: [
      "/projects/detailsprojects/kasir/1.png",
      "/projects/detailsprojects/kasir/2.png",
      "/projects/detailsprojects/kasir/3.png",
      "/projects/detailsprojects/kasir/4.png",
      "/projects/detailsprojects/kasir/5.png",
      "/projects/detailsprojects/kasir/6.png",
      "/projects/detailsprojects/kasir/7.png",
      "/projects/detailsprojects/kasir/8.png",
      "/projects/detailsprojects/kasir/9.png",
      "/projects/detailsprojects/kasir/10.png",
      "/projects/detailsprojects/kasir/11.png",
      "/projects/detailsprojects/kasir/12.png",
      "/projects/detailsprojects/kasir/13.png",
      "/projects/detailsprojects/kasir/14.png",
    ],
    features: [
      "User authentication and role management (admin and cashier)",
      "Product management (CRUD operations)",
      "Real-time sales processing",
      "Transaction history and reporting",
      "Responsive and user-friendly interface"
    ]
  },
  {
    id: 3,
    title: "Studi Pemodelan",
    description: "Modeling case study for goods distribution with 4 main roles.",
    detailedDescription: "This is a modeling case study project for goods distribution, there are 4 roles: Distributor, Staff, System Admin, and Warehouse Management. This project develops a comprehensive model to optimize the flow of goods distribution from producers to consumers. By considering various roles and responsibilities, this model provides an efficient solution for modern supply chain management.",
    technologies: ["Figma"],
    image: "/projects/studi.png",
    link: "#",
    slug: "studi-pemodelan",
    gallery: [
      "/projects/detailsprojects/studi/1.png",
      "/projects/detailsprojects/studi/2.png",
      "/projects/detailsprojects/studi/3.png",
      "/projects/detailsprojects/studi/4.png",
      "/projects/detailsprojects/studi/5.png",
      "/projects/detailsprojects/studi/6.png",
      "/projects/detailsprojects/studi/7.png",
      "/projects/detailsprojects/studi/8.png",
      "/projects/detailsprojects/studi/9.png",
    ],
    features: [
      "Dashboard for each role",
      "Goods distribution tracking system",
      "Inventory management",
      "Analytical report"
    ]
  },
  {
    id: 4,
    title: "JokiGames & TopUpGames",
    description: "A game jockey and top up website with various interesting features.",
    detailedDescription: "This is a website for game jockeys and top ups, equipped with many cool features. The platform provides professional game jockey services and top up services for various popular games. With an integrated payment system with various payment methods, customers can easily use this service. The jockey progress tracking feature and live chat ensure transparency and good communication between customers and jockeys.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MidTrans", "Bootstrap"],
    image: "/projects/jokigames.png",
    link: "#",
    slug: "joki-games",
    gallery: [
      "/projects/jokigames.png",
      // "/projects/jokigames-detail1.png",
      // "/projects/jokigames-detail2.png"
    ],
    features: [
      "Jockey game booking system",
      "Top up games with various payment methods",
      "Tracking jockey progress",
      "Live chat with a jockey",
      "Transaction history"
    ]
  },
  {
    id: 5,
    title: "Ciu Insurance",
    description: "Insurance bank handling app with attractive design.",
    detailedDescription: "Insurance bank handling application with attractive design and complete features. This application is designed to simplify the management of insurance policies, claims, and premium payments. With an intuitive interface and comprehensive features, Ciu Insurance is a complete solution for the modern insurance industry. The real-time notification system and analytical dashboard help users monitor and manage their insurance efficiently.",
    technologies: ["Next.js", "PostgreSQL", "Bootstrap", "Golang", "Node.js"],
    image: "/projects/ciudigital.png",
    link: "#",
    slug: "ciu-insurance",
    gallery: [
      "/projects/ciudigital.png",
      // "/projects/ciudigital-detail1.png",
      // "/projects/ciudigital-detail2.png"
    ],
    features: [
      "Insurance policy management",
      "Online claim",
      "Premium payment",
      "Real-time notifications",
      "Analytical dashboard"
    ]
  },
];

// Data certificates
export const certificates = [
  {
    id: 1,
    title: "CERTIFICATE OF COMPLETION",
    description: "Certificate in Coding Camp supported by DBS Foundation, specialising in Front-End Back End Developer",
    issuedBy: "Coding Camp powered by DBS Foundation",
    date: "2025-01-30",
    image: "/certificates/dbs.png",
    link: "https://drive.google.com/file/d/1_u9moNXCOOCsj2cWsHXzLb3j69SSSONd/view?usp=drive_link",
  },  
  {
    id: 2,
    title: "CERTIFICATE OF ACHIEVEMENT",
    description: "English for Business Communication",
    issuedBy: "Coding Camp powered by DBS Foundation",
    date: "2025-01-30",
    image: "/certificates/dbs_english.png",
    link: "https://drive.google.com/file/d/13rr8V9HuzLtyqJklejMQ4YoE84x0eRtK/view?usp=drive_link",
  },  
  {
    id: 3,
    title: "Berkarir di UI UX from Zero to Hero",
    description: "Building a Career in UI/UX from Zero to Hero",
    issuedBy: "DaffaScript Agency",
    date: "2025-02-04",
    image: "/certificates/daffascr.png",
    link: "https://drive.google.com/file/d/1uRwwZV5Ua_0OW0qwr7s42nXLdX4VH98F/view?usp=drive_link",
  },  
  {
    id: 4,
    title: "PT NARANTRAYA TEKNOLOGI DIGITAL",
    description: "Certificate of completion of Industrial Work Practice",
    issuedBy: "PT Narantraya",
    date: "2024-07-21",
    image: "/certificates/pkl.png",
    link: "https://drive.google.com/file/d/1KEnumAeXLEMcZCFsrvooHx0fiutnDW6Q/view?usp=drive_link",
  },  
  {
    id: 5,
    title: "IGDX Career Seminar",
    description: "Career Guidance For Aspiring Game Developer.",
    issuedBy: "IGDX Career",
    date: "2024-12-18",
    image: "/certificates/igdx.png",
    link: "https://drive.google.com/file/d/1H4aCas-yLXKmizrN3QaRJSN3az9B1KC_/view?usp=drive_link",
  },
  {
    id: 6,
    title: " UI-UX RESEARCH AND DESIGN",
    description: "Completed a Full Learning Path with Professional Skill in: UI-UX RESEARCH AND DESIGN",
    issuedBy: "MySkill",
    date: "2025-03-11",
    image: "/certificates/myskill.png",
    link: "https://drive.google.com/file/d/1lx5ePQXxgSrFGlFzEnAiMoaPp98ioHeP/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Front-End with VUE JS",
    description:
      "Front-end Development with The Progressive JavaScript Framework Vue.js",
    issuedBy: "Wanteknologi",
    date: "2023-10-30",
    image: "/certificates/vuejs.png",
    link: "https://drive.google.com/file/d/1BZ3ccpGrEE_2IZWN9KDVR7c1yPTVC-Fx/view?usp=drive_link",
  },
  {
    id: 8,
    title: "Back-End with JavaScript Framework",
    description:
      "Joining the Backend Development with Javascript Framework Training with PT.Laskar Teknologi Mulia (Cyberlabs).",
    issuedBy: "PT Laskar Teknologi Mulia",
    date: "2023-11-10",
    image: "/certificates/express.png",
    link: "https://drive.google.com/file/d/12W30fxT1vpU0nziuJVKOL38qBadhumrg/view?usp=drive_link",
  },
  {
    id: 9,
    title: "Belajar Dasar AI",
    description: "Certification for completing the AI course Dicoding.",
    issuedBy: "Dicoding",
    date: "2024-11-30",
    image: "/certificates/dicai.png",
    link: "https://drive.google.com/file/d/1Q59lDUnG8LaOrxpwZ5RvG_SQCmEzvF_E/view?usp=drive_link",
  },
  {
    id: 10,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description:
      "Certification for completing the Frontend Web course Dicoding.",
    issuedBy: "Dicoding",
    date: "2023-11-24",
    image: "/certificates/dicfepml.png",
    link: "https://drive.google.com/file/d/1moE3wdslssz-TDvWTeP0tqq5URyqv9S5/view?usp=drive_link",
  },
  {
    id: 11,
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    description: "Certification for completing the AWS course Dicoding.",
    issuedBy: "Dicoding",
    date: "2023-11-25",
    image: "/certificates/dicaws.png",
    link: "https://drive.google.com/file/d/1i89m11ZocSTqaQk8AhiPsxFJ6HxYZ3xq/view?usp=drive_link",
  },
  {
    id: 12,
    title: "Belajar Dasar Pemrograman JavaScript",
    description: "Certification for completing the JS course Dicoding.",
    issuedBy: "Dicoding",
    date: "2025-01-24",
    image: "/certificates/dicjs.png",
    link: "https://drive.google.com/file/d/1D8sIA-4zFwJpjtkPoI_LbADspGeRBZzG/view?usp=drive_link",
  },
];

// Data skill categories dengan level
export const skillCategories = {
  frontend: [
    {
      title: "HTML",
      icon: <FaHtml5 className="text-3xl" style={{ color: "#E34F26" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/NBZ9Ro6UKV8?si=anv9JNlwERFgbgYs",
    },
    {
      title: "CSS Dasar",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/CleFk3BZB3g?si=bHSaWGWhmobTJkJk",
    },
    {
      title: "CSS Layouting",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/Phn2eN6j0pg?si=2wB6RlRNuti15h6F",
    },
    {
      title: "CSS 3",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/J0a6YUUAsd4?si=zrLHkVnuUtxh6HPF",
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className="text-3xl" style={{ color: "#7952B3" }} />,
      level: "(Expert)",
      link: "https://youtu.be/NNW7Tg8CgAQ?si=VK75AFRAKvpdY-ka",
    },
    {
      title: "Flexbox CSS",
      icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/-J372iDFU8Y?si=0pcuU0M5Wc_lPRQX",
    },
    {
      title: "Git & Github",
      icon: <FaGitAlt className="text-3xl" style={{ color: "#F05032" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/lTMZxWMjXQU?si=vCEvxTii1xyvqbPb",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl" style={{ color: "#38B2AC" }} />,
      level: "(Expert)",
      link: "https://youtu.be/z3slaXqmkT0?si=0ry07V0kfVoIi5YJ",
    },
    {
      title: "Javascript Dasar",
      icon: <SiJavascript className="text-3xl" style={{ color: "#F7DF1E" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/RUTV_5m4VeI?si=W-U4ST5QB956NnWQ",
    },
    {
      title: "Javascript DOM",
      icon: <SiJavascript className="text-3xl" style={{ color: "#F7DF1E" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/aT60R1cySLM?si=7vqd6Db69luwZOwh",
    },
    {
      title: "Javascript Lanjutan",
      icon: <SiJavascript className="text-3xl" style={{ color: "#F7DF1E" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/RwT41El778A?si=JyMGc59VfCIwIHjC",
    },
    {
      title: "React JS",
      icon: <FaReact className="text-3xl" style={{ color: "#61DAFB" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/rNSfMxMPWqc?si=5KZ3c27jOKvy81cT",
    },
    {
      title: "Typescript",
      icon: <SiTypescript className="text-3xl" style={{ color: "#3178C6" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/C_C64faSO4c?si=9Yni67BMYGsauJJc",
    },
    {
      title: "React Typescript",
      icon: <SiTypescript className="text-3xl" style={{ color: "#3178C6" }} />,
      level: "(Intermediate)",
      link: "https://www.youtube.com/live/0gHQK9J8zMU?si=aJlG_fCh9ZtZK1aN",
    },
    {
      title: "Next JS",
      icon: <SiNextdotjs className="text-3xl" style={{ color: "#D1D5DB" }} />,
      level: "Mastery/Spesialis",
      link: "https://youtu.be/zw5wKyqDEUc?si=RvK6843Q7zePC2Fb",
    },
  ],
  backend: [
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-3xl" style={{ color: "#339933" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/sSLJx5t4OJ4?si=jfxz8nkjzwwINZmPl",
    },
    {
      title: "Express.js",
      icon: <SiExpress className="text-3xl" style={{ color: "#1F2937" }} />,
      level: "(Intermediate)",
      link: "https://youtu.be/TecGUz4bPFA?si=yWwMZYhChA-K5VRA",
    },
    {
      title: "RESTful APIs",
      icon: <FaDatabase className="text-3xl" style={{ color: "#4A4A4A" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/vQJJ_K1JbEA?si=dy9JykPJDto57wVy",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-3xl" style={{ color: "#47A248" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/JXXUBiJGu94?si=-91qcpHto0v1FeZV",
    },
    {
      title: "SQL",
      icon: <FaDatabase className="text-3xl" style={{ color: "#4A4A4A" }} />,
      level: "(Advanced)",
      link: "https://youtu.be/OfrTiLzHv3g?si=yZDahChdRYL3pz0k",
    },
    {
      title: "Authentication",
      icon: <FaDatabase className="text-3xl" style={{ color: "#4A4A4A" }} />,
      level: "(Expert)",
      link: "https://youtu.be/9ed3b0tSRvI?si=sw2OBdHmXPWI4geB",
    },
    {
      title: "Docker",
      icon: <SiDocker className="text-3xl" style={{ color: "#2496ED" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/3_yxVjV88Zk?si=SNsVdxvgzANJaMJH",
    },
    {
      title: "GraphQL",
      icon: <SiGraphql className="text-3xl" style={{ color: "#E10098" }} />,
      level: "(Beginner)",
      link: "https://youtu.be/IGZr3_yMSMA?si=HzKSRL1qxGY4SNCv",
    },
  ],
};
