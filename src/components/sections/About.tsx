import Section from "@/components/ui/Section";
import MarkdownRaw from "@/components/ui/MarkdownRaw";

const ABOUT_ME_TEXT = `
  I'm a full-stack developer passionate about building scalable, high-performance applications that seamlessly integrate frontend and backend technologies. I thrive at the intersection of software engineering and user experience, ensuring every project I work on is both functional and well-crafted.

  Currently, I'm studying Systems Engineering at [Universidad del Magdalena](https://www.unimagdalena.edu.co/) while gaining hands-on experience through freelance projects. I've developed solutions ranging from [corporate websites](https://rdingnova.com.co/) to AI-powered classification models, always prioritizing clean architecture, maintainability, and user-centric design.

  Throughout my journey, I've worked with technologies like React, Next.js, Django, and Spring Boot, crafting digital experiences that enhance business operations and user engagement. Whether it's optimizing an [AI model for mango classification](https://www.kaggle.com/datasets/adrinbd/unripe-ripe-rotten-mango) or developing an [offline-first habit-tracking app](https://auraby.netlify.app/), I'm always driven by the challenge of creating impactful solutions.

  In my spare time, I'm usually listening to <span id="song">[The Marías](https://open.spotify.com/track/3siwsiaEoU4Kuuc9WKMUy5)</span>, exercising, or exploring emerging tech to refine my coding skills and plan my next software project.
  `;

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
        {ABOUT_ME_TEXT}
      </MarkdownRaw>
    </Section>
  );
};

export default About;
