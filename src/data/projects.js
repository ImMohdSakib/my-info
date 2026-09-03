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
  }
];

export const getProjectBySlug = (slug) => projects.find(p => p.slug === slug);
export const getProjectById = (id) => projects.find(p => p.id === Number(id));
