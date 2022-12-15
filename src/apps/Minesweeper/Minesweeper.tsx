import classNames from "classnames";
import { thunkify, times } from "ramda";
import {
  cloneElement,
  FormEventHandler,
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Minefield,
  MinefieldTile,
  Minesweeper as MinesweeperGame,
  MinesweeperOptions,
} from "./Minesweeper.lib";
import styles from "./Minesweeper.module.scss";
import { getMinefieldStyle } from "./Minesweeper.utils";
import MinesweeperMd from "./README.md";

const Minesweeper: FunctionComponent = () => {
  const [options, setOptions] = useState<MinesweeperOptions>(
    MinesweeperGame.DIFFICULTY[MinesweeperGame.DEFAULT_DIFFICULTY]
  );
  const minesweeperRef = useRef<MinesweeperGame>(new MinesweeperGame(options));
  const [tiles, setTiles] = useState<Minefield>(
    minesweeperRef.current.getMinefield()
  );
  const [status, setStatus] = useState<symbol>(
    minesweeperRef.current.getStatus()
  );
  const [mines, setMines] = useState<number>(
    options.mines - minesweeperRef.current.getFlaggedMines()
  );

  const [stepMode, setStepMode] = useState<boolean>(true);

  useEffect(() => {
    minesweeperRef.current.reset(options);
    setTiles(minesweeperRef.current.getMinefield());
    setMines(options.mines - minesweeperRef.current.getFlaggedMines());
    setStatus(minesweeperRef.current.getStatus());
  }, [options]);

  useEffect(() => {
    const handleUpdate = () => {
      setTiles(minesweeperRef.current.getMinefield());
      setMines(options.mines - minesweeperRef.current.getFlaggedMines());
    };
    minesweeperRef.current.on(MinesweeperGame.EVENT.STEP, handleUpdate);
    const handleStatus = (status: symbol) => {
      setStatus(status);
      if (status === MinesweeperGame.STATUS.UNINITIALIZED) {
        handleUpdate();
      }
    };
    minesweeperRef.current.on(MinesweeperGame.EVENT.STATUS, handleStatus);
    return () => {
      minesweeperRef.current.off(MinesweeperGame.EVENT.STEP, handleUpdate);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      minesweeperRef.current.off(MinesweeperGame.EVENT.STATUS, handleStatus);
    };
  }, [options]);

  const handleMouseUp =
    (
      x: number,
      y: number,
      { isSteppedOn, surroundingMines, isMine, isFlag }: MinefieldTile
    ): MouseEventHandler<HTMLTableCellElement> =>
    (evt) => {
      const toggleStepMode =
        isSteppedOn && !isMine && !isFlag && surroundingMines === 0;
      if (toggleStepMode) {
        setStepMode((currentMode) => !currentMode);
      } else {
        if (!stepMode || evt.metaKey || evt.button === 2) {
          minesweeperRef.current.toggleFlag(x, y);
        } else {
          minesweeperRef.current.stepOn(x, y);
        }
      }
    };

  const getTile = (
    element: ReactElement,
    tile: MinefieldTile | undefined
  ): ReactNode => {
    if (tile != null) {
      const baseClassNames = {
        [styles.tile]: true,
        [styles.tile__unstepped]: !tile.isSteppedOn,
        [styles.tile__stepped]: tile.isSteppedOn,
        [styles.tile__flag]: tile.isFlag,
        [styles[`tile__number${tile.surroundingMines}`]]:
          !tile.isFlag && tile.isSteppedOn && tile.surroundingMines > 0,
      };

      let content: ReactNode = <>&nbsp;</>;
      if (tile.isFlag) {
        content = "🏴";
      } else if (tile.isSteppedOn && tile.surroundingMines > 0) {
        content = `${tile.surroundingMines}`;
      }

      switch (status) {
        case MinesweeperGame.STATUS.UNINITIALIZED:
        case MinesweeperGame.STATUS.IN_GAME: {
          return cloneElement(
            element,
            {
              className: classNames(baseClassNames),
            },
            content
          );
        }
        case MinesweeperGame.STATUS.COMPLETE: {
          return cloneElement(
            element,
            {
              className: classNames(baseClassNames),
              onMouseUp: undefined,
            },
            content
          );
        }
        case MinesweeperGame.STATUS.GAME_OVER: {
          if (!tile.isFlag && tile.isMine) {
            content = "💣";
          } else if (!tile.isSteppedOn && tile.isFlag && tile.isMine) {
            content = "🏴";
          } else if (tile.isFlag && !tile.isMine) {
            content = "❌";
          }
          return cloneElement(
            element,
            {
              className: classNames({
                ...baseClassNames,
                [styles.tile__mine]:
                  !tile.isSteppedOn && !tile.isFlag && tile.isMine,
                [styles.tile__steppedOnMine]:
                  tile.isSteppedOn && !tile.isFlag && tile.isMine,
                [styles.tile__flag]:
                  !tile.isSteppedOn && tile.isFlag && tile.isMine,
                [styles.tile__falseFlag]: tile.isFlag && !tile.isMine,
              }),
              onMouseUp: undefined,
            },
            content
          );
        }
      }
    }
    return element;
  };

  const handleSetDifficulty = thunkify((difficulty: MinesweeperOptions) => {
    setOptions({ ...difficulty });
  });

  const handleReset = () => {
    minesweeperRef.current.reset();
  };

  const handleSetStepMode = thunkify(setStepMode);

  const { width, height } = options;

  const handleCustomOptions: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const formWidth = (
      (evt.target as HTMLFormElement).width as HTMLInputElement
    ).value;
    const formHeight = (
      (evt.target as HTMLFormElement).height as HTMLInputElement
    ).value;
    const formMines = (
      (evt.target as HTMLFormElement).mines as HTMLInputElement
    ).value;

    let width = parseInt(formWidth);
    let height = parseInt(formHeight);
    let mines = parseInt(formMines);

    if (isNaN(width) || width < 3) {
      width = 3;
    }

    if (isNaN(height) || height < 3) {
      height = 3;
    }

    if (isNaN(mines)) {
      mines = Math.floor(0.15 * width * height);
    } else if (mines < 1) {
      mines = 1;
    } else if (mines >= width * height) {
      mines = width * height - 1;
    }

    setOptions({ width, height, mines });
  };

  return (
    <div>
      <MinesweeperMd />
      <div className={styles.scrollable}>
        <table
          className={styles.table}
          style={getMinefieldStyle(width, height)}
        >
          <tbody>
            {times(
              (y) => (
                <tr key={`row-${y}`}>
                  {times(
                    (x) =>
                      tiles?.[y]?.[x] != null &&
                      getTile(
                        <td
                          key={`tile-x-${x}-y-${y}`}
                          className={classNames({
                            [styles.tile]: true,
                          })}
                          onMouseUp={handleMouseUp(x, y, tiles[y][x])}
                        >
                          &nbsp;
                        </td>,
                        tiles[y][x]
                      ),
                    width
                  )}
                </tr>
              ),
              height
            )}
          </tbody>
        </table>
      </div>
      <div>
        {status === MinesweeperGame.STATUS.UNINITIALIZED && <p>Ready...</p>}
        {status === MinesweeperGame.STATUS.IN_GAME && (
          <p>You must flag {mines} mines to finish</p>
        )}
        {status === MinesweeperGame.STATUS.GAME_OVER && <p>Oops!</p>}
        {status === MinesweeperGame.STATUS.COMPLETE && <p>Bravo! Hooray!</p>}
      </div>
      <div>
        <fieldset>
          <legend>Mode</legend>
          <input
            type="radio"
            name="stepMode"
            id="setStepModeStep"
            value="step"
            onChange={handleSetStepMode(true)}
            checked={stepMode}
          />
          <label htmlFor="setStepModeStep">Click</label>{" "}
          <input
            type="radio"
            name="stepMode"
            id="setStepModeFlag"
            value="flag"
            onChange={handleSetStepMode(false)}
            checked={!stepMode}
          />
          <label htmlFor="setStepModeFlag">Flag</label>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>Choose your density (ehm... destiny)</legend>
          <button type="button" onClick={handleReset}>
            Reset
          </button>{" "}
          <button
            type="button"
            onClick={handleSetDifficulty(MinesweeperGame.DIFFICULTY.EASY)}
          >
            Easy
          </button>{" "}
          <button
            type="button"
            onClick={handleSetDifficulty(MinesweeperGame.DIFFICULTY.MEDIUM)}
          >
            Medium
          </button>{" "}
          <button
            type="button"
            onClick={handleSetDifficulty(MinesweeperGame.DIFFICULTY.HARD)}
          >
            Hard
          </button>
          <form onSubmit={handleCustomOptions}>
            <label htmlFor="width">Width</label>{" "}
            <input
              id="width"
              name="width"
              type="number"
              defaultValue={width}
              min={3}
            />{" "}
            <label htmlFor="height">Height</label>{" "}
            <input
              id="height"
              name="height"
              type="number"
              defaultValue={height}
              min={3}
            />{" "}
            <label htmlFor="mines">Mines</label>{" "}
            <input
              id="mines"
              name="mines"
              type="number"
              defaultValue={mines}
              min={1}
            />{" "}
            <button type="submit">Custom</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Minesweeper;
