import { createElement } from 'react';
import { emojiStyle } from './Emoji.utils';
import styles from './Emoji.module.scss';
import { EmojiProps } from './Emoji.models';
import classNames from 'classnames';

export default function Emoji({ children, className, ...props }: EmojiProps) {
  return createElement(
    'span',
    { ...props, className: classNames(emojiStyle, styles.emoji, className) },
    children
  );
}
