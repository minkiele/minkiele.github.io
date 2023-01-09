export type Column = 'left' | 'center' | 'right';
export type ReducerState = {
  size: number;
  board: Record<Column, Array<number>>;
  isValid: boolean;
  moves: number;
};
export type ReducerAction =
  | {
      type: 'move';
      from: Column;
      to: Column;
    }
  | {
      type: 'setSize';
      size: number;
    }
  | {
      type: 'reset';
    };

export interface Move {
  from: Column;
  to: Column;
}
