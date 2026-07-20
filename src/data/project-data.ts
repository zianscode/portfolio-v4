export const projects = [
  {
    src: "/projects/kedai_kopio.png",
    title: "Kedai Kopi O",
    date: "April 10, 2026", 
    isNew: true,
  },
  {
    src: "/projects/eco_marketplace.png",
    title: "Eco Marketplace",
    date: "April 14, 2025", 
    isNew: false,
  },
  {
    src: "/projects/pos_kasir.png",
    title: "Kasir App",
    date: "April 15, 2025", 
    isNew: false,
  },
  {
    src: "/projects/studi_pemodelan.png",
    title: "Studi Pemodelan",
    date: "February 1, 2025",
    isNew: false,
  },
  {
    src: "/projects/joki_top_up_games.png", 
    title: "JokiGames & TopUpGames",
    date: "September 15, 2024",
    isNew: false,
  },
  {
    src: "/projects/ciu_insurance.png",
    title: "Ciu Insurance",
    date: "January 15, 2024",
    isNew: false,
  }
];

export const detailedProjects = [
  {
    id: 1,
    title: "Ciu Insurance",
    category: "Micro-Frontend",
    description: "Insurance bank handling app with attractive design.",
    detailedDescription: "Insurance bank handling application with attractive design and complete features. This application is designed to simplify the management of insurance policies, claims, and premium payments. With an intuitive interface and complete features, Ciu Insurance is a complete solution for the modern insurance industry. The real-time notification system and analytical dashboard help users monitor and manage their insurance efficiently.",
    technologies: ["Next.js", "PostgreSQL", "Bootstrap", "Golang", "Node.js"],
    image: "/projects/ciu_insurance.png",
    link: "https://github.com/zianscode/micro-frontend.git",
    slug: "ciu-insurance",
    gallery: [
      "/projects/detailsprojects/ciu_insurance/ciudigital.png",
    ],
    features: [
      "Insurance policy management",
      "Online claim",
      "Premium payment",
      "Real-time notifications",
      "Analytical dashboard"
    ]
  },
  {
    id: 2,
    title: "JokiGames & TopUpGames",
    category: "Web Platform",
    description: "A game jockey and top up website with various interesting features.",
    detailedDescription: "This is a website for game jockeys and top ups, equipped with many cool features. The platform provides professional game jockey services and top up services for various popular games. With an integrated payment system with various payment methods, customers can easily use this service. The jockey progress tracking feature and live chat ensure transparency and good communication between customers and jockeys.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MidTrans", "Bootstrap"],
    image: "/projects/joki_top_up_games.png",
    link: "https://github.com/zianscode/fitur-topup-fe.git",
    slug: "joki-games",
    gallery: [
      "/projects/detailsprojects/joki_top_up_games/jokigames.png",
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
    id: 3,
    title: "Studi Pemodelan",
    category: "UI/UX & Design",
    description: "Modeling case study for goods distribution with 4 main roles.",
    detailedDescription: "This is a modeling case study project for goods distribution, there are 4 roles: Distributor, Staff, System Admin, and Warehouse Management. This project develops a comprehensive model to optimize the flow of goods distribution from producers to consumers. By considering various roles and responsibilities, this model provides an efficient solution for modern supply chain management.",
    technologies: ["Figma"],
    image: "/projects/studi_pemodelan.png",
    link: "https://www.figma.com/design/A0P9beXTy9DnJamWMiv93A/STUDI-KASUS-PEMODELAN?node-id=57-2199&t=HZR7u6sNAi6BH4nF-1",
    slug: "studi-pemodelan",
    gallery: [
      "/projects/detailsprojects/studi_pemodelan/studi.png",
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
    title: "Kasir App",
    category: "Fullstack Web",
    description: "A simple and responsive cashier app for managing sales and products in small businesses.",
    detailedDescription: "Kasir App is a web based POS system built with Laravel and React.js. It allows users to manage products, process sales, handle user roles, and view transaction history. The app is designed for ease of use and optimized for small to medium-sized businesses.",
    technologies: ["Laravel", "PHP", "MySql", "JavaScript", "TailwindCss"],
    image: "/projects/pos_kasir.png",
    link: "https://github.com/zianscode/Final_UKK_Cashier_App.git",
    slug: "kasir-app",
    gallery: [
      "/projects/detailsprojects/pos_kasir/kasirapp.png",
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
    id: 5,
    title: "Eco Marketplace",
    category: "Web Platform",
    description: "Digital platforms to support green economy and green jobs.",
    detailedDescription: 'This project is based on the big theme of "Green Economy and Green Jobs", which is the main focus of developing sustainable digital solutions in the era of green economic transformation. The platform is designed to connect manufacturers of eco friendly products with consumers who care about sustainability. With advanced search features, a secure payment system, and a comprehensive admin dashboard, Eco Marketplace is a complete solution to support the green economy.',
    technologies: ["Next.js", "MySQL", "TailwindCss", "Typescript", "Express.js"],
    image: "/projects/eco_marketplace.png",
    link: "https://github.com/zianscode/Final-Coding-Camp-DBS",
    slug: "eco-marketplace",
    gallery: [
      "/projects/detailsprojects/eco_marketplace/marketplace.png"
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
    id: 6,
    title: "Kedai Kopi O",
    category: "Mobile POS",
    description: "A modern coffee shop website with online ordering and table reservation system.",
    detailedDescription: "A Flutter based POS (Point of Sale) app designed specifically for coffee shops to efficiently manage product catalogs, sales transactions, receipt printing, financial reports, and analytics dashboards.",
    technologies: ["Flutter", "Dart", "Provider", "fl_chart", "blue_thermal_printer", "Multi-Platform", "Isar"],
    image: "/projects/kedai_kopio.png",
    link: "https://github.com/zianscode/kedai-kopi-o",
    slug: "kedai-kopi-o",
    gallery: [
      "/projects/detailsprojects/kedai_kopio/kko.png",
    ],
    features: [
      "Catalog & Product Search",
      "Cart Management",
      "Cash & QRIS Payments",
      "Digital Receipt (PDF/Image)",
      "Product CRUD & Add-ons",
      "Track Inventory",
      "Reports & Transaction Filters",
      "Analytics Dashboard",
      "Export to Excel",
      "Cashier Management",
      "Data Backup & Restore",
      "Receipt Customization",
    ]
  },
];
