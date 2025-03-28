import Section from "@/components/ui/Section";
import Image from "next/image";

const PROJECTS_INFO = [
  {
    title: "Ingnova's Website",
    description:
      "Corporate website for Ingnova SAS, built with Next.js and DecapCMS for content management.",
    link: "https://rdingnova.com.co/",
    imageSrc: "ingnova.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Netlify"],
    featured: true,
    year: 2025,
  },
  {
    title: "Mango Classification using AI",
    description:
      "Supervised ML models for classifying mangoes as ripe or rotten using image processing.",
    link: "https://github.com/dejesusbg/mangifera",
    imageSrc: "mangifera.png",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
    featured: true,
    year: 2024,
  },
  {
    title: "Aura Habits",
    description:
      "Progressive Web App for offline habit tracking with gamification.",
    link: "https://auraby.netlify.app",
    imageSrc: "aura.png",
    tags: ["React", "JavaScript", "CSS", "PWA"],
    featured: true,
    year: 2024,
  },
  {
    title: "Monet Colour Palettes",
    description:
      "Library for customizable Material You colour palettes with Tailwind V3 support",
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
    title: "Simple notes app",
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

interface ProjectCardProps {
  title: string;
  description?: string;
  link: string;
  imageSrc?: string;
  tags: string[];
  year: number;
}

const ProjectCard = ({
  title,
  description,
  link,
  imageSrc,
  tags,
  year,
}: ProjectCardProps) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-ebony/50 lg:group-hover:shadow-[inset_0_1px_0_0_var(--color-misty)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-frost hocus:text-lovie group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-0 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-1"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
        </div>
        <Image
          alt={title}
          width="200"
          height="48"
          layout="intrinsic"
          className="aspect-auto rounded border-2 border-cloud/20 transition group-hover:border-cloud/40 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          src={`/${imageSrc}`}
        />
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <Section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h3 className="text-sm font-bold uppercase tracking-widest text-frost lg:sr-only">
          Projects
        </h3>
      </div>
      <div>
        <ul className="group/list">
          {PROJECTS_INFO.filter((project) => project.featured).map(
            (project, index) => (
              <ProjectCard key={index} {...project} />
            )
          )}
        </ul>
      </div>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-frost font-semibold group"
          aria-label="View Full Project"
          href="/archive"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-lovie motion-reduce:transition-none">
              View Full Project Archive
            </span>
            <span className="whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </Section>
  );
};

export default Projects;
