import { FunctionComponent, memo } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownProps } from "./Markdown.models";
import { getMarkdownComponentsMap } from "./Markdown.utils";

const Markdown: FunctionComponent<MarkdownProps> = memo(
  ({ children }) => (
    <ReactMarkdown components={getMarkdownComponentsMap()}>
      {children}
    </ReactMarkdown>
  )
);

export default Markdown;
