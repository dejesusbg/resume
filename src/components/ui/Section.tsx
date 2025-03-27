"use client";
import React from "react";

const Section = ({
  children,
  id,
}: Readonly<{ children: React.ReactNode; id?: string }>) => {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {children}
    </section>
  );
};

export default Section;
