import Section from "@/components/ui/Section";
import MarkdownRaw from "@/components/ui/MarkdownRaw";
import { bio } from "@/data/About";

const About = () => {
  return (
    <Section id="about">
      <MarkdownRaw
        classNames={{ p: "mb-4", a: "font-medium text-frost hocus:text-lovie" }}
      >
        {bio}
      </MarkdownRaw>
    </Section>
  );
};

export default About;
