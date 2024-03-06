import { useEffect, useMemo, useReducer } from 'react';
import { RecordDataSource, RecordDataSources } from '../../Records.models';
import { UseGuessAction, UseGuessOptions, UseGuessState } from './Guess.models';
// import { tss } from 'tss-react';

export const defaultOptions: UseGuessOptions = {
  countdown: 10000,
  guesses: 5,
  rounds: 20,
};

const defaultState: UseGuessState = {
  options: {
    ...defaultOptions,
  },
  rounds: [],
  round: 0,
  guesses: [],
  guessed: [],
  errors: [],
  current: undefined,
};

const isIn = ({ id }: RecordDataSource, deck: RecordDataSources) =>
  deck.some(({ id: deckId }) => deckId === id);

const getRounds = (
  deck: RecordDataSources,
  rounds: number
): RecordDataSources => {
  const cappedRounds = Math.min(rounds, deck.length);
  const output: RecordDataSources = [];
  while (output.length < cappedRounds) {
    const index = Math.floor(Math.random() * deck.length);
    if (!isIn(deck[index], output)) {
      output.push(deck[index]);
    }
  }
  return output;
};

const getGuesses = (
  current: RecordDataSource,
  deck: RecordDataSources,
  guesses: number
) => {
  const cappedGuesses = Math.min(guesses, deck.length);
  const output: RecordDataSources = [current];
  while (output.length < cappedGuesses) {
    const index = Math.floor(Math.random() * deck.length);
    if (!isIn(deck[index], output)) {
      output.push(deck[index]);
    }
  }
  output.sort(() => Math.random() - 0.5);
  return output;
};

export const useGuessGame = (deck: RecordDataSources) => {
  const [state, dispatch] = useReducer(
    (state: UseGuessState, action: UseGuessAction) => {
      switch (action.type) {
        case 'new': {
          return {
            ...state,
            options: { ...action.options },
            rounds: getRounds(deck, action.options.rounds),
            round: 0,
            guesses: [],
            guessed: [],
            errors: [],
            current: undefined,
          };
        }
        case 'next': {
          if (state.round < state.options.rounds) {
            const current = state.rounds[state.round];
            return {
              ...state,
              round: state.round + 1,
              current,
              guesses: getGuesses(current, deck, state.options.guesses),
            };
          } else {
            return { ...state, current: undefined, guesses: [] };
          }
        }
        case 'guess': {
          if (state.current != null) {
            if (action.id === state.current.id) {
              return {
                ...state,
                guessed: [...state.guessed, state.current],
              };
            } else {
              return {
                ...state,
                errors: [...state.errors, state.current],
              };
            }
          }
          return state;
        }
        case 'reset': {
          return { ...defaultState };
        }
        case 'restart': {
          return {
            ...state,
            round: 0,
            guesses: [],
            guessed: [],
            errors: [],
            current: undefined,
          };
        }
      }
    },
    defaultState
  );

  useEffect(() => {
    dispatch({ type: 'reset' });
  }, [deck]);

  const actions = useMemo(
    () => ({
      newGame: (options?: Partial<UseGuessOptions>) =>
        dispatch({ type: 'new', options: { ...defaultOptions, ...options } }),
      nextRound: () => dispatch({ type: 'next' }),
      guess: (id: RecordDataSource['id']) => dispatch({ type: 'guess', id }),
      restartGame: () => dispatch({ type: 'restart' }),
    }),
    []
  );

  return useMemo(() => ({ ...state, ...actions }), [state, actions]);
};

// export const useStyles = tss.withParams<{
//   blur: number;
// }>().create(({ blur }) => ({
//   blurred: {
//     filter: `blur(${blur}px)`,
//   }
// }));
