import MarkdownRaw from "@/components/ui/MarkdownRaw";

const FOOTER_CREDITS = `
Inspired by [Brittany Chiang](https://v4.brittanychiang.com/) and coded in [VS Code](https://code.visualstudio.com/) by yours truly. Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), deployed with [Netlify](https://www.netlify.com/). All text is set in the [Inter](https://rsms.me/inter/) typeface.
`;

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-cloud sm:pb-0 ">
      <MarkdownRaw
        classNames={{ a: "font-medium text-frost hocus:text-lovie" }}
      >
        {FOOTER_CREDITS}
      </MarkdownRaw>
    </footer>
  );
};

export default Footer;
