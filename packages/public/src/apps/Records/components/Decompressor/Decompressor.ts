'use client';
import { type ComponentType, createElement, useMemo } from 'react';
import { uncompressDiscography } from '../../Records.utils';

interface DecompressorProps<P extends object> {
  discography: Array<string | number>;
  tokens: string;
  sep: string;
  component: ComponentType<P>;
  mapTo?: keyof P;
  otherProps?: P;
}

const Decompressor = <P extends object>({
  discography,
  tokens,
  sep,
  component: Component,
  mapTo,
  otherProps,
}: DecompressorProps<P>) => {
  const uncompressedDiscography = useMemo(
    () => uncompressDiscography(discography, tokens, sep),
    [discography, tokens, sep]
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
