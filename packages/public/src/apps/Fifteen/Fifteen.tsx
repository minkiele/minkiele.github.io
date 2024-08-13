'use client';

import { FormEventHandler, FunctionComponent, MouseEventHandler, useEffect } from 'react';
import { useStore } from './Fifteen.lib';
import styles from './Fifteen.module.scss';
import FifteenMD from './README.md';

const DEFAULT_SCRAMBLE = 15;

const Fifteen: FunctionComponent = () => {
  const { move, reset, scramble, isPlaying, isValid, tiles } = useStore();
  const handleClickFactory =
    (x: number, y: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      move({ x, y });
    };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const moves = parseInt((evt.target as HTMLFormElement).moves.value);
    scramble(isNaN(moves) || moves <= 0 ? DEFAULT_SCRAMBLE : moves);
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
          <button type="button" onClick={reset}>
            Reset
          </button>{' '}
          <label htmlFor="moves">Moves</label>{' '}
          <input
            type="number"
            name="moves"
            id="moves"
            defaultValue={DEFAULT_SCRAMBLE}
          />
          <button type="submit">Scramble</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Fifteen;
