'use client';

import {
  FormEventHandler,
  FunctionComponent,
  MouseEventHandler,
  useEffect,
} from 'react';
import { DEFAULT_SCRAMBLE, DEFAULT_SPEED, useFifteen } from './Fifteen.lib';
import styles from './Fifteen.module.scss';
import FifteenMD from './README.md';
import { constrainInput, parseInputValue } from './Fifteen.utils';

const Fifteen: FunctionComponent = () => {
  const { move, reset, scramble, isPlaying, isValid, isScrambling, tiles } =
    useFifteen();
  const handleClickFactory =
    (x: number, y: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (!isScrambling) {
        move({ x, y });
      }
    };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (!isScrambling) {
      const moves = constrainInput(
        parseInputValue('moves', evt),
        DEFAULT_SCRAMBLE,
        (input) => input >= 0
      );
      const speed = constrainInput(
        parseInputValue('speed', evt),
        DEFAULT_SPEED,
        (input) => input >= 0
      );
      scramble(moves, speed);
    }
  };
  useEffect(() => {
    scramble(DEFAULT_SCRAMBLE);
  }, [scramble]);
  return (
    <div>
      <FifteenMD />
      <div className={styles.tiles}>
        {tiles.map((row, y) => (
          <div className={styles.tiles_row} key={`row-${y}`}>
            {row.map((tile, x) =>
              tile == null ? (
                <span key={`col-${x}`} className={styles.tiles_hole}>
                  &nbsp;
                </span>
              ) : (
                <button
                  className={styles.tiles_tile}
                  key={`col-${x}`}
                  onClick={handleClickFactory(x, y)}
                >
                  {tile}
                </button>
              )
            )}
          </div>
        ))}
      </div>
      {isPlaying && isValid && <p>You won!</p>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Controls</legend>
          <label htmlFor="moves">Moves</label>{' '}
          <input
            type="number"
            name="moves"
            id="moves"
            defaultValue={DEFAULT_SCRAMBLE}
            disabled={isScrambling}
          />{' '}
          <label htmlFor="moves">Speed</label>{' '}
          <input
            type="number"
            name="speed"
            id="speed"
            defaultValue={DEFAULT_SPEED}
            disabled={isScrambling}
          />{' '}
          <button type="submit" disabled={isScrambling}>
            Scramble
          </button>
          <br />
          <button type="button" onClick={reset} disabled={isScrambling}>
            Reset
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Fifteen;
