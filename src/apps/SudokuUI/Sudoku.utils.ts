const times = <T>(cb: (index: number) => T, length: number): Array<T> =>
  Array.from({ length }).map((_, index) => cb(index));
const range = (length: number, start = 0, step = 1): Array<number> =>
  times((index) => start + index * step, length);
const randomizer = (): number => Math.random() - 0.5;

const isInRow = (
  what: number,
  rowIndex: number,
  matrix: Array<Array<number | undefined>>
): boolean => matrix[rowIndex].includes(what);
const isInCol = (
  what: number,
  colIndex: number,
  matrix: Array<Array<number | undefined>>
): boolean => matrix.some((row) => row[colIndex] === what);
const isInSquare = (
  what: number,
  rowIndex: number,
  colIndex: number,
  matrix: Array<Array<number | undefined>>
): boolean =>
  matrix
    .slice(rowIndex - (rowIndex % 3), rowIndex - (rowIndex % 3) + 3)
    .some((row) =>
      row
        .slice(colIndex - (colIndex % 3), colIndex - (colIndex % 3) + 3)
        .some((col) => col === what)
    );

const getNumbersSet = () => range(9, 1).sort(randomizer);

const getEmptyMatrix = (): Array<Array<number | undefined>> =>
  times((row) => (row === 0 ? getNumbersSet() : times(() => undefined, 9)), 9);

/**
 * This does not work, because more frequently than you think
 * it will generate the same number
 * @returns The array with the sudoku
 */
export const generateSudoku = (): Array<Array<number>> => {
  let matrix = getEmptyMatrix();

  for (let row = 1; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      const candidates = range(9, 1).sort(randomizer);
      while (candidates.length > 0) {
        const candidate = candidates.shift() as number;
        if (
          !isInRow(candidate, row, matrix) &&
          !isInCol(candidate, col, matrix) &&
          !isInSquare(candidate, row, col, matrix)
        ) {
          matrix[row][col] = candidate;
          break;
        }
      }
      // If I didn't find any suitable candidate then I must retry the whole row
      if (matrix[row][col] == null) {
        // Evidence shows that after completing 5 rows there's a high probability
        // (1 in 5 chances) of running in an infinite loop. If this is the case
        // then we must restart from the beginning.
        if (row === 5) {
          matrix = getEmptyMatrix();
          row = 0;
          break;
        } else {
          matrix[row] = times(() => undefined, 9);
          // Restart
          col = -1;
        }
      }
    }
  }
  return matrix as Array<Array<number>>;
};

const MASKS: Array<Array<Array<boolean>>> = [
  /* Settimana Enigmistica n. 4734 */ [
    [true, false, false, false, false, false, true, false, false],
    [false, true, false, true, false, true, false, true, false],
    [false, false, true, false, false, false, true, false, true],
    [false, true, false, true, false, true, false, true, false],
    [false, false, false, false, false, false, false, false, false],
    [false, true, false, true, false, true, false, true, false],
    [true, false, true, false, false, false, true, false, false],
    [false, true, false, true, false, true, false, true, false],
    [false, false, true, false, false, false, false, false, true],
  ],
  /* Settimana Enigmistica n. 4735 */ [
    [false, true, false, false, false, true, false, false, false],
    [true, false, true, false, true, false, true, false, false],
    [false, true, false, true, false, true, false, true, false],
    [true, false, false, true, false, false, false, false, false],
    [false, true, false, false, true, false, false, true, false],
    [false, false, false, false, false, true, false, true, false],
    [false, true, false, true, false, true, false, true, false],
    [false, false, true, false, true, false, true, false, true],
    [false, false, false, true, false, false, false, true, false],
  ],
  /* Settimana Enigmistica n. 4735 */ [
    [true, true, true, true, false, false, false, false, false],
    [true, false, false, false, false, false, false, false, false],
    [true, false, false, false, false, true, true, false, false],
    [true, false, false, false, false, true, true, false, false],
    [false, false, false, false, false, false, false, false, false],
    [false, false, true, true, false, false, false, false, true],
    [false, false, true, true, false, false, false, false, true],
    [false, false, false, false, false, false, false, false, true],
    [false, false, false, false, false, true, true, true, true],
  ],
];

const getRandomMask = (): Array<Array<boolean>> => MASKS[Math.floor(Math.random() * MASKS.length)];

export const generateStartSudokuMatrix = () => {
  const matrix = generateSudoku();
  const mask = getRandomMask();
  const output: Array<Array<string>> = [];
  for(let row = 0; row < 9; row += 1) {
    output[row] = [];
    for(let col = 0; col < 9; col += 1) {
      output[row][col] = mask[row][col] ? `${matrix[row][col]}` : '';
    }
  }
  return output;
}
