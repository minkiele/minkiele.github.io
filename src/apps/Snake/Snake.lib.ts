import EventEmitter from "events";

export interface SnakeGameCoords {
    x: number;
    y: number;
}

type SnakeGameEnum<T extends string> = Record<T, symbol>;

type SnakeGameDirections = SnakeGameEnum<'U' | 'D' | 'L' | 'R'>;
type SnakeGameStatus = SnakeGameEnum<'IDLE' | 'RUNNING' | 'PAUSE' | 'OVER' | 'COMPLETE'>;
type SnakeGameEvent = SnakeGameEnum<'ADVANCE' | 'STOP' | 'RESET' | 'STATUS'>;

interface SnakeGameData extends SnakeGameCoords {
    direction: symbol;
    eating: boolean;
    head: boolean;
    tail: boolean;
}

/**
 * @link https://galeri12.uludagsozluk.com/596/nokia-3210_707680.jpg For the board size
 */
export class SnakeGame extends EventEmitter {
    public static readonly WIDTH = 24;
    public static readonly HEIGHT = 17;
    public static readonly INITIAL_LENGTH = 5;

    private static getSnakeGameEnum <T extends string>(...values: Array<T>): SnakeGameEnum<T> {
        return values.reduce<Partial<SnakeGameEnum<T>>>(
          (acc, sym) => ({ ...acc, [sym]: Symbol(sym) }),
          {}
        ) as SnakeGameEnum<T>
    };

    public static readonly DIRECTION: SnakeGameDirections = SnakeGame.getSnakeGameEnum('U', 'D', 'L', 'R');
    public static readonly STATUS: SnakeGameStatus = SnakeGame.getSnakeGameEnum('IDLE', 'RUNNING', 'PAUSE', 'OVER', 'COMPLETE');
    public static readonly EVENT: SnakeGameEvent = SnakeGame.getSnakeGameEnum('ADVANCE', 'STOP', 'RESET', 'STATUS');

    private static readonly AREA = SnakeGame.WIDTH * SnakeGame.HEIGHT;

    // Speed in Hz (refreshes per second)
    private speed = 1;

    private get refreshSpeed(): number {
        return 1000 / this.speed;
    }

    private status: symbol = SnakeGame.STATUS.IDLE;

    public getStatus() {
        return this.status;
    }

    private times<T>(generator: (index: number) => T, length: number): Array<T> {
        return Array(length).fill(undefined).map((_, index) => generator(index));
    }

    private getNewSnake(): Array<SnakeGameData> {
        return this.times<SnakeGameData>((x) => ({
            // Index 0 is the head,
            // it's like rendering from right to left
            x: SnakeGame.INITIAL_LENGTH + 3 - x,
            y: Math.floor(SnakeGame.HEIGHT / 2),
            direction: SnakeGame.DIRECTION.R,
            eating: false,
            head: x === 0,
            tail: x === SnakeGame.INITIAL_LENGTH - 1,
        }), SnakeGame.INITIAL_LENGTH);
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

    private nextDirection: symbol | undefined;

    private advance() {
        // We filled the screen, we won!
        if(this.snake.length === SnakeGame.AREA) {
            this.stopAdvancing(SnakeGame.STATUS.COMPLETE);
            // GAME OVER
        }
        // Next direction is dictated if there's an interrupt (arrows were pressed)
        // otherwise we'll replicate head's direction
        const snakeHead = this.getSnakeHead();
        const nextDirection = this.nextDirection ?? snakeHead.direction;
        const nextHeadPosition = this.getNextHeadPosition(nextDirection);
        // If next head position is a wall stop
        if (this.isHittingWall(nextHeadPosition)) {
            this.stopAdvancing(SnakeGame.STATUS.OVER);
            // GAME OVER
        } else 
        // If next head position is a snake tract stop
        if(this.isHittingItself(nextHeadPosition)) {
            this.stopAdvancing(SnakeGame.STATUS.OVER);
            // GAME OVER
        } else {
            // Move the rest of the snake and digest the apple
            // If an apple reached the tail of the snake clone
            // the tail into a new tail.
            for(let i = this.snake.length - 1; i > 0; i -= 1) {
                const tract = this.snake[i];
                // An apple has reached the snake tail, make it grow
                if(tract.tail && tract.eating) {
                    // Copy the last element
                    this.snake.push({
                        ...tract,
                        tail: true,
                        eating: false,
                    });
                    tract.tail = false;
                }
                const nextTract = this.snake[i - 1];
                tract.x = nextTract.x;
                tract.y = nextTract.y;
                tract.direction = nextTract.direction;
                tract.eating = nextTract.eating;
            }
            snakeHead.x = nextHeadPosition.x;
            snakeHead.y = nextHeadPosition.y;
            // If next head position is an apple eat it
            snakeHead.eating = this.apple != null && this.apple.x === nextHeadPosition.x && this.apple.y === nextHeadPosition.y;
            // If the snake ate then 
            if(snakeHead.eating) {
                this.apple = this.getNewAppleCoords();
            }
            snakeHead.direction = nextDirection;
            this.nextDirection = undefined;
            this.emit(SnakeGame.EVENT.ADVANCE);
        }
    }

    private getSnakeHead(): SnakeGameData {
        // Can cast because we can assume there is always a head
        return this.snake.find((tract) => tract.head) as SnakeGameData;
    }

    private isHittingWall(nextHeadPosition: SnakeGameCoords): boolean {
        return nextHeadPosition.x < 0 || nextHeadPosition.x >= SnakeGame.WIDTH || nextHeadPosition.y < 0 || nextHeadPosition.y >= SnakeGame.HEIGHT;
    }

    private isHittingItself(nextHeadPosition: SnakeGameCoords): boolean {
        return this.snake.reduce((isColliding, tract) => isColliding || (!tract.head && tract.x === nextHeadPosition.x && tract.y === nextHeadPosition.y), false);
    }

    private getNextHeadPosition(nextDirection: symbol): SnakeGameCoords {
        const head = this.getSnakeHead();
        switch (nextDirection) {
            case SnakeGame.DIRECTION.U: {
                return { x: head.x, y: head.y - 1 };
            }
            case SnakeGame.DIRECTION.D: {
                return { x: head.x, y: head.y + 1 };
            }
            case SnakeGame.DIRECTION.L: {
                return { x: head.x - 1, y: head.y };
            }
            case SnakeGame.DIRECTION.R: {
                return { x: head.x + 1, y: head.y };
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
        if(reason != null) {
            this.setStatus(reason);
            this.emit(SnakeGame.EVENT.STOP);
        }
    }

    public stop() {
        this.stopAdvancing(SnakeGame.STATUS.PAUSE);
    }

    public setDirection(nextDirection: symbol) {
        const currentDirection = this.getSnakeHead().direction;
        // Direction must not be opposite
        if(this.isNewDirectionValid(nextDirection, currentDirection)) {
            this.nextDirection = nextDirection;
        }
    }

    private isNewDirectionValid(newDirection: symbol, currentDirection: symbol): boolean {
        return (currentDirection === SnakeGame.DIRECTION.U && newDirection !== SnakeGame.DIRECTION.D) ||
            (currentDirection === SnakeGame.DIRECTION.D && newDirection !== SnakeGame.DIRECTION.U) ||
            (currentDirection === SnakeGame.DIRECTION.L && newDirection !== SnakeGame.DIRECTION.R) ||
            (currentDirection === SnakeGame.DIRECTION.R && newDirection !== SnakeGame.DIRECTION.L);
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
        if(this.timerId != null) {
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
        this.emit(SnakeGame.EVENT.RESET);
    }

}
