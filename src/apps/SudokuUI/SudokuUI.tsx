import dayjs, { Dayjs } from "dayjs";
import { assocPath, repeat, times } from "ramda";
import { ChangeEvent, KeyboardEvent, useEffect, useReducer, useRef, useState } from "react";
import generateClassName from "../../lib/generateClassName";
import styles from "./SudokuUI.module.scss";

interface MatrixReducerAction {
  row: number;
  col: number;
  value: string;
}

interface ElapsedReducerState {
  start: Dayjs | null;
  current: Dayjs | null;
  elapsed: number;
}

interface ElapsedReducerAction {
  type: "start" | "stop" | "update";
}

interface CaptionProps {
  started: boolean;
}

function Caption({ started = false }: CaptionProps) {
  const [timeStatus, setTimeStatus] = useReducer(
    (state: ElapsedReducerState, action: ElapsedReducerAction) => {
      switch (action.type) {
        case "start": {
          if (state.start == null) {
            const now = dayjs();
            return { start: now, current: now, elapsed: 0 };
          } else {
            return state;
          }
        }
        case "stop": {
          return { start: null, current: null, elapsed: 0 };
        }
        default:
          const now = dayjs();
          return {
            ...state,
            current: now,
            elapsed: state.current?.diff(state.start, "s") ?? 0,
          };
      }
    },
    {
      start: null,
      current: null,
      elapsed: 0,
    }
  );

  const timerId = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (started === true) {
      setTimeStatus({
        type: "start",
      });
    }
  }, [started]);

  useEffect(() => {
    if (timeStatus.start != null) {
      timerId.current = setInterval(() => {
        setTimeStatus({
          type: "update",
        });
      }, 1000);
    } else if (timerId.current != null) {
      clearTimeout(timerId.current);
    }
  }, [started, timeStatus.start]);

  return <>{timeStatus.elapsed}</>;
}


function SudokuUI() {
  const sanitizeValue = (input: string): string => {
    const inputNumber = Number(input);
    return isNaN(inputNumber) || inputNumber < 1 || inputNumber > 9
      ? ""
      : `${inputNumber}`;
  };

  const [matrix, setValue] = useReducer(
    (state: Array<Array<string>>, { row, col, value }: MatrixReducerAction) =>
      assocPath([row, col], sanitizeValue(value), state),
    repeat(repeat("", 9), 9)
  );

  const [started, setStarted] = useState<boolean>(false);

  const inputRefs = useRef<Array<Array<HTMLInputElement | null>>>(repeat(repeat(null, 9), 9));

  const handleChange = (row: number, col: number) => (evt: ChangeEvent) => {
    setValue({ row, col, value: (evt.target as HTMLInputElement).value });
    setStarted(true);
  };

  const setRefFactory = (row: number, col: number) => (ref: HTMLInputElement) => {
    inputRefs.current[row][col] = ref;
  };

  const handleMoveFactory = (row: number, col: number) => (evt: KeyboardEvent<HTMLInputElement>) => {
    // if((evt.target as HTMLInputElement).value.length === 0)
    switch(evt.key) {
      case 'Up':
        if(row > 0) {
          inputRefs.current[row - 1][col]?.focus();
        }
        break;
      case 'Down':
        if(row < 8) {
          inputRefs.current[row + 1][col]?.focus();
        }
        break;
      case 'Left':
        if(col > 0) {
          inputRefs.current[row][col - 1]?.focus();
        }
        break;
      case 'Right':
        if(col < 8) {
          inputRefs.current[row][col + 1]?.focus();
        }
        break;
    }
  };

  return (
    <div>
    <p>Simple Sudoku matrix. <strong>Coming soon:</strong> This whole application was born
      to actually integrate yet another library I wrote to check the correctness of a sudoku.
      I have to find the urge to build that library and to integrate it here.
    </p>
    <table className={styles.table}>
      <caption>
        <Caption started={started} />
      </caption>
      <tbody>
        {times(
          (row) => (
            <tr
              key={`row-${row}`}
            >
              {times(
                (col) => (
                  <td
                    key={`col-${row}-${col}`}
                    className={generateClassName({
                      [styles.cell]: true,
                    })}
                  >
                    <input
                      id={`input-${row}-${col}`}
                      value={matrix[row][col]}
                      onChange={handleChange(row, col)}
                      className={styles.input}
                      ref={setRefFactory(row, col)}
                      onKeyUp={handleMoveFactory(row, col)}
                    />
                  </td>
                ),
                9
              )}
            </tr>
          ),
          9
        )}
      </tbody>
    </table>
    </div>
  );
}

export default SudokuUI;
