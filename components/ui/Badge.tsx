'use client';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

interface Badge {
	className?: string;
	textureSrc: string;
	tagSrc: string
}

// 4x scale
const TEXT_RIGHT_EDGE = 1936;
const TEXT_TOP = 96;
const FONT_SIZE = 56;

// Resolves a token's actual rendered value
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

// Patches the model-viewer instance to render the view count on the badge's texture
const patchViewCount = async (modelViewer: any, textureSrc: string) => {
	const res = await fetch('/api/views', { cache: 'no-store' });
	const { count } = (await res.json()) as { count: number };

	const fontFamily = resolveComputedStyle('font-mono', (s) => s.fontFamily);
	const frostColor = resolveComputedStyle('text-frost', (s) => s.color);

	const image = new Image();
	image.crossOrigin = 'anonymous';
	await new Promise((resolve, reject) => {
		image.onload = resolve;
		image.onerror = reject;
		image.src = textureSrc;
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

const Badge = ({ className, textureSrc, tagSrc }: Badge) => {
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
			patchViewCount(modelViewer, textureSrc).catch(() => { });
		};

		modelViewer.addEventListener('load', handleLoad);
		return () => modelViewer.removeEventListener('load', handleLoad);
	}, []);

	return (
		<div className={clsx('relative', className)}>
			<model-viewer
				ref={ref}
				src={tagSrc}
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

export default Badge;
