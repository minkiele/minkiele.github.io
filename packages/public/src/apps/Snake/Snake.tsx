'use client';

import classNames from 'classnames';
import { thunkify } from 'ramda';
import {
  ChangeEventHandler,
  FunctionComponent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SnakeGame, SnakeGameCoords } from './Snake.lib';
import styles from './Snake.module.scss';
export { default as ReadmeMd } from './README.md';
import { getCellStyle, getSortedSnake } from './Snake.utils';
import Emoji from '../App/components/Emoji/Emoji';
import { event } from '../App/App.analytics';

interface SnakeTileProps {
  tile: SnakeGameCoords;
  className?: string;
}

const SnakeTile: FunctionComponent<SnakeTileProps> = memo(
  ({ tile, className }) => (
    <div
      className={classNames({
        [styles.cell]: true,
        [className as string]: className,
      })}
      style={getCellStyle(tile)}
    >
      &nbsp;
    </div>
  )
);

SnakeTile.displayName = 'SnakeTile';

const Snake: FunctionComponent = () => {
  const [speed, setSpeed] = useState<number>(10);
  const [hasWalls, setWalls] = useState<boolean>(true);
  const [status, setStatus] = useState<symbol>(SnakeGame.STATUS.IDLE);
  const snakeGame = useRef<SnakeGame>(new SnakeGame(speed, hasWalls));
  const [snake, setSnake] = useState<Array<SnakeGameCoords>>();
  const [apple, setApple] = useState<SnakeGameCoords>();

  useEffect(() => {
    const updateData = () => {
      setSnake(getSortedSnake(snakeGame.current.getSnake()));
      setApple(snakeGame.current.getApple());
    };

    updateData();

    snakeGame.current.on(SnakeGame.EVENT.ADVANCE, updateData);
    snakeGame.current.on(SnakeGame.EVENT.RESET, updateData);
    const updateStatus = (statusVariation: symbol) => {
      setStatus(statusVariation);
    };
    snakeGame.current.on(SnakeGame.EVENT.STATUS, updateStatus);

    const handleKeyDown = (evt: KeyboardEvent) => {
      evt.preventDefault();
      const gameStatus = snakeGame.current.getStatus();
      const isWaiting =
        gameStatus === SnakeGame.STATUS.IDLE ||
        gameStatus === SnakeGame.STATUS.PAUSE;
      const isGameNotEnded =
        isWaiting || gameStatus === SnakeGame.STATUS.RUNNING;
      switch (evt.key) {
        case 'ArrowUp':
        case 'w': {
          if (isGameNotEnded) {
            snakeGame.current.goUp();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case 'ArrowDown':
        case 's': {
          if (isGameNotEnded) {
            snakeGame.current.goDown();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case 'ArrowLeft':
        case 'a': {
          if (isGameNotEnded) {
            snakeGame.current.goLeft();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case 'ArrowRight':
        case 'd': {
          if (isGameNotEnded) {
            snakeGame.current.goRight();
          }
          if (isWaiting) {
            snakeGame.current.start();
          }
          break;
        }
        case ' ':
        case 'Space':
        case 'Enter': {
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

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      snakeGame.current.off(SnakeGame.EVENT.STATUS, updateStatus);
      snakeGame.current.off(SnakeGame.EVENT.RESET, updateData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      snakeGame.current.off(SnakeGame.EVENT.ADVANCE, updateData);
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
      document.body.classList.add(styles.stopScrolling);
      document.querySelector('html')?.classList.add(styles.stopScrolling);
    } else {
      document.body.classList.remove(styles.stopScrolling);
      document.querySelector('html')?.classList.remove(styles.stopScrolling);
    }

    if (
      status === SnakeGame.STATUS.OVER ||
      status === SnakeGame.STATUS.COMPLETE
    ) {
      event({
        action: 'snake',
        label: 'over',
      });
    }

    if (status === SnakeGame.STATUS.COMPLETE) {
      event({
        action: 'snake',
        label: 'complete',
      });
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
  const handleGamepadThunk = useCallback(
    thunkify((direction: symbol) => {
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
    }),
    []
  );

  return (
    <>
      <div
        className={classNames({
          [styles.board]: true,
          [styles.board__noWalls]: !hasWalls,
        })}
      >
        {snake?.map((tile) => (
          <SnakeTile
            tile={tile}
            className={styles.cell__snake}
            key={`tile-x-${tile.x}-y-${tile.y}`}
          />
        ))}
        {apple != null && (
          <SnakeTile tile={apple} className={styles.cell__apple} />
        )}
      </div>
      <div>
        {status === SnakeGame.STATUS.IDLE && <p>Insert coin to play...</p>}
        {status === SnakeGame.STATUS.OVER && (
          <p>
            <strong>GAME OVER.</strong>
          </p>
        )}
        {status === SnakeGame.STATUS.COMPLETE && (
          <p>
            <strong>And that&#39;s how it&#39;s done.</strong>
          </p>
        )}
        {status === SnakeGame.STATUS.PAUSE && (
          <p>Do your thing, I&#39;ll wait here...</p>
        )}
        {status === SnakeGame.STATUS.RUNNING && <p>Run Forrest, Run!</p>}
      </div>
      <div className={styles.gamepad}>
        <div className={styles.gamepad_row}>
          <div className={styles.gamepad_col}>
            <button
              className={styles.gamepad_button}
              onMouseDown={handleGamepadThunk(SnakeGame.DIRECTION.U)}
              aria-label="Up"
            >
              <Emoji>⬆️</Emoji>
            </button>
          </div>
          <div className={styles.gamepad_col}>
            <button
              className={styles.gamepad_button}
              onMouseDown={handleGamepadThunk(SnakeGame.DIRECTION.R)}
              aria-label="Right"
            >
              <Emoji>➡️</Emoji>
            </button>
          </div>
        </div>
        <div className={styles.gamepad_row}>
          <div className={styles.gamepad_col}>
            <button
              className={styles.gamepad_button}
              onMouseDown={handleGamepadThunk(SnakeGame.DIRECTION.L)}
              aria-label="Left"
            >
              <Emoji>⬅️</Emoji>
            </button>
          </div>
          <div className={styles.gamepad_col}>
            <button
              className={styles.gamepad_button}
              onMouseDown={handleGamepadThunk(SnakeGame.DIRECTION.D)}
              aria-label="Down"
            >
              <Emoji>⬇️</Emoji>
            </button>
          </div>
        </div>
      </div>
      <div>
        <fieldset>
          <legend>Settings</legend>
          <label htmlFor="speed">Speed:</label>{' '}
          <input
            id="speed"
            type="number"
            onChange={handleSetSpeed}
            value={speed}
          />{' '}
          <input
            id="hasWalls"
            name="hasWalls"
            checked={hasWalls}
            onChange={handleSetWalls}
            type="checkbox"
            value="hasWalls"
          />{' '}
          <label htmlFor="hasWalls">Has walls</label>{' '}
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default Snake;
