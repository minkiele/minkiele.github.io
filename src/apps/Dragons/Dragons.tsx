import { ChangeEventHandler, FunctionComponent, useState } from "react";
import { getDragonFractal } from "../../lib/triangles-dragons/dragons";

const Dragons: FunctionComponent = () => {
  const [dragons, setDragons] = useState<number>(3);
  const handleDragons: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newDragons = parseInt(evt.target.value);
    if (newDragons > 0) {
      setDragons(newDragons);
    }
  };
  return (
    <div>
      <p>
        The Dragon fractal is a fractal obtained by (ideally) folding a piece of
        paper in half in the same direction for a number of times. The figure is
        obtained by unfolding every fold at 90°. I was obsessed with this
        picture since I saw it at the beginning of the chapters in Jurassic
        Park. Twenty years later I searched for it in the Internet and found the
        explanation.
      </p>
      <div>
        <label htmlFor="newDragons">
          This will generate a dragon fractal with the specified iterations
          (after 15 iterations will start to considerably slow down).
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

export default Dragons;
