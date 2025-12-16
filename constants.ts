export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS = {
  frontend: [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original colored" },
  ],
  backend: [
    { name: "JAVA", icon: "devicon-java-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
  ],
  database: [{ name: "MySQL", icon: "devicon-mysql-plain colored" }],
};

export interface ExperienceType {
  role: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
  mainTech: string;
  technologies: string[];
}

export const EXPERIENCE: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "Rayabhari Technologies Pvt. Ltd",
    duration: "Feb 2025 - Present",
    description:
      "Promoted from Full Stack Intern to Front-End Developer, specializing in React, Next.js, and Tailwind CSS. Building SEO-friendly, responsive e-commerce applications with a strong focus on UI/UX and reusable component architecture. Actively improving performance, scalability, and maintainability while deepening expertise in Next.js and TypeScript.",
    icon: "devicon-react-original",
    mainTech: "React",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "MySQL",
      "SEO",
      "GitHub",
    ],
  },
  {
    role: "Java Full Stack Web Developer Intern",
    company: "CODTECH IT Solutions",
    duration: "Jul 2024 - Sep 2024",
    description:
      "Worked as a Java Full Stack Intern developing web applications using Java, JavaScript, and database technologies. Gained hands-on experience in building end-to-end features, integrating backend services, and collaborating in an agile development environment.",
    icon: "devicon-java-plain",
    mainTech: "Java",
    technologies: [
      "Java",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "HTML",
      "CSS",
      "REST APIs",
    ],
  },
  {
    role: "Java Full Stack Web Developer Intern",
    company: "Prinston Smart Engineers",
    duration: "2023 - Dec 2023",
    description:
      "Contributed to full stack web development projects with a focus on Java-based applications. Built foundational skills in backend logic, database integration, and frontend development while following structured development workflows.",
    icon: "devicon-java-plain",
    mainTech: "Java",
    technologies: ["Java", "HTML", "CSS", "JavaScript", "MySQL", "Git"],
  },
];

export interface ProjectType {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
}

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "E-commerce Website",
    image: "https://picsum.photos/seed/project1/400/300",
    description:
      "A fully functional e-commerce platform with features like product catalog, shopping cart, user authentication, and a payment gateway. Built with a responsive design for a seamless experience on all devices.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "https://picsum.photos/seed/project2/400/300",
    description:
      "A personal portfolio website to showcase my projects and skills. Implemented dark mode and smooth animations to provide an engaging user experience. The design is clean, modern, and fully responsive.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    image: "https://picsum.photos/seed/project3/400/300",
    description:
      "A web application for managing tasks and projects. Users can create, update, delete tasks, and organize them into different projects. Features include drag-and-drop functionality and real-time updates.",
    technologies: ["Vue.js", "Firebase", "Vuex", "SCSS"],
    demoLink: "#",
    repoLink: "#",
  },
];

export interface CertificationType {
  title: string;
  issuer: string;
  image: string;
}

export const CERTIFICATIONS: CertificationType[] = [
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    image: "https://img-c.udemycdn.com/meta/2880/2980894_07f3_3.jpg",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    image:
      "https://cdn.freecodecamp.org/platform/universal/fcc_primary_large.svg",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    image:
      "https://cdn.freecodecamp.org/platform/universal/fcc_primary_large.svg",
  },
];

export const SOCIAL_LINKS = [
  { icon: "uil-instagram", href: "https://www.instagram.com/hrutik_nt" },
  {
    icon: "uil-linkedin-alt",
    href: "https://www.linkedin.com/in/n-t-hrutikkumar",
  },
  { icon: "uil-twitter", href: "https://x.com/hrutikkumar" },
  { icon: "uil-github-alt", href: "https://github.com/Hrutikkumar30" },
];

export const CONTACT_INFO = {
  phone: "+91 94800 40324",
  email: "hrutiknaik30@gmail.com",
};
