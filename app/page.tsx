import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Featured from '@/components/sections/Featured';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Featured />
			<Footer />
		</>
	);
}
