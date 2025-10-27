import { LinkArrowBack } from '@/components/ui/LinkArrow';
import ProjectsTableRow from '@/components/ui/ProjectsRow';
import Section from '@/components/ui/Section';
import { archive, projects } from '@/data/Projects';

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
			<thead className="border-b-2 border-misty">
				<tr>
					<th className="p-4 text-sm font-semibold text-periw">{archive.headers[0]}</th>
					<th className="p-4 text-sm font-semibold text-periw">{archive.headers[1]}</th>
					<th className="hidden p-4 text-sm font-semibold text-periw lg:table-cell">
						{archive.headers[2]}
					</th>
					<th className="hidden p-4 text-sm font-semibold text-periw sm:table-cell">
						{archive.headers[3]}
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

export default function Archive() {
	return (
		<Section id="archive">
			<div className="flex flex-col items-center pt-32 space-y-4">
				<a
					className="flex items-center font-semibold cursor-pointer text-periw focus:text-berry hover:underline hover:underline-offset-4"
					href="/">
					<LinkArrowBack />
					Ricardo Barrios
				</a>
				<h1>{archive.title}</h1>
				<ProjectsTable />
			</div>
		</Section>
	);
}
