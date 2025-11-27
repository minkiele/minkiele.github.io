'use client';
import { ComponentType, createElement, useEffect, useMemo, useState } from 'react';
import { Discography, uncompressDiscography } from '../../Records.utils';

interface DecompressorProps<P extends object> {
  discography: string;
  component: ComponentType<P>;
  mapTo?: keyof P;
  otherProps?: P;
}

const Decompressor = <P extends object>({
  discography,
  component: Component,
  mapTo,
  otherProps,
}: DecompressorProps<P>) => {

  const [uncompressedDiscography, setUncompressedDiscography] = useState<Discography>([]);
  useEffect(() => {
    uncompressDiscography(discography).then(setUncompressedDiscography);
  }, [discography]);
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

Decompressor.displayName = 'Decompressoro';

export default Decompressor;
