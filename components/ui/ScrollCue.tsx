'use client';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScrollCueProps {
	label: string;
	className?: string;
	fade?: boolean;
}

export const ScrollCue = ({ label, className, fade }: ScrollCueProps) => {
	const cueRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		sectionRef.current = cueRef.current?.closest('section') ?? null;
	}, []);

	const { scrollYProgress } = useScroll({
		target: sectionRef as React.RefObject<HTMLElement>,
		offset: ['end end', 'end start'],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

	return (
		<motion.div
			ref={cueRef}
			style={fade ? { opacity } : undefined}
			className={clsx('flex flex-col items-center py-6 text-center', className)}>
			<span className="font-mono text-sm font-semibold leading-none tracking-tight uppercase select-none whitespace-nowrap text-cloud/64">
				{label}
			</span>
		</motion.div>
	);
};
