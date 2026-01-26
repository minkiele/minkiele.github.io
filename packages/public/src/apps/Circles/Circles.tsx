'use client';

import { FunctionComponent, useEffect, useState } from 'react';
import styles from './Circles.module.scss';
import {
  CIRCLES,
  ClockData,
  getClockSizes,
  getDoy,
  getGetCircleSize,
  getHour,
} from './Circles.utils';
export { default as ReadmeMd } from './README.md';

const Circles: FunctionComponent = () => {
  const [circleSizes, setCircleSizes] = useState<ClockData>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCircleSizes(getClockSizes(new Date()));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.circles}>
      {CIRCLES.map((circle) => (
        <div className={styles.circles_circleContainer} key={circle}>
          <div
            className={styles.circles_circle}
            data-doy={getDoy(circle, circleSizes?.dayOfYear)}
            data-h={getHour(circle, circleSizes?.fullHour)}
            style={getGetCircleSize(circleSizes?.[circle] ?? 1)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Circles;
