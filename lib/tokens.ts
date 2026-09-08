export const layout = {
	maxWidth: '1080px',
	gutter: 'clamp(1rem, 6vw, 4rem)',
} as const;

export const motion = {
	reveal: {
		duration: 0.55,
		ease: [0.22, 1, 0.36, 1],
	},
	stagger: 0.06,
} as const;