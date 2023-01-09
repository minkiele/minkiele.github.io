import { assocPath, repeat, times } from "ramda";
import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import generateClassName from "../../lib/generateClassName";
import styles from "./SudokuUI.module.scss";
import { SudokuMatrix } from "minkiele-sudoku-matrix";
import SudokuUIMd from './README.md';
import useClock from "../../hooks/useClock";
import { generateStartSudokuMatrix } from "./Sudoku.utils";

interface MatrixReducerAction {
  row: number;
  col: number;
  value: string;
}

const STORAGE_KEY = "io.github.minkiele.SudokuUI.matrix";

const getSudokuMatrix = (matrix: Array<Array<string>>) =>
  matrix.map((row) =>
    row.map((col) => {
      const numCol = parseInt(col);
      return isNaN(numCol) ? null : numCol;
    })
  );

function SudokuUI() {
  const sanitizeValue = (input: string): string => {
    const inputNumber = Number(input);
    return isNaN(inputNumber) || inputNumber < 1 || inputNumber > 9
      ? ""
      : `${inputNumber}`;
  };

  const [matrix, setMatrix] = useState<Array<Array<string>>>(generateStartSudokuMatrix());
  const setValue = ({ row, col, value }: MatrixReducerAction) =>
    setMatrix((state) => assocPath([row, col], sanitizeValue(value), state));

  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    const validator = new SudokuMatrix(getSudokuMatrix(matrix));
    setValid(validator.isValid());
  }, [matrix]);

  const { start: startClock, stop: stopClock, reset: resetClock, elapsed: elapsedTime } = useClock();

  useEffect(() => {
    if (valid) {
      stopClock();
    }
  }, [valid, stopClock]);

  const inputRefs = useRef<Array<Array<HTMLInputElement | null>>>(
    times(() => repeat(null, 9), 9)
  );

  const handleChange = (row: number, col: number) => (evt: ChangeEvent) => {
    setValue({ row, col, value: (evt.target as HTMLInputElement).value });
    startClock();
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
        resetClock();
      } catch (_) {}
    }
  };

  const handleEmpty = () => {
    setMatrix(times(() => repeat("", 9), 9));
    resetClock();
  };

  const handleNew = () => {
    setMatrix(generateStartSudokuMatrix());
    resetClock();
  };

  return (
    <div>
      <SudokuUIMd />
      <table className={styles.table}>
        <caption>
          {elapsedTime}s{" "}
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
                        // It will spawn the phone input in mobile
                        type="tel"
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
        <button type="button" onClick={handleNew}>
          New
        </button>{" "}
        <button type="button" onClick={handleStore}>
          Store
        </button>{" "}
        <button type="button" onClick={handleRestore}>
          Restore
        </button>{" "}
        <button type="button" onClick={handleEmpty}>
          Empty
        </button>
      </fieldset>
    </div>
  );
}

export default SudokuUI;
