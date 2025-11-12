'use client';
import { ComponentType, createElement, useMemo } from 'react';
import {
  uncompressDiscography,
  type getDiscography,
} from '../../Records.utils';

type Discography = ReturnType<typeof getDiscography> extends Promise<infer R>
  ? R
  : never;

interface DecompressorProps<P extends object> {
  discography: Discography;
  tokens: Array<string>;
  component: ComponentType<P>;
  mapTo?: keyof P;
  otherProps?: P;
}

const Decompressor = <P extends object>({
  discography,
  tokens,
  component: Component,
  mapTo,
  otherProps,
}: DecompressorProps<P>) => {
  const uncompressedDiscography = useMemo(
    () => uncompressDiscography(discography, tokens),
    [discography, tokens]
  );
  const props = useMemo(
    () =>
      ({
        ...otherProps,
        [mapTo ?? 'discography']: uncompressedDiscography,
      } as P),
    [otherProps, mapTo, uncompressedDiscography]
  );
  return createElement(Component, props);
};

Decompressor.displayName = 'Decompressor';

export default Decompressor;
