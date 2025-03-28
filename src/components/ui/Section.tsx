"use client";
import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={clsx(
        "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
