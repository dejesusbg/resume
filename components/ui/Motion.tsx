'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/lib/tokens';

interface MotionProps extends React.ComponentProps<typeof motion.div> {
	focus?: boolean;
}

const Motion = ({ children, className, focus, ...props }: MotionProps) => {
	return (
		<motion.div
			initial={{ opacity: focus ? 0.5 : 0, filter: 'blur(4px)', y: 32 }}
			whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: motionTokens.reveal.duration, ease: motionTokens.reveal.ease }}
			className={clsx('flex', className)}
			{...props}>
			{children}
		</motion.div>
	);
};

export default Motion;
