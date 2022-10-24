import { ChangeEventHandler, FunctionComponent, useState } from "react";
import {
  getTriangle,
  triangleToString,
} from "../../lib/triangles-dragons/triangles";

const Triangles: FunctionComponent = () => {
  const [triangles, setTriangles] = useState<number>(8);
  const handleTriangles: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newTriangles = parseInt(evt.target.value);
    if (newTriangles > 0) {
      setTriangles(newTriangles);
    }
  };

  return (
    <div>
      <p>This is a graphic representation of the Fibonacci sequence, where the
        fillings are odd numbers and the void are even numbers. Using 2<sup>n</sup> steps
        helps rendering full triangles.
      </p>
      <div>
        <label htmlFor="newTriangles">
          This will generate 2<sup>{triangles}</sup> rows
        </label>
        <input
          id="newTriangles"
          type="number"
          onChange={handleTriangles}
          value={triangles}
        />
      </div>
      <pre>{triangleToString(getTriangle(2 ** triangles))}</pre>
    </div>
  );
};

export default Triangles;
