import Section from "@/components/ui/Section";
import MarkdownRaw from "@/components/ui/MarkdownRaw";
import { bio } from "@/data/About";

const About = () => {
  return (
    <Section id="about">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h3 className="text-sm font-bold uppercase tracking-widest text-frost lg:sr-only">
          About
        </h3>
      </div>
      <MarkdownRaw
        classNames={{ p: "mb-4", a: "font-medium text-frost hocus:text-lovie" }}
      >
        {bio}
      </MarkdownRaw>
    </Section>
  );
};

export default About;
