import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface FifteenHole {
  x: number;
  y: number;
}

interface FifteenState {
  tiles: Array<Array<number | null>>;
  hole: FifteenHole;
  isValid: boolean;
  isPlaying: boolean;
}

interface FifteenActions {
  reset: () => void;
  scramble: (moves: number) => void;
  move: (to: FifteenHole) => void;
}

const initialState: FifteenState = {
  tiles: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, null],
  ],
  hole: { x: 3, y: 3 },
  isPlaying: false,
  isValid: true,
};

const isValidMove = (candidate: FifteenHole, hole: FifteenHole): boolean => {
  const { x: cx, y: cy } = candidate;
  const { x: hx, y: hy } = hole;
  return (
    // Vertical (above and below)
    (hx === cx && ((hy > 0 && hy === cy + 1) || (hy < 3 && hy === cy - 1))) ||
    // Horizontal (before and after)
    (hy === cy && ((hx > 0 && hx === cx + 1) || (hx < 3 && hx === cx - 1)))
  );
};

const isValidTiles = (tiles: Array<Array<number | null>>): boolean => {
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      const tile = 4 * i + j + 1;
      if (tile < 16 && tile !== tiles[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const getRandomMove = (hole: FifteenHole): FifteenHole => {
  const { x, y } = hole;
  const moves: Array<FifteenHole> = [];
  if (y > 0) {
    moves.push({ x, y: y - 1 });
  }
  if (x < 3) {
    moves.push({ x: x + 1, y });
  }
  if (y < 3) {
    moves.push({ x, y: y + 1 });
  }
  if (x > 0) {
    moves.push({ x: x - 1, y });
  }
  return moves[Math.floor(Math.random() * moves.length)];
};

export const useStore = create<FifteenState & FifteenActions>()(
  immer((set) => ({
    ...initialState,
    reset: () => {
      set((state) => ({
        ...state,
        ...initialState,
      }));
    },
    move: (to) => {
      set((state) => {
        if (isValidMove(to, state.hole)) {
          if (!state.isPlaying) {
            state.isPlaying = true;
          }
          state.tiles[state.hole.y][state.hole.x] = state.tiles[to.y][to.x];
          state.tiles[to.y][to.x] = null;
          state.hole = to;
          state.isValid = isValidTiles(state.tiles);
        }
      });
    },
    scramble: (moves) => {
      set((state) => {
        for (let i = 0; i < moves; i += 1) {
          const to = getRandomMove(state.hole);
          state.tiles[state.hole.y][state.hole.x] = state.tiles[to.y][to.x];
          state.tiles[to.y][to.x] = null;
          state.hole = to;
        }
        state.isValid = isValidTiles(state.tiles);
      });
    },
  }))
);
