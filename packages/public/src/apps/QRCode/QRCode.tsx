'use client';

import { ChangeEventHandler, useEffect, useState } from 'react';
import QRCodeLib from 'qrcode';
import Image from 'next/image';
import { isNullOrEmpty } from '@/lib/utils';
import styles from './QRCode.module.scss';

export { default as ReadmeMd } from './README.md';

export default function QRCode() {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(window.location.href);
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setContent(evt.target.value);
  };

  const [encoded, setEncoded] = useState<string>();

  useEffect(() => {
    if (!isNullOrEmpty(content)) {
      QRCodeLib.toDataURL(content, {
        color: {
          dark: styles.dark,
          light: styles.light,
        },
      }).then(setEncoded);
    }
  }, [content]);

  return (
    <>
      <div className={styles.qrcontainer}>
        {encoded ? (
          <Image
            src={encoded}
            alt="QRCode"
            width="256"
            height="256"
            className={styles.qr}
          />
        ) : undefined}
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
