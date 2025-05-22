import type { getDiscography } from '@/apps/Records/Records.utils';
import { createStore, useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import MersenneTwister from 'mersenne-twister';
import dayjs from 'dayjs';
import { useEffect } from 'react';

// Mersenne-Twister is a big-ass pseudo-random number generator
// And feeding the same seed value for 24 hours will provide always the same
// sequence of random numbers at every execution, so there's no need
// to store the choice inside browser storage.
// So same devices in the same time zones should provide
// the same pseudo-random sequences.
const getPseudoRandom = () => new MersenneTwister(dayjs().startOf('day').toDate().getTime()).random();

const pickOne = <T extends unknown>(input: Array<T>) =>
  input[Math.floor(input.length * getPseudoRandom())];

export type DiscographyEntry = ReturnType<
  typeof getDiscography
> extends Promise<Array<infer E>>
  ? E
  : never;

const store = createStore<{
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

export const useRotd = (discography: Array<DiscographyEntry>) => {
  const { rotd, setRotd } = useStore(store);

  useEffect(() => {
    const updateRotd = () => {
      if (discography.length > 0 && rotd == null) {
        setRotd(pickOne(discography));
      }
    };
    updateRotd();
    const timerId = setInterval(updateRotd, 60000);
    return () => {
      clearInterval(timerId);
    };
  }, [rotd, setRotd, discography]);

  return rotd;
};
