import { FunctionComponent, useCallback } from 'react';
import ThreeMD from './README.md';
import { DocsCubeThreeAnimation, LightingThreeAnimation, SrcCubeThreeAnimation } from './Three.utils';
import Container from './components/Container/Container';

const Three: FunctionComponent = () => {
  const handleInitDocsCubeAnimation = useCallback((container: HTMLElement) => new DocsCubeThreeAnimation(container), []);
  const handleInitSrcCubeAnimation = useCallback((container: HTMLElement) => new SrcCubeThreeAnimation(container), []);
  const handleInitLightingAnimation = useCallback((container: HTMLElement) => new LightingThreeAnimation(container), []);

  return (
    <div>
      <ThreeMD />
      <Container onInit={handleInitLightingAnimation} />
      <Container onInit={handleInitDocsCubeAnimation} />
      <Container onInit={handleInitSrcCubeAnimation} />
    </div>
  );
};
export default Three;
