import { FunctionComponent, useCallback } from 'react';
import ThreeMD from './README.md';
import { LightingThreeAnimation } from './Three.utils';
import Container from './components/Container/Container';

const Three: FunctionComponent = () => {
  const handleInitLightingAnimation = useCallback((container: HTMLElement) => new LightingThreeAnimation(container), []);

  return (
    <div>
      <ThreeMD />
      <Container onInit={handleInitLightingAnimation} />
    </div>
  );
};
export default Three;
