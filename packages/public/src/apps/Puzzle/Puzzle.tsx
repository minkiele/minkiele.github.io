'use client';

import { FormEventHandler, useEffect, useState } from 'react';
import { PieceEdges, getGrid } from './components/Piece/Piece.utils';
import styles from './Puzzle.module.scss';
import PuzzleMd from './README.md';
import Board from './components/Board/Board';
import classNames from 'classnames';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

const parseIntSafe = (value: string, defaultValue = 0): number => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

export default function Puzzle() {
  const [checkered, setCheckered] = useState<boolean>(false);
  const [grid, setGrid] = useState<Array<Array<PieceEdges>>>();

  useEffect(() => {
    setGrid(getGrid(DEFAULT_WIDTH, DEFAULT_HEIGHT));
  }, []);

  const handleCustomParams: FormEventHandler = (evt) => {
    evt.preventDefault();
    const newWidth = parseIntSafe((evt.target as HTMLFormElement).width.value);
    const newHeight = parseIntSafe(
      (evt.target as HTMLFormElement).height.value
    );
    const newCheckered =
      (evt.target as HTMLFormElement).checkered.checked ?? false;
    setGrid(getGrid(newWidth, newHeight));
    setCheckered(newCheckered);
  };

  return (
    <div>
      <PuzzleMd />
      <div>
        {grid && (
          <Board
            grid={grid}
            className={classNames(styles.board, {
              [styles.board__checkered]: checkered,
            })}
          />
        )}
      </div>
      <div>
        <fieldset>
          <legend>Parameters</legend>
          <form onSubmit={handleCustomParams}>
            <label htmlFor="width">Width</label>{' '}
            <input
              id="width"
              name="width"
              type="number"
              defaultValue={DEFAULT_WIDTH}
              min={2}
              required
            />{' '}
            <label htmlFor="height">Height</label>{' '}
            <input
              id="height"
              name="height"
              type="number"
              defaultValue={DEFAULT_HEIGHT}
              min={2}
              required
            />{' '}
            <input
              id="checkered"
              name="checkered"
              type="checkbox"
              value="checkered"
            />{' '}
            <label htmlFor="checkered">Checkered</label>{' '}
            <button type="submit">Update</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
