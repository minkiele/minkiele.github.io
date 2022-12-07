import {
  ChangeEventHandler,
  DragEventHandler,
  FunctionComponent,
  useCallback,
  useRef,
} from "react";
import { Column, Move } from "./Vietnam.models";
import styles from "./Vietnam.module.scss";
import {
  getMoves,
  getStoneStyle,
  useTouchSelect,
  useVietnam,
} from "./Vietnam.utils";
import VietnamMd from "./Vietnam.md";
import Markdown from "../../shared/Markdown/Markdown";
import { thunkify } from "ramda";
import classNames from "classnames";

const COLS: Array<Column> = ["left", "center", "right"];
const DEFAULT_SIZE = 3;

const Vietnam: FunctionComponent = () => {
  const { board, moves, isValid, size, setSize, move, reset } =
    useVietnam(DEFAULT_SIZE);
  const { touchSelected, touchSelect } = useTouchSelect(move);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const handleDragStart =
    (column: Column): DragEventHandler<HTMLDivElement> =>
    (evt) => {
      evt.dataTransfer.setData("text/plain", column);
    };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (evt) => {
    evt.preventDefault();
  };

  const handleDrop =
    (toColumn: Column): DragEventHandler<HTMLDivElement> =>
    (evt) => {
      evt.preventDefault();
      const fromColumn = evt.dataTransfer.getData("text/plain") as Column;
      move(fromColumn, toColumn);
    };

  const resetProgress = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
    }
  };

  const handleSetSize: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const intSize = parseInt(evt.target.value);
    setSize(Math.max(1, isNaN(intSize) ? 1 : intSize));
    resetProgress();
  };

  const handleReset = () => {
    reset();
    resetProgress();
  };

  const handleSolve = () => {
    handleReset();
    const moves = getMoves(size, "left", "right");

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

  const handleTouchSelect = thunkify(touchSelect);

  return (
    <div>
      <Markdown>{VietnamMd}</Markdown>
      <div className={styles.vietnam}>
        {COLS.map((col) => (
          <div
            key={col}
            className={classNames({
              [styles.vietnam_column]: true,
              [styles.vietnam_column__touchSelected]:
                touchSelected.includes(col),
            })}
            onDragOver={handleDragOver}
            onDrop={handleDrop(col)}
            onTouchEnd={handleTouchSelect(col)}
          >
            {board[col].map((stone, index) => (
              <div
                key={`${col}-${stone}`}
                className={styles.vietnam_stone}
                style={getStoneStyle(stone, size, 30)}
                draggable={index === 0}
                onDragStart={handleDragStart(col)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <p>
        To move this tower you'll need 2<sup>{size}</sup> - 1 = {2 ** size - 1}{" "}
        moves, so far you made {moves} moves.
      </p>
      {isValid &&
        (moves === 2 ** size - 1 ? (
          <p>You solved it with maximum effort!</p>
        ) : (
          <p>You solved it, but you can do better.</p>
        ))}
      <div>
        <fieldset>
          <legend>Controls</legend>
          <label htmlFor="setSize">Size of the tower:</label>{" "}
          <input
            id="setSize"
            type="number"
            onChange={handleSetSize}
            value={size}
          />{" "}
          <button type="button" onClick={handleReset}>
            Reset
          </button>{" "}
          <button type="button" onClick={handleSolve}>
            Solve
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Vietnam;
