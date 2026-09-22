'use client';
import { useEffect } from 'react';

const SLUG = 'ricardo-barrios';
const EMBED_SRC = 'https://cdn.jsdelivr.net/gh/dejesusbg/paramo-ring@main/embed.js';

const Webring = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = EMBED_SRC;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="absolute bottom-0 right-0 z-50 flex justify-center w-full p-6 md:justify-end">
			<div data-paramoring={SLUG} />
		</div>
	);
};

export default Webring;
