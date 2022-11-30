import { FunctionComponent } from "react";
import Markdown from "../../shared/Markdown/Markdown";
import InfoMd from './Info.md';

const Info: FunctionComponent = () => (
  <div>
    <Markdown>{InfoMd}</Markdown>
  </div>
);

export default Info;
