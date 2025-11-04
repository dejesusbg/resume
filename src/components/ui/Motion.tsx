'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Motion = ({ children, className, focus, ...props }: any) => {
	return (
		<>
			<motion.div
				initial={{ opacity: focus ? 0.5 : 0, filter: 'blur(4px)', y: 20 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
				viewport={{ once: true, margin: '-100px -100px' }}
				transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
				className={clsx('hidden md:flex', className)}
				{...props}>
				{children}
			</motion.div>
			<div className={clsx('md:hidden flex', className)}>{children}</div>
		</>
	);
};

export default Motion;
