'use client';

import Image from 'next/image';
import { DiscographyEntry } from '../Display/Display.utils';
import { useMemo } from 'react';
import MersenneTwister from 'mersenne-twister';
import styles from './Grid.module.scss';

interface GridProps {
  discography: Array<DiscographyEntry>;
}

export default function Grid({ discography }: GridProps) {
  const shuffled = useMemo(() => {
    const twister = new MersenneTwister();
    return discography.filter(({medium}) => medium.includes('Vinyl')).sort(() => twister.random() < 0.5 ? -1 : 1).slice(0, 48);
  }, [discography]);

  return (
    <div className={styles.grid}>
      {shuffled.map((image) => (
        <Image
          key={image.id}
          src={image.thumb}
          alt="Album cover art"
          width={200}
          height={200}
          className={styles.img}
        />
      ))}
    </div>
  );
}
