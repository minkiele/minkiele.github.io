import { createElement, FunctionComponent } from "react";
import InfoMd from "./README.md";

const Info: FunctionComponent = () =>
  createElement("div", undefined, createElement(InfoMd));
export default Info;
