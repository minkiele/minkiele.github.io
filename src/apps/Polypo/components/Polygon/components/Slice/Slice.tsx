import { FunctionComponent, memo } from "react";
import styles from "./Slice.module.scss";

export interface SliceProps {
  radius: number;
  sides: number;
  side: number;
}

const Slice: FunctionComponent<SliceProps> = memo(({ sides, side }) => {
  const angle = Math.PI / sides;
  const height = 50 * Math.cos(angle);
  const width = 100 * Math.sin(angle);
  const rotate = 2 * angle * side;
  const transform = `translateX(-50%) rotate(${rotate}rad)`;
  return (
    <div
      className={styles.slice}
      style={{ width: `${width}%`, height: `${height}%`, transform }}
    />
  );
});

export default Slice;
