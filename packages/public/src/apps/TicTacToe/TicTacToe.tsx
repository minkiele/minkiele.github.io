import { repeat, times, __ } from 'ramda';
import { FunctionComponent, useCallback, useEffect, useMemo, useReducer } from 'react';
import styles from './TicTacToe.module.scss';
import TicTacToeMD from './README.md';

const TICTACTOE_SIDE = 3;

type TicTacToeVictoryCoords = Array<Array<number>>;

interface TicTacToeReducerState {
  matrix: Array<Array<null | symbol>>;
  sign: symbol;
  victoryCoords: TicTacToeVictoryCoords | undefined;
  vsPc: boolean;
  movePc: boolean;
}

type TicTacToeReducerAction =
  | {
      type: 'mark';
      row: number;
      col: number;
    }
  | {
      type: 'vspc';
      value: boolean;
    }
  | {
      type: 'reset';
    };

const X = Symbol('X');
const O = Symbol('O');

const getInitialState = (): TicTacToeReducerState => ({
  matrix: times(() => repeat(null, TICTACTOE_SIDE), TICTACTOE_SIDE),
  sign: X,
  victoryCoords: undefined,
  vsPc: false,
  movePc: false,
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

const pickEmptyCoordinate = (
  matrix: Array<Array<symbol | null>>
): [number, number] | undefined => {
  const emptySpots = matrix.reduce<Array<[number, number]>>(
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
  if (emptySpots.length > 0) {
    return emptySpots[Math.floor(Math.random() * emptySpots.length)];
  }
  return undefined;
};

const TicTacToe: FunctionComponent = () => {
  const [{ matrix, victoryCoords, sign, vsPc, movePc }, dispatch] = useReducer(
    (state: TicTacToeReducerState, action: TicTacToeReducerAction) => {
      switch (action.type) {
        case 'mark': {
          if (state.matrix[action.row][action.col] == null && state.victoryCoords == null) {
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
            };
          }
          return state;
        }
        case 'vspc': {
          return {
            ...getInitialState(),
            vsPc: action.value,
          };
        }
        case 'reset': {
          return getInitialState();
        }
        default: {
          return state;
        }
      }
    },
    getInitialState()
  );

  const handleMark = (row: number, col: number) => () => {
    if(!movePc) {
      dispatch({
        type: 'mark',
        row,
        col,
      });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleVsPc = (value: boolean) => () => {
    dispatch({ type: 'vspc', value });
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
    if(movePc) {
      const timerId = setTimeout(() => {
        const move = pickEmptyCoordinate(matrix);
        if(move != null) {
          dispatch({
            type: 'mark',
            row: move[0],
            col: move[1],
          });
        }
      }, 1500);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [movePc, matrix]);

  return (
    <div>
      <TicTacToeMD />
      <div className={styles.board}>
        {matrix.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className={styles.board_row}>
            {row.map((col, colIndex) => (
              <div
                key={`col-${colIndex}`}
                className={`${styles.board_col} ${getStrikeClassName(
                  rowIndex,
                  colIndex
                )}`}
                onClick={handleMark(rowIndex, colIndex)}
              >
                {col?.description || <>&nbsp;</>}
              </div>
            ))}
          </div>
        ))}
      </div>
      {victoryCoords && <p>{sign.description} won!</p>}
      {!movesPossible && <p>Draw, no moves possible.</p>}
      <fieldset>
        <legend>Settings</legend>
        <input type="radio" name="vspc" id="vspcFalse" value="false" onChange={handleVsPc(false)} checked={!vsPc} />
        <label htmlFor="vspcFalse">Player 1 VS Player 2</label>{' '}
        <input type="radio" name="vspc" id="vspcTrue" value="true" onChange={handleVsPc(true)} checked={vsPc} />
        <label htmlFor="vspcTrue">Player 1 VS PC</label>
        <br />
        <button type="button" onClick={handleReset}>
          New match
        </button>
      </fieldset>
    </div>
  );
};

export default TicTacToe;
