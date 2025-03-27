import React from "react";
import Markdown from "react-markdown";

const content = `
Inspired by [Brittany Chiang](https://brittanychiang.com/) and coded in [VS Code](https://code.visualstudio.com/) by yours truly. Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), deployed with [Netlify](https://www.netlify.com/). All text is set in the [Inter](https://rsms.me/inter/) typeface.
`;

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-primary-200/70 sm:pb-0 ">
      <Markdown
        components={{
          a: ({ node, ...props }) => <a className="font-bold" {...props} />,
        }}
      >
        {content}
      </Markdown>
    </footer>
  );
};

export default Footer;
