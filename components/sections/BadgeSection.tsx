import Badge3D from '@/components/ui/Badge3D';
import Motion from '@/components/ui/Motion';
import Section from '@/components/ui/Section';

const BadgeSection = () => (
	<Section id="badge" className="lg:hidden">
		<Motion className="items-center justify-center my-auto">
			<Badge3D className="w-full max-w-sm mx-auto aspect-[2/3]" />
		</Motion>
	</Section>
);

export default BadgeSection;
