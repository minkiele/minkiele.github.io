import { range } from 'ramda';
import { CSSProperties, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { Column, Move, ReducerAction, ReducerState } from './Vietnam.models';

const getInitialState = (size: number): ReducerState => ({
  size,
  board: { left: range(1, size + 1), center: [], right: [] },
  isValid: false,
  moves: 0,
});

export const useVietnam = (defaultSize: number) => {
  const [currentState, dispatch] = useReducer(
    (state: ReducerState, action: ReducerAction) => {
      switch (action.type) {
        case 'move': {
          const isValidMove =
            action.from !== action.to &&
            state.board[action.from].length > 0 &&
            (state.board[action.to].length === 0 || state.board[action.from][0] < state.board[action.to][0]);
          if (isValidMove) {
            const newBoard: ReducerState['board'] = {
              ...state.board,
              [action.from]: state.board[action.from].slice(1),
              [action.to]: [state.board[action.from][0], ...state.board[action.to]],
            };
            const isValid = newBoard.center.length === state.size || newBoard.right.length === state.size;
            return {
              ...state,
              board: newBoard,
              isValid,
              moves: state.moves + 1,
            };
          }
          return state;
        }
        case 'setSize': {
          return getInitialState(action.size);
        }
        case 'reset': {
          return getInitialState(state.size);
        }
      }
    },
    {
      size: defaultSize,
      board: { left: range(1, defaultSize + 1), center: [], right: [] },
      isValid: false,
      moves: 0,
    }
  );

  const setSize = useCallback((size: number) => dispatch({ type: 'setSize', size }), []);
  const move = useCallback((from: Column, to: Column) => dispatch({ type: 'move', from, to }), []);
  const reset = useCallback(() => dispatch({ type: 'reset' }), []);

  useEffect(() => {
    setSize(defaultSize);
  }, [defaultSize, setSize]);

  return useMemo(
    () => ({
      ...currentState,
      setSize,
      move,
      reset,
    }),
    [currentState, setSize, move, reset]
  );
};

export const getStoneStyle = (stone: number, stones: number, minSize = 30): CSSProperties => ({
  width: `calc(${minSize}% + ${((100 - minSize) / Math.max(1, stones - 1)) * (stone - 1)}%)`,
});

const getThirdColumn = (from: Column, to: Column) => {
  switch (from) {
    case 'left':
      return to === 'right' ? 'center' : 'right';
    case 'center':
      return to === 'right' ? 'left' : 'right';
    case 'right':
      return to === 'left' ? 'center' : 'left';
  }
};

/**
 * Solve a Tower of Hanoi
 * @param size Size of the tower
 * @param from Starting column
 * @param to Finishing column
 * @returns a list of moves to solve a Tower of Hanoi
 */
export const getMoves = (size: number, from: Column, to: Column): Array<Move> => {
  const moves: Array<Move> = [];
  const subStackTo = getThirdColumn(from, to);
  if (size > 1) {
    moves.push(...getMoves(size - 1, from, subStackTo));
  }
  moves.push({ stone: size, from, to });
  if (size > 1) {
    moves.push(...getMoves(size - 1, subStackTo, to));
  }
  return moves;
};

export const useTouchSelect = (callback: (from: Column, to: Column) => void) => {
  const [selected, setColumns] = useState<Array<Column>>([]);
  useEffect(() => {
    if (selected.length === 2) {
      callback(selected[0], selected[1]);
      setColumns([]);
    }
  }, [selected, callback]);
  const touchSelect = useCallback((column: Column) => {
    setColumns((current) => [...current, column]);
  }, []);
  return useMemo(() => ({ touchSelected: selected, touchSelect }), [selected, touchSelect]);
};
