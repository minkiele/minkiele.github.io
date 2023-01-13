import debounce from 'lodash.debounce';
import { useEffect, useRef } from 'react';
import { Camera } from 'three';
import ThreeAnimation from '../../Three.lib';
import styles from '../../Three.module.scss';

interface ContainerProps {
  onInit: (container: HTMLElement) => ThreeAnimation<Camera>;
}

const Container = ({ onInit }: ContainerProps) => {
  const containerDocsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerDocsRef.current;
    if (container != null) {
      const threeAnimation = onInit(container);
      const updateOnResize = debounce(threeAnimation.update.bind(threeAnimation), 50);
      window.addEventListener('resize', updateOnResize);
      threeAnimation.mount();
      threeAnimation.start();
      return () => {
        window.removeEventListener('resize', updateOnResize);
        updateOnResize.cancel();
        threeAnimation.stop();
        threeAnimation.unmount();
      };
    }
  }, [onInit]);
  return <div className={styles.container} ref={containerDocsRef}></div>;
};

export default Container;
