'use client';

import { useEffect, useState } from 'react';
import Piece from './components/Piece/Piece';
import { PieceEdges, getGrid } from './components/Piece/Piece.utils';
import styles from './Puzzle.module.scss';
import PuzzleMd from './README.md';

export default function Puzzle() {
  const [grid, setGrid] = useState<Array<Array<PieceEdges>>>();

  useEffect(() => {
    setGrid(getGrid(10, 10));
  }, []);

  return (
    <div>
      <PuzzleMd />
      <div
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${10}, 1fr)`,
          width: `calc(${10} * 100px)`,
        }}
      >
        {grid?.map((col, index) =>
          col.map((edges, jndex) => (
            <Piece
              key={`${index}-${jndex}`}
              {...edges}
              className={styles.piece}
            />
          ))
        )}
      </div>
    </div>
  );
}
