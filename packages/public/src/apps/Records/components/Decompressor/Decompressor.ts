'use client';
import { type ComponentType, createElement, useMemo } from 'react';
import {
  type CompressedDiscography,
  uncompressDiscography,
} from '../../Records.utils';

interface DecompressorProps<P extends object> {
  discography: CompressedDiscography;
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
