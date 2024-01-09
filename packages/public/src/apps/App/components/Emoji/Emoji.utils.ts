import { Noto_Emoji as NotoEmojiFont } from 'next/font/google';

const notoEmojiFont = NotoEmojiFont({
  subsets: ['emoji'],
  display: 'swap',
});

export const emojiStyle = notoEmojiFont.className;
