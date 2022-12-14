import classNames from "classnames";
import { times } from "ramda";
import {
  cloneElement,
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
    (x: number, y: number): MouseEventHandler<HTMLTableCellElement> =>
    (evt) => {
      if (evt.metaKey || evt.button === 2) {
        minesweeperRef.current.toggleFlag(x, y);
      } else {
        minesweeperRef.current.stepOn(x, y);
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
        [styles.tile__flag]: tile.isFlag,
        [styles[`tile__number${tile.surroundingMines}`]]:
          !tile.isFlag && tile.isSteppedOn && tile.surroundingMines > 0,
      };

      let content: ReactNode = <>&nbsp;</>;
      if (tile.isFlag) {
        content = "F";
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
            content = "*";
          } else if (!tile.isSteppedOn && tile.isFlag && tile.isMine) {
            content = "F";
          } else if (tile.isFlag && !tile.isMine) {
            content = "X";
          }
          return cloneElement(
            element,
            {
              className: classNames({
                ...baseClassNames,
                [styles.title__mine]:
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

  const handleSetDifficulty =
    (difficulty: MinesweeperOptions): MouseEventHandler<HTMLButtonElement> =>
    () => {
      setOptions({ ...difficulty });
    };

  const handleReset = () => {
    minesweeperRef.current.reset();
  };

  const { width, height } = options;
  return (
    <div>
      <MinesweeperMd />
      <table className={styles.table}>
        <tbody>
          {times(
            (y) => (
              <tr key={`row-${y}`}>
                {times(
                  (x) =>
                    getTile(
                      <td
                        key={`tile-x-${x}-y-${y}`}
                        className={classNames({
                          [styles.tile]: true,
                          [styles.tile__unstepped]: true,
                        })}
                        onMouseUp={handleMouseUp(x, y)}
                      >
                        &nbsp;
                      </td>,
                      tiles?.[y]?.[x]
                    ),
                  width
                )}
              </tr>
            ),
            height
          )}
        </tbody>
      </table>
      <div>
        {status === MinesweeperGame.STATUS.UNINITIALIZED && <p>Ready...</p>}
        {status === MinesweeperGame.STATUS.IN_GAME && <p>You must flag {mines} mines to finish</p>}
        {status === MinesweeperGame.STATUS.GAME_OVER && <p>Oops!</p>}
        {status === MinesweeperGame.STATUS.COMPLETE && <p>Bravo! Hooray!</p>}
      </div>
      <div>
        <fieldset>
          <legend>Choose your destiny</legend>
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
          </button>{" "}
          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>{" "}
        </fieldset>
      </div>
    </div>
  );
};

export default Minesweeper;
