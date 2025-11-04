import Motion from '@/components/ui/Motion';
import clsx from 'clsx';
import Image from 'next/image';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface MarkdownProps {
	children: string;
	classNames?: any;
}

const MarkdownRaw = ({ children, classNames }: MarkdownProps) => {
	return (
		<Markdown
			rehypePlugins={[rehypeRaw]}
			components={{
				p: ({ node, ...props }) => (
					<Motion focus className={classNames?.p}>
						<p {...props} />
					</Motion>
				),
				a: ({ node, ...props }) => (
					<a className={classNames?.a} target="_blank" rel="noopener noreferrer" {...props} />
				),
				img: ({ node, ...props }) => (
					<Image
						className={clsx({
							'inline-block aspect-square lg:w-[108px] md:w-[96px] sm:w-[72px] w-[54px] drop-shadow-2xl sm:mx-0.5 md:mx-1 lg:mx-2 align-baseline last:hidden last:sm:inline-block':
								props?.className == 'logo',
						})}
						src={props.src || ''}
						alt={props.alt || ''}
						width={12}
						height={12}
						unoptimized
						priority
					/>
				),
			}}>
			{children}
		</Markdown>
	);
};

export default MarkdownRaw;
