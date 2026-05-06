// Data projects
export const projects = [
  {
    src: "/projects/marketplace.png",
    title: "Eco Marketplace",
    date: "2025-04-14", 
    isNew: false,
  },
  {
    src: "/projects/kasirapp.png",
    title: "Kasir App",
    date: "2025-04-15", 
    isNew: false,
  },
  {
    src: "/projects/studi.png",
    title: "Studi Pemodelan",
    date: "2025-02-01",
    isNew: false,
  },
  {
    src: "/projects/jokigames.png", 
    title: "JokiGames & TopUpGames",
    date: "2024-09-15",
    isNew: false,
  },
  {
    src: "/projects/ciudigital.png",
    title: "Ciu Insurance",
    date: "2024-01-15",
    isNew: false,
  }
];

// Data projects dengan id
export const detailedProjects = [
  {
    id: 1,
    title: "Eco Marketplace",
    description: "Digital platforms to support green economy and green jobs.",
    detailedDescription: 'This project is based on the big theme of “Green Economy and Green Jobs”, which is the main focus of developing sustainable digital solutions in the era of green economic transformation. The platform is designed to connect manufacturers of eco-friendly products with consumers who care about sustainability. With advanced search features, a secure payment system, and a comprehensive admin dashboard, Eco Marketplace is a complete solution to support the green economy.',
    technologies: ["Next.js", "MySQL", "TailwindCss", "Typescript", "Express.js"],
    image: "/projects/marketplace.png",
    link: "https://github.com/zianscode/Final-Coding-Camp-DBS",
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
    link: "https://github.com/zianscode/Final_UKK_Cashier_App.git",
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
    link: "https://github.com/zianscode/fitur-topup-fe.git",
    slug: "joki-games",
    gallery: [
      "/projects/jokigames.png",
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
    detailedDescription: "Insurance bank handling application with attractive design and complete features. This application is designed to simplify the management of insurance policies, claims, and premium payments. With an intuitive interface and complete features, Ciu Insurance is a complete solution for the modern insurance industry. The real-time notification system and analytical dashboard help users monitor and manage their insurance efficiently.",
    technologies: ["Next.js", "PostgreSQL", "Bootstrap", "Golang", "Node.js"],
    image: "/projects/ciudigital.png",
    link: "https://github.com/zianscode/micro-frontend.git",
    slug: "ciu-insurance",
    gallery: [
      "/projects/ciudigital.png",
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
