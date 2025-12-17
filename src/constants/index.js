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
    canOpen: false,
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
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Flutter",
      "JavaScript (ES6+)"
    ],
  },
  {
    category: "State & Performance",
    items: [
      "Redux / Redux Toolkit",
      "Context API",
      "React Hooks",
      "useMemo / useCallback",
      "Client-side Caching"
    ],
  },
  {
    category: "Styling & UI",
    items: [
      "Tailwind CSS",
      "CSS3",
      "Sass",
      "Responsive Design",
      "Figma → Pixel-perfect UI"
    ],
  },
  {
    category: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Node.js",
      "Express.js"
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Database Schema Design",
      "Query Optimization"
    ],
  },
  {
    category: "System Design & Architecture",
    items: [
      "REST API Design",
      "Rule Engines",
      "Score Engines",
      "Workflow Automation",
      "Data-heavy Dashboards"
    ],
  },
  {
    category: "DevOps & Tooling",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "CI/CD Basics"
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
    // ▶ Project 1
    {
      id: 5,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
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
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
    {
  id: 6,
  name: "DevFrnds - Developer Connection Platform",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-30 right-80",
  windowPosition: "top-[53vh] right-7",
  children: [
    {
      id: 1,
      name: "DevFrnds Project Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
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
}
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
      subtitle: "Full-Stack Engineer building reliable FinTech systems",
      image: "/images/Kushall.jpg",
      description: [
        "Hey, I’m Kushall Jain 👋 — a Full-Stack Software Engineer with 2+ years of hands-on experience building production-grade financial systems for NBFC and lending platforms.",

        "I work across the stack using React.js, TypeScript, and Redux on the frontend, and Python with FastAPI and Django on the backend. My focus is on building scalable, reliable applications that support CRM, Sales, and Business operations without breaking under real-world complexity.",

        "At my current role, I’ve designed rule engines and credit scoring systems that process 10,000+ applications daily, automated ERP data pipelines handling 50+ Cr in monthly transactions, and shipped APIs with sub-200ms latency while maintaining 99.5% uptime.",

        "I care deeply about edge cases, data correctness, and system resilience. I’ve identified and resolved 100+ critical production edge cases across lending workflows, payments, and validations — reducing incidents by 70% and making systems boringly reliable (the best kind).",

        "Beyond work, I enjoy breaking systems to understand them better, refining architecture for long-term maintainability, and building software that quietly enables business growth."
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