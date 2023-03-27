import { comparator, repeat, times } from 'ramda';
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import styles from './TicTacToe.module.scss';
import TicTacToeMD from './README.md';
import classNames from 'classnames';

const TICTACTOE_SIDE = 3;

type TicTacToeVictoryCoords = Array<Array<number>>;

interface TicTacToeReducerState {
  matrix: Array<Array<null | symbol>>;
  sign: symbol;
  victoryCoords: TicTacToeVictoryCoords | undefined;
  vsPc: boolean;
  movePc: boolean;
  announce: [number, number] | undefined;
}

type TicTacToeReducerAction =
  | {
      type: 'mark';
      row: number;
      col: number;
    }
  | {
      type: 'vspc';
      enabled: boolean;
    }
  | {
      type: 'reset';
      sign?: symbol;
    }
  | { type: 'unannounce' };

const X = Symbol('X');
const O = Symbol('O');

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

const getStrikeData = <T extends unknown>(
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
    const chanceCoords =
      chanceCoordsList[Math.floor(Math.random() * chanceCoordsList.length)];
    return chanceCoords.find(([row, col]) => matrix[row][col] == null);
  }
  return undefined;
};

const isDiagonalCell = (row: number, col: number) =>
  row === col ||
  TICTACTOE_SIDE - 1 - col === row ||
  row - TICTACTOE_SIDE - 1 === col;

interface TicTacToePossibility {
  coords: [number, number];
  ranking: number;
  diagonal: boolean;
}

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
    return maxRatings[Math.floor(Math.random() * maxRatings.length)];
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

const pickEmptyCoordinate = (
  matrix: Array<Array<symbol | null>>
): [number, number] | undefined => {
  const emptyCoords = getEmptyCoords(matrix);
  // Find if I am about to win
  const imAboutToWinCoord = getAboutToWinCoord(O, matrix);
  if (imAboutToWinCoord) {
    // Go to win
    return imAboutToWinCoord as [number, number];
  }
  // Find if adversary is about to win
  const aboutToWinCoord = getAboutToWinCoord(X, matrix);
  if (aboutToWinCoord != null) {
    // Block it
    return aboutToWinCoord as [number, number];
  }
  // APPLY STRATEGY ONLY IF SIDE IS 3, OTHERWISE GO RANDOM
  if (TICTACTOE_SIDE === 3) {
    // If center cell is free occupy it
    if (emptyCoords.find(([row, col]) => row === 1 && col === 1)) {
      return [1, 1];
    }
    // Diagonal paradox is a move where normally the algorithm would
    // wrongly choose a diagonal to defend itself and giving
    // an automatic win to the player. In this case we force the PC
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
    // If I have both an attack and defend moves and the defend
    // is better then use it
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
  // No moves found, pick a coord randomly
  if (emptyCoords.length > 0) {
    return emptyCoords[Math.floor(Math.random() * emptyCoords.length)];
  }
  return undefined;
};

const TicTacToe: FunctionComponent = () => {
  const [{ matrix, victoryCoords, sign, vsPc, movePc, announce }, dispatch] =
    useReducer(
      (state: TicTacToeReducerState, action: TicTacToeReducerAction) => {
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
                action.enabled &&
                state.victoryCoords == null &&
                state.sign === O,
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
      },
      getInitialState()
    );

  const handleMark = (row: number, col: number) => () => {
    if (!movePc) {
      dispatch({
        type: 'mark',
        row,
        col,
      });
    }
  };

  const handleReset = (sign?: symbol) => () => {
    dispatch({ type: 'reset', sign });
  };

  const handleVsPc = (value: boolean) => () => {
    dispatch({ type: 'vspc', enabled: value });
  };

  const getStrikeClassName = useCallback(
    (row: number, col: number) =>
      getStrikeData(row, col, victoryCoords, [
        `${styles.board_strike} ${styles.board_strike__0}`,
        `${styles.board_strike} ${styles.board_strike__1}`,
        `${styles.board_strike} ${styles.board_strike__2}`,
        `${styles.board_strike} ${styles.board_strike__3}`,
      ]),
    [victoryCoords]
  );

  const movesPossible = useMemo(
    () => matrix.some((row) => row.some((col) => col == null)),
    [matrix]
  );

  useEffect(() => {
    if (movePc) {
      const timerId = setTimeout(() => {
        const move = pickEmptyCoordinate(matrix);
        if (move != null) {
          dispatch({
            type: 'mark',
            row: move[0],
            col: move[1],
          });
        }
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [movePc, matrix]);

  const getOrdinalLabel = (
    n: number,
    firstLabel: string,
    lastLabel: string
  ): string => {
    if (n === 0) {
      return firstLabel;
    }
    if (n === TICTACTOE_SIDE - 1) {
      return lastLabel;
    }
    if (n === (TICTACTOE_SIDE - 1) / 2) {
      return 'center';
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

  useEffect(() => {
    if (announce) {
      const timerId = setTimeout(() => {
        dispatch({ type: 'unannounce' });
      }, 2000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [announce]);

  return (
    <div>
      <TicTacToeMD />
      <div className={styles.board}>
        {matrix.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className={styles.board_row}>
            {row.map((col, colIndex) => (
              <div
                key={`col-${colIndex}`}
                className={classNames({
                  [styles.board_col]: true,
                  [getStrikeClassName(rowIndex, colIndex) as string]:
                    getStrikeClassName(rowIndex, colIndex),
                })}
              >
                {col == null && (
                  <button
                    type="button"
                    className={styles.board_button}
                    onClick={handleMark(rowIndex, colIndex)}
                    aria-label={`Mark with ${
                      X ? '❌' : '⭕'
                    } the ${getOrdinalLabel(
                      rowIndex,
                      'top',
                      'bottom'
                    )}-${getOrdinalLabel(colIndex, 'left', 'right')} cell`}
                  >
                    <span className={styles.board_sign}>
                      <span className={styles.board_empty}>♻️</span>
                    </span>
                  </button>
                )}
                {col != null && (
                  <span
                    className={styles.board_sign}
                    aria-label={`${getOrdinalLabel(
                      rowIndex,
                      'top',
                      'bottom'
                    )}-${getOrdinalLabel(
                      colIndex,
                      'left',
                      'right'
                    )} cell marked with  ${col ? '❌' : '⭕'}`}
                  >
                    {col === X && '❌'}
                    {col === O && '⭕'}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {announce != null && (
        <p role="alert" aria-live="assertive">
          PC marked with ⭕ the {getOrdinalLabel(announce[0], 'top', 'bottom')}-
          {getOrdinalLabel(announce[1], 'left', 'right')} cell
        </p>
      )}
      {victoryCoords ? (
        <p role="alert" aria-live="assertive">
          <span className={styles.board_sign}>{sign === X ? '❌' : '⭕'}</span>{' '}
          won!
        </p>
      ) : (
        !movesPossible && (
          <p role="alert" aria-live="assertive">
            Draw game, no moves possible.
          </p>
        )
      )}
      <fieldset>
        <legend>Settings</legend>
        Player 1 (<span className={styles.board_sign}>❌</span>) Vs.{' '}
        <input
          type="radio"
          name="vspc"
          id="vspcFalse"
          value="false"
          onChange={handleVsPc(false)}
          checked={!vsPc}
        />
        <label htmlFor="vspcFalse">Player 2 </label>{' '}
        <input
          type="radio"
          name="vspc"
          id="vspcTrue"
          value="true"
          onChange={handleVsPc(true)}
          checked={vsPc}
        />
        <label htmlFor="vspcTrue">PC </label> (
        <span className={styles.board_sign}>⭕</span>)
        <br />
        <button type="button" onClick={handleReset()}>
          New match
        </button>{' '}
        <button type="button" onClick={handleReset(O)}>
          New match, but starts <span className={styles.board_sign}>⭕</span>
        </button>
      </fieldset>
    </div>
  );
};

export default TicTacToe;
