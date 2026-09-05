export const projects = [
  {
    id: 1,
    title: "Ethereal Sarees",
    slug: "ethereal-sarees",
    description: "A modern e-commerce frontend for premium sarees with elegant product showcases, smooth animations and responsive design.",
    category: ["Frontend", "React", "E-Commerce"],
    image: "/projects/ethereal-sarees.png",
    liveUrl: "https://ethereal-sarees.vercel.app/",
    githubUrl: "https://github.com/ImMohdSakib",
    technologies: ["React.js", "JavaScript", "CSS3", "Responsive Design", "Vercel"],
    features: [
      "Elegant product catalog",
      "Responsive mobile-first design",
      "Smooth page transitions",
      "Modern UI components",
      "Fast loading performance"
    ],
    role: "Frontend Developer",
    overview: "Ethereal Sarees is a premium e-commerce frontend experience designed to showcase traditional Indian sarees with a modern digital presence. The focus was on visual elegance, smooth user experience and mobile responsiveness.",
    challenges: [
      "Creating a visually rich product showcase without sacrificing performance",
      "Ensuring pixel-perfect responsiveness across devices",
      "Implementing smooth animations that feel premium"
    ],
    solutions: [
      "Optimized image loading and lazy loading strategies",
      "Mobile-first CSS approach with careful breakpoints",
      "Framer Motion based micro-interactions for premium feel"
    ]
  },
  {
    id: 2,
    title: "Orion",
    slug: "orion",
    description: "A modern web application featuring clean design, interactive UI elements and smooth user experience built with React.",
    category: ["Frontend", "React", "Full Stack"],
    image: "/projects/orion.png",
    liveUrl: "https://orion-nine-azure.vercel.app/",
    githubUrl: "https://github.com/ImMohdSakib",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    features: [
      "Modern dashboard-like interface",
      "Interactive UI components",
      "Responsive layout",
      "Clean typography and spacing",
      "Smooth navigation"
    ],
    role: "Frontend Developer",
    overview: "Orion is a modern web application focused on delivering a polished user interface with attention to detail in design systems, spacing and interactive elements.",
    challenges: [
      "Building a cohesive design system",
      "Maintaining consistency across components",
      "Performance optimization for interactive elements"
    ],
    solutions: [
      "Reusable component architecture",
      "Consistent design tokens",
      "Efficient React rendering patterns"
    ]
  },
  {
    id: 3,
    title: "Hospital Management System",
    slug: "hospital-management-system",
    description: "A comprehensive hospital management system with patient records, appointments, staff management and admin dashboard capabilities.",
    category: ["Full Stack", "React", "Frontend"],
    image: "/projects/hospital.png",
    liveUrl: "https://hospital-management-mu-jade.vercel.app/",
    githubUrl: "https://github.com/ImMohdSakib",
    technologies: ["React.js", "JavaScript", "CSS3", "Admin Dashboard", "Responsive Design"],
    features: [
      "Patient management",
      "Appointment scheduling",
      "Staff and doctor modules",
      "Admin dashboard",
      "Responsive interface"
    ],
    role: "Full Stack Developer",
    overview: "Hospital Management System is a full-featured web application designed to streamline hospital operations including patient records, appointments and administrative workflows.",
    challenges: [
      "Complex data relationships between patients, doctors and appointments",
      "Building an intuitive admin dashboard",
      "Ensuring data consistency and usability"
    ],
    solutions: [
      "Structured state management",
      "Clear information hierarchy in UI",
      "Modular component design for different user roles"
    ]
  },


  {
  id: 4,
  title: "Velora Sofa Store - Glassmorphism Edition",
  slug: "sofa-store-glassmorphism",

  description:
    "A premium modern sofa e-commerce website built with React.js, featuring a sophisticated glassmorphism interface, smooth animations, responsive layouts, and an elegant product browsing experience.",

  category: ["Frontend", "React", "E-Commerce"],

  image: "/projects/sofa.png",

  liveUrl:
    "https://velora-sofa-website-glassmorphism-e.vercel.app/",

  githubUrl:
    "https://github.com/ImMohdSakib",

  technologies: [
    "React.js",
    "JavaScript",
    "CSS3",
    "Framer Motion",
    "Responsive Design",
    "Glassmorphism UI"
  ],

  features: [
    "Premium sofa product showcase",
    "Glassmorphism-based modern UI",
    "Smooth page and component animations",
    "Product details and browsing experience",
    "Responsive design for mobile, tablet and desktop",
    "Modern navigation and interactive UI elements",
    "Elegant product cards with hover effects",
    "Clean and user-friendly e-commerce layout"
  ],

  role: "Frontend Developer",

  overview:
    "Velora Sofa Store is a premium furniture e-commerce frontend designed to showcase modern sofas through an immersive and visually refined shopping experience. The website combines glassmorphism aesthetics, smooth animations, responsive layouts, and carefully structured product sections to create a high-end furniture brand experience.",

  challenges: [
    "Creating a premium furniture-focused interface without making the design visually overwhelming",
    "Implementing glassmorphism effects while maintaining readability and usability",
    "Creating smooth animations without affecting website performance",
    "Designing a responsive experience across different screen sizes",
    "Maintaining consistent spacing, typography and visual hierarchy throughout the website"
  ],

  solutions: [
    "Developed a reusable React component structure for scalable UI development",
    "Used glassmorphism elements with controlled blur, transparency and borders",
    "Implemented smooth animations and micro-interactions for a more engaging experience",
    "Built responsive layouts optimized for mobile, tablet and desktop devices",
    "Applied consistent design patterns, spacing and typography to create a polished visual identity"
  ]
}


];

export const getProjectBySlug = (slug) => projects.find(p => p.slug === slug);
export const getProjectById = (id) => projects.find(p => p.id === Number(id));
