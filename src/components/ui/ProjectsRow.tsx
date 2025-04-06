import { ProjectProps } from "@/data/Projects";
import { ProjectsTableTag } from "./ProjectsTag";
import { FaGithub } from "react-icons/fa";

const ProjectsTableRow = ({ title, link, tags, date }: ProjectProps) => {
  const isLink = link !== "#";

  const isGithub = isLink && link.includes("github.com");
  const githubRepoName = isGithub
    ? link
        .replace(/^https?:\/\/github\.com\//, "")
        .replace(/\/$/, "")
        .replace("dejesusbg/", "")
    : null;

  const linkDisplay = isGithub
    ? githubRepoName
    : isLink
    ? link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : link;

  const yearDisplay = "20" + date.split("/")[1];

  return (
    <tr className="border-b border-cloud/20 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px text-frost/60">{yearDisplay}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-frost">
        <div>
          <div className="block sm:hidden">
            {isLink ? (
              <a
                className="inline-flex items-baseline font-medium leading-tight hocus:text-lovie sm:hidden group/link text-base"
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={title}
              >
                <span>
                  <span className="inline-block">
                    {title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            ) : (
              title
            )}
          </div>
          <div className="hidden sm:block">{title}</div>
        </div>
      </td>
      <td className="hidden py-4 px-8 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {tags.map((tag, index) => (
            <ProjectsTableTag key={index} name={tag} />
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            {isLink && (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-frost/60 hocus:text-lovie text-sm group/link text-sm"
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={title}
              >
                <span>
                  <span className="inline-block">
                    {linkDisplay}
                    {isGithub ? (
                      <FaGithub className="inline-block ml-1" size={14} />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </span>
                </span>
              </a>
            )}
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default ProjectsTableRow;
