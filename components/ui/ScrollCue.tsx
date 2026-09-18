'use client';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScrollCueProps {
	label: string;
	className?: string;
	align?: 'center' | 'start';
	fade?: boolean;
	fadeInto?: string;
}

export const ScrollCue = ({ label, className, align = 'center', fade, fadeInto }: ScrollCueProps) => {
	const targetRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (fadeInto) targetRef.current = document.getElementById(fadeInto);
	}, [fadeInto]);

	const { scrollY } = useScroll();
	const pageOpacity = useTransform(scrollY, [0, 240], [1, 0]);

	const { scrollYProgress } = useScroll({
		target: fadeInto ? (targetRef as React.RefObject<HTMLElement>) : undefined,
		offset: ['start end', 'start center'],
	});
	const targetOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<motion.div
			style={fade ? { opacity: pageOpacity } : fadeInto ? { opacity: targetOpacity } : undefined}
			className={clsx(
				'flex flex-col py-6',
				align === 'start' ? 'items-start text-left' : 'items-center text-center',
				className,
			)}>
			<span className="font-mono text-sm font-semibold leading-none tracking-tight uppercase select-none whitespace-nowrap text-cloud/64">
				{label}
			</span>
		</motion.div>
	);
};
