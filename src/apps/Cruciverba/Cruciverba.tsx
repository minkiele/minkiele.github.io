import "./Cruciverba.scss";
import { clone, repeat, times } from "ramda";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  useMemo,
  useReducer,
  useRef,
} from "react";
import CruciverbaMd from './README.md';

const DEFAULT_ROWS = 12;
const DEFAULT_COLS = 22;
const DEFAULT_SHOW_DEFS = false;

type ReducerState = {
  matrix: Array<Array<string | null>>;
  definitions: Array<Definition>;
  rows: number;
  cols: number;
  showDefs: boolean;
};

type ReducerAction =
  | {
      type: "setValue";
      row: number;
      col: number;
      value: string;
    }
  | {
      type: "toggleBlack";
      row: number;
      col: number;
    }
  | {
      type: "setSize";
      rows: number;
      cols: number;
    }
  | {
      type: "setDefinition";
      horizontalDefinition: string;
      verticalDefinition: string;
      row: number;
      col: number;
    }
  | {
      type: "setShowDefs";
      showDefs: boolean;
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

const shouldBeBlack = (
  row: number,
  col: number,
  matrix: ReducerState["matrix"]
) => {
  if (matrix[row][col] == null) {
    return true;
  }
  const isPreviousRowBlack = row === 0 ? true : matrix[row - 1][col] == null;
  const isPreviousColBlack = col === 0 ? true : matrix[row][col - 1] == null;
  const isNextRowBlack =
    row === matrix.length - 1 ? true : matrix[row + 1][col] == null;
  const isNextColBlack =
    col === matrix[row].length - 1 ? true : matrix[row][col + 1] == null;
  return (
    isPreviousRowBlack && isPreviousColBlack && isNextRowBlack && isNextColBlack
  );
};

const getDefinitions = (
  matrix: Array<Array<string | null>>
): Array<Definition> => {
  const definitions: Array<Definition> = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] != null) {
        const isPreviousRowBlack = i === 0 ? true : matrix[i - 1][j] == null;
        const isPreviousColBlack = j === 0 ? true : matrix[i][j - 1] == null;
        const hasOneFreeRowAfter =
          i < matrix.length - 1 ? matrix[i + 1][j] != null : false;
        const hasOneFreeColAfter =
          j < matrix[i].length - 1 ? matrix[i][j + 1] != null : false;
        const isVertical = isPreviousRowBlack && hasOneFreeRowAfter;
        const isHorizontal = isPreviousColBlack && hasOneFreeColAfter;
        if (isHorizontal || isVertical) {
          definitions.push({
            order: definitions.length + 1,
            row: i,
            col: j,
            isHorizontal,
            isVertical,
            horizontalDefinition: "",
            verticalDefinition: "",
          });
        }
      }
    }
  }
  return definitions;
};

const initReducer = ({
  rows,
  cols,
  showDefs = true,
}: {
  rows: number;
  cols: number;
  showDefs?: boolean;
}) => {
  const matrix = times(() => repeat("", cols), rows);
  const definitions = getDefinitions(matrix);
  return { matrix, definitions, rows, cols, showDefs };
};

function Cruciverba() {
  const [{ matrix, definitions, rows: ROWS, cols: COLS, showDefs }, dispatch] =
    useReducer(
      (state: ReducerState, action: ReducerAction) => {
        switch (action.type) {
          case "setValue": {
            const newState: ReducerState["matrix"] = clone(state.matrix);
            newState[action.row][action.col] = action.value;
            return { ...state, matrix: newState };
          }
          case "toggleBlack": {
            const newState: ReducerState["matrix"] = clone(state.matrix);
            newState[action.row][action.col] =
              newState[action.row][action.col] == null ? "" : null;
            return {
              ...state,
              matrix: newState,
              definitions: getDefinitions(newState),
            };
          }
          case "setSize": {
            const newState: ReducerState = initReducer({
              rows: action.rows,
              cols: action.cols,
              showDefs: state.showDefs,
            });
            for (let i = 0; i < newState.matrix.length; i += 1) {
              for (let j = 0; j < newState.matrix[i].length; j += 1) {
                if (i < state.matrix.length && j < state.matrix[i].length) {
                  newState.matrix[i][j] = state.matrix[i][j];
                }
              }
            }
            // Overwrite the definitions
            newState.definitions = getDefinitions(newState.matrix);
            return newState;
          }
          case "setDefinition": {
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
          case "setShowDefs": {
            return {
              ...state,
              showDefs: action.showDefs,
            };
          }
        }
      },
      {
        rows: DEFAULT_ROWS,
        cols: DEFAULT_COLS,
        showDefs: DEFAULT_SHOW_DEFS,
      },
      initReducer
    );

  const rowsRef = useRef<HTMLInputElement | null>(null);
  const colsRef = useRef<HTMLInputElement | null>(null);

  const inputsRef = useRef<Array<Array<HTMLInputElement | null>>>(
    times(() => repeat(null, COLS), ROWS)
  );
  const setRefCallbackFactory =
    (row: number, col: number) => (ref: HTMLInputElement) => {
      if (
        row < inputsRef.current.length &&
        col < inputsRef.current[row].length
      ) {
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

  const handleChangeFactory =
    (row: number, col: number) => (evt: ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.value.toUpperCase();
      if (/^[A-Z]?$/.test(value)) {
        dispatch({
          type: "setValue",
          row,
          col,
          value,
        });
      }
    };

  const handleToggleBlackFactory = (row: number, col: number) => () => {
    dispatch({
      type: "toggleBlack",
      row,
      col,
    });
  };

  const handleSetSize: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const rows = parseInt(rowsRef.current?.value ?? "");
    const cols = parseInt(colsRef.current?.value ?? "");

    // Reset all refs
    inputsRef.current = times(() => repeat(null, cols), rows);

    dispatch({
      type: "setSize",
      rows: isNaN(rows) || rows < 2 ? DEFAULT_ROWS : rows,
      cols: isNaN(cols) || cols < 2 ? DEFAULT_COLS : cols,
    });
  };

  const handleDefinitionFactory =
    (definition: Definition, direction: "h" | "v") =>
    (evt: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "setDefinition",
        row: definition.row,
        col: definition.col,
        horizontalDefinition:
          direction === "h"
            ? evt.target.value
            : definition.horizontalDefinition,
        verticalDefinition:
          direction === "v" ? evt.target.value : definition.verticalDefinition,
      });
    };

  const handleToggleDefs: ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch({
      type: "setShowDefs",
      showDefs: evt.target.checked,
    });
  };

  const handleKeyDownNavigateFactory =
    (row: number, col: number): KeyboardEventHandler<HTMLInputElement> =>
    (evt) => {
      if (evt.key === "ArrowUp" && row > 0) {
        inputsRef.current
          .reduceRight<HTMLInputElement | null>(
            (acc, current, index) =>
              acc == null && index < row && current[col] != null
                ? current[col]
                : acc,
            null
          )
          ?.focus();
      }
      if (evt.key === "ArrowDown" && row < matrix.length - 1) {
        inputsRef.current
          .reduce<HTMLInputElement | null>(
            (acc, current, index) =>
              acc == null && index > row && current[col] != null
                ? current[col]
                : acc,
            null
          )
          ?.focus();
      }
      if (evt.key === "ArrowLeft" && col > 0) {
        inputsRef.current[row]
          .reduceRight<HTMLInputElement | null>(
            (acc, current, index) =>
              acc == null && index < col && current != null ? current : acc,
            null
          )
          ?.focus();
      }
      if (evt.key === "ArrowRight" && col < matrix[row].length - 1) {
        inputsRef.current[row]
          .reduce<HTMLInputElement | null>(
            (acc, current, index) =>
              acc == null && index > col && current != null ? current : acc,
            null
          )
          ?.focus();
      }
      if (
        evt.key === "Backspace" &&
        (inputsRef.current[row][col]?.value as string).length === 0 &&
        col > 0
      ) {
        inputsRef.current[row]
          .reduceRight<HTMLInputElement | null>(
            (acc, current, index) =>
              acc == null && index < col && current != null ? current : acc,
            null
          )
          ?.focus();
      }
    };

  const handleKeyUpNavigateFactory =
    (row: number, col: number): KeyboardEventHandler<HTMLInputElement> =>
    (evt) => {
      if (/^[a-zA-Z]$/.test(evt.key) && col < matrix[row].length - 1) {
        inputsRef.current[row]
          .reduce<HTMLInputElement | null>(
            (acc, current, index) =>
              acc == null && index > col && current != null ? current : acc,
            null
          )
          ?.focus();
      }
    };

  // Workaround to avoid a whole tab shifting
  const renderedApp = (
    <div className="app">
      <table className="app_table">
        <caption className="app_caption">Parole Crociate</caption>
        <tbody>
          {times(
            (row) => (
              <tr key={row}>
                {times((col) => {
                  const definition = definitions.find(
                    (definition) =>
                      definition.row === row && definition.col === col
                  );
                  return (
                    <td
                      className="app_td"
                      key={`${row}-${col}`}
                      onDoubleClick={handleToggleBlackFactory(row, col)}
                    >
                      {shouldBeBlack(row, col, matrix) ? (
                        <span className="app_black"></span>
                      ) : (
                        <>
                          {definition != null && (
                            <span className="app_definition">
                              {definition.order}
                            </span>
                          )}
                          <input
                            className="app_input"
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
        <div className="app_definitions">
          {horizontalDefs.length && (
            <div className="app_directionDefinitions">
              <h2>Orizzontali</h2>
              <ol>
                {horizontalDefs.map((definition, index) => (
                  <li
                    value={definition.order}
                    key={`h-${definition.order}-${index}`}
                  >
                    <input
                      className="app_definitionInput"
                      name={`h-${definition.order}`}
                      type="text"
                      value={definition.horizontalDefinition}
                      onChange={handleDefinitionFactory(definition, "h")}
                    />
                  </li>
                ))}
              </ol>
            </div>
          )}
          {verticalDefs.length && (
            <div className="app_directionDefinitions">
              <h2>Verticali</h2>
              <ol>
                {verticalDefs.map((definition, index) => (
                  <li
                    value={definition.order}
                    key={`v-${definition.order}-${index}`}
                  >
                    <input
                      className="app_definitionInput"
                      name={`v-${definition.order}`}
                      type="text"
                      value={definition.verticalDefinition}
                      onChange={handleDefinitionFactory(definition, "v")}
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
        <label htmlFor="rows">Numero di righe:</label>{" "}
        <input name="rows" defaultValue={ROWS} ref={rowsRef} type="number" />
        {' '}
        <label htmlFor="cols">Numero di colonne:</label>{" "}
        <input name="cols" defaultValue={COLS} ref={colsRef} type="number" />
        {' '}
        <button type="submit">Update</button>
        <br />
        <input
          id="showDefs"
          name="showDefs"
          checked={showDefs}
          onChange={handleToggleDefs}
          type="checkbox"
          value="showDefs"
        />
        <label htmlFor="showDefs">Mostra definizioni</label>
      </fieldset>
    </form>
  );

  return (
    <div>
      <CruciverbaMd />
      {renderedApp}
      {settings}
    </div>
  );
}

export default Cruciverba;
