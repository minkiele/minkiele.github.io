import { createElement, Fragment } from "react";
import { TransformOptions } from "react-markdown/lib/react-markdown";

export const getMarkdownComponentsMap = (): NonNullable<TransformOptions['components']> => ({
  h1: () => createElement(Fragment),
});
