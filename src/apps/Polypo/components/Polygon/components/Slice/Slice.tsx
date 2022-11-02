import { FunctionComponent, memo } from "react";
import styles from "./Slice.module.scss";

export interface SliceProps {
  radius: number;
  sides: number;
  side: number;
}

const Slice: FunctionComponent<SliceProps> = memo(({ radius, sides, side }) => {
  const angle = Math.PI / sides;
  const height = radius * Math.cos(angle);
  const width = 2 * radius * Math.sin(angle);
  const rotate = 2 * angle * side;
  const transform = `translateX(-50%) rotate(${rotate}rad)`;
  return <div className={styles.slice} style={{ width, height, transform }} />;
});

export default Slice;
