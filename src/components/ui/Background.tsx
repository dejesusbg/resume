'use client';
import { useCallback, useEffect, useState } from 'react';

interface CursorPosition {
	x: number;
	y: number;
}

const useCursorPosition = () => {
	const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });

	const handleMouseMove = useCallback((event: MouseEvent) => {
		setCursorPosition({ x: event.clientX, y: event.clientY });
	}, []);

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [handleMouseMove]);

	return cursorPosition;
};

const Background = () => {
	const { x, y } = useCursorPosition();

	return (
		<>
			<div
				className="fixed inset-0 top-0 bottom-0 left-0 right-0 z-30 block pointer-events-none lg:hidden flow"
				style={{
					background: `radial-gradient(600px at 0 0, var(--color-misty), transparent 80%)`,
				}}
			/>
			<div
				className="fixed inset-0 top-0 bottom-0 left-0 right-0 z-30 hidden pointer-events-none lg:block flow"
				style={{
					background: `radial-gradient(600px at ${x}px ${y}px, var(--color-misty), transparent 80%)`,
				}}
			/>
		</>
	);
};

export default Background;
