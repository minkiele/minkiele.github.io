import classNames from 'classnames';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from './TwentyFourClock.module.scss';
import TwentyFourClockMD from './README.md';

const Digit: FunctionComponent<{ digit: number }> = ({ digit }) => {
  const B3 = digit >> 3;
  const B2 = (digit >> 2) & 1;
  const B1 = (digit >> 1) & 1;
  const B0 = digit & 1;
  const L0 = B3 || (B2 && !B1) || (B1 && !B0) || (!B2 && B1);
  const L1 = B3 || !B2 || (!B1 && !B0) || (B1 && B0);
  const L2 = B3 || B1 || (B2 && B0) || (!B2 && !B0);
  const L3 = B3 || (!B1 && !B0) || (B2 && !B1) || (B2 && !B0);
  const L4 = (!B2 && !B0) || (B1 && !B0);
  const L5 =
    B3 || (!B2 && B1) || (!B2 && !B0) || (B1 && !B0) || (B2 && !B1 && B0);
  const L6 = !B1 || B3 || B2 || B0;
  return (
    <div className={styles.digit}>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__h,
          styles.digit_bar__0,
          {
            [styles.digit_bar__active]: L0,
          }
        )}
      ></div>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__v,
          styles.digit_bar__1,
          {
            [styles.digit_bar__active]: L1,
          }
        )}
      ></div>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__h,
          styles.digit_bar__2,
          {
            [styles.digit_bar__active]: L2,
          }
        )}
      ></div>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__v,
          styles.digit_bar__3,
          {
            [styles.digit_bar__active]: L3,
          }
        )}
      ></div>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__v,
          styles.digit_bar__4,
          {
            [styles.digit_bar__active]: L4,
          }
        )}
      ></div>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__h,
          styles.digit_bar__5,
          {
            [styles.digit_bar__active]: L5,
          }
        )}
      ></div>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__v,
          styles.digit_bar__6,
          {
            [styles.digit_bar__active]: L6,
          }
        )}
      ></div>
    </div>
  );
};

const Blinker: FunctionComponent<{ blink: boolean }> = ({ blink }) => (
  <div
    className={classNames(styles.blinker, {
      [styles.blinker__blink]: blink,
    })}
  >
    <div className={styles.blinker_dot}></div>
    <div className={`${styles.blinker_dot} ${styles.blinker_dot__1}`}></div>
  </div>
);

const TwentyFourClock: FunctionComponent = () => {
  const [{ H1, H0, M1, M0, S1, S0 }, setDigit] = useState({
    H1: 0,
    H0: 0,
    M1: 0,
    M0: 0,
    S1: 0,
    S0: 0,
  });
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      const H = now.getHours();
      const M = now.getMinutes();
      const S = now.getSeconds();
      setDigit({
        H1: Math.floor(H / 10),
        H0: H % 10,
        M1: Math.floor(M / 10),
        M0: M % 10,
        S1: Math.floor(S / 10),
        S0: S % 10,
      });
      setBlink(S % 2 === 0);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div>
      <TwentyFourClockMD />
      <div className={styles.clock}>
        <Digit digit={H1} />
        <Digit digit={H0} />
        <Blinker blink={blink} />
        <Digit digit={M1} />
        <Digit digit={M0} />
        <Blinker blink={blink} />
        <Digit digit={S1} />
        <Digit digit={S0} />
      </div>
    </div>
  );
};

export default TwentyFourClock;
