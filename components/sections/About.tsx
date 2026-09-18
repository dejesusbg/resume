import Link from '@/components/ui/Link';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface CredentialProps {
	title: string;
	institution: string;
	logo: string;
}

const Credential = ({ data }: { data: CredentialProps }) => {
	return <div className="flex flex-row gap-2.5 items-center">
		<Image src={data.logo} alt={`${data.institution} logo`} width={28} height={28} />
		<div className="flex flex-col text-sm md:text-base">
			<p className="font-medium">
				{data.title}
			</p>
			<span className="text-cloud/80">
				{data.institution}
			</span>
		</div>
	</div>
}

const About = () => {
	const t = useTranslations('about');

	const body = t('body');
	const credentials = t.raw('credentials');
	const resume = t('resume');
	const cta = t('cta');

	return (
		<Section id="about" className="pt-[200px] pb-[120px] px-[6vw]">
			<Motion className="flex flex-col items-center justify-between my-auto space-y-[52px]">
				<MarkdownRaw
					classNames={{
						p: 'text-ebony text-xl md:text-2xl lg:text-3xl text-center leading-[162%]',
						a: 'font-semibold text-periw hocus:text-berry hover:underline hover:underline-offset-4',
					}}>
					{body}
				</MarkdownRaw>

				<div className="flex flex-col gap-4 pb-6 md:gap-8 md:flex-row">
					<Credential data={credentials[0]} />
					<div className="flex-shrink-0 w-auto h-px md:w-px md:h-auto bg-misty" />
					<Credential data={credentials[1]} />
				</div>

				<div className="flex justify-center">
					<Link href={resume} type="out" external>{cta}</Link>
				</div>
			</Motion>
		</Section>
	);
};

export default About;
