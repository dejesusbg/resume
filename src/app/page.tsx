import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <p className="mb-4">
        I’m a full-stack developer passionate about building scalable,
        high-performance applications that seamlessly integrate frontend and
        backend technologies. I thrive at the intersection of software
        engineering and user experience, ensuring every project I work on is
        both functional and well-crafted.
      </p>
      <p className="mb-4">
        Currently, I’m studying Systems Engineering at Universidad del Magdalena
        while gaining hands-on experience through freelance projects. I’ve
        developed solutions ranging from corporate websites to AI-powered
        classification models, always prioritizing clean architecture,
        maintainability, and user-centric design.
      </p>
      <p className="mb-4">
        Throughout my journey, I’ve worked with technologies like React,
        Next.js, Django, and Spring Boot, crafting digital experiences that
        enhance business operations and user engagement. Whether it's optimizing
        an AI model for mango classification or developing an offline-first
        habit-tracking app, I’m always driven by the challenge of creating
        impactful solutions.
      </p>
      <p className="mb-4">
        In my spare time, I’m usually listening to The Marías, exercising, or
        exploring emerging tech to refine my coding skills and plan my next
        software project.
      </p>
    </div>
  );
}
