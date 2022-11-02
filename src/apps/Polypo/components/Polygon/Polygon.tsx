import classNames from "classnames";
import { times } from "ramda";
import { FunctionComponent, memo } from "react";
import Slice from "./components/Slice/Slice";
import styles from "./Polygon.module.scss";

interface PolygonProps {
  sides: number;
  radius: number;
}

const Polygon: FunctionComponent<PolygonProps> = memo(({ sides, radius }) => (
  <div
    className={classNames({
      [styles.polygon]: true,
      [styles.polygon__aspectRatio]: radius == null,
    })}
    style={
      radius == null
        ? undefined
        : {
            width: 2 * radius,
            height: 2 * radius,
          }
    }
  >
    {times(
      (side) => (
        <Slice key={side} radius={radius} sides={sides} side={side} />
      ),
      sides
    )}
  </div>
));

export default Polygon;
