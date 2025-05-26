'use client';

import {
  DiscographyEntry,
  useRotd,
} from './Display.utils';
import Image from 'next/image';
import ROTDMD from '../../README.md';
import styles from './Display.module.scss';

interface DisplayProps {
  discography: Array<DiscographyEntry>;
}

export default function Display({ discography }: DisplayProps) {

  const rotd = useRotd(discography);

  return (
    <div>
      <ROTDMD />
      {rotd == null ? (
        'Loading...'
      ) : (
        <div>
          <h2>
            {rotd.artist} - {rotd.title}
            {rotd.year && <> ({rotd.year})</>}
          </h2>
          <Image
            src={rotd.thumb}
            alt="Album cover art"
            width={250}
            height={250}
            className={styles.cover}
          />
          <p>Available on {rotd.medium}</p>
        </div>
      )}
    </div>
  );
}
