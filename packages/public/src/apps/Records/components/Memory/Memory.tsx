'use client';

import { MemoryProps } from './Memory.models';
import {
  DEFAULT_TRIES,
  DEFAULT_WAIT,
  DEFAUlT_SIZE,
  G,
  P,
  W,
  useMemory,
} from './Memory.utils';
import styles from '../../Records.module.scss';
import Image from 'next/image';
import Emoji from '@/apps/App/components/Emoji/Emoji';
import { FormEventHandler } from 'react';
import FlipCard from '../FlipCard/FlipCard';

export default function Memory({ deck }: MemoryProps) {
  const { status, left, cards, matched, flip, isFlipped, flipped, reset } =
    useMemory(deck);
  const handleReset = (...args: Parameters<typeof reset>) => () => {
    reset(...args);
  };
  const handleCustomOptions: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const target = evt.target as HTMLFormElement;
    const parsedTries = Math.abs(parseInt(target.tries.value));
    const parsedSize = Math.abs(parseInt(target.size.value));
    const parsedWait = Math.abs(parseInt(target.wait.value));
    const customTries = target.infiniteTries.checked
      ? Infinity
      : isNaN(parsedTries)
      ? DEFAULT_TRIES
      : parsedTries;
    const customSize = isNaN(parsedSize)
      ? DEFAUlT_SIZE
      : parsedSize % 2 === 0
      ? parsedSize
      : parsedSize + 1;
    const customWait = isNaN(parsedWait) ? DEFAULT_WAIT : parsedWait;
    reset({
      left: customTries,
      size: customSize,
      wait: customWait,
    });
  };
  return (
    <div>
      <ol className={styles.list}>
        {cards.map((release, index) => {
          const isCardFlipped = isFlipped(index);
          const isCardMatched = status === G || matched.includes(release.id);
          const handleFlip = (index: number) => () => {
            flip(index);
          };
          return (
            <li key={`${release.id}-${index}`} className={styles.list_item}>
              <FlipCard isFlipped={isCardFlipped} className={styles.imageWrapper}>
                {({ isFront }) =>
                  isFront ? (
                    <Image
                      src={release.thumb}
                      alt="Cover image"
                      fill
                      className={styles.image}
                      priority={index < 4}
                    />
                  ) : (
                    <button
                      type="button"
                      className={styles.cover}
                      onClick={handleFlip(index)}
                    >
                      <Emoji>😅</Emoji>
                    </button>
                  )
                }
              </FlipCard>
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
          <button type="button" onClick={handleReset()}>
            New game
          </button>{' '}
          <button type="button" onClick={handleReset({
            size: 16,
            left: 5
          })}>
            New game slightly bigger
          </button>{' '}
          <button type="button" onClick={handleReset({
            size: 24,
            left: 8
          })}>
            New game double
          </button>
          <form onSubmit={handleCustomOptions}>
            <label htmlFor="tries">Tries</label>{' '}
            <input
              id="tries"
              name="tries"
              type="number"
              defaultValue={DEFAULT_TRIES}
              min={1}
            />{' '}
            <input
              id="infiniteTries"
              name="infiniteTries"
              type="checkbox"
              value="infiniteTries"
            />{' '}
            <label htmlFor="infiniteTries">Infinite tries</label>{' '}
            <label htmlFor="size">Size</label>{' '}
            <input
              id="size"
              name="size"
              type="number"
              defaultValue={DEFAUlT_SIZE}
              min={4}
              max={deck.length}
              step={2}
            />{' '}
            <label htmlFor="wait">Waiting time before</label>{' '}
            <input
              id="wait"
              name="wait"
              type="number"
              defaultValue={DEFAULT_WAIT}
              min={0}
            />{' '}
            <button type="submit">New game with custom options</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
