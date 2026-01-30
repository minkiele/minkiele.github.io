'use client';

import classNames from 'classnames';
import {
  ChangeEventHandler,
  FunctionComponent,
  createElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './TwentyFourClock.module.scss';
export { default as ReadmeMd } from './README.md';

const getBit = (digit: number, bit: number = 0): boolean =>
  ((digit >> bit) & 1) === 1;

interface DigitController {
  (digit: number): Record<
    'L0' | 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6',
    boolean
  >;
}

// This controller works for all base 10 digits
// Behavior from 3 upwards is undefined
const fullController: DigitController = (digit) => {
  const B3 = getBit(digit, 3);
  const B2 = getBit(digit, 2);
  const B1 = getBit(digit, 1);
  const B0 = getBit(digit, 0);
  const A1 = B2 && !B1;
  const A2 = B1 && !B0;
  const A3 = !B2 && B1;
  const A4 = !B1 && !B0;
  const A5 = B1 && B0;
  const A6 = !B2 && !B0;
  const A7 = B2 && B0;
  const A8 = B2 && !B0;
  const A9 = A1 && B0;
  const L0 = B3 || A1 || A2 || A3;
  const L1 = !B2 || A4 || A5;
  const L2 = B3 || B1 || A6 || A7;
  const L3 = B3 || A4 || A1 || A8;
  const L4 = A6 || A2;
  const L5 = B3 || A3 || A6 || A2 || A9;
  const L6 = !B1 || B2 || B0;
  return { L0, L1, L2, L3, L4, L5, L6 };
};

// This controller works only for digits from 0 to 5
// Behavior from 6 upwards is undefined
const simpleController: DigitController = (digit) => {
  const B2 = getBit(digit, 2);
  const B1 = getBit(digit, 1);
  const B0 = getBit(digit, 0);
  const A1 = !B2 && !B0;
  const A2 = B2 && B0;
  const A3 = !B1 && !B0;
  const L0 = B2 || B1;
  const L1 = !B2 || !B0;
  const L2 = B1 || A1 || A2;
  const L3 = B2 || A3;
  const L4 = A1;
  const L5 = L2;
  const L6 = !B1 || B0;
  return { L0, L1, L2, L3, L4, L5, L6 };
};

// This controller works from digits from 0 to 2
// Behavior from 3 upwards is undefined
const hourController: DigitController = (digit) => {
  const B1 = getBit(digit, 1);
  const B0 = getBit(digit, 0);
  const L0 = B1;
  const L1 = true;
  const L2 = !B0;
  const L3 = !B1 && !B0;
  const L4 = L2;
  const L5 = L2;
  const L6 = !B1;
  return { L0, L1, L2, L3, L4, L5, L6 };
};

interface DigitProps {
  digit: number;
}

interface LogiclessDigitProps extends DigitProps {
  controller: DigitController;
}

const LogiclessDigit: FunctionComponent<LogiclessDigitProps> = ({
  digit,
  controller,
}) => {
  const { L0, L1, L2, L3, L4, L5, L6 } = controller(digit);
  return (
    <div className={styles.digit}>
      <div
        className={classNames(
          styles.digit_bar,
          styles.digit_bar__h,
          styles.digit_bar__c,
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
          styles.digit_bar__vcl,
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
          styles.digit_bar__hcb,
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
          styles.digit_bar__vcr,
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
          styles.digit_bar__vcr,
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
          styles.digit_bar__hct,
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
          styles.digit_bar__vcl,
          styles.digit_bar__6,
          {
            [styles.digit_bar__active]: L6,
          }
        )}
      ></div>
    </div>
  );
};

const Digit: FunctionComponent<DigitProps> = (props) =>
  createElement(LogiclessDigit, { ...props, controller: fullController });

const SimpleDigit: FunctionComponent<DigitProps> = (props) =>
  createElement(LogiclessDigit, { ...props, controller: simpleController });

const HourDigit: FunctionComponent<DigitProps> = (props) =>
  createElement(LogiclessDigit, { ...props, controller: hourController });

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
  const [{ autoplay, syncAutoplay, audioLoaded }, setAutoplay] = useState({
    autoplay: false,
    syncAutoplay: false,
    audioLoaded: false,
  });

  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    const handleAudioLoad = () => {
      setAutoplay((current) => ({
        ...current,
        audioLoaded: true,
      }));
    };

    const audio = (audioRef.current = new Audio(
      '/assets/24clock64kbpsVar.mp3'
    ));
    audio.loop = true;
    audio.addEventListener('canplay', handleAudioLoad);

    const callback = () => {
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
      const audioReady = audioRef?.current?.readyState === 4;
      setAutoplay((current) => ({
        ...current,
        audioLoaded: audioReady,
        syncAutoplay: current.autoplay && audioReady,
      }));
    };

    callback();
    const timerId = setInterval(callback, 1000);

    return () => {
      clearInterval(timerId);
      audio.pause();
      audio.removeEventListener('canplay', handleAudioLoad);
      // Final cleanup
      audioRef.current = undefined;
    };
  }, []);

  useEffect(() => {
    if (audioLoaded && audioRef.current != null) {
      if (syncAutoplay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [syncAutoplay, audioLoaded]);

  const handleAutoplay =
    (play: boolean): ChangeEventHandler<HTMLInputElement> =>
    () => {
      setAutoplay((current) => ({
        ...current,
        autoplay: play,
        // If play is true then wait for the autoplay otherwise stop immediately
        syncAutoplay: play && current.syncAutoplay,
      }));
    };

  return (
    <>
      <div className={styles.clock}>
        <HourDigit digit={H1} />
        <Digit digit={H0} />
        <Blinker blink={blink} />
        <SimpleDigit digit={M1} />
        <Digit digit={M0} />
        <Blinker blink={blink} />
        <SimpleDigit digit={S1} />
        <Digit digit={S0} />
      </div>
      <fieldset>
        <legend>Settings</legend>
        <input
          type="radio"
          name="autoplay"
          id="autoplayOn"
          value="on"
          onChange={handleAutoplay(true)}
          checked={autoplay}
        />
        <label htmlFor="autoplayOn">I love the sound of inevitability</label>{' '}
        <input
          type="radio"
          name="autoplay"
          id="autoplayOff"
          value="off"
          onChange={handleAutoplay(false)}
          checked={!autoplay}
        />
        <label htmlFor="autoplayOff">It kinda upsets me.</label>
      </fieldset>
    </>
  );
};

export default TwentyFourClock;
