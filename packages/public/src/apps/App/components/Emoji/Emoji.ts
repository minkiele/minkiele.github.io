import { ReactNode, createElement } from 'react';
import { emojiStyle } from './Emoji.utils';
import styles from './Emoji.module.scss';

export default function Emoji({ children }: { children: ReactNode }) {
  return createElement(
    'span',
    { className: `${emojiStyle} ${styles.emoji}` },
    children
  );
}
