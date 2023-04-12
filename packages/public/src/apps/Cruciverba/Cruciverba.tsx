import { clone, repeat, times, xor } from 'ramda';
import { ChangeEvent, ChangeEventHandler, FormEventHandler, KeyboardEventHandler, MouseEventHandler, useEffect, useLayoutEffect, useMemo, useReducer, useRef } from 'react';
import CruciverbaMd from './README.md';
import styles from './Cruciverba.module.scss';
import classNames from 'classnames';

const DEFAULT_ROWS = 12;
const DEFAULT_COLS = 22;
const DEFAULT_SHOW_DEFS = false;
const DEFAULT_SHOW_NUMBERS = true;

const INCROCI_OBBLIGATI_ROWS = 13;
const INCROCI_OBBLIGATI_COLS = 9;
const INCROCI_OBBLIGATI_SHOW_DEFS = false;
const INCROCI_OBBLIGATI_SHOW_NUMBERS = false;

const RICERCA_ROWS = 12;
const RICERCA_COLS = 14;
const RICERCA_SHOW_DEFS = false;
const RICERCA_SHOW_NUMBERS = true;

const CORNICI_ROWS = 13;
const CORNICI_COLS = 13;
const CORNICI_SHOW_DEFS = false;
const CORNICI_SHOW_NUMBERS = false;


type ReducerState = {
  matrix: Array<Array<string | null>>;
  definitions: Array<Definition>;
  rows: number;
  cols: number;
  showDefs: boolean;
  showNumbers: boolean;
  direction: string;
};

type ReducerSimpleAction = 'setIncrociObbligatiMode' | 'setRicercaMode' | 'wipe' | 'setCorniciConcentricheMode';

type ReducerAction =
  | {
    type: 'setValue';
    row: number;
    col: number;
    value: string;
  }
  | {
    type: 'toggleBlack';
    row: number;
    col: number;
  }
  | {
    type: 'setSize';
    rows: number;
    cols: number;
  }
  | {
    type: 'setDefinition';
    horizontalDefinition: string;
    verticalDefinition: string;
    row: number;
    col: number;
  }
  | {
    type: 'setShowDefs';
    showDefs: boolean;
  }
  | {
    type: 'setShowNumbers';
    showNumbers: boolean;
  }
  | {
    type: 'setDirection';
    direction: 'H' | 'V';
  }
  | {
    type: ReducerSimpleAction;
  };

interface Definition {
  order: number;
  row: number;
  col: number;
  isHorizontal: boolean;
  isVertical: boolean;
  horizontalDefinition: string;
  verticalDefinition: string;
}

const shouldBeBlack = (row: number, col: number, matrix: ReducerState['matrix']) => {
  if (matrix[row][col] == null) {
    return true;
  }
  const isPreviousRowBlack = row === 0 ? true : matrix[row - 1][col] == null;
  const isPreviousColBlack = col === 0 ? true : matrix[row][col - 1] == null;
  const isNextRowBlack = row === matrix.length - 1 ? true : matrix[row + 1][col] == null;
  const isNextColBlack = col === matrix[row].length - 1 ? true : matrix[row][col + 1] == null;
  return isPreviousRowBlack && isPreviousColBlack && isNextRowBlack && isNextColBlack;
};

const getDefinitions = (matrix: Array<Array<string | null>>): Array<Definition> => {
  const definitions: Array<Definition> = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] != null) {
        const isPreviousRowBlack = i === 0 ? true : matrix[i - 1][j] == null;
        const isPreviousColBlack = j === 0 ? true : matrix[i][j - 1] == null;
        const hasOneFreeRowAfter = i < matrix.length - 1 ? matrix[i + 1][j] != null : false;
        const hasOneFreeColAfter = j < matrix[i].length - 1 ? matrix[i][j + 1] != null : false;
        const isVertical = isPreviousRowBlack && hasOneFreeRowAfter;
        const isHorizontal = isPreviousColBlack && hasOneFreeColAfter;
        if (isHorizontal || isVertical) {
          definitions.push({
            order: definitions.length + 1,
            row: i,
            col: j,
            isHorizontal,
            isVertical,
            horizontalDefinition: '',
            verticalDefinition: '',
          });
        }
      }
    }
  }
  return definitions;
};

const dumpMatrix = (fromMatrix: ReducerState['matrix'], toMatrix: ReducerState['matrix']) => {
  for (let i = 0; i < toMatrix.length; i += 1) {
    for (let j = 0; j < toMatrix[i].length; j += 1) {
      if (i < fromMatrix.length && j < fromMatrix[i].length) {
        toMatrix[i][j] = fromMatrix[i][j];
      }
    }
  }
}

const initReducer = ({ rows, cols, showDefs = true, showNumbers = true, direction = 'H', oldState }: { rows: number; cols: number; showDefs?: boolean, showNumbers?: boolean, direction?: 'H' | 'V', oldState?: ReducerState }) => {
  const matrix = times(() => repeat('', cols), rows);
  let definitions: Array<Definition>;
  if (oldState == null) {
    definitions = getDefinitions(matrix);
  } else {
    // If providing an old state copy some data from the old matrix
    dumpMatrix(oldState.matrix, matrix);
    definitions = getDefinitions(oldState.matrix);
  }
  return { matrix, definitions, rows, cols, showDefs, showNumbers, direction };
};

const isGreyRow = (
  isCorniciConcentricheMode: boolean,
  currentRow: number,
  currentCol: number
): boolean =>
  isCorniciConcentricheMode &&
  ((currentRow % 2 === 1 &&
    ((currentCol >= currentRow && currentCol < CORNICI_COLS - currentRow) ||
      (currentCol >= CORNICI_ROWS - currentRow - 1 &&
        currentCol < CORNICI_COLS - (CORNICI_ROWS - currentRow - 1)))) ||
    (currentCol % 2 === 1 &&
      ((currentRow >= currentCol && currentRow < CORNICI_ROWS - currentCol) ||
        (currentRow >= CORNICI_COLS - currentCol - 1 &&
          currentRow < CORNICI_ROWS - (CORNICI_COLS - currentCol - 1)))));

function Cruciverba() {
  const [{ matrix, definitions, rows: ROWS, cols: COLS, showDefs, showNumbers, direction }, dispatch] = useReducer(
    (state: ReducerState, action: ReducerAction) => {
      switch (action.type) {
        case 'setValue': {
          const newState: ReducerState['matrix'] = clone(state.matrix);
          newState[action.row][action.col] = action.value;
          return { ...state, matrix: newState };
        }
        case 'toggleBlack': {
          const newState: ReducerState['matrix'] = clone(state.matrix);
          newState[action.row][action.col] = newState[action.row][action.col] == null ? '' : null;
          return {
            ...state,
            matrix: newState,
            definitions: getDefinitions(newState),
          };
        }
        case 'setSize': {
          return initReducer({
            rows: action.rows,
            cols: action.cols,
            showDefs: state.showDefs,
            showNumbers: state.showNumbers,
            oldState: state
          });
        }
        case 'setDefinition': {
          return {
            ...state,
            definitions: state.definitions.reduce<Array<Definition>>(
              (acc, definition) => [
                ...acc,
                {
                  ...definition,
                  ...(definition.row === action.row &&
                    definition.col === action.col && {
                    horizontalDefinition: action.horizontalDefinition,
                    verticalDefinition: action.verticalDefinition,
                  }),
                },
              ],
              []
            ),
          };
        }
        case 'setShowDefs': {
          return {
            ...state,
            showDefs: action.showDefs,
          };
        }
        case 'setShowNumbers': {
          return {
            ...state,
            showNumbers: action.showNumbers,
          };
        }
        case 'setIncrociObbligatiMode': {
          return initReducer({
            rows: INCROCI_OBBLIGATI_ROWS,
            cols: INCROCI_OBBLIGATI_COLS,
            showDefs: INCROCI_OBBLIGATI_SHOW_DEFS,
            showNumbers: INCROCI_OBBLIGATI_SHOW_NUMBERS,
          });
        }
        case 'setRicercaMode': {
          const newState = initReducer({
            rows: RICERCA_ROWS,
            cols: RICERCA_COLS,
            showDefs: RICERCA_SHOW_DEFS,
            showNumbers: RICERCA_SHOW_NUMBERS,
          });
          // First 3 cells usually are marked black
          for (let i = 0; i < 3; i += 1) {
            (newState.matrix as ReducerState['matrix'])[0][i] = null;
          }
          return {
            ...newState,
            definitions: getDefinitions(newState.matrix)
          };
        }
        case 'wipe': {
          const newMatrix = state.matrix.map((row) => row.map((col) => col == null ? null : ''))
          return initReducer({
            rows: state.rows,
            cols: state.cols,
            showDefs: state.showDefs,
            showNumbers: state.showNumbers,
            oldState: {
              ...state,
              matrix: newMatrix,
              definitions: getDefinitions(newMatrix)
            }
          });
        }
        case 'setCorniciConcentricheMode': {
          const newState = initReducer({
            rows: CORNICI_ROWS,
            cols: CORNICI_COLS,
            showDefs: CORNICI_SHOW_DEFS,
            showNumbers: CORNICI_SHOW_NUMBERS,
          });
          (newState.matrix as ReducerState['matrix'])[Math.floor(CORNICI_ROWS / 2)][Math.floor(CORNICI_ROWS / 2)] = null;
          return {
            ...newState,
            definitions: getDefinitions(newState.matrix)
          };
        }
        case'setDirection': {
          return {
            ...state,
            direction: action.direction
          }
        }
      }
    },
    {
      rows: DEFAULT_ROWS,
      cols: DEFAULT_COLS,
      showDefs: DEFAULT_SHOW_DEFS,
      showNumbers: DEFAULT_SHOW_NUMBERS,
      direction: 'H'
    },
    initReducer
  );

  const rowsRef = useRef<HTMLInputElement | null>(null);
  const colsRef = useRef<HTMLInputElement | null>(null);

  const inputsRef = useRef<Array<Array<HTMLInputElement | null>>>([]);

  useMemo(() => {
    // Every time size of the inputs change ricreate the inputs matrix
    inputsRef.current = times((row) => times((col) => inputsRef.current?.[row]?.[col], COLS), ROWS);
  }, [ROWS, COLS]);


  const setRefCallbackFactory = (row: number, col: number) => (ref: HTMLInputElement) => {
    if(row < inputsRef.current.length && col < inputsRef.current[row].length) {
      inputsRef.current[row][col] = ref;
    }
  };

  const { h: horizontalDefs, v: verticalDefs } = useMemo(
    () =>
      definitions.reduce<{ h: Array<Definition>; v: Array<Definition> }>(
        (acc, definition) => ({
          ...acc,
          ...(definition.isHorizontal && { h: [...acc.h, definition] }),
          ...(definition.isVertical && { v: [...acc.v, definition] }),
        }),
        { h: [], v: [] }
      ),
    [definitions]
  );

  const handleChangeFactory = (row: number, col: number) => (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.toUpperCase();
    if (/^[A-Z]?$/.test(value)) {
      dispatch({
        type: 'setValue',
        row,
        col,
        value,
      });
    }
  };

  const handleToggleBlackFactory = (row: number, col: number) => () => {
    dispatch({
      type: 'toggleBlack',
      row,
      col,
    });
  };

  const handleSetSize: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const rows = parseInt(rowsRef.current?.value ?? '');
    const cols = parseInt(colsRef.current?.value ?? '');

    dispatch({
      type: 'setSize',
      rows: isNaN(rows) || rows < 2 ? DEFAULT_ROWS : rows,
      cols: isNaN(cols) || cols < 2 ? DEFAULT_COLS : cols,
    });
  };

  const handleDefinitionFactory = (definition: Definition, direction: 'h' | 'v') => (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'setDefinition',
      row: definition.row,
      col: definition.col,
      horizontalDefinition: direction === 'h' ? evt.target.value : definition.horizontalDefinition,
      verticalDefinition: direction === 'v' ? evt.target.value : definition.verticalDefinition,
    });
  };

  const handleToggleDefs: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch({
      type: 'setShowDefs',
      showDefs: evt.target.checked,
    });
  };

  const handleToggleNumbers: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch({
      type: 'setShowNumbers',
      showNumbers: evt.target.checked,
    });
  };

  const handleChangeDirection: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch({
      type: 'setDirection',
      direction: evt.target.value as 'H' | 'V'
    })
  }

  const handleSimpleAction = (type: ReducerSimpleAction): MouseEventHandler<HTMLButtonElement> => () => {
    dispatch({ type });
  }

  const handleKeyDownNavigateFactory =
    (row: number, col: number): KeyboardEventHandler<HTMLInputElement> =>
      (evt) => {
        if (evt.key === ' ') {
          // Must prevent default otherwise page will slide down!
          evt.preventDefault();
          dispatch({
            type: 'toggleBlack',
            row,
            col
          });
        }
        if (evt.key === 'ArrowUp' && row > 0) {
          inputsRef.current
            .reduceRight<HTMLInputElement | null>(
              (acc, current, index) => (acc == null && index < row && current[col] != null ? current[col] : acc),
              null
            )
            ?.focus();
        }
        if (evt.key === 'ArrowDown' && row < matrix.length - 1) {
          inputsRef.current
            .reduce<HTMLInputElement | null>(
              (acc, current, index) => (acc == null && index > row && current[col] != null ? current[col] : acc),
              null
            )
            ?.focus();
        }
        if (evt.key === 'ArrowLeft' && col > 0) {
          inputsRef.current[row]
            .reduceRight<HTMLInputElement | null>(
              (acc, current, index) => (acc == null && index < col && current != null ? current : acc),
              null
            )
            ?.focus();
        }
        if (evt.key === 'ArrowRight' && col < matrix[row].length - 1) {
          inputsRef.current[row]
            .reduce<HTMLInputElement | null>((acc, current, index) => (acc == null && index > col && current != null ? current : acc), null)
            ?.focus();
        }
        if (evt.key === 'Backspace' && (inputsRef.current[row][col]?.value as string).length === 0) {
          if (direction === 'H' && col > 0) {
            inputsRef.current[row]
              .reduceRight<HTMLInputElement | null>(
                (acc, current, index) => (acc == null && index < col && current != null ? current : acc),
                null
              )
              ?.focus();
          } else if (direction === 'V' && row > 0) {
            inputsRef.current
            .reduceRight<HTMLInputElement | null>(
              (acc, current, index) => (acc == null && index < row && current[col] != null ? current[col] : acc),
              null
            )
            ?.focus();
          }
        }
      };

  const handleKeyUpNavigateFactory =
    (row: number, col: number): KeyboardEventHandler<HTMLInputElement> =>
      (evt) => {
        if(/^[a-zA-Z]$/.test(evt.key)){
          if (direction === 'H' && col < matrix[row].length - 1) {
            inputsRef.current[row]
              .reduce<HTMLInputElement | null>((acc, current, index) => (acc == null && index > col && current != null ? current : acc), null)
              ?.focus();
          } else if (direction === 'V' && row < matrix.length - 1) {
            inputsRef.current
              .reduce<HTMLInputElement | null>((acc, current, index) => (acc == null && index > row && current[col] != null ? current[col] : acc), null)
              ?.focus();
          }
        }
      };

  const isIncrociObbligatiMode =
    ROWS === INCROCI_OBBLIGATI_ROWS &&
    COLS === INCROCI_OBBLIGATI_COLS &&
    showDefs === INCROCI_OBBLIGATI_SHOW_DEFS &&
    showNumbers === INCROCI_OBBLIGATI_SHOW_NUMBERS;

  const isRicercaMode =
    ROWS === RICERCA_ROWS &&
    COLS === RICERCA_COLS &&
    showDefs === RICERCA_SHOW_DEFS &&
    showNumbers === RICERCA_SHOW_NUMBERS &&
    matrix[0][0] == null &&
    matrix[0][1] == null &&
    matrix[0][2] == null;

  const isCorniciConcentricheMode = useMemo(
    () =>
      ROWS === CORNICI_ROWS &&
      COLS === CORNICI_COLS &&
      showDefs === CORNICI_SHOW_DEFS &&
      showNumbers === CORNICI_SHOW_NUMBERS &&
      matrix.every((row, rowIndex) =>
        row.every((col, colIndex) =>
          xor(
            rowIndex === Math.floor(CORNICI_ROWS / 2) &&
              colIndex === Math.floor(CORNICI_COLS / 2),
            col != null
          )
        )
      ),
    [matrix, COLS, ROWS, showDefs, showNumbers]
  );

  // Update settings when changing
  useEffect(() => {
    if (rowsRef.current != null) {
      rowsRef.current.value = `${ROWS}`;
    }
    if (colsRef.current != null) {
      colsRef.current.value = `${COLS}`;
    }
  }, [ROWS, COLS]);

  // Workaround to avoid a whole tab shifting
  const renderedApp = (
    <div className={styles.app}>
      <table className={styles.app_table}>
        <caption className={styles.app_caption}>{isIncrociObbligatiMode ? 'Incroci Obbligati' : (isRicercaMode ? 'Ricerca di Parole Crociate' : (isCorniciConcentricheMode ? 'Cornici Concentriche' : 'Parole Crociate'))}</caption>
        <tbody>
          {times(
            (row) => (
              <tr key={row}>
                {times((col) => {
                  const definition = definitions.find((definition) => definition.row === row && definition.col === col);
                  return (
                    <td className={classNames({
                      [styles.app_td]: true,
                      [styles.app_td__grey]: isGreyRow(isCorniciConcentricheMode, row, col)
                    })} key={`${row}-${col}`} onDoubleClick={handleToggleBlackFactory(row, col)}>
                      {shouldBeBlack(row, col, matrix) ? (
                        <span className={styles.app_black}></span>
                      ) : (
                        <>
                          {showNumbers && definition != null && <span className={styles.app_definition}>{definition.order}</span>}
                          <input
                            className={styles.app_input}
                            name={`input-${row}-${col}`}
                            type="text"
                            value={matrix[row][col] as string}
                            onChange={handleChangeFactory(row, col)}
                            maxLength={1}
                            ref={setRefCallbackFactory(row, col)}
                            onKeyDown={handleKeyDownNavigateFactory(row, col)}
                            onKeyUp={handleKeyUpNavigateFactory(row, col)}
                            autoComplete="off"
                          />
                        </>
                      )}
                    </td>
                  );
                }, COLS)}
              </tr>
            ),
            ROWS
          )}
        </tbody>
      </table>
      {showDefs && (
        <div className={styles.app_definitions}>
          {horizontalDefs.length && (
            <div className={styles.app_directionDefinitions}>
              <h2>Orizzontali</h2>
              <ol>
                {horizontalDefs.map((definition, index) => (
                  <li value={definition.order} key={`h-${definition.order}-${index}`}>
                    <input
                      className={styles.app_definitionInput}
                      name={`h-${definition.order}`}
                      type="text"
                      value={definition.horizontalDefinition}
                      onChange={handleDefinitionFactory(definition, 'h')}
                    />
                  </li>
                ))}
              </ol>
            </div>
          )}
          {verticalDefs.length && (
            <div className={styles.app_directionDefinitions}>
              <h2>Verticali</h2>
              <ol>
                {verticalDefs.map((definition, index) => (
                  <li value={definition.order} key={`v-${definition.order}-${index}`}>
                    <input
                      className={styles.app_definitionInput}
                      name={`v-${definition.order}`}
                      type="text"
                      value={definition.verticalDefinition}
                      onChange={handleDefinitionFactory(definition, 'v')}
                    />
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const settings = (
    <form onSubmit={handleSetSize}>
      <fieldset>
        <legend>Opzioni</legend>
        <label htmlFor="rows">Numero di righe:</label> <input name="rows" defaultValue={ROWS} ref={rowsRef} type="number" />{' '}
        <label htmlFor="cols">Numero di colonne:</label> <input name="cols" defaultValue={COLS} ref={colsRef} type="number" />{' '}
        <button type="submit">Update</button>
        <br />
        <input id="showDefs" name="showDefs" checked={showDefs} onChange={handleToggleDefs} type="checkbox" value="showDefs" />
        <label htmlFor="showDefs">Mostra definizioni</label>
        <br />
        <input id="showNumbers" name="showNumbers" checked={showNumbers} onChange={handleToggleNumbers} type="checkbox" value="showNumbers" />
        <label htmlFor="showNumbers">Mostra numeri</label>
        <br />
        <input id="directionHorizontal" name="direction" checked={direction === 'H'} onChange={handleChangeDirection} type="radio" value="H" />
        <label htmlFor="directionHorizontal">Muoviti in orizzontale</label>
        {' '}
        <input id="directionVertical" name="direction" checked={direction === 'V'} onChange={handleChangeDirection} type="radio" value="V" />
        <label htmlFor="directionVertical">Muoviti in verticale</label>
        <br />
        <button onClick={handleSimpleAction('setIncrociObbligatiMode')} type="button"><em>Incroci obbligati</em> mode</button>
        {' '}
        <button onClick={handleSimpleAction('setRicercaMode')} type="button"><em>Ricerca di Parole Crociate</em> mode</button>
        {' '}
        <button onClick={handleSimpleAction('setCorniciConcentricheMode')} type="button"><em>Cornici Concentriche</em> mode</button>
        {' '}
        <button onClick={handleSimpleAction('wipe')} type="button">Wipe</button>
      </fieldset>
    </form>
  );

  return (
    <div>
      <CruciverbaMd />
      <div className={styles.app_wrapper}>{renderedApp}</div>
      {settings}
    </div>
  );
}

export default Cruciverba;
