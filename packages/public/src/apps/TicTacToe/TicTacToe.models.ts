export type TicTacToeVictoryCoords = Array<Array<number>>;

export interface TicTacToeReducerState {
  matrix: Array<Array<null | symbol>>;
  sign: symbol;
  victoryCoords: TicTacToeVictoryCoords | undefined;
  vsPc: boolean;
  movePc: boolean;
  announce: [number, number] | undefined;
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
  | {
      type: 'reset';
      sign?: symbol;
    }
  | { type: 'unannounce' };

export interface TicTacToePossibility {
  coords: [number, number];
  ranking: number;
  diagonal: boolean;
}
