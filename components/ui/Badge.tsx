'use client';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface Badge {
	className?: string;
	textureSrc: string;
	tagSrc: string;
	alt: string;
}

// 2x scale
const TEXT_RIGHT_EDGE = 968;
const TEXT_TOP = 48;
const FONT_SIZE = 28;

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

const Badge = ({ className, textureSrc, tagSrc, alt }: Badge) => {
	const ref = useRef<any>(null);
	const patched = useRef(false);
	const [loaded, setLoaded] = useState(false);
	const [focusVisible, setFocusVisible] = useState(false);

	useEffect(() => {
		import('@google/model-viewer');
	}, []);

	// CSS :focus-visible doesn't work in shadow DOM, so we have to listen for focus events and apply a class manually
	useEffect(() => {
		let cancelled = false;
		let shadowRoot: ShadowRoot | null = null;

		const handleFocusIn = (event: Event) => {
			setFocusVisible((event.target as Element).matches?.(':focus-visible') ?? false);
		};
		const handleFocusOut = () => setFocusVisible(false);

		customElements.whenDefined('model-viewer').then(() => {
			if (cancelled) return;
			shadowRoot = ref.current?.shadowRoot ?? null;
			if (!shadowRoot) return;
			shadowRoot.addEventListener('focusin', handleFocusIn);
			shadowRoot.addEventListener('focusout', handleFocusOut);
		});

		return () => {
			cancelled = true;
			shadowRoot?.removeEventListener('focusin', handleFocusIn);
			shadowRoot?.removeEventListener('focusout', handleFocusOut);
		};
	}, []);

	useEffect(() => {
		const modelViewer = ref.current;
		if (!modelViewer) return;

		const handleLoad = () => {
			setLoaded(true);
			if (patched.current) return;
			patched.current = true;
			patchViewCount(modelViewer, textureSrc).catch(() => { });
		};

		modelViewer.addEventListener('load', handleLoad);
		return () => modelViewer.removeEventListener('load', handleLoad);
	}, []);

	return (
		<div className={clsx('relative', className)}>
			<div
				aria-hidden
				className={clsx(
					'absolute inset-0 rounded-2xl bg-lilac transition-opacity duration-500 ease-out',
					loaded && 'opacity-0'
				)}
			/>
			<model-viewer
				ref={ref}
				src={tagSrc}
				alt={alt}
				className={clsx(focusVisible && 'transition-all duration-150 ease-in-out outline-none ring-4 ring-periw')}
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
				style={{
					width: '100%',
					height: '100%',
					opacity: loaded ? 1 : 0,
					filter: loaded ? 'blur(0px)' : 'blur(8px)',
					transform: loaded ? 'translateY(0)' : 'translateY(16px)',
					transition: 'opacity 0.6s cubic-bezier(0.34,1.35,0.5,1), filter 0.6s cubic-bezier(0.34,1.35,0.5,1), transform 0.6s cubic-bezier(0.34,1.35,0.5,1)',
					'--poster-color': 'transparent',
				}}
				disable-zoom
				disable-tap
				auto-rotate>
				<div slot="progress-bar" style={{ display: 'none' }} />
			</model-viewer>
		</div>
	);
};

export default Badge;
