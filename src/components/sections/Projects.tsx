import Section from "@/components/ui/Section";

const PROJECTS_INFO = [
  {
    title: "Ingnova SAS Website",
    description:
      "Corporate website for Ingnova SAS, built with Next.js and DecapCMS for content management.",
    link: "https://rdingnova.com.co/",
    imageSrc: "ingnova.png",
    imageAlt: "INGNOVA SAS Website",
    tags: ["next.js", "typescript", "tailwind", "decapcms"],
    featured: true,
  },
  {
    title: "Mango Classification using AI",
    description:
      "Supervised ML models for classifying mangoes as ripe or rotten using image processing.",
    link: "https://github.com/dejesusbg/mangifera",
    imageSrc: "mangifera.png",
    imageAlt: "AI Mango Classifier",
    tags: ["python", "tensorflow", "scikit-learn"],
    featured: true,
  },
  {
    title: "Aura Habits",
    description:
      "Progressive Web App for offline habit tracking with gamification.",
    link: "https://auraby.netlify.app",
    imageSrc: "aura.jpeg",
    imageAlt: "Aura Habit Tracker",
    tags: ["react", "javascript", "css", "pwa"],
    featured: true,
  },
  {
    title: "Electronic Voting System",
    description:
      "Secure school voting system with authentication and role-based access control.",
    link: "https://github.com/dejesusbg/acme",
    imageSrc: "acme.png",
    imageAlt: "ACME School Vote",
    tags: ["php", "css", "mysql"],
    featured: true,
  },
  {
    title: "MD3 Components",
    description:
      "Material Design 3 UI component library for modern web development.",
    link: "",
    imageSrc: "md3.png",
    imageAlt: "MD3 Components",
    tags: ["javascript", "css"],
  },
  {
    title: "Monet Colors",
    description:
      "Library for generating and managing custom color palettes with light/dark mode support.",
    link: "",
    imageSrc: "monet.png",
    imageAlt: "Monet Colors",
    tags: ["javascript", "typescript", "css", "tailwind"],
  },
  {
    title: "Educadata",
    description:
      "Educational software for tracking grades, lessons, and student progress.",
    link: "",
    imageSrc: "educadata.png",
    imageAlt: "Educadata",
    tags: ["spring boot", "java", "javascript", "css"],
  },
  {
    title: "RDparser",
    description: "Recursive descent parser for arithmetic expressions in Java.",
    link: "https://github.com/dejesusbg/rdparser",
    imageSrc: "rdparser.png",
    imageAlt: "RDparser",
    tags: ["java"],
  },

  {
    title: "Legal Education Platform",
    description:
      "Django-based platform connecting law students with tutors for personalized learning.",
    link: "",
    imageSrc: "legal-education.png",
    imageAlt: "Legal Education Platform",
    tags: ["django", "python", "html", "css"],
  },
];

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  tags,
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
        <img
          alt={imageAlt}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-nimg="1"
          className="aspect-video object-cover rounded border-2 border-cloud/20 transition group-hover:border-cloud/40 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          srcSet={`${imageSrc}?w=256&q=75 1x, ${imageSrc}?w=640&q=75 2x`}
          src={`${imageSrc}?w=640&q=75`}
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
