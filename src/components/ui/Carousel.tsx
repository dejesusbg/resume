'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
	slug: string;
	images: string[];
	speed?: number;
}

export default function Carousel({ slug, images, speed = 100 }: CarouselProps) {
	const imagePaths = images.map((img) => `/${slug}/${img}`);
	const containerRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number | null>(null);

	const [isMd, setIsMd] = useState<boolean>(false);
	useEffect(() => {
		const check = () => setIsMd(window.innerWidth >= 768);
		check();
		const onResize = () => check();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	useEffect(() => {
		if (!isMd) return;
		const container = containerRef.current;
		if (!container) return;

		let startTime: number | null = null;
		let pos = 0;

		const animate = (ts: number) => {
			if (!startTime) startTime = ts;
			const elapsed = ts - startTime;

			pos -= (speed * elapsed) / 1000;
			startTime = ts;

			const halfWidth = container.scrollWidth / 2;
			pos = ((pos % halfWidth) + halfWidth) % halfWidth;

			container.style.transform = `translateX(${-pos}px)`;
			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [speed, imagePaths]);

	return (
		<div className="w-full overflow-x-hidden md:overflow-x-visible">
			<motion.div ref={containerRef} className="hidden gap-2 py-4 md:flex w-fit">
				{[...imagePaths, ...imagePaths].map((src, i) => (
					<div key={i} className="flex-shrink-0 mr-2 h-72 max-h-72">
						<Image
							src={src}
							alt={`Slide ${(i % imagePaths.length) + 1}`}
							width={512}
							height={512}
							unoptimized
							className="object-contain w-auto h-full border-2 border-misty rounded-2xl hover:scale-101 hover:border-berry hover:shadow"
							priority={i < imagePaths.length}
						/>
					</div>
				))}
			</motion.div>
			<div className="flex flex-col gap-2 md:hidden">
				{imagePaths.map((src, i) => (
					<Image
						src={src}
						key={i}
						alt={`Slide ${(i % imagePaths.length) + 1}`}
						width={512}
						height={512}
						unoptimized
						className="object-contain w-full h-auto border-2 border-misty rounded-2xl"
						priority={i < imagePaths.length}
					/>
				))}
			</div>
		</div>
	);
}
