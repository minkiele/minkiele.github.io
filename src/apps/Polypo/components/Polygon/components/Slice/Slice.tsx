import classNames from "classnames";
import { FunctionComponent, memo } from "react";
import styles from "./Slice.module.scss";

export interface SliceProps {
  radius: number;
  sides: number;
  side: number;
}

const Slice: FunctionComponent<SliceProps> = memo(({ sides, side }) => {
  const angle = Math.PI / sides;
  const baseHeight = 50 * Math.cos(angle);
  const width = 100 * Math.sin(angle);
  const rotate = 2 * angle * side;
  const transform = `translateX(-50%) rotate(${rotate}rad)`;
  const even = sides % 2 === 0;
  const height = baseHeight * (even ? 2 : 1);
  return (
    <div
      className={classNames({
        [styles.slice]: true,
        [styles.slice__even]: even,
        [styles.slice__odd]: !even
      })}
      style={{ width: `${width}%`, height: `${height}%`, transform }}
    />
  );
});

export default Slice;
