export type TicTacToeVictoryCoords = Array<Array<number>>;

export interface TicTacToeReducerState {
  matrix: Array<Array<null | symbol>>;
  sign: symbol;
  victoryCoords: TicTacToeVictoryCoords | undefined;
  vsPc: boolean;
  movePc: boolean;
  announce: [number, number] | undefined;
  side: number;
}

export type TicTacToeReducerAction =
  | {
      type: 'mark';
      row: number;
      col: number;
    }
  | {
      type: 'vspc';
      enabled: boolean;
    }
  | ({
      type: 'reset';
    } & Partial<Pick<TicTacToeReducerState, 'side' | 'sign'>>)
  | { type: 'unannounce' };

export interface TicTacToePossibility {
  coords: [number, number];
  ranking: number;
  diagonal: boolean;
}
