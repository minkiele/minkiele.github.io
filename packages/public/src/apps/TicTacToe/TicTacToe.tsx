import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import styles from './TicTacToe.module.scss';
import TicTacToeMD from './README.md';
import classNames from 'classnames';
import { getStrikeData, O, pickEmptyCoordinate, TICTACTOE_SIDE, useTicTacToe, X } from './TicTacToe.utils';

const TicTacToe: FunctionComponent = () => {
  const [{ matrix, victoryCoords, sign, vsPc, movePc, announce }, dispatch] = useTicTacToe();

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
  }, [movePc, matrix, dispatch]);

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
  }, [announce, dispatch]);

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
                    {col === X ? '❌' : '⭕'}
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
