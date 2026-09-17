'use client';
import clsx from 'clsx';
import { useEffect } from 'react';

/* Simplified from badge3d/src/App.js — drag-to-orbit only, no flip button,
   matching the static mockup's badge slot. @google/model-viewer registers a
   custom element at module scope, so it's imported on mount rather than at
   the top of the file to keep this out of the server render. */
const Badge3D = ({ className }: { className?: string }) => {
	useEffect(() => {
		import('@google/model-viewer');
	}, []);

	return (
		<div className={clsx('relative', className)}>
			<model-viewer
				src="/tag.glb"
				alt="ID card"
				camera-controls
				touch-action="pan-y"
				exposure="1"
				shadow-intensity="1"
				shadow-softness="1"
				environment-image="neutral"
				tone-mapping="neutral"
				camera-orbit="12.5deg 80deg 100%"
				min-camera-orbit="auto 60deg auto"
				max-camera-orbit="auto 120deg auto"
				style={{ width: '100%', height: '100%' }}
				disable-zoom
			/>
		</div>
	);
};

export default Badge3D;
