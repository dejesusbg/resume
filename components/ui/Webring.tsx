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
		<div className="fixed right-6 bottom-6">
			<div data-paramoring={SLUG} />
		</div>
	);
};

export default Webring;
