'use client';

import { GuessProps } from './Guess.models';
import { useGuessGame } from './Guess.utils';
import styles from './Guess.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import Imbriagator from './components/Imbriagator/Imbriagator';

export default function Guess({ deck }: GuessProps) {
  const { current, round, rounds, newGame, nextRound, ...guessGame } =
    useGuessGame(deck);
  useEffect(() => {
    newGame();
  }, []);
  return (
    <div>
      {rounds.slice(round, round + 2).map(({ thumb }) => (
        <Image
          key={thumb}
          src={thumb}
          width={150}
          height={150}
          alt="Preloading images"
          priority
          className={styles.priority}
        />
      ))}
      {round < rounds.length && (
        <>
          <button onClick={nextRound}>Next</button>
        </>
      )}
      {current != null && (
        <div className={styles.imageWrapper}>
          <Imbriagator duration={10} imbriagate={false}>
            <Image
              className={styles.image}
              src={current.thumb}
              width={150}
              height={150}
              alt="Guess the cover"
            />
          </Imbriagator>
        </div>
      )}
    </div>
  );
}
