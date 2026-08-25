import { ComponentProps, ImgHTMLAttributes, useEffect, useState } from 'react';
import QRCodeLib from 'qrcode';

import styles from './QRImage.module.scss';
import Image from 'next/image';

interface QRImageProps extends Omit<ComponentProps<typeof Image>, 'src'> {
  src?: string;
}

export default function QRImage({ src: content, alt, ...props }: QRImageProps) {
  const [encoded, setEncoded] = useState<string | undefined>(content);

  useEffect(() => {
    if (content != null && content.length > 0) {
      QRCodeLib.toDataURL(content, {
        color: {
          dark: styles.dark,
          light: styles.light,
        },
      }).then(setEncoded);
    } else {
      setEncoded(undefined);
    }
  }, [content]);

  // alt attribute spread to avoid eslint warnings
  return encoded ? <Image {...props} alt={alt} src={encoded} /> : null;
}
