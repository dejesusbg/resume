import Link from '@/components/ui/Link';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { StatTag, TechTag } from '@/components/ui/Tag';
import { ProjectProps } from '@/i18n/locale';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

const ProjectRow = ({ title, description, link, stat, tags, date }: ProjectProps) => {
    const t = useTranslations('archive');
    const yearDisplay = '20' + date.split('/')[1];

    const ProjectLink = ({ isHidden }: { isHidden: boolean }) => {
        if (!link) return null;

        const isGithub = link.includes('github.com');
        const linkText = isGithub ? t('source') : t('demo');

        return <div className={clsx("text-sm", { 'sm:hidden block': isHidden, 'sm:block hidden': !isHidden })}>
            <Link href={link} type={isGithub ? 'repo' : 'out'} >{linkText}</Link>
        </div>
    };

    return (
        <tr className="border-b-2 border-misty last:border-none">
            <td className="p-4 text-sm align-top">
                <div className="text-xs font-medium tracking-wide text-cloud/80">{yearDisplay}</div>
            </td>
            <td className="flex flex-col gap-4 p-4 text-sm">
                <h2 className="font-semibold leading-[120%]">{title}</h2>
                <p className="font-normal sm:max-w-sm">{description}</p>
                <ProjectLink isHidden={true} />
            </td>
            <td className="hidden p-4 align-top lg:table-cell">
                <ul className="flex flex-wrap gap-2">
                    {stat && <StatTag stat={stat} />}
                    {tags.map((tag, index) => (
                        <TechTag key={index} tech={tag} />
                    ))}
                </ul>
            </td>
            <td className="hidden p-4 align-top sm:table-cell">
                <ProjectLink isHidden={false} />
            </td>
        </tr>
    );
};

const ProjectsTable = ({ columns }: { columns: string[] }) => {
    const projects = useTranslations().raw('projects') as ProjectProps[];

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
                    <th className="p-4 text-sm font-semibold text-periw">{columns[0]}</th>
                    <th className="p-4 text-sm font-semibold text-periw">{columns[1]}</th>
                    <th className="hidden p-4 text-sm font-semibold text-periw lg:table-cell">
                        {columns[2]}
                    </th>
                    <th className="hidden p-4 text-sm font-semibold text-periw sm:table-cell">
                        {columns[3]}
                    </th>
                </tr>
            </thead>
            <tbody data-motion-stagger>
                {sortedProjects.map((project, index) => (
                    <ProjectRow key={index} {...project} />
                ))}
            </tbody>
        </table>
    );
};

export default function Archive() {
    const t = useTranslations('archive');
    const heading = t('heading');
    const columns = t.raw('columns') as string[];

    return (
        <Section id="archive" className="px-[6vw]" aria-labelledby="archive-heading">
            <Motion className="flex flex-col items-center pt-24 space-y-8">
                <h1 id="archive-heading" className="sr-only">{heading}</h1>
                <ProjectsTable columns={columns} />
            </Motion>
        </Section>
    );
}
