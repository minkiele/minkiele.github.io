import { times } from "ramda";

interface SnakeGameCoords {
    x: number;
    y: number;
}

type SnakeGameEnum<T extends string> = Record<T, symbol>;

type SnakeGameDirections = SnakeGameEnum<'U' | 'D' | 'L' | 'R'>;

interface SnakeGameData extends SnakeGameCoords {
    direction: symbol;
    eating: boolean;
    head: boolean;
    tail: boolean;
}

export class SnakeGame {
    public static readonly WIDTH = 24;
    public static readonly HEIGHT = 13;
    public static readonly INITIAL_LENGTH = 5;
    public static readonly DIRECTION: SnakeGameDirections = {
        U: Symbol('U'),
        D: Symbol('D'),
        L: Symbol('L'),
        R: Symbol('R'),
    };

    private static readonly AREA = SnakeGame.WIDTH * SnakeGame.HEIGHT;

    // Speed in Hz (refreshes per second)
    private speed = 1;

    private get refreshSpeed(): number {
        return 1000 / this.speed;
    }

    private _isGameOver = false;

    public get isGameOver(): boolean {
        return this._isGameOver;
    }

    private getNewSnake(): Array<SnakeGameData> {
        return times<SnakeGameData>((x) => ({
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
        if(this.snake.length === SnakeGame.AREA) {
            // Game is complete, no apple can be placed
            return undefined;
        } else {
            // Try to place a new apple in a random position inside the screen
            // If the new position overlaps the snake delete the coordinates and
            // try again until success.
            let apple: SnakeGameCoords | undefined;
            while(apple == null) {
                apple = {
                    x: Math.floor(Math.random() * SnakeGame.WIDTH),
                    y: Math.floor(Math.random() * SnakeGame.HEIGHT),
                };
                // New apple is overlapping the snake, we cannot allow that
                if(this.isAppleOverSnake(apple)) {
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
        // Next direction is dictated if there's an interrupt (arrows were pressed)
        // otherwise we'll replicate head's direction
        const nextDirection = this.nextDirection ?? this.snake.find((tract) => tract.head)?.direction as symbol;
        // If next head position is a wall stop
        // If next head position is a snake tract stop
        // If next head position is an apple eat it
        // Move the rest of the snake and digest the apple
        // If an apple reached the tail of the snake clone
        // the tail into a new tract.
    }

    private timerId: ReturnType<typeof setInterval> | undefined;

    public start() {
        if(this.timerId != null) {
            throw new Error('Game has already started');
        }
        this.timerId = setInterval(() => {
            this.advance();
        }, this.refreshSpeed);
    }

    public stop() {
        if(this.timerId != null) {
            clearInterval(this.timerId);
        }
    }

    public setDirection(direction: symbol) {
        this.nextDirection = direction;
    }

}
