'use client';

import { FormEventHandler, useEffect, useState } from 'react';
import {
  PieceEdges,
  getGrid,
  mutateGrid,
} from './components/Piece/Piece.utils';
import styles from './Puzzle.module.scss';
export { default as ReadmeMd } from './README.md';
import Board from './components/Board/Board';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

const parseIntSafe = (value: string, defaultValue = 0): number => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

const timedCallback = (timeout: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });

export default function Puzzle() {
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
    setGrid(getGrid(newWidth, newHeight));
  };

  const handlePieceClick = (row: number, col: number) => {
    if (grid != null) {
      mutateGrid({ row, col }, [...grid], async (grid) => {
        await timedCallback(50);
        setGrid([...grid]);
      });
    }
  };

  return (
    <>
      <div>
        {grid && (
          <Board
            grid={grid}
            className={styles.board}
            onPieceClick={handlePieceClick}
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
            <button type="submit">Update</button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
