import { useEffect, useMemo } from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface FifteenHole {
  x: number;
  y: number;
}

interface FifteenScramble {
  step: number;
  total: number;
  speed: number;
}

interface FifteenState {
  tiles: Array<Array<number | null>>;
  hole: FifteenHole;
  lastMove: FifteenHole | null;
  isValid: boolean;
  isPlaying: boolean;
  scrdata: FifteenScramble;
}

interface FifteenActions {
  reset: () => void;
  move: (to: FifteenHole) => void;
  scramble: (steps: number, speed?: number) => void;
  stop: () => void;
}

export const DEFAULT_SPEED = 200;
export const DEFAULT_SCRAMBLE = 15;

const initialState: FifteenState = {
  tiles: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, null],
  ],
  hole: { x: 3, y: 3 },
  lastMove: null,
  isPlaying: false,
  isValid: true,
  scrdata: {
    step: -1,
    total: 0,
    speed: DEFAULT_SPEED,
  },
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

const isScramblingStep = (step: number, total: number) =>
  step >= 0 && step < total;

const useStore = create<FifteenState & FifteenActions>()(
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
          state.lastMove = state.hole;
          state.hole = to;
          state.isValid = isValidTiles(state.tiles);
          if (isScramblingStep(state.scrdata.step, state.scrdata.total)) {
            state.scrdata.step += 1;
          }
        }
      });
    },
    scramble: (steps: number, speed = DEFAULT_SPEED) => {
      set((state) => {
        if (state.scrdata.step < 0) {
          state.scrdata.step = 0;
          state.scrdata.total = steps;
          state.scrdata.speed = speed;
        }
      });
    },
    stop: () => {
      set((state) => {
        state.scrdata.step = -1;
      });
    },
  }))
);

const equals = (
  { x: x1, y: y1 }: FifteenHole,
  { x: x2, y: y2 }: FifteenHole
): boolean => x1 === x2 && y1 === y2;

export const useFifteen = () => {
  const {
    move,
    scrdata: { step: scrStep, total: scrTotal, speed: scrSpeed },
    lastMove,
    hole,
    stop,
    ...store
  } = useStore();
  useEffect(() => {
    if (isScramblingStep(scrStep, scrTotal)) {
      while (true) {
        const candidate = getRandomMove(hole);
        if (lastMove == null || !equals(candidate, lastMove)) {
          const timerId = setTimeout(() => {
            move(candidate);
          }, scrSpeed);
          return () => {
            clearTimeout(timerId);
          };
        }
      }
    } else {
      stop();
    }
  }, [scrStep, scrTotal, hole, lastMove, move, scrSpeed, stop]);

  return useMemo(
    () => ({
      ...store,
      isScrambling: isScramblingStep(scrStep, scrTotal),
      lastMove,
      move,
    }),
    [move, scrStep, scrTotal, store, lastMove]
  );
};
