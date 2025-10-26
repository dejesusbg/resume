import { LinkArrowBack } from '@/components/ui/LinkArrow';
import ProjectsTableRow from '@/components/ui/ProjectsRow';
import Section from '@/components/ui/Section';
import { projects } from '@/data/Projects';

const ProjectsTable = () => {
	const sortedProjects = [...projects].sort((a, b) => {
		const [monthA, yearA] = a.date.split('/');
		const [monthB, yearB] = b.date.split('/');

		const dateA = `20${yearA}-${monthA.padStart(2, '0')}`;
		const dateB = `20${yearB}-${monthB.padStart(2, '0')}`;

		return new Date(dateB).getTime() - new Date(dateA).getTime();
	});

	return (
		<table className="w-full mt-12 text-left border-collapse">
			<thead className="px-6 py-5 border-b-2 border-misty">
				<tr>
					<th className="py-4 pr-8 text-sm font-semibold text-periw">Year</th>
					<th className="py-4 pr-8 text-sm font-semibold text-periw">Project</th>
					<th className="hidden py-4 pr-8 text-sm font-semibold text-periw lg:table-cell">
						Built with
					</th>
					<th className="hidden py-4 pr-8 text-sm font-semibold text-periw sm:table-cell">Link</th>
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

export default function Archive() {
	return (
		<Section id="archive">
			<div className="flex flex-col items-center pt-24 space-y-4">
				<a
					className="flex items-center font-semibold cursor-pointer text-periw focus:text-berry hover:underline hover:underline-offset-4"
					href="/">
					<LinkArrowBack />
					Ricardo Barrios
				</a>
				<h1>All Projects</h1>
				<ProjectsTable />
			</div>
		</Section>
	);
}
