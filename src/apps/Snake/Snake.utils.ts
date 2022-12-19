import { comparator } from "ramda";
import { CSSProperties } from "react";
import { SnakeGameCoords } from "./Snake.lib";

const sorter = comparator<SnakeGameCoords>((a, b) => a.y < b.y || a.x < b.x);

export const getSortedSnake = (snake: Array<SnakeGameCoords>) =>
  snake.sort(sorter);

export const getTileStyle = ({ x, y }: SnakeGameCoords): CSSProperties => ({
  transform: `translate(calc((var(--snake-game-cell-width) + var(--snake-game-gutter)) * ${x} + var(--snake-game-spacing)), calc((var(--snake-game-cell-height) + var(--snake-game-gutter)) * ${y} + var(--snake-game-spacing))`,
});
