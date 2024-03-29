"use client"

import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import styles from './Circles.module.scss';
import { CIRCLES, ClockData, ClockRelativeSize, getClockSizes, getGetCircleSize } from './Circles.utils';
import CirclesMd from './README.md';

const getCircleSizes = () => getClockSizes(new Date());

const Circles: FunctionComponent = () => {
  const [circleSizes, setCircleSizes] = useState<ClockData>();

  useEffect(() => {
    setCircleSizes(getCircleSizes());
    const intervalId = setInterval(() => {
      setCircleSizes(getCircleSizes());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getDoy = useCallback((circle: keyof ClockRelativeSize, doy: number): number | undefined => {
    return circle === 'date' || circle === 'day' || circle === 'month' ? doy : undefined;
  }, []);

  const getHour = useCallback((circle: keyof ClockRelativeSize, hour: number): number | undefined => {
    return circle === 'hour' || circle === 'minute' || circle === 'second' ? hour : undefined;
  }, []);

  const renderedApp = circleSizes != null && (
    <div className={styles.circles}>
      {CIRCLES.map((circle) => (
        <div className={styles.circles_circleContainer} key={circle}>
          <div
            className={styles.circles_circle}
            data-doy={getDoy(circle, circleSizes.dayOfYear)}
            data-h={getHour(circle, circleSizes.fullHour)}
            style={getGetCircleSize(circleSizes[circle])}></div>
        </div>
      ))}
    </div>
  );
  return (
    <div>
      <CirclesMd />
      {renderedApp}
    </div>
  );
};

export default Circles;
