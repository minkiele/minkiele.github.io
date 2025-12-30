import { HTMLAttributes } from 'react';

type SpanHTMLAttributes = HTMLAttributes<HTMLSpanElement>;

export type EmojiProps =
  | Omit<SpanHTMLAttributes, 'children' | 'dangerouslySetInnerHTML'> &
      Required<Pick<SpanHTMLAttributes, 'children'>>;
