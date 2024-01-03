"use client"

import { ChangeEventHandler, Children, DragEventHandler, FunctionComponent, useEffect, useRef, useState } from 'react';
import { Column, Move } from './Vietnam.models';
import styles from './Vietnam.module.scss';
import { getMoves, getStoneStyle, useTouchSelect, useVietnam } from './Vietnam.utils';
import VietnamMd from './README.md';
import { thunkify } from 'ramda';
import classNames from 'classnames';
import useClock from '../../hooks/useClock';

const COLS: Array<Column> = ['left', 'center', 'right'];
const DEFAULT_SIZE = 3;

const Vietnam: FunctionComponent = () => {
  const { board, moves, isValid, size, setSize, move, reset } = useVietnam(DEFAULT_SIZE);
  const { touchSelected, touchSelect } = useTouchSelect(move);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const { start: startClock, stop: stopClock, reset: resetClock, elapsed: timeElapsed } = useClock();
  const [solution, setSolution] = useState<Array<Move>>([]);

  const handleDragStart =
    (column: Column): DragEventHandler<HTMLDivElement> =>
    (evt) => {
      evt.dataTransfer.setData('text/plain', column);
    };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (evt) => {
    evt.preventDefault();
  };

  const handleDrop =
    (toColumn: Column): DragEventHandler<HTMLDivElement> =>
    (evt) => {
      evt.preventDefault();
      const fromColumn = evt.dataTransfer.getData('text/plain') as Column;
      move(fromColumn, toColumn);
    };

  const resetProgress = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
    }
  };

  const handleSetSize: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const intSize = parseInt(evt.target.value);
    const newSize = Math.max(1, isNaN(intSize) ? 1 : intSize);
    setSize(newSize);
    resetProgress();
    if(solution.length > 0) {
      setSolutionMoves(newSize);
    }
  };

  const handleReset = () => {
    reset();
    resetProgress();
    resetClock();
  };

  const handleSolve = () => {
    handleReset();
    const moves = getMoves(size, 'left', 'right');

    const intervalLength = size > 1 ? 1000 / (3 * Math.log2(size)) : 0;

    timerRef.current = setInterval(() => {
      if (moves.length > 0) {
        const { from, to } = moves.shift() as Move;
        move(from, to);
      } else {
        resetProgress();
      }
    }, intervalLength);
  };

  const setSolutionMoves = (size: number) => {
    setSolution(getMoves(size, 'left', 'right'));
  };

  const handleShowSolution = () => {
    setSolutionMoves(size);
  }


  const handleTouchSelect = thunkify(touchSelect);

  useEffect(() => {
    if (isValid) {
      stopClock();
    } else if (moves > 0) {
      startClock();
    }
  }, [startClock, stopClock, isValid, moves]);

  return (
    <div>
      <VietnamMd />
      <div className={styles.vietnam}>
        {COLS.map((col) => (
          <div
            key={col}
            className={classNames({
              [styles.vietnam_column]: true,
              [styles.vietnam_column__touchSelected]: touchSelected.includes(col),
            })}
            onDragOver={handleDragOver}
            onDrop={handleDrop(col)}
            onTouchEnd={handleTouchSelect(col)}>
            {board[col].map((stone, index) => (
              <div
                key={`${col}-${stone}`}
                className={styles.vietnam_stone}
                style={getStoneStyle(stone, size, 30)}
                draggable={index === 0}
                onDragStart={handleDragStart(col)}>{stone}</div>
            ))}
          </div>
        ))}
      </div>
      <p>
        To move this tower you&#39;ll need 2<sup>{size}</sup> - 1 = {2 ** size - 1} moves, so far you made {moves} moves in {timeElapsed}s.
      </p>
      {isValid &&
        (moves === 2 ** size - 1 ? (
          <p>You solved it with maximum effort in {timeElapsed}s!</p>
        ) : (
          <p>You solved it, but you can do better in {timeElapsed}s.</p>
        ))}
      <div>
        <fieldset>
          <legend>Controls</legend>
          <label htmlFor="setSize">Size of the tower:</label> <input id="setSize" type="number" onChange={handleSetSize} value={size} />{' '}
          <button type="button" onClick={handleReset}>
            Reset
          </button>{' '}
          <button type="button" onClick={handleSolve}>
            Solve
          </button>{' '}
          <button type="button" onClick={handleShowSolution}>
            Show me the money
          </button>
        </fieldset>
      </div>
      {solution.length > 0  && <div>
        <h3>The money</h3>
        <ol>{Children.toArray(solution.map(({stone, to}) => <li>Move stone {stone} to the {to}</li>))}</ol>
      </div>}
    </div>
  );
};

export default Vietnam;
