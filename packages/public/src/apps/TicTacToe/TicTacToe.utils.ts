import { comparator, repeat, times } from 'ramda';
import { useReducer } from 'react';
import {
  TicTacToePossibility,
  TicTacToeReducerAction,
  TicTacToeReducerState,
  TicTacToeVictoryCoords,
} from './TicTacToe.models';

export const TICTACTOE_SIDE = 3;

export const X = Symbol('❌');
export const O = Symbol('⭕️');

const getInitialState = (sign = X): TicTacToeReducerState => ({
  matrix: times(() => repeat(null, TICTACTOE_SIDE), TICTACTOE_SIDE),
  sign,
  victoryCoords: undefined,
  vsPc: false,
  movePc: false,
  announce: undefined,
});

const victoryTests = [
  ...times((row) => times((col) => [row, col], TICTACTOE_SIDE), TICTACTOE_SIDE),
  ...times((col) => times((row) => [row, col], TICTACTOE_SIDE), TICTACTOE_SIDE),
  times((diag) => [diag, diag], TICTACTOE_SIDE),
  times((diag) => [TICTACTOE_SIDE - diag - 1, diag], TICTACTOE_SIDE),
];

const getVictoryCoords = (
  matrix: Array<Array<null | symbol>>
): TicTacToeVictoryCoords | undefined => {
  external: for (let i = 0; i < victoryTests.length; i += 1) {
    const [[row, col]] = victoryTests[i];
    if (matrix[row][col] == null) {
      continue;
    }
    for (let j = 1; j < victoryTests[i].length; j += 1) {
      const [row0, col0] = victoryTests[i][j - 1];
      const [row1, col1] = victoryTests[i][j];
      if (matrix[row0][col0] !== matrix[row1][col1]) {
        continue external;
      }
    }
    return victoryTests[i] as TicTacToeVictoryCoords;
  }
  return undefined;
};

const getStrikeDirection = (coords: TicTacToeVictoryCoords): 0 | 1 | 2 | 3 => {
  if (TICTACTOE_SIDE < 2) {
    return 2;
  } else {
    const [[row0, col0], [row1, col1]] = coords;
    if (col0 === col1) {
      return 0;
    }
    if (row0 === row1) {
      return 2;
    }
    if (row0 === col0) {
      return 1;
    }
    return 3;
  }
};

export const getStrikeData = <T>(
  row: number,
  col: number,
  coords: TicTacToeVictoryCoords | undefined,
  classNames: Array<T>
) =>
  coords?.some(([cRow, cCol]) => cRow === row && cCol === col)
    ? classNames[getStrikeDirection(coords)]
    : undefined;

// This is used get coordinates list with interesting
// probabilities like that to win a match or to block a potential
// double chance for the player.
const getChanceCoords = (
  sign: symbol,
  matrix: Array<Array<symbol | null>>,
  testChance: (signCount: number, emptyCount: number) => boolean
): Array<Array<Array<number>>> =>
  victoryTests.filter((victoryTest) => {
    const [signCount, emptyCount] = victoryTest.reduce(
      (acc, [row, col]) => {
        if (matrix[row][col] === sign) {
          return [acc[0] + 1, acc[1]];
        } else if (matrix[row][col] == null) {
          return [acc[0], acc[1] + 1];
        }
        return acc;
      },
      [0, 0]
    );
    return testChance(signCount, emptyCount);
  });

const pickOne = <T>(input: Array<T>): T =>
  input[Math.floor(Math.random() * input.length)];

// Pick a coordinate that will win a match
const getAboutToWinCoord = (
  sign: symbol,
  matrix: Array<Array<symbol | null>>
): Array<number> | undefined => {
  const chanceCoordsList = getChanceCoords(
    sign,
    matrix,
    (signCount, emptyCount) =>
      signCount === TICTACTOE_SIDE - 1 && emptyCount === 1
  );
  if (chanceCoordsList.length > 0) {
    const chanceCoords = pickOne(chanceCoordsList);
    return chanceCoords.find(([row, col]) => matrix[row][col] == null);
  }
  return undefined;
};

const isDiagonalCell = (row: number, col: number) =>
  row === col ||
  TICTACTOE_SIDE - 1 - col === row ||
  row - TICTACTOE_SIDE - 1 === col;

// For each empty coord rank them by number of tic-tac-toes
// they would cause by marking it, then choose randomly
// a coordinate from those with maximum ranking.
// There's a fault in the logic here, but it's taken care
// in the diagonal paradox
const getPossibilityCoord = (
  sign: symbol,
  matrix: Array<Array<symbol | null>>
): TicTacToePossibility | undefined => {
  const chanceCoordsList = getChanceCoords(
    sign,
    matrix,
    (signCount, emptyCount) =>
      signCount === 1 && emptyCount === TICTACTOE_SIDE - 1
  );
  const rankings: Array<TicTacToePossibility> = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const ranking = chanceCoordsList.reduce<number>((acc, chanceCoords) => {
        if (
          chanceCoords.some(
            ([row, col]) => i == row && j === col && matrix[row][col] == null
          )
        ) {
          return acc + 1;
        }
        return acc;
      }, 0);
      // Add the candidate coordinates only if they are playable (ranking > 0)
      if (ranking > 0) {
        rankings.push({
          coords: [i, j],
          ranking,
          diagonal: isDiagonalCell(i, j),
        });
      }
    }
  }
  rankings.sort(
    comparator((a, b) => {
      if (a.ranking >= b.ranking) {
        return true;
      } else if (a.ranking === b.ranking) {
        return a.diagonal;
      }
      return false;
    })
  );

  if (rankings.length > 0) {
    const maxRatings = rankings.filter(
      ({ ranking, diagonal }) =>
        ranking === rankings[0].ranking && (!rankings[0].diagonal || diagonal)
    );
    return pickOne(maxRatings);
  }
  return undefined;
};

const getEmptyCoords = (
  matrix: Array<Array<symbol | null>>
): Array<[number, number]> =>
  matrix.reduce<Array<[number, number]>>(
    (rowAcc, row, rowIndex) => [
      ...rowAcc,
      ...row.reduce<Array<[number, number]>>((colAcc, col, colIndex) => {
        if (col == null) {
          return [...colAcc, [rowIndex, colIndex]];
        }
        return colAcc;
      }, []),
    ],
    []
  );

const pickRandomEmptyFromList = (
  list: Array<[number, number]>,
  matrix: Array<Array<symbol | null>>
): [number, number] | undefined =>
  [...list]
    .sort(comparator(() => Math.random() < 0.5))
    .find(([row, col]) => matrix[row][col] == null);

const inDiagonalParadox = (matrix: Array<Array<symbol | null>>) => {
  const count = matrix.reduce(
    (acc, row) =>
      acc +
      row.reduce((acc, col) => {
        if (col != null) {
          return acc + 1;
        }
        return acc;
      }, 0),
    0
  );
  if (count === TICTACTOE_SIDE) {
    return (
      matrix[1][1] === O &&
      ((matrix[0][0] != null &&
        matrix[0][0] === matrix[TICTACTOE_SIDE - 1][TICTACTOE_SIDE - 1]) ||
        (matrix[TICTACTOE_SIDE - 1][0] != null &&
          matrix[TICTACTOE_SIDE - 1][0] === matrix[0][TICTACTOE_SIDE - 1]))
    );
  }
  return false;
};

export const pickEmptyCoordinate = (
  matrix: Array<Array<symbol | null>>
): [number, number] | undefined => {
  const emptyCoords = getEmptyCoords(matrix);

  // First move, why not have funm pick one random item
  // And give the players the illusion they can beat me.
  if (emptyCoords.length === TICTACTOE_SIDE ** 2) {
    return pickOne(emptyCoords);
  }

  // Stop having fun and assess the situation seriously.

  // First: find if I am about to win
  const aboutToWinCoords = getAboutToWinCoord(O, matrix);
  if (aboutToWinCoords) {
    // I win.
    return aboutToWinCoords as [number, number];
  }
  // Find if I am about to lose
  const aboutToLoseCoords = getAboutToWinCoord(X, matrix);
  if (aboutToLoseCoords != null) {
    // I don't lose.
    return aboutToLoseCoords as [number, number];
  }

  // Following strategies apply only if Tic Tac Toe is 3x3
  // In any other case play random.
  if (TICTACTOE_SIDE === 3) {
    // If center cell is free I occupy it
    if (emptyCoords.find(([row, col]) => row === 1 && col === 1)) {
      return [1, 1];
    }
    // Diagonal paradox is a move where normally I would
    // wrongly choose a diagonal to defend myself and giving
    // an automatic win to the opponent. In this case I force myself
    // to play a cross-move to force the player into a draw.
    if (inDiagonalParadox(matrix)) {
      return pickRandomEmptyFromList(
        [
          [0, 1],
          [1, 0],
          [1, 2],
          [2, 1],
        ],
        matrix
      ) as [number, number];
    }
    const possibilityCoord = getPossibilityCoord(O, matrix);
    const opponentPossibility = getPossibilityCoord(X, matrix);
    // If I have both attack and defense moves
    // and the defense is better then use it
    if (
      possibilityCoord != null &&
      opponentPossibility != null &&
      opponentPossibility.ranking > possibilityCoord.ranking
    ) {
      return opponentPossibility.coords;
    }
    // Try to win
    if (possibilityCoord != null) {
      return possibilityCoord.coords;
    }
    // Defend
    if (opponentPossibility != null) {
      return opponentPossibility.coords;
    }
  }
  // Don't know what to do, pick a coordinate randomly.
  if (emptyCoords.length > 0) {
    return pickOne(emptyCoords);
  }
  return undefined;
};

const getOrdinalLabel = (
  n: number,
  firstLabel: string,
  centerLabel: string,
  lastLabel: string
): string => {
  if (n === 0) {
    return firstLabel;
  }
  if (n === TICTACTOE_SIDE - 1) {
    return lastLabel;
  }
  if (n === (TICTACTOE_SIDE - 1) / 2) {
    return centerLabel;
  }
  const nmod = (n + 1) % 10;
  const st = nmod === 1;
  const nd = nmod === 2;
  const rd = nmod === 3;
  return `${n + 1}${
    nmod < 1 || nmod > 3 || (n > 9 && n < 13)
      ? 'th'
      : nmod === 1
      ? 'st'
      : nmod === 2
      ? 'nd'
      : 'rd'
  }`;
};


export const getAriaLabel = (rowIndex: number, colIndex: number): string => {
  const rowLabel = getOrdinalLabel(
    rowIndex,
    'top',
    'center',
    'bottom'
  );
  const colLabel = getOrdinalLabel(
    colIndex,
    'left',
    'center',
    'right'
  );
  return rowLabel === 'center' && rowLabel === colLabel ? 'central' : `${rowLabel}-${colLabel}`;
};

export const useTicTacToe = () =>
  useReducer((state: TicTacToeReducerState, action: TicTacToeReducerAction) => {
    switch (action.type) {
      case 'mark': {
        if (
          state.matrix[action.row][action.col] == null &&
          state.victoryCoords == null
        ) {
          const updatedMatrix = [
            ...state.matrix.slice(0, action.row),
            [
              ...state.matrix[action.row].slice(0, action.col),
              state.sign,
              ...state.matrix[action.row].slice(action.col + 1),
            ],
            ...state.matrix.slice(action.row + 1),
          ];
          const victoryCoords = getVictoryCoords(updatedMatrix);
          const sign =
            victoryCoords == null ? (state.sign === X ? O : X) : state.sign;
          return {
            ...state,
            matrix: updatedMatrix,
            sign,
            victoryCoords,
            movePc: state.vsPc && !state.movePc,
            announce:
              state.vsPc && state.movePc
                ? ([action.row, action.col] as [number, number])
                : undefined,
          };
        }
        return state;
      }
      case 'vspc': {
        return {
          ...state,
          vsPc: action.enabled,
          // PC will move only if enabled, match is not over and it's the O turn
          movePc:
            action.enabled && state.victoryCoords == null && state.sign === O,
        };
      }
      case 'reset': {
        return {
          ...getInitialState(action.sign),
          // A reset must not reset the type of play
          vsPc: state.vsPc,
          movePc: state.vsPc && action.sign === O,
        };
      }
      case 'unannounce': {
        return { ...state, announce: undefined };
      }
      default: {
        return state;
      }
    }
  }, getInitialState());
