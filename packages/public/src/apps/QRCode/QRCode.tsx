'use client';

import { ChangeEventHandler, useEffect, useState } from 'react';
import styles from './QRCode.module.scss';
import dynamic from 'next/dynamic';
import { useWatchTheme } from '@/hooks/useTheme';

export { default as ReadmeMd } from './README.md';

const QRImage = dynamic(() => import('@/lib/QRImage/QRImage'));

export default function QRCode() {
  const [content, setContent] = useState('');

  const theme = useWatchTheme();

  useEffect(() => {
    setContent(window.location.href);
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setContent(evt.target.value);
  };

  return (
    <>
      <div className={styles.qrcontainer}>
        <QRImage
          src={content}
          alt={`QR code representation of ${content}`}
          width="256"
          height="256"
          className={styles.qr}
          theme={theme}
        />
      </div>
      <fieldset>
        <legend>Controls</legend>
        <label htmlFor="qrcontent">Content</label>{' '}
        <input
          type="text"
          id="qrcontent"
          onChange={handleChange}
          value={content}
        />
      </fieldset>
    </>
  );
}
