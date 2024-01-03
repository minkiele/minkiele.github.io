import { Noto_Emoji as NotoEmojiFont } from 'next/font/google';

const notoEmojiFont = NotoEmojiFont({
  subsets: ['emoji'],
  display: 'swap',
});

export const getEmojiStyles = <T extends string>(
  classNames: Array<T>,
  styles: Readonly<Record<string, string>>
) =>
  classNames.reduce(
    (acc, className) => ({
      ...acc,
      [className]: `${styles[className]} ${notoEmojiFont.className}`,
    }),
    {}
  ) as Record<T, string>;
