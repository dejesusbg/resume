"use client";
import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import { description, playlist } from "@/data/Gallery";
import MarkdownRaw from "../ui/MarkdownRaw";

const Gallery = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="gallery">
      <MarkdownRaw classNames={{ p: "mb-8" }}>{description}</MarkdownRaw>
      {loaded && (
        <iframe
          className="rounded"
          src={playlist}
          width="100%"
          height="114"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </Section>
  );
};

export default Gallery;
