import { CSSTransition } from 'react-transition-group';
import { ImbriagatorProps } from './Imbriagator.models';
import styles from './Imbriagator.module.scss';
import { useMemo, useRef } from 'react';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import classNames from 'classnames';

export default function Imbriagator({
  children,
  imbriagate,
  className,
  duration,
}: ImbriagatorProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const transClassNames: CSSTransitionClassNames = useMemo(
    () => ({
      enter: styles.enter,
      enterActive: styles[`active_${duration}`],
      enterDone: styles.enterDone,
    }),
    [duration]
  );

  const timeout = useMemo(() => ({ enter: duration }), [duration]);

  return (
    <CSSTransition
      in={!imbriagate}
      classNames={transClassNames}
      timeout={timeout}
      nodeRef={ref}
    >
      <div
        ref={ref}
        className={classNames(className, { [styles.enter]: imbriagate })}
      >
        {children}
      </div>
    </CSSTransition>
  );
}
