import { ProjectProps } from '@/data/Projects';
import Image from 'next/image';
import { ProjectsCardTag } from './ProjectsTag';

const ProjectCard = ({ title, description, link, imageSrc, tags, date }: ProjectProps) => {
	return (
		<li className="mb-12">
			<div className="relative grid gap-4 pb-1 transition-all duration-300 group sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover/list:opacity-50">
				<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-frost/5 lg:group-hover:shadow-[inset_0_1px_0_0_var(--color-misty)] lg:group-hover:drop-shadow-lg"></div>
				<div className="z-10 sm:order-2 sm:col-span-6">
					<div className="z-10 my-1 text-xs tracking-wide uppercase sm:col-span-2 text-frost/60">
						{date}
					</div>
					<h3>
						<a
							className="inline-flex items-baseline text-base font-medium leading-tight text-frost hocus:text-lovie group/link"
							href={link}
							target="_blank"
							rel="noreferrer noopener">
							<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
							<span>{title}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="inline-block w-4 h-4 ml-1 transition-transform translate-y-1 shrink-0 group-hover/link:-translate-y-0 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-0 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
								aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
									clipRule="evenodd"></path>
							</svg>
						</a>
					</h3>
					<p className="mt-2 text-sm leading-normal">{description}</p>
					<ul className="flex flex-wrap mt-2">
						{tags.map((tag, index) => (
							<ProjectsCardTag key={index} name={tag} />
						))}
					</ul>
				</div>
				<Image
					alt={title}
					width="200"
					height="48"
					layout="intrinsic"
					className="object-cover transition border-2 rounded aspect-video border-cloud/20 group-hover:border-cloud/80 sm:order-1 sm:col-span-2 sm:translate-y-1 brightness-75"
					style={{ color: 'transparent' }}
					src={`/${imageSrc}`}
				/>
			</div>
		</li>
	);
};

export default ProjectCard;
