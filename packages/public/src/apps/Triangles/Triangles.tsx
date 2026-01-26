'use client';

import {
  ChangeEventHandler,
  FunctionComponent,
  useMemo,
  useState,
} from 'react';
import {
  getTriangle,
  triangleToString,
} from '../../lib/triangles-dragons/triangles';
import styles from './Triangles.module.scss';
export { default as ReadmeMd } from './README.md';

const Triangles: FunctionComponent = () => {
  const [triangles, setTriangles] = useState<number>(4);
  const handleTriangles: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newTriangles = parseInt(evt.target.value);
    if (newTriangles >= 0) {
      setTriangles(newTriangles);
    }
  };

  const cachedRender = useMemo(
    () => triangleToString(getTriangle(2 ** triangles), ' ', '*'),
    [triangles]
  );

  return (
    <>
      <fieldset>
        <legend>Generator controls</legend>
        <label htmlFor="newTriangles">
          This will generate 2<sup>{triangles}</sup> ({2 ** triangles}) rows
        </label>{' '}
        <input
          id="newTriangles"
          type="number"
          onChange={handleTriangles}
          value={triangles}
        />
      </fieldset>
      <pre className={styles.triangles_render}>{cachedRender}</pre>
    </>
  );
};

export default Triangles;
