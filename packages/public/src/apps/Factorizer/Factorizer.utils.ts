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
import { useReducer, useCallback, useMemo } from 'react';

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

export const useFactorizer = () => {
  const [output, dispatch] = useReducer(
    (state: UseFactorizerState, action: UseFactorizerAction) => {
      switch (action.type) {
        case 'add': {
          const normalizedInput = normalize(action.value);
          const newFactorized = [
            ...state.factorized,
            getGroupedFactors(normalizedInput),
          ] as FactorizedList;
          return {
            ...state,
            inputs: [...state.inputs, normalizedInput],
            factorized: newFactorized,
            mcm: getSortedMcm(newFactorized),
            mcd: getSortedMcd(newFactorized),
          };
        }
        case 'update': {
          const normalizedInput = normalize(action.value);
          const newInputs = [
            ...state.inputs.slice(0, action.index),
            normalizedInput,
            ...state.inputs.slice(action.index + 1),
          ];
          const newFactorized = [
            ...state.factorized.slice(0, action.index),
            getGroupedFactors(normalizedInput),
            ...state.factorized.slice(action.index + 1),
          ] as FactorizedList;
          return {
            ...state,
            inputs: newInputs,
            factorized: newFactorized,
            mcm: getSortedMcm(newFactorized),
            mcd: getSortedMcd(newFactorized),
          };
        }
        case 'delete': {
          if (state.inputs.length <= 1) {
            return state;
          }
          const newInputs = [
            ...state.inputs.slice(0, action.index),
            ...state.inputs.slice(action.index + 1),
          ];
          const newFactorized = [
            ...state.factorized.slice(0, action.index),
            ...state.factorized.slice(action.index + 1),
          ] as FactorizedList;
          return {
            ...state,
            inputs: newInputs,
            factorized: newFactorized,
            mcm: getSortedMcm(newFactorized),
            mcd: getSortedMcd(newFactorized),
          };
        }
        case 'reset': {
          return {
            inputs: [2],
            factorized: [[[2, 1]]] as FactorizedList,
            mcm: [[2, 1]] as FactorizedNumber,
            mcd: [[2, 1]] as FactorizedNumber,
          };
        }
      }
    },
    {
      inputs: [2],
      factorized: [[[2, 1]]],
      mcd: [[2, 1]],
      mcm: [[2, 1]],
    }
  );

  const add = useCallback(
    (value: string) =>
      dispatch({
        type: 'add',
        value,
      }),
    [dispatch]
  );
  const update = useCallback(
    (index: number, value: string) =>
      dispatch({
        type: 'update',
        index,
        value,
      }),
    [dispatch]
  );
  const del = useCallback(
    (index: number) =>
      dispatch({
        type: 'delete',
        index,
      }),
    [dispatch]
  );

  return useMemo(
    () => ({ ...output, add, update, del }),
    [output, add, update, del]
  );
};
