import { LinkArrowBack } from '@/components/ui/LinkArrow';
import Motion from '@/components/ui/Motion';
import { ProjectProps, ProjectRow } from '@/components/ui/Project';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

const ProjectsTable = () => {
	const tLayout = useTranslations('layout');
	const tData = useTranslations('data');

	const headers: string[] = tLayout.raw('table');
	const projects: ProjectProps[] = tData.raw('projects');

	const sortedProjects = [...projects].sort((a, b) => {
		const [monthA, yearA] = a.date.split('/');
		const [monthB, yearB] = b.date.split('/');

		const dateA = `20${yearA}-${monthA.padStart(2, '0')}`;
		const dateB = `20${yearB}-${monthB.padStart(2, '0')}`;

		return new Date(dateB).getTime() - new Date(dateA).getTime();
	});

	return (
		<table className="w-full text-left border-collapse">
			<thead className="border-b-2 border-misty">
				<tr>
					<th className="p-4 text-sm font-semibold text-periw">{headers[0]}</th>
					<th className="p-4 text-sm font-semibold text-periw">{headers[1]}</th>
					<th className="hidden p-4 text-sm font-semibold text-periw lg:table-cell">
						{headers[2]}
					</th>
					<th className="hidden p-4 text-sm font-semibold text-periw sm:table-cell">
						{headers[3]}
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedProjects.map((project, index) => (
					<ProjectRow key={index} {...project} />
				))}
			</tbody>
		</table>
	);
};

export default function Archive() {
	const tLayout = useTranslations('layout');

	return (
		<Section id="archive">
			<Motion className="flex flex-col items-center pt-24 space-y-8">
				<a
					className="font-semibold text-center cursor-pointer text-periw focus:text-berry hover:underline hover:underline-offset-4"
					href="/">
					<LinkArrowBack />
					Ricardo Barrios
				</a>
				<h2>{tLayout('projects')}</h2>
				<ProjectsTable />
			</Motion>
		</Section>
	);
}
