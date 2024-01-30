'use client';

import { MemoryProps } from './Memory.models';
import { G, P, W, useMemory } from './Memory.utils';
import styles from '../../Records.module.scss';
import Image from 'next/image';
import Emoji from '@/apps/App/components/Emoji/Emoji';

export default function Memory({ source }: MemoryProps) {
  const { status, left, cards, matched, flip, isFlipped, reset } =
    useMemory(source);
  const handleReset = () => {
    reset();
  };
  return (
    <div>
      <ol className={styles.list}>
        {cards.map((release, index) => {
          const isCardFlipped = isFlipped(index);
          const isCardMatched = matched.includes(release.id);
          const handleFlip = (index: number) => () => {
            flip(index);
          };
          return (
            <li key={`${release.id}-${index}`} className={styles.list_item}>
              <span className={styles.imageWrapper}>
                {isCardFlipped ? (
                  <Image
                    src={release.thumb}
                    alt="Cover image"
                    fill
                    className={styles.image}
                    priority={index < 4}
                  />
                ) : (
                  <span className={styles.cover} onClick={handleFlip(index)}>
                    <Emoji>😅</Emoji>
                  </span>
                )}
              </span>
              {isCardMatched && (
                <span>
                  <strong>{release.artist}</strong>: {release.title} (
                  {release.medium})
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {status === P && <p>You have {left} tries left.</p>}
      {status === G && <p>Sorry, game over.</p>}
      {status === W && <p>You won!</p>}
      <div>
        <fieldset>
          <legend>Commands</legend>
          <button type="button" onClick={handleReset}>
            New game
          </button>
        </fieldset>
      </div>
    </div>
  );
}
