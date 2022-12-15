import { CSSProperties } from "react";

export const getMinefieldStyle = (width: number, height: number): CSSProperties => ({
  width: `calc(var(--minesweeper-tile-width) * ${width})`,
  height: `calc(var(--minesweeper-tile-height) * ${height})`,
});
