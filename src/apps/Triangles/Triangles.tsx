import { ChangeEventHandler, FunctionComponent, useMemo, useState } from "react";
import {
  getTriangle,
  triangleToString,
} from "../../lib/triangles-dragons/triangles";
import styles from './Triangles.module.scss';

const Triangles: FunctionComponent = () => {
  const [triangles, setTriangles] = useState<number>(4);
  const handleTriangles: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newTriangles = parseInt(evt.target.value);
    if (newTriangles > 0) {
      setTriangles(newTriangles);
    }
  };

  const cachedRender = useMemo(() => triangleToString(getTriangle(2 ** triangles), ' ', '*'), [triangles]);

  return (
    <div>
      <p>This is a graphic representation of the Fibonacci sequence, where the
        fillings are odd numbers and the void are even numbers. Using 2<sup>n</sup> steps
        helps rendering full triangles.
      </p>
      <fieldset>
        <legend>Generator controls</legend>
        <label htmlFor="newTriangles">
          This will generate 2<sup>{triangles}</sup> ({2**triangles}) rows
        </label>
        {' '}
        <input
          id="newTriangles"
          type="number"
          onChange={handleTriangles}
          value={triangles}
        />
      </fieldset>
      <pre className={styles.triangles_render}>{cachedRender}</pre>
    </div>
  );
};

export default Triangles;
