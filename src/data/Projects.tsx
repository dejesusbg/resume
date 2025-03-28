export interface StatsProps {
  icon: string;
  value: string;
}

export interface ProjectCardProps {
  title: string;
  description?: string;
  link: string;
  imageSrc?: string;
  tags: string[];
  stats?: StatsProps;
  year: number;
}

export const projects = [
  {
    title: "Blind-First Navigation App",
    description:
      "Accessible mobile app with real-time voice feedback, designed  to assist visually impaired users in navigating urban environments.",
    link: "#",
    imageSrc: "navigation.png",
    tags: ["React Native", "Spring Boot", "Expo", "Android"],
    featured: true,
    year: 2025,
  },
  {
    title: "Corporate Website for Engineering Firm",
    description:
      "Fast, modern, and content-managed website for INGNOVA SAS, improving its online presence.",
    link: "https://rdingnova.com.co/",
    imageSrc: "ingnova.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Netlify"],
    featured: true,
    year: 2025,
  },
  {
    title: "Mango Classification using AI",
    description:
      "Machine learning models for automated mango ripeness classification, helping optimize agricultural processes.",
    link: "https://github.com/dejesusbg/mangifera",
    imageSrc: "mangifera.png",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
    stats: { icon: "accuracy", value: "+95 accuracy" },
    featured: true,
    year: 2024,
  },
  {
    title: "Aura Habit Tracking",
    description:
      "PWA for habit tracking, offering offline support and gamification features to enhance user motivation and progress.",
    link: "https://auraby.netlify.app",
    imageSrc: "aura.png",
    tags: ["React", "JavaScript", "CSS"],
    featured: true,
    year: 2024,
  },
  {
    title: "Monet Color Palette Library",
    description:
      "Library for customizable Material You colour palettes with full Tailwind V3 support, helping developers create beautiful UIs.",
    link: "https://github.com/dejesusbg/monet",
    imageSrc: "monet.png",
    tags: ["JavaScript", "TypeScript", "CSS", "Tailwind"],
    featured: true,
    year: 2024,
  },
  {
    title: "Legal Education Platform",
    link: "#",
    tags: ["Django", "Python", "CSS", "Google Cloud", "SQLite"],
    year: 2023,
  },
  {
    title: "Electronic Voting System",
    link: "https://github.com/dejesusbg/acme",
    tags: ["PHP", "CSS", "MySQL"],
    year: 2023,
  },
  {
    title: "Wordflow Bot",
    link: "https://github.com/dejesusbg/wordflow-bot",
    tags: ["JavaScript"],
    year: 2024,
  },
  {
    title: "Bio-inspired Traveling Salesman Problem",
    link: "https://github.com/dejesusbg/bioinsipired-tsp",
    tags: ["Python"],
    year: 2024,
  },
  {
    title: "Simple Notes App",
    link: "https://notes-mui.netlify.app/",
    tags: ["JavaScript", "CSS"],
    year: 2022,
  },
  {
    title: "Material Design 3 Components",
    link: "https://github.com/dejesusbg/md3",
    tags: ["JavaScript", "CSS"],
    year: 2022,
  },

  {
    title: "Educational tracking software",
    link: "https://github.com/dejesusbg/data-structures",
    tags: ["Java", "Spring Boot", "JavaScript", "CSS"],
    year: 2023,
  },
  {
    title: "Data Structures",
    link: "https://github.com/dejesusbg/data-structures",
    tags: ["Java", "C++"],
    year: 2022,
  },
  {
    title: "Recursive Descendant Parser",
    link: "https://github.com/dejesusbg/rdparser",
    tags: ["Java"],
    year: 2023,
  },
  {
    title: "Bulls & Cows",
    link: "https://github.com/dejesusbg/bulls-and-cows",
    tags: ["HTML", "JavaScript", "CSS"],
    year: 2024,
  },
  {
    title: "Deterministic Finite Automaton",
    link: "https://github.com/dejesusbg/dfautomaton",
    tags: ["Java"],
    year: 2023,
  },
];
