import { FunctionComponent, useCallback, useEffect, useState } from "react";
import styles from "./Circles.module.scss";
import {
  CIRCLES,
  ClockData,
  ClockRelativeSize,
  getClockSizes,
  getGetCircleSize,
} from "./Circles.utils";

const getCircleSizes = () => getClockSizes(new Date());

const Circles: FunctionComponent = () => {
  const [circleSizes, setCircleSizes] = useState<ClockData>(getCircleSizes());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCircleSizes(getCircleSizes());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getDoy = useCallback(
    (circle: keyof ClockRelativeSize, doy: number): number | undefined => {
      return circle === "date" || circle === "day" || circle === "month"
        ? doy
        : undefined;
    },
    []
  );

  const getHour = useCallback(
    (circle: keyof ClockRelativeSize, hour: number): number | undefined => {
      return circle === "hour" || circle === "minute" || circle === "second"
        ? hour
        : undefined;
    },
    []
  );

  const renderedApp = (
    <div className={styles.circles}>
      {CIRCLES.map((circle) => (
        <div className={styles.circles_circleContainer} key={circle}>
          <div
            className={styles.circles_circle}
            data-doy={getDoy(circle, circleSizes.dayOfYear)}
            data-h={getHour(circle, circleSizes.fullHour)}
            style={getGetCircleSize(circleSizes[circle])}
          ></div>
        </div>
      ))}
    </div>
  );
  return (
    <div>
      <p>This is a full clock that renders all the date and time parameters that can be limited into a range.
        Circles are filled in relation to the area, not the radius, and that's a curious effect because you don't expect
        how the same area occupied at the start of a period is free at the end of said period. Also date and time colors
        are statically interpolated and are set for every hour and every day.
        </p>
      {renderedApp}
    </div>
  );
};

export default Circles;
