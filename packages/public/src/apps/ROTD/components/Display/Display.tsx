'use client';

import { DiscographyEntry, useRotd } from './Display.utils';
import Image from 'next/image';
import styles from './Display.module.scss';

interface DisplayProps {
  discography: Array<DiscographyEntry>;
}

export default function Display({ discography }: DisplayProps) {
  const rotd = useRotd(discography);

  return (
    <>
      {rotd == null ? (
        'Loading...'
      ) : (
        <>
          <h2>
            {rotd.artist} - {rotd.title}
            {rotd.year > 0 && <> ({rotd.year})</>}
          </h2>
          <Image
            src={rotd.thumb}
            alt="Album cover art"
            width={250}
            height={250}
            className={styles.cover}
          />
          <p>Available on {rotd.medium}</p>
        </>
      )}
    </>
  );
}
