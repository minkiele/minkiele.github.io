import { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
  MemoryDataSource,
  MemoryDataSources,
  MemoryReducerAction,
  MemoryReducerState,
  MemoryResetAction,
} from './Memory.models';

export const DEFAUlT_SIZE = 12;
export const DEFAULT_WAIT = 1500;
export const DEFAULT_TRIES = 3;

const I = Symbol('IDLE');
const P = Symbol('PLAY');
const G = Symbol('GAMEOVER');
const W = Symbol('WINNER');

export { I, P, G, W };

function drawCards(
  length: number,
  source: MemoryDataSources
): MemoryDataSources {
  const drawed: MemoryDataSources = [];
  const cards: Array<MemoryDataSource | undefined> = Array.from<
    MemoryDataSource | undefined
  >({
    length,
  }).fill(undefined);
  while (drawed.length < length / 2) {
    const candidate = source[Math.floor(Math.random() * source.length)];
    if (!drawed.some((current) => current.id === candidate.id)) {
      drawed.push(candidate);
    }
  }
  for (let i = 0; i < drawed.length; i += 1) {
    let placed = 0;
    while (placed < 2) {
      const candidate = Math.floor(Math.random() * cards.length);
      if (cards[candidate] == null) {
        cards[candidate] = drawed[i];
        placed += 1;
      }
    }
  }
  return cards as MemoryDataSources;
}

export function useMemory(source: MemoryDataSources) {
  const [{ cards, matched, flipped, status, left, wait }, dispatch] = useReducer(
    (state: MemoryReducerState, action: MemoryReducerAction) => {
      switch (action.type) {
        case 'reset': {
          return {
            ...state,
            cards: action.cards,
            flipped: [],
            left: action.left,
            matched: [],
            status: P,
            wait: action.wait,
          };
        }
        case 'flip': {
          // I'm playing
          if (state.status === P) {
            // Didn't turn a card?
            if (state.flipped.length === 0) {
              // Turn the card
              return { ...state, flipped: [action.index] };
            } else {
              // I matched the turned card?
              if (state.cards[state.flipped[0]] === state.cards[action.index]) {
                const newState = {
                  ...state,
                  flipped: [],
                  matched: [...state.matched, state.cards[state.flipped[0]].id],
                };
                // I don't have any match left?
                if ((state.matched.length + 1) * 2 === state.cards.length) {
                  // Add the cards to the matched list and win the game!
                  return { ...newState, status: W };
                } else {
                  // Add the cards to the matched list
                  return newState;
                }
                //Didn't match the card
              } else {
                const newState = {
                  ...state,
                  flipped: [...state.flipped, action.index],
                };
                // I still have some retries
                if (state.left > 0) {
                  // Turn back both cards
                  return newState;
                  // No more retries
                } else {
                  // Game over
                  return {
                    ...newState,
                    flipped: [...state.flipped, action.index],
                    left: 0,
                    status: G,
                  };
                }
              }
            }
          }
          return state;
        }
        case 'cover': {
          // Turn back both cards
          return {
            ...state,
            flipped: [],
            left: state.left - 1,
          };
        }
      }
    },
    {
      cards: [],
      matched: [],
      flipped: [],
      status: I,
      left: -1,
      wait: -1,
    }
  );

  const reset = useCallback(
    (
      {
        size = DEFAUlT_SIZE,
        left = DEFAULT_TRIES,
        wait = DEFAULT_WAIT,
      }: { size?: number } & Partial<Omit<MemoryResetAction, 'cards'>> = {}
    ) => {
      dispatch({ type: 'reset', cards: drawCards(size, source), left, wait });
    },
    [source]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (flipped.length > 1 && left > 0) {
      const timerId = setTimeout(() => {
        dispatch({
          type: 'cover',
        });
      }, wait);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [flipped, left, wait]);

  const flip = useCallback(
    (index: number) => {
      if (flipped.length < 2) {
        dispatch({ type: 'flip', index });
      }
    },
    [flipped]
  );

  const isFlipped = useCallback(
    (index: number) =>
      status === G || flipped.includes(index) || matched.includes(cards[index].id),
    [status, flipped, cards, matched]
  );

  return useMemo(
    () => ({ cards, matched, flipped, status, left, reset, flip, isFlipped }),
    [cards, matched, flipped, status, left, reset, flip, isFlipped]
  );
}
