import EventEmitter from "events";
import times from "lodash.times";

export interface TetrisTile {
    // Tetris tetromino
    type: symbol | undefined;
    x: number;
    y: number;
}

// English equivalent of Tetramino is "Tetromino", not "Tetramin"

type TetrisEnum<T extends string> = Record<T, symbol>;

type TetrisDirection = TetrisEnum<'U' | 'D' | 'L' | 'R'>;
type TetrisTetrominoType = TetrisEnum<'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z'>;
type TetrisEvent = TetrisEnum<'UPDATE_SCORE' | 'UPDATE_SPEED'>;

export class Tetris {

    private static getTetrisEnum<T extends string>(...values: Array<T>): TetrisEnum<T> {
        return values.reduce<Partial<TetrisEnum<T>>>(
            (acc, sym) => ({ ...acc, [sym]: Symbol(sym) }),
            {}
        ) as TetrisEnum<T>
    };

    public static readonly TETROMINO: TetrisTetrominoType = Tetris.getTetrisEnum('I', 'J', 'L', 'O', 'T', 'S', 'Z');
    public static readonly EVENT: TetrisEvent = Tetris.getTetrisEnum('UPDATE_SCORE', 'UPDATE_SPEED');
    public static readonly DIRECTION: TetrisDirection = Tetris.getTetrisEnum('U', 'D', 'L', 'R');

    public static readonly WIDTH = 10;
    public static readonly HEIGHT = 30;

    private eventEmitter = new EventEmitter();

    // Expose Event Emitter API
    public on = this.eventEmitter.on.bind(this.eventEmitter);
    public off = this.eventEmitter.off.bind(this.eventEmitter);
    public emit = this.eventEmitter.emit.bind(this.eventEmitter);

    private score = 0;

    public getScore(): number {
        return this.score;
    }

    private setScore(score: number): this {
        this.score = score;
        this.emit(Tetris.EVENT.UPDATE_SCORE, this.score);
        return this;
    }

    private speed = 1;

    private get refreshRate(): number {
        return 1000 / this.speed;
    }

    public getSpeed(): number {
        return this.speed;
    }

    private setSpeed(speed: number): this {
        this.speed = speed;
        this.emit(Tetris.EVENT.UPDATE_SPEED, this.speed);
        return this;
    }

    private currentTetromino: symbol | undefined;

    public getCurrentTetromino(): symbol | undefined {
        return this.currentTetromino;
    }

    private setRandomTetromino(): this {
        const tetrominos = [Tetris.TETROMINO.I, Tetris.TETROMINO.O, Tetris.TETROMINO.L, Tetris.TETROMINO.J, Tetris.TETROMINO.S, Tetris.TETROMINO.Z];
        this.currentTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
        return this;
    }

    private matrix: Array<Array<TetrisTile>> = times(Tetris.HEIGHT, (y) => times<TetrisTile>(Tetris.WIDTH, (x) => ({ x, y, type: undefined })));

}

// Rotation matrix: https://en.wikipedia.org/wiki/Rotation_matrix
// This is a 90° counter-clockwise rotation matrix on a plane where origin is 0, 0
// [0 -1][x]
// [1  0][y]
// xr = -y
// yr = x

//https://en.wikipedia.org/wiki/Translation_(geometry)#Matrix_representation
// Translate matrix (must add one dimension)
// [1 0 vx][x]
// [0 1 vy][y]
// [0 0  1][1]
// xt = x + vx
// yt = y + vy

interface TetrisTetrominoCoord {
    x: number;
    y: number;
}

class TetrisTetromino {
    private tetromino: Array<TetrisTetrominoCoord> = [];
    private offset: TetrisTetrominoCoord = {x: 0, y: 0};
    public constructor(private type: symbol) {
        switch(this.type) {
            case Tetris.TETROMINO.I:
                this.tetromino = [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}];
                this.offset = {x: 0, y: -2};
                break;
            case Tetris.TETROMINO.J:
                this.tetromino = [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 2}];
                this.offset = {x: -1, y: -1};
                break;
            case Tetris.TETROMINO.L:
                this.tetromino = [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}];
                this.offset = {x: 0, y: -1};
                break;
            case Tetris.TETROMINO.O:
                this.tetromino = [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: 1, y: 1}];
                this.offset = {x: 0, y: 0};
                break;
            case Tetris.TETROMINO.S:
                this.tetromino = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}];
                this.offset = {x: -1, y: 0};
                break;
            case Tetris.TETROMINO.T:
                this.tetromino = [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}];
                this.offset = {x: -1, y: -1};
                break;
            case Tetris.TETROMINO.Z:
                this.tetromino = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}];
                this.offset = {x: -1, y: 0};
                break;
        }
    }
    public rotate(): this {
        this.tetromino = this.tetromino.map((tile) => {
            // Center the tetromino on its own cartesian plane
            const translated = {x: tile.x + this.offset.x, y: tile.y + this.offset.y};
            // Rotate it 90° counterclockwise
            const rotated = {x: -translated.y, y: translated.x};
            // Unapply the translation
            return {x: rotated.x - this.offset.x, y: rotated.y - this.offset.y};
        });

        return this;
    }
}
