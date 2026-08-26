import { ComponentProps, ImgHTMLAttributes, useEffect, useState } from 'react';
import QRCodeLib from 'qrcode';

import styles from './QRImage.module.scss';
import Image from 'next/image';
import { UseThemeType } from '@/hooks/useTheme';

interface QRImageProps extends Omit<ComponentProps<typeof Image>, 'src'> {
  src?: string;
  theme?: UseThemeType;
}

export default function QRImage({
  src: content,
  alt,
  theme,
  ...props
}: QRImageProps) {
  const [encoded, setEncoded] = useState<string | undefined>(content);

  useEffect(() => {
    if (content != null && content.length > 0) {
      QRCodeLib.toDataURL(content, {
        color:
          theme === 'dark'
            ? {
                dark: styles.darkFg,
                light: styles.darkBg,
              }
            : {
                dark: styles.lightFg,
                light: styles.lightBg,
              },
      }).then(setEncoded);
    } else {
      setEncoded(undefined);
    }
  }, [content, theme]);

  // alt attribute spread to avoid eslint warnings
  return encoded ? <Image {...props} alt={alt} src={encoded} /> : null;
}
