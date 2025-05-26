import { useCallback, useEffect, useMemo } from 'react';
import {
  MemoryConfig,
  MemoryDataSource,
  MemoryDataSources,
  MemoryStoreState,
} from './Memory.models';
import { create, useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import MersenneTwister from 'mersenne-twister';

const DEFAULT_SIZE = 12;
const DEFAULT_WAIT = 1500;
const DEFAULT_TRIES = 3;
const DEFAULT_REDEEM = false;

const I = Symbol('IDLE');
const P = Symbol('PLAY');
const G = Symbol('GAMEOVER');
const W = Symbol('WINNER');

export { DEFAULT_SIZE, DEFAULT_WAIT, DEFAULT_TRIES, I, P, G, W };

/**
 * Get the deck size
 * @returns
 */
function getDeckSize(candidate: number, deckSize: number) {
  if (candidate >= deckSize) {
    return deckSize % 2 === 0 ? deckSize : deckSize - 1;
  } else {
    return candidate % 2 === 0 ? candidate : candidate + 1;
  }
}

function drawCards(size: number, deck: MemoryDataSources): MemoryDataSources {
  const length = getDeckSize(size, deck.length);
  const drawed: MemoryDataSources = [];
  const cards: Array<MemoryDataSource | undefined> = Array.from<
    MemoryDataSource | undefined
  >({
    length: length,
  }).fill(undefined);
  const randomizer = new MersenneTwister();
  while (drawed.length < length / 2) {
    const candidate = deck[Math.floor(randomizer.random() * deck.length)];
    if (!drawed.some((current) => current.id === candidate.id)) {
      drawed.push(candidate);
    }
  }
  for (let i = 0; i < drawed.length; i += 1) {
    let placed = 0;
    while (placed < 2) {
      const candidate = Math.floor(randomizer.random() * cards.length);
      if (cards[candidate] == null) {
        cards[candidate] = drawed[i];
        placed += 1;
      }
    }
  }
  return cards as MemoryDataSources;
}

const store = create<MemoryStoreState>()(
  immer((set) => ({
    cards: [],
    matched: [],
    flipped: [],
    status: I,
    left: -1,
    wait: -1,
    redeem: false,
    reset: (action) => {
      set({
        cards: action.cards,
        flipped: [],
        left: action.left,
        matched: [],
        status: P,
        wait: action.wait,
        redeem: action.redeem,
      });
    },
    flip: (action) =>
      set((state) => {
        // I'm playing
        if (state.status === P) {
          // Didn't turn a card?
          if (state.flipped.length === 0) {
            // Turn the card
            state.flipped = [action.index];
          } else {
            // I matched the turned card?
            if (
              // Check also the index because with animations
              // you can try to turn the same card twice and it would count as a correct match
              state.flipped[0] !== action.index &&
              state.cards[state.flipped[0]].id === state.cards[action.index].id
            ) {
              // Add the cards to the matched list
              state.matched.push(state.cards[state.flipped[0]].id);
              // And reset the flipped list
              state.flipped = [];
              // I don't have any match left?
              if (state.matched.length * 2 === state.cards.length) {
                // Add the cards to the matched list and win the game!
                state.status = W;
              } else if (state.redeem) {
                // If redeem is on every time I match two cards I add a chance
                state.left += 1;
              }
              //Didn't match the card
            } else {
              // Mark the card as flipped for flip back
              state.flipped.push(action.index);
              // No more retries
              if (state.left === 0) {
                // Game over
                state.status = G;
              }
            }
          }
        }
      }),
    cover: () =>
      set((state) => {
        state.flipped = [];
        state.left -= 1;
      }),
  }))
);

export function useMemory(source: MemoryDataSources) {
  const {
    cards,
    matched,
    flipped,
    status,
    left,
    wait,
    reset: resetAction,
    cover: coverAction,
    flip: flipAction,
  } = useStore(store);

  const reset = useCallback(
    ({
      size = DEFAULT_SIZE,
      left = DEFAULT_TRIES,
      wait = DEFAULT_WAIT,
      redeem = DEFAULT_REDEEM,
    }: MemoryConfig = {}) => {
      resetAction({
        cards: drawCards(size, source),
        left,
        wait,
        redeem,
      });
    },
    [source, resetAction]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (flipped.length > 1 && left > 0) {
      const timerId = setTimeout(() => {
        coverAction();
      }, wait);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [flipped, left, wait, coverAction]);

  const flip = useCallback(
    (index: number) => {
      if (flipped.length < 2) {
        flipAction({ index });
      }
    },
    [flipped, flipAction]
  );

  const isFlipped = useCallback(
    (index: number) =>
      status === G ||
      flipped.includes(index) ||
      matched.includes(cards[index].id),
    [status, flipped, cards, matched]
  );

  return useMemo(
    () => ({ cards, matched, flipped, status, left, reset, flip, isFlipped }),
    [cards, matched, flipped, status, left, reset, flip, isFlipped]
  );
}
