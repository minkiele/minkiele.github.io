import { CSSProperties } from "react";
import { MinefieldTile } from "./Minesweeper.lib";

export const getMinefieldStyle = (
  width: number,
  height: number
): CSSProperties => ({
  width: `calc(var(--minesweeper-tile-width) * ${width})`,
  height: `calc(var(--minesweeper-tile-height) * ${height})`,
});

export const isCoastingTile = (tile: MinefieldTile): boolean =>
  tile.isSteppedOn === true &&
  tile.isMine === false &&
  tile.isFlag === false &&
  tile.surroundingMines > 0;

export const isEmptyTile = (tile: MinefieldTile): boolean =>
tile.isSteppedOn === true &&
tile.isMine === false &&
tile.isFlag === false &&
tile.surroundingMines === 0;
