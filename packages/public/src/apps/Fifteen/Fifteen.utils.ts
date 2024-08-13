import { FormEvent } from 'react';

export const parseInputValue = (
  prop: string,
  evt: FormEvent<HTMLFormElement>
): string | undefined => (evt.target as HTMLFormElement)[prop]?.value;

export const constrainInput = (
  input: string | undefined,
  deftval: number,
  filter?: (input: number) => boolean
): number => {
  if (input != null) {
    const numInput = parseInt(input);
    if (!isNaN(numInput) && (filter == null || filter(numInput))) {
      return numInput;
    }
  }
  return deftval;
};
