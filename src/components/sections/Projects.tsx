import Section from "@/components/ui/Section";
import { projects } from "@/data/Projects";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectsCard";

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
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </ul>
      </div>
      <div className="mt-12">
        <Link
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
        </Link>
      </div>
    </Section>
  );
};

export default Projects;
