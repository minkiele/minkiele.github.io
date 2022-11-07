import { ChangeEventHandler, FunctionComponent, MouseEventHandler, useState } from "react";
import Polygon from "./components/Polygon/Polygon";
import styles from "./Polypo.module.scss";

const castInput = (input: string, deft: number): number => {
  const cast = parseInt(input);
  return isNaN(cast) ? deft : Math.max(cast, deft);
};

const Polypo: FunctionComponent = () => {
  const [{ sides, radius }, setParams] = useState({
    sides: 4,
    radius: 128,
  });

  const handleChangeSides: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setParams((currentParams) => ({
      ...currentParams,
      sides: castInput(evt.target.value, 2),
    }));
  };

  const handleChangeRadius: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setParams((currentParams) => ({
      ...currentParams,
      radius: castInput(evt.target.value, 1),
    }));
  };

  const handleAnimate: MouseEventHandler<HTMLButtonElement> = () => {

  };

  return (
    <div>
      <Polygon sides={sides} radius={radius} className={styles.polypo_polygon} />
      <fieldset>
        <legend>Configuration</legend>
        <label htmlFor="sides">Number of sides</label>
        <input
          name="sides"
          id="sides"
          value={sides}
          onChange={handleChangeSides}
          type="number"
        />
        <label htmlFor="radius">Radius of the surrounding circle</label>
        <input
          name="sides"
          id="sides"
          value={radius}
          onChange={handleChangeRadius}
          type="number"
        />
        <button onClick={handleAnimate}>Animate</button>
      </fieldset>
    </div>
  );
};

export default Polypo;
