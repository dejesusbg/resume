"use client"
import MarkdownRaw from "@/components/ui/MarkdownRaw";
import { credits } from "@/data/Footer";

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-cloud sm:pb-0 ">
      <MarkdownRaw
        classNames={{ a: "font-medium text-frost hocus:text-lovie" }}
      >
        {credits}
      </MarkdownRaw>
    </footer>
  );
};

export default Footer;
