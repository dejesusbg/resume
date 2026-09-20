'use client';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';
import MarkdownRaw from '@/components/ui/MarkdownRaw';
import Link from '@/components/ui/Link';
import { usePathname } from 'next/navigation';

const Footer = () => {
	const pathname = usePathname();
	const t = useTranslations('footer');

	const heading = t('heading');
	const body = t('body');
	const back = t('back');
	const scroll = t('scroll');

	const showBackLink = pathname !== '/';
	const showScrollToTopLink = pathname === '/';

	return (
		<footer role="contentinfo">
			<Section id="contact" className="pt-[149px] pb-[160px] px-[6vw]" aria-labelledby="contact-heading">
				<Motion className="flex flex-col items-center justify-center my-auto space-y-4">
					<h2 id="contact-heading" className="font-serif text-ebony text-4xl md:text-5xl lg:text-6xl text-center tracking-tighter leading-[110%]">
						{heading}
					</h2>
					<div className="pb-2.5">
						<MarkdownRaw
							classNames={{
								p: 'text-ebony text-center md:text-lg',
								a: 'font-semibold text-periw hocus:text-berry hover:underline hover:underline-offset-4',
							}}>
							{body}</MarkdownRaw>
					</div>
					<div className="flex flex-row flex-wrap items-center justify-center gap-6 px-6 mt-6">
						{showBackLink && (
							<Link href="/" className="hidden text-sm sm:flex" type="back" reverse>{back}</Link>
						)}
						<Link href="https://github.com/dejesusbg" className="text-sm" type="out" external>
							GitHub
						</Link>
						<Link href="https://www.linkedin.com/in/dejesusbg" className="text-sm" type="out" external>
							LinkedIn
						</Link>
						<Link href="mailto:dejesusbg5@gmail.com" className="text-sm" type="out" external>
							Email
						</Link>
						{showBackLink && (
							<Link href="/" className="flex text-sm sm:hidden " type="back" reverse>{back}</Link>
						)}
						{showScrollToTopLink && (
							<Link href="#hero" className="text-sm" type="up">{scroll}</Link>
						)}
					</div>
				</Motion>
			</Section >
		</footer >
	);
}

export default Footer;
