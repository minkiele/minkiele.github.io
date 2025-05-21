import type { getDiscography } from '@/apps/Records/Records.utils';
import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const pickOne = <T extends unknown>(input: Array<T>) =>
  input[Math.floor(input.length * Math.random())];

const storageFactory = (key: string) => ({
  get: () => localStorage.getItem(key),
  set: (value: string) => localStorage.setItem(key, value),
  del: () => localStorage.removeItem(key),
});

export const serialize = <T extends unknown>(input: NonNullable<T>): string =>
  JSON.stringify(input);
export const unserialize = <T extends unknown>(input: string) => {
  try {
    return JSON.parse(input) as T;
  } catch {
    return undefined;
  }
};

export const storage = storageFactory('ROTD');

export type DiscographyEntry = ReturnType<
  typeof getDiscography
> extends Promise<Array<infer E>>
  ? E
  : never;

export interface StoredROTD {
  id: number;
  validity: string;
}

export const store = createStore<{
  rotd: DiscographyEntry | undefined;
  setRotd: (rotd: DiscographyEntry) => void;
}>()(
  immer((set) => ({
    rotd: undefined,
    setRotd: (rotd: DiscographyEntry) => {
      set((state) => {
        state.rotd = rotd;
      });
    },
  }))
);
