import { projects } from "@/data/Projects";
import ProjectsTableRow from "@/components/ui/ProjectsRow";

const ProjectsTable = () => {
  const sortedProjects = [...projects].sort((a, b) => {
    const [monthA, yearA] = a.date.split("/");
    const [monthB, yearB] = b.date.split("/");

    const dateA = `20${yearA}-${monthA.padStart(2, "0")}`;
    const dateB = `20${yearB}-${monthB.padStart(2, "0")}`;

    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  return (
    <table className="mt-12 w-full border-collapse text-left">
      <thead className="sticky top-0 z-10 border-b border-cloud/20 px-6 py-5 backdrop-blur bg-ebony/75">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold text-frost">Date</th>
          <th className="py-4 pr-8 text-sm font-semibold text-frost">
            Project
          </th>
          <th className="hidden py-4 px-8 text-sm font-semibold text-frost lg:table-cell">
            Built with
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-frost sm:table-cell">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedProjects.map((project, index) => (
          <ProjectsTableRow key={index} {...project} />
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
