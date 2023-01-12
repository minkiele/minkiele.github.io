import { FunctionComponent, useEffect, useRef } from 'react';
import ThreeMD from './README.md';
import styles from './Three.module.scss';
import debounce from 'lodash.debounce';
import { getDocsCubeAnimation, getSrcCubeAnimation } from './Three.utils';

const Three: FunctionComponent = () => {
  const containerDocsRef = useRef<HTMLDivElement | null>(null);
  const containerSrcRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerDocsRef.current;
    if (container != null) {
      const { start, stop, update, mount, unmount } = getDocsCubeAnimation(container);
      const updateOnResize = debounce(update, 50);
      window.addEventListener('resize', updateOnResize);
      mount();
      start();
      return () => {
        window.removeEventListener('resize', updateOnResize);
        updateOnResize.cancel();
        stop();
        unmount();
      };
    }
  }, []);

  useEffect(() => {
    const container = containerSrcRef.current;
    if (container != null) {
      const { start, stop, update, mount, unmount } = getSrcCubeAnimation(container);
      const updateOnResize = debounce(update, 50);
      window.addEventListener('resize', updateOnResize);
      mount();
      start();
      return () => {
        window.removeEventListener('resize', updateOnResize);
        updateOnResize.cancel();
        stop();
        unmount();
      };
    }
  }, []);

  return (
    <div>
      <ThreeMD />
      <div className={styles.container} ref={containerDocsRef}></div>
      <div className={styles.container} ref={containerSrcRef}></div>
    </div>
  );
};
export default Three;
