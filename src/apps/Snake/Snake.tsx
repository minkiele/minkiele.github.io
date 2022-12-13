import classNames from "classnames";
import { thunkify, times } from "ramda";
import {
  ChangeEventHandler,
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { SnakeGame } from "./Snake.lib";
import styles from "./Snake.module.scss";
import SnakeMd from "./README.md";
import { A, getBoard, S } from "./Snake.utils";

const Snake: FunctionComponent = () => {
  const [speed, setSpeed] = useState<number>(10);
  const [hasWalls, setWalls] = useState<boolean>(true);
  const [status, setStatus] = useState<symbol>(SnakeGame.STATUS.IDLE);
  const snakeGame = useRef<SnakeGame>(new SnakeGame(speed, hasWalls));
  const [board, setBoard] = useState<Array<Array<symbol>>>(
    getBoard(snakeGame.current.getSnake(), snakeGame.current.getApple())
  );

  useEffect(() => {
    const updateData = () => {
      setBoard(
        getBoard(snakeGame.current.getSnake(), snakeGame.current.getApple())
      );
    };
    snakeGame.current.addListener(SnakeGame.EVENT.ADVANCE, updateData);
    snakeGame.current.addListener(SnakeGame.EVENT.RESET, updateData);
    const updateStatus = (statusVariation: symbol) => {
      setStatus(statusVariation);
    };
    snakeGame.current.addListener(SnakeGame.EVENT.STATUS, updateStatus);

    const handleKeyUp = (evt: KeyboardEvent) => {
      evt.preventDefault();
      const gameStatus = snakeGame.current.getStatus();
      const isWaiting =
        gameStatus === SnakeGame.STATUS.IDLE ||
        gameStatus === SnakeGame.STATUS.PAUSE;
      const isGameNotEnded =
        isWaiting || gameStatus === SnakeGame.STATUS.RUNNING;
      switch (evt.key) {
        case "ArrowUp":
        case "w": {
          if (isGameNotEnded) {
            snakeGame.current.goUp();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case "ArrowDown":
        case "s": {
          if (isGameNotEnded) {
            snakeGame.current.goDown();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case "ArrowLeft":
        case "a": {
          if (isGameNotEnded) {
            snakeGame.current.goLeft();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case "ArrowRight":
        case "d": {
          if (isGameNotEnded) {
            snakeGame.current.goRight();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case " ":
        case "Space":
        case "Enter": {
          if (isWaiting) {
            snakeGame.current.start();
          } else if (isGameNotEnded) {
            snakeGame.current.stop();
          } else {
            snakeGame.current.reset();
            snakeGame.current.start();
          }
        }
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      snakeGame.current.removeListener(SnakeGame.EVENT.ADVANCE, updateData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      snakeGame.current.addListener(SnakeGame.EVENT.STATUS, updateStatus);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    snakeGame.current.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    snakeGame.current.setWalls(hasWalls);
  }, [hasWalls]);

  useEffect(() => {
    if (status === SnakeGame.STATUS.RUNNING) {
      document.body.classList.add("stopScrolling");
      document.querySelector("html")?.classList.add("stopScrolling");
    } else {
      document.body.classList.remove("stopScrolling");
      document.querySelector("html")?.classList.remove("stopScrolling");
    }
  }, [status]);

  const handleSetSpeed: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const intSize = parseInt(evt.target.value);
    setSpeed(Math.max(1, isNaN(intSize) ? 1 : intSize));
  };

  const handleSetWalls: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setWalls(evt.target.checked);
  };

  const handleReset = () => {
    snakeGame.current.reset();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGamepadThunk = useCallback(thunkify((direction: symbol) => {
    const gameStatus = snakeGame.current.getStatus();
    const isWaiting =
      gameStatus === SnakeGame.STATUS.IDLE ||
      gameStatus === SnakeGame.STATUS.PAUSE;
    const isGameNotEnded =
      isWaiting || gameStatus === SnakeGame.STATUS.RUNNING;
      if (isGameNotEnded) {
        snakeGame.current.setDirection(direction);
      }
      if (isWaiting) {
        snakeGame.current.start();
      }
  }), []);

  return (
    <div>
      <SnakeMd />
      <table
        className={classNames({
          [styles.table]: true,
          [styles.table__noWalls]: !hasWalls,
        })}
      >
        <tbody>
          {times(
            (y) => (
              <tr key={`row-${y}`}>
                {times(
                  (x) => (
                    <td
                      key={`row-${y}-col-${x}-board-${board[y][x].toString()}`}
                      className={classNames({
                        [styles.cell]: true,
                        [styles.cell__snake]: board[y][x] === S,
                        [styles.cell__apple]: board[y][x] === A,
                      })}
                    >
                      &nbsp;
                    </td>
                  ),
                  SnakeGame.WIDTH
                )}
              </tr>
            ),
            SnakeGame.HEIGHT
          )}
        </tbody>
      </table>
      <div>
        {status === SnakeGame.STATUS.IDLE && <p>Insert coin to play...</p>}
        {status === SnakeGame.STATUS.OVER && (
          <p>
            <strong>GAME OVER.</strong>
          </p>
        )}
        {status === SnakeGame.STATUS.COMPLETE && (
          <p>
            <strong>And that's how it's done.</strong>
          </p>
        )}
        {status === SnakeGame.STATUS.PAUSE && (
          <p>Do your thing, I'll wait here...</p>
        )}
        {status === SnakeGame.STATUS.RUNNING && <p>Run Forrest, Run!</p>}
      </div>
      <div className={styles.gamepad}>
        <div>
          <button onClick={handleGamepadThunk(SnakeGame.DIRECTION.U)}>Up</button>
        </div>
        <div className={styles.gamepad_center}>
          <div>
            <button onClick={handleGamepadThunk(SnakeGame.DIRECTION.L)}>Left</button>
          </div>
          <div>
            <button onClick={handleGamepadThunk(SnakeGame.DIRECTION.R)}>Right</button>
          </div>
        </div>
        <div>
          <button onClick={handleGamepadThunk(SnakeGame.DIRECTION.D)}>Down</button>
        </div>
      </div>
      <div>
        <fieldset>
          <legend>Settings</legend>
          <label htmlFor="speed">Speed:</label>{" "}
          <input
            id="speed"
            type="number"
            onChange={handleSetSpeed}
            value={speed}
          />{" "}
          <input
            id="hasWalls"
            name="hasWalls"
            checked={hasWalls}
            onChange={handleSetWalls}
            type="checkbox"
            value="hasWalls"
          />{" "}
          <label htmlFor="hasWalls">Has walls</label>{" "}
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Snake;
