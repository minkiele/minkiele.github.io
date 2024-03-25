'use client';

import { FormEventHandler, useEffect, useState } from 'react';
import { PieceEdges, getGrid } from './components/Piece/Piece.utils';
import styles from './Puzzle.module.scss';
import PuzzleMd from './README.md';
import Board from './components/Board/Board';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

export default function Puzzle() {
  const [{width, height}, setSize] = useState({width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT});
  const [grid, setGrid] = useState<Array<Array<PieceEdges>>>();

  useEffect(() => {
    setGrid(getGrid(DEFAULT_WIDTH, DEFAULT_HEIGHT));
  }, []);

  const handleCustomParams: FormEventHandler = (evt) => {
    evt.preventDefault();
    const newWidth = parseInt((evt.target as HTMLFormElement).width.value, 10);
    const newHeight = parseInt((evt.target as HTMLFormElement).height.value, 10);
    setSize({width: newWidth, height: newHeight});
    setGrid(getGrid(newWidth, newHeight));
  };

  return (
    <div>
      <PuzzleMd />
      <div>{grid && <Board grid={grid} className={styles.board} />}</div>
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
            />{' '}
            <label htmlFor="height">Height</label>{' '}
            <input
              id="height"
              name="height"
              type="number"
              defaultValue={DEFAULT_HEIGHT}
              min={2}
            />{' '}
            <button type="submit">Update</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}
