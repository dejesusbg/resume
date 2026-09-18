import About from '@/components/sections/About';
import BadgeSection from '@/components/sections/BadgeSection';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<BadgeSection />
		</>
	);
}
