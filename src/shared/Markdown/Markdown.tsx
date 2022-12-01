import { FunctionComponent, memo } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownProps } from "./Markdown.models";
import { getMarkdownComponentsMap, sup } from "./Markdown.utils";

const Markdown: FunctionComponent<MarkdownProps> = memo(
  ({ children }) => (
    <ReactMarkdown components={getMarkdownComponentsMap()} remarkPlugins={[sup]}>
      {children}
    </ReactMarkdown>
  )
);

export default Markdown;
