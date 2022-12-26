import EventEmitter from "events";
import times from "lodash.times";

export interface MinesweeperOptions {
    width: number;
    height: number;
    mines: number;
}

type MinesweeperEnum<T extends string, S = symbol> = Record<T, S>;
type MineSweeperStatus = MinesweeperEnum<'UNINITIALIZED' | 'IN_GAME' | 'GAME_OVER' | 'COMPLETE'>;
type MineSweeperEvent = MinesweeperEnum<'START' | 'STEP' | 'STATUS'>;

type MinesweeperDifficulty = MinesweeperEnum<'EASY' | 'MEDIUM' | 'HARD', MinesweeperOptions>;

export type Minefield = Array<Array<MinefieldTile>>;

export interface MinefieldTile {
    x: number;
    y: number;
    isMine: boolean;
    isFlag: boolean;
    isSteppedOn: boolean;
    surroundingMines: 0;
}

export class Minesweeper {
    public static readonly DIFFICULTY: MinesweeperDifficulty = {
        EASY: {
            width: 9,
            height: 9,
            mines: 10
        },
        MEDIUM: {
            width: 16,
            height: 16,
            mines: 40
        },
        HARD: {
            width: 30,
            height: 16,
            mines: 99
        }
    };
    public static readonly DEFAULT_DIFFICULTY: keyof typeof Minesweeper.DIFFICULTY = 'EASY';

    private static getMinesweeperEnum <T extends string>(...values: Array<T>): MinesweeperEnum<T> {
        return values.reduce<Partial<MinesweeperEnum<T>>>(
          (acc, sym) => ({ ...acc, [sym]: Symbol(sym) }),
          {}
        ) as MinesweeperEnum<T>
    };

    public static readonly STATUS: MineSweeperStatus = Minesweeper.getMinesweeperEnum('UNINITIALIZED', 'IN_GAME', 'GAME_OVER', 'COMPLETE');
    public static readonly EVENT: MineSweeperEvent = Minesweeper.getMinesweeperEnum('START', 'STEP', 'STATUS');

    private options: MinesweeperOptions = {...Minesweeper.DIFFICULTY[Minesweeper.DEFAULT_DIFFICULTY]};
    private tiles: Minefield = [];
    private status: symbol = Minesweeper.STATUS.UNINITIALIZED;

    public getStatus() {
        return this.status;
    }

    private setStatus(status: symbol) {
        this.status = status;
        this.emit(Minesweeper.EVENT.STATUS, this.status);
    }

    private eventEmitter = new EventEmitter();

    public constructor(options?: Partial<MinesweeperOptions>) {
        this.reset(options);
    }

    public reset(options?: Partial<MinesweeperOptions>) {
        if(options != null) {
            this.options = { ...this.options, ...options };
        }
        this.initializeEmptyMinefield();
        this.setStatus(Minesweeper.STATUS.UNINITIALIZED);
    }

    private initializeEmptyMinefield() {
        this.tiles = times(this.options.height, (row) => times<MinefieldTile>(this.options.width, (col) => ({
            isFlag: false,
            isMine: false,
            isSteppedOn: false,
            surroundingMines: 0,
            x: col,
            y: row,
        })));
    }

    public stepOn(x: number, y: number) {
        // If this is flagged don't trigger a step
        const {isFlag, isSteppedOn, isMine} = this.tiles[y][x];
        if(!isFlag) {
            if(!isSteppedOn) {
                if(this.status === Minesweeper.STATUS.UNINITIALIZED) {
                    this.initializeMinefield(x, y);
                    this.setStatus(Minesweeper.STATUS.IN_GAME);
                }
                this.tiles[y][x].isSteppedOn = true;
                if(isMine) {
                    this.setStatus(Minesweeper.STATUS.GAME_OVER);
                } else if(this.isTileEmpty(x, y)) {
                    this.startChainReaction(x, y);
                    this.setStatus(Minesweeper.STATUS.IN_GAME);
                }
            } else if(this.isTileSurroundingFlaggedMines(x, y)) {
                this.setStatus(Minesweeper.STATUS.IN_GAME);
                this.stepOnSurroundingTiles(x, y);
            }
        }
        this.emit(Minesweeper.EVENT.STEP);
        if(this.isMinefieldComplete()) {
            this.setStatus(Minesweeper.STATUS.COMPLETE);
        }
    }

    private stepOnSurroundingTiles(x: number, y: number) {
        this.callSurroundingTiles(x, y, (tX, tY) => {
            const { isMine, isFlag } = this.tiles[tY][tX];
            if(!this.tiles[tY][tX].isSteppedOn) {
                if(this.isTileEmpty(tX, tY)) {
                    this.tiles[tY][tX].isSteppedOn = true;
                    this.startChainReaction(tX, tY);
                } else if(Minesweeper.xor(isMine, isFlag)) {
                    this.setStatus(Minesweeper.STATUS.GAME_OVER);
                } else if(!isFlag) {
                    this.tiles[tY][tX].isSteppedOn = true;
                }
            }
        });
    }

    private isTileSurroundingFlaggedMines(x: number, y: number): boolean {
        const {isFlag, isMine, isSteppedOn, surroundingMines} = this.tiles[y][x];
        if(!isFlag && !isMine && isSteppedOn && surroundingMines > 0) {
            let flaggedMines = 0;
            this.callSurroundingTiles(x, y, (tX, tY) => {
                if(this.tiles[tY][tX].isFlag) {
                    flaggedMines += 1;
                }
            });
            if(flaggedMines === surroundingMines) {
                return true;
            }
        }
        return false;
    }

    private isTileEmpty(x: number, y: number): boolean {
        const { isFlag, isMine, surroundingMines } = this.tiles[y][x];
        return !(isFlag || isMine || surroundingMines > 0);
    }

    private startChainReaction(x: number, y: number) {
        this.callSurroundingTiles(x, y, (tX, tY) => {
            if(!this.tiles[tY][tX].isSteppedOn && !this.tiles[tY][tX].isFlag) {
                if(this.isTileEmpty(tX, tY)) {
                    this.tiles[tY][tX].isSteppedOn = true;
                    this.startChainReaction(tX, tY);
                } else if(this.tiles[tY][tX].surroundingMines > 0) {
                    this.tiles[tY][tX].isSteppedOn = true;
                }
            }
        });
    }

    private initializeMinefield(x: number, y: number) {
        const useSafeArea = this.options.mines > this.options.width * this.options.height - this.getSurroundingTileArea(x, y);
        let mines = 0;
        while(mines < this.options.mines) {
            const mineX = Math.floor(Math.random() * this.options.width);
            const mineY = Math.floor(Math.random() * this.options.height);
            const isInSafeArea = (useSafeArea && (mineX === x || mineY === y)) || (!useSafeArea && this.isTileInArea(x, y, mineX, mineY))
            if(!isInSafeArea && !this.tiles[mineY][mineX].isMine) {
                this.tiles[mineY][mineX].isMine = true;
                mines += 1;
            }
        }
        for(let y = 0; y < this.options.height; y += 1) {
            for(let x = 0; x < this.options.width; x += 1) {
                if(!this.tiles[y][x].isMine) {
                    this.callSurroundingTiles(x, y, (cX, cY) => {
                        if(this.tiles[cY][cX].isMine) {
                            this.tiles[y][x].surroundingMines += 1;
                        }
                    });

                }
            }
        }
    }

    private getSurroundingTileArea(x: number, y: number): number {
        const { minX, maxX, minY, maxY } = this.getSurroundingTileLimits(x, y);
        return (maxX + 1 - minX) * (maxY + 1 - minY);
    }

    private isTileInArea(aX: number, aY: number, tX: number, tY: number): boolean {
        const { minX, maxX, minY, maxY } = this.getSurroundingTileLimits(aX, aY);
        return (tX >= minX && tX <= maxX) && (tY >= minY && tY <= maxY);
    }

    private getSurroundingTileLimits(x: number, y: number): Record<'minX' | 'maxX' | 'minY' | 'maxY', number> {
        const minY = Math.max(0, y - 1);
        const maxY = Math.min(this.options.height - 1, y + 1);
        const minX = Math.max(0, x - 1);
        const maxX = Math.min(this.options.width - 1, x + 1);
        return { minX, maxX, minY, maxY };
    }

    private callSurroundingTiles(x: number, y: number, cb: (tX: number, tY: number) => void) {
        const { minX, maxX, minY, maxY } = this.getSurroundingTileLimits(x, y);
        for(let tY = minY; tY <= maxY; tY += 1) {
            for(let tX = minX; tX <= maxX; tX += 1) {
                if(tX !== x || tY !== y) {
                    cb(tX, tY);
                }
            }
        }
    }

    public toggleFlag(x: number, y: number) {
        if(!this.tiles[y][x].isSteppedOn) {
            this.tiles[y][x].isFlag = !this.tiles[y][x].isFlag;
            this.emit(Minesweeper.EVENT.STEP);
        }
    }

    // Expose Event Emitter API
    public on = this.eventEmitter.on.bind(this.eventEmitter);
    public off = this.eventEmitter.off.bind(this.eventEmitter);
    private emit = this.eventEmitter.emit.bind(this.eventEmitter);

    /**
     * To be solved all mines must not be stepped on and all free tiles must be stepped on.
     * @returns boolean
     */
    private isMinefieldComplete(): boolean {
        return this.tiles.reduce((solved, row) => solved && row.reduce((solvedCol, { isSteppedOn, isMine }) => solvedCol && Minesweeper.xor(isSteppedOn, isMine), true), true);
    }

    private static xor(a: boolean, b: boolean): boolean {
        return (a && !b) || (!a && b);
    }

    public getMinefield(): Minefield {
        // Get a cloned copy of the minefield
        return this.tiles.map((tile) => ({...tile}));
    }

    public getFlaggedMines(): number {
        return this.tiles.reduce((total, row) => total + row.reduce((subtotal, col) => subtotal + (col.isFlag ? 1: 0), 0), 0)
    }

}
