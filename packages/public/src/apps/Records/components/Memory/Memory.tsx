'use client';

import { MemoryProps } from './Memory.models';
import {
  DEFAULT_TRIES,
  DEFAULT_WAIT,
  DEFAULT_SIZE,
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
import classNames from 'classnames';
import Toggler from '../Toggler/Toggler';
import { T } from 'ramda';

export default function Memory({ deck }: MemoryProps) {
  const { status, left, cards, matched, flip, isFlipped, reset } =
    useMemory(deck);
  const handleReset =
    (...args: Parameters<typeof reset>) =>
    () => {
      reset(...args);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
      ? undefined
      : parsedTries;
    const customSize = isNaN(parsedSize)
      ? undefined
      : Math.max(4, parsedSize - (parsedSize % 4));
    const customWait = isNaN(parsedWait) ? undefined : parsedWait;
    const customRedeem = target.redeem.checked;
    reset({
      left: customTries,
      size: customSize,
      wait: customWait,
      redeem: customRedeem,
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
              <FlipCard
                isFlipped={isCardFlipped}
                className={styles.imageWrapper}
              >
                {({ isBack }) => (
                  <>
                    {/* I always render the image so I can use the prefetch
                  and I show it when the card is flipped */}
                    <Image
                      src={release.thumb}
                      alt="Cover image"
                      fill
                      className={classNames(styles.image, {
                        [styles.image__hidden]: isBack,
                      })}
                      priority={index < DEFAULT_SIZE}
                    />
                    {isBack && (
                      <button
                        type="button"
                        className={styles.cover}
                        onClick={handleFlip(index)}
                      >
                        <Emoji>😅</Emoji>
                      </button>
                    )}
                  </>
                )}
              </FlipCard>
              {isCardMatched && (
                <Toggler
                  show={status === W || status === G ? true : undefined}
                  onToggle={status === W || status === G ? T : undefined}
                >
                  <span className={styles.recordDescription}>
                  <strong>{release.artist}</strong>: {release.title} (
                  {release.medium})
                  </span>
                </Toggler>
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
          <button
            type="button"
            onClick={handleReset({
              size: 16,
              left: 5,
            })}
          >
            New game slightly bigger
          </button>{' '}
          <button
            type="button"
            onClick={handleReset({
              size: 24,
              left: 8,
            })}
          >
            New game double
          </button>{' '}
          <button
            type="button"
            onClick={handleReset({
              size: 2 * deck.length,
              left: Infinity,
              wait: 750
            })}
          >
            New game Avengers
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
              defaultValue={DEFAULT_SIZE}
              min={4}
              max={2 * deck.length}
              step={4}
            />{' '}
            <label htmlFor="wait">Waiting time before</label>{' '}
            <input
              id="wait"
              name="wait"
              type="number"
              defaultValue={DEFAULT_WAIT}
              min={0}
            />{' '}
            <input id="redeem" name="redeem" type="checkbox" value="redeem" />{' '}
            <label htmlFor="redeem">Get one more try for every match</label>{' '}
            <button type="submit">New game with custom options</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
