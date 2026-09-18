'use client';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

// Pixel geometry measured directly from public/tag-card-face.png (the card's
// baked 2304x2304 back-panel texture): the old "1,227,203 FLIPS" text's ink
// bounding box was x 1541-1914, y 299-336, padded here to fully erase its
// anti-aliasing before drawing the live count in its place.
const TEXT_RIGHT_EDGE = 1936; // right edge of the old "1,227,203 FLIPS" text
const TEXT_TOP = 96; // 96px in the 1x design, exported at the texture's 3x scale
const FONT_SIZE = 56; // 14px in the 1x design, exported at the texture's 3x scale

// Resolves a token's actual rendered value via a throwaway element, since
// --color-frost and --font-mono are theme tokens (color-mix()/next/font's
// generated family), not literal values a canvas fillStyle/font can guess.
const resolveComputedStyle = (className: string, read: (style: CSSStyleDeclaration) => string) => {
	const probe = document.createElement('span');
	probe.className = className;
	probe.style.position = 'absolute';
	probe.style.visibility = 'hidden';
	document.body.appendChild(probe);
	const value = read(getComputedStyle(probe));
	document.body.removeChild(probe);
	return value;
};

const patchViewCount = async (modelViewer: any) => {
	const res = await fetch('/api/views', { cache: 'no-store' });
	const { count } = (await res.json()) as { count: number };

	const fontFamily = resolveComputedStyle('font-mono', (s) => s.fontFamily);
	// --color-frost is a color-mix() token; Chromium serializes its computed
	// value as an oklab() string, not rgb(), so it's passed straight through
	// to canvas (which accepts any valid CSS <color>) rather than hand-parsed.
	const frostColor = resolveComputedStyle('text-frost', (s) => s.color);

	const image = new Image();
	image.crossOrigin = 'anonymous';
	await new Promise((resolve, reject) => {
		image.onload = resolve;
		image.onerror = reject;
		image.src = '/badge/texture.png';
	});

	const canvas = document.createElement('canvas');
	canvas.width = image.width;
	canvas.height = image.height;
	const ctx = canvas.getContext('2d')!;
	ctx.drawImage(image, 0, 0);

	await document.fonts.ready;
	ctx.font = `450 ${FONT_SIZE}px ${fontFamily}`;
	ctx.fillStyle = frostColor;
	ctx.globalAlpha = 0.8;
	ctx.textAlign = 'right';
	ctx.textBaseline = 'top';
	ctx.fillText(`${count.toLocaleString('en-US')} VIEWS`, TEXT_RIGHT_EDGE, TEXT_TOP);
	ctx.globalAlpha = 1;

	const texture = await modelViewer.createTexture(canvas.toDataURL('image/png'));
	const [material] = modelViewer.model.materials;
	material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
};

/* Simplified from badge3d/src/App.js — drag-to-orbit only, no flip button,
   matching the static mockup's badge slot. @google/model-viewer registers a
   custom element at module scope, so it's imported on mount rather than at
   the top of the file to keep this out of the server render. */
const Badge3D = ({ className }: { className?: string }) => {
	const ref = useRef<any>(null);
	const patched = useRef(false);

	useEffect(() => {
		import('@google/model-viewer');
	}, []);

	useEffect(() => {
		const modelViewer = ref.current;
		if (!modelViewer) return;

		const handleLoad = () => {
			if (patched.current) return;
			patched.current = true;
			// Leave the original baked "1,227,203 FLIPS" texture showing on any failure
			// (no Netlify Blobs context in plain `next dev`, network hiccup, etc).
			patchViewCount(modelViewer).catch(() => { });
		};

		modelViewer.addEventListener('load', handleLoad);
		return () => modelViewer.removeEventListener('load', handleLoad);
	}, []);

	return (
		<div className={clsx('relative', className)}>
			<model-viewer
				ref={ref}
				src="/badge/tag.glb"
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
				disable-tap
				auto-rotate
			/>
		</div>
	);
};

export default Badge3D;
