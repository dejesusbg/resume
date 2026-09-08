'use client';
import { useEffect, useRef } from 'react';

const Background = () => {
	const backgroundRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const background = backgroundRef.current;
		if (!background) return;
		const handleMouseMove = (event: MouseEvent) => {
			background.style.setProperty('--cursor-x', `${event.clientX}px`);
			background.style.setProperty('--cursor-y', `${event.clientY}px`);
		};
		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div ref={backgroundRef} id="background-layer" aria-hidden="true" className="fixed inset-0 z-30 pointer-events-none" />
	);
};

export default Background;
