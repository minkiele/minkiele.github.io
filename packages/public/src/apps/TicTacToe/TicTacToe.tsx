'use client';

import {
  ChangeEventHandler,
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import styles from './TicTacToe.module.scss';
export { default as ReadmeMd } from './README.md';
import classNames from 'classnames';
import {
  getAriaLabel,
  getStrikeData,
  O,
  pickEmptyCoordinate,
  TICTACTOE_SIDE,
  useTicTacToe,
  X,
} from './TicTacToe.utils';
import Emoji from '../App/components/Emoji/Emoji';

const TicTacToe: FunctionComponent = () => {
  const [
    { matrix, victoryCoords, sign, vsPc, movePc, announce, side },
    dispatch,
  ] = useTicTacToe();

  const handleMark = (row: number, col: number) => () => {
    if (!movePc) {
      dispatch({
        type: 'mark',
        row,
        col,
      });
    }
  };

  const handleResetSign = (sign: symbol) => () => {
    dispatch({
      type: 'reset',
      side,
      sign,
    });
  };

  const handleVsPc = (value: boolean) => () => {
    dispatch({ type: 'vspc', enabled: value });
  };

  const handleSide: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const side = parseInt(evt.target.value);
    dispatch({
      type: 'reset',
      side: isNaN(side) || side < 1 ? TICTACTOE_SIDE : side,
      sign,
    });
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

  const placeholder = useMemo(
    () => (
      <span className={styles.board_sign}>
        <span className={styles.board_empty} aria-hidden>
          <Emoji>♻️</Emoji>
        </span>
      </span>
    ),
    []
  );

  return (
    <>
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
                {col == null &&
                  (victoryCoords != null ? (
                    placeholder
                  ) : (
                    <button
                      type="button"
                      className={styles.board_button}
                      onClick={handleMark(rowIndex, colIndex)}
                      aria-label={`Mark with ${
                        sign.description
                      } the ${getAriaLabel(rowIndex, colIndex, side)} space`}
                    >
                      {placeholder}
                    </button>
                  ))}
                {col != null && (
                  <span
                    className={styles.board_sign}
                    aria-label={`${getAriaLabel(
                      rowIndex,
                      colIndex,
                      side
                    )} space marked with  ${col.description}`}
                  >
                    <Emoji>{col.description ?? '🤔'}</Emoji>
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {announce != null && (
        <p role="alert" aria-live="assertive" className="sr-only">
          PC marked with <Emoji>⭕</Emoji> the {getAriaLabel(...announce, side)}{' '}
          space
        </p>
      )}
      {victoryCoords ? (
        <p role="alert" aria-live="assertive">
          <span className={styles.board_sign}>{sign.description}</span> won!
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
        Player 1 (
        <span className={styles.board_sign}>
          <Emoji>❌</Emoji>
        </span>
        ) Vs.{' '}
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
        <span className={styles.board_sign}>
          <Emoji>⭕</Emoji>
        </span>
        )
        <br />
        <label htmlFor="side">Size of the grid: </label>
        <input
          type="number"
          name="side"
          id="side"
          onChange={handleSide}
          value={side}
        />
        x{side}
        <br />
        <button type="button" onClick={handleResetSign(X)}>
          New match
        </button>{' '}
        <button type="button" onClick={handleResetSign(O)}>
          New match, but starts{' '}
          <span className={styles.board_sign}>
            <Emoji>⭕</Emoji>
          </span>
        </button>
      </fieldset>
    </>
  );
};

export default TicTacToe;
