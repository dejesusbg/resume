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
				p: ({ node, ...props }) => <p className={classNames?.p} {...props} />,
				a: ({ node, ...props }) => (
					<a className={classNames?.a} target="_blank" rel="noopener noreferrer" {...props} />
				),
				img: ({ node, ...props }) => (
					<Image
						className={clsx({
							'inline-block aspect-square lg:w-[108px] md:w-[96px] sm:w-[72px] w-[54px] rounded-[12.0234375px] sm:rounded-[16.03125px] md:rounded-[21.375px] lg:rounded-[24.046875px] shadow-2xl sm:mx-0.5 md:mx-1 lg:mx-2 align-baseline last:hidden last:sm:inline-block':
								props?.className == 'logo',
						})}
						src={props.src || ''}
						alt={props.alt || ''}
						width={512}
						height={512}
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
