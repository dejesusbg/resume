'use client';
import { useEffect } from 'react';

const ScrollWidthObserver = () => {
	useEffect(() => {
		let ticking = false;

		const update = () => {
			document.documentElement.classList.toggle('scrolled', window.scrollY > 4);
			ticking = false;
		};

		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		};

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return null;
};

export default ScrollWidthObserver;
