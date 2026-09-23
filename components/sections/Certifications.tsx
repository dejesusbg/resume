import { sortByDate } from '@/components/sections/Archive';
import Link from '@/components/ui/Link';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { StatTag, TechTag } from '@/components/ui/Tag';
import { CertificationProps } from '@/i18n/locale';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

const CertificationRow = ({ title, description, issuer, tags, link, date }: CertificationProps) => {
    const t = useTranslations('certificationsPage');
    const yearDisplay = '20' + date.split('/')[1];

    const VerifyLink = ({ isHidden }: { isHidden: boolean }) => (
        <div className={clsx("text-sm", { 'sm:hidden block': isHidden, 'sm:block hidden': !isHidden })}>
            <Link href={link} type="out" external>{t('verify')}</Link>
        </div>
    );

    return (
        <tr className="border-b-2 border-misty last:border-none">
            <td className="p-4 text-sm align-top">
                <div className="text-xs font-medium tracking-wide text-cloud/80">{yearDisplay}</div>
            </td>
            <td className="flex flex-col gap-4 p-4 text-sm">
                <h2 className="font-semibold leading-[120%]">{title}</h2>
                <p className="font-normal sm:max-w-sm">{description}</p>
                <VerifyLink isHidden={true} />
            </td>
            <td className="hidden p-4 align-top lg:table-cell">
                <ul className="flex flex-wrap gap-2">
                    <StatTag stat={issuer} />
                    {tags.map((tag, index) => (
                        <TechTag key={index} tech={tag} />
                    ))}
                </ul>
            </td>
            <td className="hidden p-4 align-top sm:table-cell">
                <VerifyLink isHidden={false} />
            </td>
        </tr>
    );
};

const CertificationsTable = ({ columns }: { columns: string[] }) => {
    const certifications = useTranslations().raw('certifications') as CertificationProps[];
    const sortedCertifications = sortByDate(certifications);

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
                {sortedCertifications.map((certification, index) => (
                    <CertificationRow key={index} {...certification} />
                ))}
            </tbody>
        </table>
    );
};

export default function Certifications() {
    const t = useTranslations('certificationsPage');
    const heading = t('heading');
    const columns = t.raw('columns') as string[];

    return (
        <Section id="certifications" className="px-[6vw]" aria-labelledby="certifications-heading">
            <Motion className="flex flex-col items-center pt-24 space-y-8">
                <h1 id="certifications-heading" className="sr-only">{heading}</h1>
                <CertificationsTable columns={columns} />
            </Motion>
        </Section>
    );
}
