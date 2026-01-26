'use client';

import { FunctionComponent, useCallback } from 'react';
export { default as ReadmeMd } from './README.md';
import { LightingThreeAnimation } from './Three.utils';
import Container from './components/Container/Container';

const Three: FunctionComponent = () => {
  const handleInitLightingAnimation = useCallback(
    (container: HTMLElement) => new LightingThreeAnimation(container),
    []
  );

  return <Container onInit={handleInitLightingAnimation} />;
};
export default Three;
