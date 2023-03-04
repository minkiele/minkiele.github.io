import { comparator } from 'ramda';
import { CSSProperties } from 'react';
import { SnakeGameCoords } from './Snake.lib';

const sorter = comparator<SnakeGameCoords>((a, b) => a.y < b.y || a.x < b.x);

export const getSortedSnake = (snake: Array<SnakeGameCoords>) => snake.sort(sorter);

export const getCellStyle = ({ x, y }: SnakeGameCoords): CSSProperties => ({
  top: `calc((var(--snake-game-cell-height) + var(--snake-game-gutter)) * ${y} + var(--snake-game-spacing))`,
  left: `calc((var(--snake-game-cell-width) + var(--snake-game-gutter)) * ${x} + var(--snake-game-spacing))`,
});
