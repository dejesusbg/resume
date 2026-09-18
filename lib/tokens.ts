export const layout = {
	maxWidth: '1080px',
	gutter: 'clamp(1rem, 6vw, 4rem)',
} as const;

export const motion = {
	reveal: {
		duration: 0.6,
		ease: [0.34, 1.35, 0.5, 1],
	},
	stagger: 0.06,
} as const;