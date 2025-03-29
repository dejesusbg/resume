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
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 bg-ebony/75">
        <h3 className="text-sm font-bold uppercase tracking-widest text-frost lg:sr-only">
          {id}
        </h3>
      </div>
      {children}
    </section>
  );
};

export default Section;
