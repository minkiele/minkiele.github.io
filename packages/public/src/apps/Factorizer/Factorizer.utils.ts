import {
  adjust,
  countBy,
  head,
  identity,
  map,
  pipe,
  toPairs,
  repeat,
  useWith as rUseWith,
  subtract,
  sortBy,
} from 'ramda';
import { UberMath } from '../../lib/ubermath';
import { useCallback, useMemo } from 'react';
import { createStore, useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const getGroupedFactors = pipe(
  UberMath.factorize,
  countBy(identity),
  toPairs,
  // Since we're grouping numbers
  // the keys (index 0 in the pair) is string
  // and must be parsed to number
  // Also TypeScript does not agree with parseInt
  map(adjust(0, parseInt as typeof identity))
);

type FactorizedNumber = Array<[number, number]>;
type FactorizedList = Array<FactorizedNumber>;

interface UseFactorizerState {
  inputs: Array<number>;
  factorized: FactorizedList;
  mcm: FactorizedNumber;
  mcd: FactorizedNumber;
}

type UseFactorizerAction =
  | {
      type: 'add';
      value: string;
    }
  | {
      type: 'update';
      index: number;
      value: string;
    }
  | {
      type: 'delete';
      index: number;
    }
  | { type: 'reset' };

type ZuUseFactorizerAction = {
  [K in UseFactorizerAction['type']]: (
    action: keyof Omit<UseFactorizerAction & { type: K }, 'type'> extends never
      ? never
      : Omit<UseFactorizerAction & { type: K }, 'type'>
  ) => void;
};

const normalize = (input: string) => {
  const candidate = parseInt(input);
  return isNaN(candidate) ? 2 : Math.abs(Math.floor(candidate));
};

const getMcm = (inputs: FactorizedList) =>
  inputs.reduce<FactorizedNumber>(
    (acc, factors) =>
      factors.reduce<FactorizedNumber>((tAcc, [factor, pow]) => {
        const foundFactor = tAcc.findIndex(([tf]) => tf === factor);
        // Non ho già trovato un fattore comune nel mcd, lo inserisco
        if (foundFactor < 0) {
          return [...tAcc, [factor, pow]];
          // Ho trovato un fattore comune e il suo esponente è più alto lo sostituisco
        } else if (pow >= tAcc[foundFactor][1]) {
          return [
            ...tAcc.slice(0, foundFactor),
            [factor, pow],
            ...tAcc.slice(foundFactor + 1),
          ];
        }
        // Scarto il risultato
        return tAcc;
      }, acc),
    [] as FactorizedNumber
  );
const getMcd = (inputs: FactorizedList) => {
  const mcd = inputs.reduce<FactorizedNumber>((acc, factors, index) => {
    // Array vuoto, inserisco tutta la riga
    if (index === 0) {
      return factors.slice();
      // Se in un'iterazione successiva trovo tutto vuoto so già che è 1, cortocircuito
    } else if (acc.length === 0) {
      return acc;
    }
    // Tengo solo i fattori comuni con il numero che sto per controllare
    const fAcc = acc.filter(([factor]) =>
      factors.some(([tFactor]) => factor === tFactor)
    );
    return factors.reduce<FactorizedNumber>((tAcc, [factor, pow]) => {
      const foundFactor = tAcc.findIndex(([tf]) => tf === factor);
      // Se ho un fattore comune con quello che ho già
      // e il suo esponente è più basso allora lo sostituisco
      if (foundFactor > -1 && pow < tAcc[foundFactor][1]) {
        return [
          ...tAcc.slice(0, foundFactor),
          [factor, pow],
          ...tAcc.slice(foundFactor + 1),
        ];
      }
      return tAcc;
    }, fAcc);
  }, [] as FactorizedNumber);
  // Se alla fine della cura il fattore comune è vuoto ritorno 1.
  if (mcd.length === 0) {
    return [[1, 1]] as FactorizedNumber;
  }
  return mcd;
};

const sorter = sortBy(
  (rUseWith as any)(subtract, repeat(head, 2))
) as typeof identity;
const getSortedMcm = pipe(getMcm, sorter);
const getSortedMcd = pipe(getMcd, sorter);

export const getNumber = (input: FactorizedNumber) =>
  input.reduce<number>((acc, [factor, pow]) => acc * factor ** pow, 1);

const initialStatus: UseFactorizerState = {
  inputs: [2],
  factorized: [[[2, 1]]],
  mcd: [[2, 1]],
  mcm: [[2, 1]],
};

const store = createStore<UseFactorizerState & ZuUseFactorizerAction>()(
  immer((set) => ({
    ...initialStatus,
    add: (action) => {
      const normalizedInput = normalize(action.value);
      set((state) => {
        state.factorized.push(
          getGroupedFactors(normalizedInput) as FactorizedNumber
        );
        state.inputs.push(normalizedInput);
        state.mcm = getSortedMcm(state.factorized);
        state.mcd = getSortedMcd(state.factorized);
      });
    },
    delete: (action) => {
      set((state) => {
        if (state.inputs.length > 1) {
          state.inputs.splice(action.index, 1);
          state.factorized.splice(action.index, 1);
          state.mcm = getSortedMcm(state.factorized);
          state.mcd = getSortedMcd(state.factorized);
        }
      });
    },
    reset: () => {
      set(initialStatus);
    },
    update: (action) => {
      const normalizedInput = normalize(action.value);
      set((state) => {
        state.inputs.splice(action.index, 1, normalizedInput);
        state.factorized.splice(
          action.index,
          1,
          getGroupedFactors(normalizedInput) as FactorizedNumber
        );
        state.mcm = getSortedMcm(state.factorized);
        state.mcd = getSortedMcd(state.factorized);
      });
    },
  }))
);

export const useFactorizer = () => {
  const {
    add: addAction,
    update: updateAction,
    delete: deleteAction,
    ...output
  } = useStore(store);

  const add = useCallback((value: string) => addAction({ value }), [addAction]);
  const update = useCallback(
    (index: number, value: string) =>
      updateAction({
        index,
        value,
      }),
    [updateAction]
  );
  const del = useCallback(
    (index: number) =>
      deleteAction({
        index,
      }),
    [deleteAction]
  );

  return useMemo(
    () => ({ ...output, add, update, del }),
    [output, add, update, del]
  );
};
