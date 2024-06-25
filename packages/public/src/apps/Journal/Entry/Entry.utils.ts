import { HTMLAttributes, createElement } from 'react';
import type { MDXComponents } from 'mdx/types';

export const headingsMap: MDXComponents = Array.from({
  length: 6,
}).reduce<MDXComponents>(
  (acc, _, index) => ({
    ...acc,
    [`h${index + 1}`]: (props: HTMLAttributes<HTMLHeadingElement>) =>
      createElement(index < 5 ? `h${index + 2}` : 'p', { ...props }),
  }),
  {}
);
