import classNames from "classnames";
import { repeat, times } from "ramda";
import {
  ChangeEventHandler,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { SnakeGame, SnakeGameCoords } from "./Snake.lib";
import styles from "./Snake.module.scss";
import SnakeMd from "./README.md";

const Snake: FunctionComponent = () => {
  const [speed, setSpeed] = useState<number>(10);
  const [status, setStatus] = useState<symbol>(SnakeGame.STATUS.IDLE);

  const snakeGame = useRef<SnakeGame>(new SnakeGame());

  const [snake, setSnake] = useState<Array<SnakeGameCoords>>(
    snakeGame.current.getSnake()
  );
  const [apple, setApple] = useState<SnakeGameCoords | undefined>(
    snakeGame.current.getApple()
  );

  useEffect(() => {
    const updateData = () => {
      setSnake(snakeGame.current.getSnake());
      setApple(snakeGame.current.getApple());
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
      switch (evt.key) {
        case "ArrowUp":
        case "w": {
          if (
            gameStatus === SnakeGame.STATUS.IDLE ||
            SnakeGame.STATUS.RUNNING
          ) {
            snakeGame.current.goUp();
          }
          if (gameStatus === SnakeGame.STATUS.IDLE) {
            snakeGame.current.start();
          }
          break;
        }
        case "ArrowDown":
        case "s": {
          if (
            gameStatus === SnakeGame.STATUS.IDLE ||
            SnakeGame.STATUS.RUNNING
          ) {
            snakeGame.current.goDown();
          }
          if (gameStatus === SnakeGame.STATUS.IDLE) {
            snakeGame.current.start();
          }
          break;
        }
        case "ArrowLeft":
        case "a": {
          if (
            gameStatus === SnakeGame.STATUS.IDLE ||
            SnakeGame.STATUS.RUNNING
          ) {
            snakeGame.current.goLeft();
          }
          if (gameStatus === SnakeGame.STATUS.IDLE) {
            snakeGame.current.start();
          }
          break;
        }
        case "ArrowRight":
        case "d": {
          if (
            gameStatus === SnakeGame.STATUS.IDLE ||
            SnakeGame.STATUS.RUNNING
          ) {
            snakeGame.current.goRight();
          }
          if (gameStatus === SnakeGame.STATUS.IDLE) {
            snakeGame.current.start();
          }
          break;
        }
        case " ":
        case "Space":
        case "Enter": {
          if (
            gameStatus === SnakeGame.STATUS.IDLE ||
            gameStatus === SnakeGame.STATUS.PAUSE
          ) {
            snakeGame.current.start();
          } else if (gameStatus === SnakeGame.STATUS.RUNNING) {
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

  const handleReset = () => {
    snakeGame.current.reset();
  };

  return (
    <div>
      <SnakeMd />
      <table className={styles.table}>
        <tbody>
          {times(
            (y) => (
              <tr key={`row-${y}`}>
                {times(
                  (x) => (
                    <td
                      key={`row-${y}-col-${x}`}
                      className={classNames({
                        [styles.cell]: true,
                        [styles.cell__snake]: snake.some(
                          (tract) => tract.x === x && tract.y === y
                        ),
                        [styles.cell__apple]:
                          apple != null && apple.x === x && apple.y === y,
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
            <strong>BRAVO!</strong>
          </p>
        )}
        {status === SnakeGame.STATUS.PAUSE && (
          <p>Do your thing, I'll wait here</p>
        )}
        {status === SnakeGame.STATUS.RUNNING && (
          <>
            {snake.length % 5 === 0 && (
              <p>
                <strong>FAST{repeat("E", snake.length)}R!</strong>
              </p>
            )}
            {snake.length % 5 === 1 && (
              <p>
                <strong>Y{repeat("E", snake.length)}!</strong>
              </p>
            )}
            {snake.length % 5 === 2 && (
              <p>
                <strong>U{repeat("I", snake.length)}!</strong>
              </p>
            )}
            {snake.length % 5 === 3 && (
              <p>
                <strong>OPL{repeat("A", snake.length)}!</strong>
              </p>
            )}
            {snake.length % 5 === 4 && (
              <p>
                <strong>WOOH{repeat("O", snake.length)}!</strong>
              </p>
            )}
          </>
        )}
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
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Snake;
