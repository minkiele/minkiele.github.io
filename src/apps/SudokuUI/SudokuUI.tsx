import dayjs, { Dayjs } from "dayjs";
import { assocPath, repeat, times } from "ramda";
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useImperativeHandle,
  useReducer,
  useRef,
  useState,
} from "react";
import generateClassName from "../../lib/generateClassName";
import styles from "./SudokuUI.module.scss";
import { SudokuMatrix } from "minkiele-sudoku-matrix";

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

type ElapsedReducerAction = "start" | "stop" | "update" | "reset";

interface CaptionRef {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

const STORAGE_KEY = "io.github.minkiele.SudokuUI.matrix";

const getSudokuMatrix = (matrix: Array<Array<string>>) =>
  matrix.map((row) =>
    row.map((col) => {
      const numCol = parseInt(col);
      return isNaN(numCol) ? null : numCol;
    })
  );

const Caption = forwardRef(function Caption(
  _,
  forwardedRef: ForwardedRef<CaptionRef>
) {
  const [timeStatus, setTimeStatus] = useReducer(
    (state: ElapsedReducerState, action: ElapsedReducerAction) => {
      switch (action) {
        case "start": {
          if (state.start == null) {
            const now = dayjs();
            return { start: now, current: now, elapsed: 0 };
          } else {
            return state;
          }
        }
        case "stop": {
          return { ...state, start: null, current: null };
        }
        case "reset": {
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

  useImperativeHandle(
    forwardedRef,
    () => ({
      start: () => setTimeStatus("start"),
      stop: () => setTimeStatus("stop"),
      reset: () => setTimeStatus("reset"),
    }),
    []
  );

  useEffect(() => {
    if (timeStatus.start != null) {
      const timerId = setInterval(() => {
        setTimeStatus("update");
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
    return undefined;
  }, [timeStatus.start]);

  return <>{timeStatus.elapsed}s</>;
});

Caption.displayName = "Caption";

function SudokuUI() {
  const sanitizeValue = (input: string): string => {
    const inputNumber = Number(input);
    return isNaN(inputNumber) || inputNumber < 1 || inputNumber > 9
      ? ""
      : `${inputNumber}`;
  };

  const [matrix, setMatrix] = useState<Array<Array<string>>>(
    times(() => repeat("", 9), 9)
  );
  const setValue = ({ row, col, value }: MatrixReducerAction) =>
    setMatrix((state) => assocPath([row, col], sanitizeValue(value), state));

  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    const validator = new SudokuMatrix(getSudokuMatrix(matrix));
    setValid(validator.isValid());
  }, [matrix]);

  const captionRef = useRef<CaptionRef | null>(null);

  useEffect(() => {
    if (valid) {
      captionRef.current?.stop();
    }
  }, [valid]);

  const inputRefs = useRef<Array<Array<HTMLInputElement | null>>>(
    times(() => repeat(null, 9), 9)
  );

  const handleChange = (row: number, col: number) => (evt: ChangeEvent) => {
    setValue({ row, col, value: (evt.target as HTMLInputElement).value });
    captionRef.current?.start();
  };

  const setRefFactory =
    (row: number, col: number) => (ref: HTMLInputElement) => {
      inputRefs.current[row][col] = ref;
    };

  // Keep track of the cursor position before we move otherwise it won't work correctly
  const selectionRef = useRef<number | null>();
  const handleSelectionFactory = (row: number, col: number) => () => {
    selectionRef.current = inputRefs.current[row][col]?.selectionStart;
  };

  const handleMoveFactory =
    (row: number, col: number) => (evt: KeyboardEvent<HTMLInputElement>) => {
      switch (evt.key) {
        case "ArrowUp":
          if (row > 0) {
            inputRefs.current[row - 1][col]?.focus();
          }
          break;
        case "ArrowDown":
          if (row < 8) {
            inputRefs.current[row + 1][col]?.focus();
          }
          break;
        case "ArrowLeft":
          if (col > 0 && !selectionRef.current) {
            inputRefs.current[row][col - 1]?.focus();
          }
          break;
        case "ArrowRight":
          if (
            col < 8 &&
            (selectionRef.current || !evt.currentTarget.value.length)
          ) {
            inputRefs.current[row][col + 1]?.focus();
          }
          break;
      }
    };

  const handleStore = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(matrix));
  };

  const handleRestore = () => {
    const serializedMatrix = localStorage.getItem(STORAGE_KEY);
    if (serializedMatrix != null) {
      try {
        const restoredMatrix = JSON.parse(serializedMatrix);
        setMatrix(restoredMatrix);
        captionRef.current?.reset();
      } catch (_) {}
    }
  };

  const handleReset = () => {
    setMatrix(times(() => repeat("", 9), 9));
    captionRef.current?.reset();
  };

  return (
    <div>
      <p>
        Simple Sudoku matrix. This whole application was born to actually
        integrate yet another library I wrote to check the correctness of the
        sudoku.
      </p>
      <table className={styles.table}>
        <caption>
          <Caption ref={captionRef} />{" "}
          {valid && <span>Bravo, the sudoku is valid!</span>}
        </caption>
        <tbody>
          {times(
            (row) => (
              <tr key={`row-${row}`}>
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
                        onKeyDown={handleSelectionFactory(row, col)}
                        onKeyUp={handleMoveFactory(row, col)}
                        autoComplete="off"
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
      <fieldset>
        <legend>Controls</legend>
        <button type="button" onClick={handleStore}>
          Store
        </button>{" "}
        <button type="button" onClick={handleRestore}>
          Restore
        </button>{" "}
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </fieldset>
    </div>
  );
}

export default SudokuUI;
