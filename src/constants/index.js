const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  
  
  {
    id: 1,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Cross-Platform Development",
      "Firebase Push Notifications",
      "Mobile Auth & Security"
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux / Redux Toolkit",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "SPA Architecture & Responsive UI"
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Python",
      "Django / Django REST Framework",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Celery (Async Tasks)",
      "RESTful API Design",
      "Microservices",
      "JWT & Token-based Auth"
    ],
  },
  {
    category: "IoT, Cloud & DevOps",
    items: [
      "AWS (Lambda, S3, ECS, IAM, CloudWatch)",
      "Firebase (Auth, Notifications)",
      "Docker",
      "MQTT & OPC UA (IoT Pipelines)",
      "Event-Driven Architecture",
      "GitHub Actions (CI/CD)",
      "Linux"
    ],
  },
  {
    category: "Databases & Caching",
    items: [
      "PostgreSQL (Advanced Query Optimization)",
      "MongoDB",
      "Redis (Pub/Sub & Caching)",
      "MySQL",
      "Database Schema Design",
      "ORM (Django ORM, Mongoose)"
    ],
  },
  {
    category: "System Design & Practices",
    items: [
      "Distributed Systems",
      "Rule & Credit Scoring Engines",
      "SOLID Principles & OOP",
      "Design Patterns",
      "Data Structures & Algorithms (300+ LeetCode)",
      "Code Reviews & Mentoring"
    ],
  },
];


const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/kushallj",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/know_jainism",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/kushall-jain-263009261",
  },
  {
    id: 4,
    text: "LeetCode.com",
    icon: "/icons/LeetCode.png",
    bg: "#05b6f6",
    link: "https://leetcode.com/u/kushalljain",
  },
  {
    id: 5,
    text: "Chess.com",
    icon: "/icons/chess.png",
    bg: "#05b6f6",
    link: "https://www.chess.com/member/golchha",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Experience 1: GameChange Energy
    {
      id: 7,
      name: "GameChange Energy - Solar IoT",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-10",
      windowPosition: "top-[15vh] left-7",
      children: [
        {
          id: 1,
          name: "GameChange Energy Experience.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Software Engineer, Full Stack & IoT Systems (Apr 2026 – Aug 2026)",
          image: "/images/Kushall.jpg",
          description: [
            "Company: GameChange Energy | Role: Software Engineer, Full Stack & IoT Systems | Duration: Apr 2026 – Aug 2026 (Remote)",
            "Platform Overview: Architected and delivered full-stack features for a distributed solar-site visualization and hardware device-command platform, enabling real-time remote telemetry and control across geographically dispersed solar assets.",
            "Security & Access Control: Designed and shipped a token-based authentication layer and remediated exposed-port vulnerabilities across backend services (PostgreSQL, Redis, OPC UA), closing multiple previously unauthenticated device-command paths with strict rate-limiting and abuse-prevention.",
            "Frontend Delivery: Owned end-to-end delivery of React + TypeScript user interfaces for real-time master/node hardware control, diagnostic monitoring, and site telemetry visualization.",
            "Distributed IoT Command Pipeline: Traced, debugged, and optimized the full command-execution pipeline (Docker → AWS Lambda → MQTT → IoT devices) in an event-driven distributed system, applying system-design reasoning to eliminate bottlenecks.",
            "Backend & Async Workflows: Extended REST APIs with Django REST Framework and Celery for scheduled and asynchronous device commands with queue prioritization.",
            "Architecture & Clean Code: Refactored core modules using SOLID principles and core data structures (linked lists, stacks, queues, DAGs, and tries) to improve maintainability and reliability of the device-command subsystem."
          ],
        },
        {
          id: 2,
          name: "LinkedIn Profile",
          icon: "/icons/linkedin.svg",
          kind: "file",
          fileType: "url",
          href: "https://www.linkedin.com/in/kushall-jain-263009261/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "solar-iot-preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/project-2.png",
          position: "top-52 right-80",
        },
      ],
    },
    // ▶ Experience 2: Progfin (FinTech & Flutter)
    {
      id: 8,
      name: "Progfin - FinTech & Mobile",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-60",
      windowPosition: "top-[35vh] left-7",
      children: [
        {
          id: 1,
          name: "Progfin FinTech Experience.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Full Stack Software Developer (Dec 2023 – Mar 2026)",
          image: "/images/Kushall.jpg",
          description: [
            "Company: Progfin Pvt Ltd (FinTech) | Role: Full Stack Software Developer | Duration: Dec 2023 – Mar 2026 (Delhi, India)",
            "Enterprise Financial Platform: Architected and delivered a financial platform in a regulated fintech environment, serving 1,000+ SMEs and 10,000+ daily active users, processing 150+ Cr in monthly transactions at 99.5% uptime using React (TypeScript), Django/FastAPI, PostgreSQL, and AWS.",
            "Flutter Mobile Engineering: Built and maintained Flutter mobile modules for the company's production financial app — including user-facing onboarding and analytics dashboards, biometric/token authentication, backend REST API integrations, and Firebase push notifications.",
            "Microservices Architecture: Designed and owned 10+ RESTful microservices (Django REST Framework, FastAPI) with Pydantic validation, JWT authentication, role-based authorization (RBAC), and Swagger/OpenAPI documentation.",
            "Credit Scoring & Automation: Designed an automated credit-scoring rule engine and automated lending workflows with async background processing via Celery, achieving 85% workflow automation.",
            "Database Performance Tuning: Improved Django ORM query performance by 70% and cut complex SQL response times from 800ms to 200ms (75% improvement) through indexing and query optimization.",
            "Leadership & Code Reviews: Led code reviews and mentored junior developers on backend, React, and mobile best practices across the full SDLC."
          ],
        },
        {
          id: 2,
          name: "financial-platform.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/project-1.png",
          position: "top-52 right-80",
        },
      ],
    },
    // ▶ Project 3: DevFrnds
    {
      id: 6,
      name: "DevFrnds - Developer Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-10",
      windowPosition: "top-[55vh] left-7",
      children: [
        {
          id: 1,
          name: "DevFrnds Project Overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Full-Stack Developer Networking Platform (React, Node.js, MongoDB, Socket.IO)",
          image: "/images/project-2.png",
          description: [
            "A full-stack developer networking platform inspired by Tinder's matching algorithm, enabling developers to discover collaboration partners, mentors, and team members through skill-based matching and real-time interactions.",
            
            "Core Features: Swipe-based developer discovery with tech stack filtering, real-time chat using WebSockets, profile matching algorithm based on skills/interests/experience, connection request workflow with accept/reject logic, and personalized feed recommendations.",
            
            "Technical Architecture: Built with MERN stack (MongoDB, Express.js, React.js, Node.js). Frontend uses React 18 with Redux Toolkit for state management, React Router for SPA navigation, and Socket.IO client for real-time features. Backend implements RESTful API design with JWT authentication, bcrypt password hashing, and MongoDB aggregation pipelines for matching algorithms.",
            
            "Matching Algorithm: Implemented collaborative filtering algorithm calculating match scores based on: (1) Tech stack overlap (40% weight), (2) Experience level compatibility (25%), (3) Geographic proximity (15%), (4) Shared interests/projects (20%). Uses MongoDB's $geoNear for location-based queries and scoring pipeline achieving <200ms query latency for 10K+ user profiles.",
            
            "Real-Time Features: Socket.IO integration enabling instant messaging (typing indicators, read receipts), live connection notifications, and online/offline status tracking. Implemented Redis pub/sub for horizontal scaling across multiple server instances, handling 500+ concurrent WebSocket connections with <50ms message delivery latency.",
            
            "Authentication & Security: JWT-based auth with refresh token rotation, rate limiting (express-rate-limit) protecting against brute force attacks, input validation using express-validator, XSS protection via helmet.js, and CORS configuration for secure cross-origin requests. Implemented session management with Redis for distributed systems.",
            
            "Database Design: MongoDB schema optimization with compound indexes on frequently queried fields (techStack, location, experienceLevel). Implemented data denormalization for match recommendations reducing query complexity from O(n²) to O(n log n). Used TTL indexes for temporary data (verification tokens, password reset links).",
            
            "Performance Optimizations: React.lazy() for code splitting reducing initial bundle by 40%, image optimization with lazy loading, debounced search inputs (300ms), pagination with infinite scroll (20 profiles per load), Redis caching for frequently accessed profiles (60% cache hit rate), and MongoDB query optimization with explain() analysis.",
            
            "State Management: Redux Toolkit with createSlice for auth, profiles, connections, and chat modules. Implemented Redux persist for maintaining user session across page refreshes, normalized state shape preventing data duplication, and custom middleware for API call handling with loading/error states.",
            
            "Deployment & DevOps: Frontend deployed on Vercel with automatic deployments from main branch, backend on Railway with environment-based configuration, MongoDB Atlas for managed database with automated backups, Redis Cloud for distributed caching, and Cloudinary for profile image CDN with automatic image optimization.",
            
            "Testing Strategy: Jest unit tests for utility functions and Redux reducers, React Testing Library for component testing, Supertest for API endpoint testing, and Postman collections for manual API validation. Achieved 70% code coverage on critical business logic.",
            
            "Interview Talking Points: Discuss scaling WebSocket connections horizontally, optimizing MongoDB aggregation pipelines for complex matching algorithms, handling race conditions in connection requests (optimistic locking), implementing efficient search with debouncing and caching, designing for eventual consistency in distributed systems, and trade-offs between normalized vs denormalized data models.",
            
            "Technical Challenges Solved: (1) Preventing duplicate connection requests using MongoDB unique compound indexes on [user1_id, user2_id], (2) Real-time notification delivery across distributed servers using Redis pub/sub, (3) Efficient skill-based search with autocomplete using MongoDB text indexes and $regex optimization, (4) Image upload with size validation and automatic compression (multer + sharp), (5) Preventing N+1 queries through proper MongoDB population and lean() optimization.",
            
            "Business Impact: Platform enables developers to find collaboration partners 10x faster than traditional networking. Match algorithm achieves 85% user satisfaction rate based on successful connections. Real-time features increase user engagement by 60% compared to async-only messaging."
          ],
        },
        {
          id: 2,
          name: "devfrnds.online",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://devfrnds.online",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "GitHub Repository",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kushallj/devTinder",
          position: "top-20 left-40",
        },
        {
          id: 4,
          name: "Technical Documentation.pdf",
          icon: "/images/pdf.png",
          kind: "file",
          fileType: "pdf",
          href: "https://github.com/kushallj/devTinder/blob/main/README.md",
          position: "top-40 left-60",
        }
      ],
    },
    // ▶ Project 4: Food Delivery App
    {
      id: 5,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-60",
      windowPosition: "top-[75vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Cross-platform Mobile Ordering Application",
          description: [
            "A cross-platform mobile ordering experience that prioritizes fast ordering, clear order tracking, and reliable checkout — designed for on-the-go users.",
            "User features: browse restaurants, menu customization, real-time order tracking, and local notifications for delivery status.",
            "Tech & architecture: built with React Native for unified iOS/Android support; modular state management patterns for cart, auth, and order lifecycle; attention to offline/resume behavior for unstable mobile networks.",
            "Operational considerations: show how you handled data synchronization across devices, debounce patterns for frequent updates (cart/availability), and strategy for minimizing payment friction.",
            "Interview highlights: discuss performance profiling on mobile, gesture-responsive UI patterns, and how you structured code to support multiple delivery partners or region-specific menus."
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Kushall.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Kushall.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/Kushall.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full-Stack & Mobile Engineer | IoT & Regulated FinTech Systems",
      image: "/images/Kushall.jpg",
      description: [
        "Hey, I’m Kushall Jain 👋 — a Full-Stack & Mobile Software Engineer with 4+ years of hands-on experience building production-grade IoT systems, mobile applications (Flutter), and high-scale financial platforms.",

        "Most recently at GameChange Energy, I engineered solar-site visualization and hardware device-command systems, shipping token-based authentication layers, closing vulnerable command paths across PostgreSQL/Redis/OPC UA, and managing event-driven distributed pipelines (Docker → AWS Lambda → MQTT → IoT devices).",

        "Prior to that at Progfin (FinTech), I built Flutter mobile modules and architected enterprise lending microservices processing 150+ Cr in monthly transactions with 99.5% uptime, designing automated credit scoring engines and optimizing database query latency by up to 75%.",

        "My core toolkit spans Flutter & React (TypeScript) on the client side, Python (Django REST Framework, FastAPI) and Node.js on the backend, with PostgreSQL, MongoDB, Redis, and AWS/Firebase infrastructure.",

        "I care deeply about system resilience, clean architecture (SOLID principles), security, and edge-case correctness — making complex systems fast, reliable, and maintainable."
      ],
    }
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder:   { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact:  { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume:   { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari:   { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos:   { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile:  { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile:  { isOpen: false, isMinimized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };