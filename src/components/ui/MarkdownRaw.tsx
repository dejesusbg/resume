import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  children: string;
  classNames?: any;
}

const MarkdownRaw = ({ children, classNames }: MarkdownProps) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ node, ...props }) => <p className={classNames?.p} {...props} />,
        a: ({ node, ...props }) => (
          <a
            className={classNames?.a}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
      }}
    >
      {children}
    </Markdown>
  );
};

export default MarkdownRaw;
