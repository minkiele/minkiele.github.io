import { ChangeEventHandler, FunctionComponent, useState } from "react";
import { getDragonFractal } from "../../lib/triangles-dragons/dragons";
import {
  getTriangle,
  triangleToString,
} from "../../lib/triangles-dragons/triangles";

const TrianglesAndDragons: FunctionComponent = () => {
  const [triangles, setTriangles] = useState<number>(8);
  const [dragons, setDragons] = useState<number>(13);
  const handleTriangles: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newTriangles = parseInt(evt.target.value);
    if (newTriangles > 0) {
      setTriangles(newTriangles);
    }
  };
  const handleDragons: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newDragons = parseInt(evt.target.value);
    if (newDragons > 0) {
      setDragons(newDragons);
    }
  };
  return (
    <div>
      <h2>Triangles</h2>
      <div>
        <label htmlFor="newTriangles">
          This will generate 2<sup>{triangles}</sup> variants
        </label>
        <input
          id="newTriangles"
          type="number"
          onChange={handleTriangles}
          value={triangles}
        />
      </div>
      <pre>{triangleToString(getTriangle(2 ** triangles))}</pre>
      <h2>Dragons</h2>
      <div>
        <label htmlFor="newDragons">
          This will generate a dragon fractal with the specified iteractions
        </label>
        <input
          id="newDragons"
          type="number"
          onChange={handleDragons}
          value={dragons}
        />
      </div>
      <pre>{getDragonFractal(dragons).toString()}</pre>
    </div>
  );
};

export default TrianglesAndDragons;
