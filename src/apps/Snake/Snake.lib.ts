import EventEmitter from 'events';
import times from 'lodash.times';

export interface SnakeGameCoords {
  x: number;
  y: number;
}

type SnakeGameEnum<T extends string> = Record<T, symbol>;

type SnakeGameDirections = SnakeGameEnum<'U' | 'D' | 'L' | 'R'>;
type SnakeGameStatus = SnakeGameEnum<'IDLE' | 'RUNNING' | 'PAUSE' | 'OVER' | 'COMPLETE'>;
type SnakeGameEvent = SnakeGameEnum<'ADVANCE' | 'STOP' | 'RESET' | 'STATUS'>;

interface SnakeGameData extends SnakeGameCoords {
  eating: boolean;
}

/**
 * @link https://galeri12.uludagsozluk.com/596/nokia-3210_707680.jpg For the board size
 * To improve reactivity and performance I tried a few tricks:
 * First attempt was to throttle the advance and flush the calls every direction change
 * but it got skipped too many times during the update cycle, completely unreliable.
 * Second attempt was to call advance() every direction change without attempting any
 * throttle, with calls too close to the next update cycle you'd have this sensation of
 * doing 2 interactions instead of one. Also, a 180 turn became impossible.
 * Third attempt was to call advance() every direction change but adding a flag to signal
 * the next update cycle to skip the advance() call. It gave a very fast response on
 * direction change but then a "freezing" because of the skipped update.
 * So far the first implementation with a pooling update cycle is the best.
 */
export class SnakeGame {
  public static readonly WIDTH = 24;
  public static readonly HEIGHT = 17;
  public static readonly INITIAL_LENGTH = 5;

  private static getSnakeGameEnum<T extends string>(...values: Array<T>): SnakeGameEnum<T> {
    return values.reduce<Partial<SnakeGameEnum<T>>>((acc, sym) => ({ ...acc, [sym]: Symbol(sym) }), {}) as SnakeGameEnum<T>;
  }

  public static readonly DIRECTION: SnakeGameDirections = SnakeGame.getSnakeGameEnum('U', 'D', 'L', 'R');
  public static readonly STATUS: SnakeGameStatus = SnakeGame.getSnakeGameEnum('IDLE', 'RUNNING', 'PAUSE', 'OVER', 'COMPLETE');
  public static readonly EVENT: SnakeGameEvent = SnakeGame.getSnakeGameEnum('ADVANCE', 'STOP', 'RESET', 'STATUS');

  private static readonly AREA = SnakeGame.WIDTH * SnakeGame.HEIGHT;

  private eventEmitter = new EventEmitter();

  // Speed in Hz (refreshes per second)
  private speed = 1;

  private get refreshSpeed(): number {
    return 1000 / this.speed;
  }

  private status: symbol = SnakeGame.STATUS.IDLE;

  private readonly headIndex = 0;
  private get tailIndex(): number {
    return this.snake.length - 1;
  }

  private hasWalls = true;

  public constructor(speed?: number, hasWalls?: boolean) {
    if (speed != null) {
      this.setSpeed(speed);
    }
    if (hasWalls != null) {
      this.setWalls(hasWalls);
    }
  }

  public getStatus() {
    return this.status;
  }

  private getNewSnake(): Array<SnakeGameData> {
    const y = Math.floor(SnakeGame.HEIGHT / 2);
    return times<SnakeGameData>(SnakeGame.INITIAL_LENGTH, (x) => ({
      // Index 0 is the head,
      // it's like rendering from right to left
      x: SnakeGame.INITIAL_LENGTH + 3 - x,
      y,
      eating: false,
    }));
  }

  private snake: Array<SnakeGameData> = this.getNewSnake();

  private getNewAppleCoords(): SnakeGameCoords | undefined {
    if (this.snake.length === SnakeGame.AREA) {
      // Game is complete, no apple can be placed
      return undefined;
    } else {
      // Try to place a new apple in a random position inside the screen
      // If the new position overlaps the snake delete the coordinates and
      // try again until success.
      let apple: SnakeGameCoords | undefined;
      while (apple == null) {
        apple = {
          x: Math.floor(Math.random() * SnakeGame.WIDTH),
          y: Math.floor(Math.random() * SnakeGame.HEIGHT),
        };
        // New apple is overlapping the snake, we cannot allow that
        if (this.isAppleOverSnake(apple)) {
          apple = undefined;
        }
      }
      return apple;
    }
  }

  private isAppleOverSnake(apple: SnakeGameCoords): boolean {
    return this.snake.reduce((overlap, tract) => overlap || (tract.x === apple.x && tract.y === apple.y), false);
  }

  private apple: SnakeGameCoords | undefined = this.getNewAppleCoords();

  private currentDirection = SnakeGame.DIRECTION.R;
  private nextDirection: symbol | undefined;

  private advance() {
    // We filled the screen, we won!
    if (this.snake.length === SnakeGame.AREA) {
      this.stopAdvancing(SnakeGame.STATUS.COMPLETE);
      // GAME OVER
    }
    // Next direction is dictated if there's an interrupt (arrows were pressed)
    // otherwise we'll replicate head's direction
    const snakeHead = this.getSnakeHead();
    const nextDirection = this.nextDirection ?? this.currentDirection;
    const nextHeadPosition = this.getNextHeadPosition(nextDirection);
    // If next head position is a wall stop
    if (this.isHittingWall(nextHeadPosition)) {
      this.stopAdvancing(SnakeGame.STATUS.OVER);
      // GAME OVER
    }
    // If next head position is a snake tract stop
    else if (this.isHittingItself(nextHeadPosition)) {
      this.stopAdvancing(SnakeGame.STATUS.OVER);
      // GAME OVER
    } else {
      // Move the rest of the snake and digest the apple
      // If an apple reached the tail of the snake clone
      // the tail into a new tail.
      for (let i = this.snake.length - 1; i > 0; i -= 1) {
        const tract = this.snake[i];
        // An apple has reached the snake tail, make it grow
        if (i === this.tailIndex && tract.eating) {
          // Copy the last element
          this.snake.push({
            ...tract,
            eating: false,
          });
        }
        const nextTract = this.snake[i - 1];
        tract.x = nextTract.x;
        tract.y = nextTract.y;
        tract.eating = nextTract.eating;
      }
      snakeHead.x = nextHeadPosition.x;
      snakeHead.y = nextHeadPosition.y;
      // If next head position is an apple eat it
      snakeHead.eating = this.apple != null && this.apple.x === nextHeadPosition.x && this.apple.y === nextHeadPosition.y;
      // If the snake ate then
      if (snakeHead.eating) {
        this.apple = this.getNewAppleCoords();
      }
      this.nextDirection = undefined;
      this.currentDirection = nextDirection;
      this.emit(SnakeGame.EVENT.ADVANCE);
    }
  }

  private getSnakeHead(): SnakeGameData {
    // Can cast because we can assume there is always a head
    return this.snake[this.headIndex];
  }

  private isHittingWall(nextHeadPosition: SnakeGameCoords): boolean {
    return (
      this.hasWalls &&
      (nextHeadPosition.x < 0 || nextHeadPosition.x >= SnakeGame.WIDTH || nextHeadPosition.y < 0 || nextHeadPosition.y >= SnakeGame.HEIGHT)
    );
  }

  private isHittingItself(nextHeadPosition: SnakeGameCoords): boolean {
    // There is one exception: when the head is hitting the tail
    // but the tail is not eating an apple then it will move away
    // the next refresh so it does not count as a hit.
    return this.snake.reduce(
      (isColliding, tract, index) =>
        isColliding || ((this.tailIndex !== index || tract.eating) && tract.x === nextHeadPosition.x && tract.y === nextHeadPosition.y),
      false
    );
  }

  private getNextHeadPosition(nextDirection: symbol): SnakeGameCoords {
    const head = this.getSnakeHead();
    switch (nextDirection) {
      case SnakeGame.DIRECTION.U: {
        return {
          x: head.x,
          y: this.hasWalls ? head.y - 1 : (head.y + SnakeGame.HEIGHT - 1) % SnakeGame.HEIGHT,
        };
      }
      case SnakeGame.DIRECTION.D: {
        return {
          x: head.x,
          y: this.hasWalls ? head.y + 1 : (head.y + 1) % SnakeGame.HEIGHT,
        };
      }
      case SnakeGame.DIRECTION.L: {
        return {
          x: this.hasWalls ? head.x - 1 : (head.x + SnakeGame.WIDTH - 1) % SnakeGame.WIDTH,
          y: head.y,
        };
      }
      case SnakeGame.DIRECTION.R: {
        return {
          x: this.hasWalls ? head.x + 1 : (head.x + 1) % SnakeGame.WIDTH,
          y: head.y,
        };
      }
      default: {
        throw new Error('Unrecognized direction');
      }
    }
  }

  private timerId: ReturnType<typeof setInterval> | undefined;

  private setStatus(status: symbol) {
    this.status = status;
    this.emit(SnakeGame.EVENT.STATUS, this.status);
  }

  public start() {
    if (this.timerId != null) {
      throw new Error('Game has already started');
    }
    this.setStatus(SnakeGame.STATUS.RUNNING);
    this.timerId = setInterval(() => {
      this.advance();
    }, this.refreshSpeed);
  }

  private stopAdvancing(reason?: symbol) {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
    if (reason != null) {
      this.setStatus(reason);
      this.emit(SnakeGame.EVENT.STOP);
    }
  }

  public stop() {
    this.stopAdvancing(SnakeGame.STATUS.PAUSE);
  }

  public setDirection(nextDirection: symbol) {
    // Direction must not be opposite
    if (this.isNewDirectionValid(nextDirection, this.currentDirection)) {
      this.nextDirection = nextDirection;
    }
  }

  private isNewDirectionValid(newDirection: symbol, currentDirection: symbol): boolean {
    return (
      (currentDirection === SnakeGame.DIRECTION.U && newDirection !== SnakeGame.DIRECTION.D) ||
      (currentDirection === SnakeGame.DIRECTION.D && newDirection !== SnakeGame.DIRECTION.U) ||
      (currentDirection === SnakeGame.DIRECTION.L && newDirection !== SnakeGame.DIRECTION.R) ||
      (currentDirection === SnakeGame.DIRECTION.R && newDirection !== SnakeGame.DIRECTION.L)
    );
  }

  public goUp() {
    this.setDirection(SnakeGame.DIRECTION.U);
  }
  public goDown() {
    this.setDirection(SnakeGame.DIRECTION.D);
  }
  public goLeft() {
    this.setDirection(SnakeGame.DIRECTION.L);
  }
  public goRight() {
    this.setDirection(SnakeGame.DIRECTION.R);
  }

  public setSpeed(speed: number) {
    this.speed = speed;
    if (this.timerId != null) {
      // Do not change the status, we just need to replace the timer
      this.stopAdvancing();
      this.start();
    }
  }

  public getSnake(): Array<SnakeGameCoords> {
    return this.snake.map((tract) => ({ x: tract.x, y: tract.y }));
  }

  public getApple(): SnakeGameCoords | undefined {
    return this.apple == null ? this.apple : { ...this.apple };
  }

  public reset() {
    this.stopAdvancing(SnakeGame.STATUS.IDLE);
    this.snake = this.getNewSnake();
    this.apple = this.getNewAppleCoords();
    this.nextDirection = SnakeGame.DIRECTION.R;
    this.emit(SnakeGame.EVENT.RESET);
  }

  public setWalls(hasWalls: boolean) {
    this.hasWalls = hasWalls;
  }

  // Expose Event Emitter API
  public on = this.eventEmitter.on.bind(this.eventEmitter);
  public off = this.eventEmitter.off.bind(this.eventEmitter);
  private emit = this.eventEmitter.emit.bind(this.eventEmitter);
}
