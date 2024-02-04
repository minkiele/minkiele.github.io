import styles from './FlipCard.module.scss';
import { FlipCardProps } from './FlipCard.models';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const flipClassNames = {
  enter: styles.startFlip,
  enterActive: styles.startFlipActive,
  enterDone: styles.startFlipDone,
  exit: styles.finishFlip,
  exitActive: styles.finishFlipActive,
  exitDone: styles.finishFlipDone,
};

const flipBackClassNames = {
  enter: styles.startFlipBack,
  enterActive: styles.startFlipBackActive,
  enterDone: styles.startFlipBackDone,
  exit: styles.finishFlipBack,
  exitActive: styles.finishFlipBackActive,
  exitDone: styles.finishFlipBackDone,
};

export default function FlipCard({
  children,
  className,
  isFlipped = false,
}: FlipCardProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [internalStatus, setInternalStatus] = useState(0);
  const handleAdvance = () => {
    setInternalStatus((current) => current + 1);
  };
  useEffect(() => {
    if (isFlipped && internalStatus === 0) {
      setInternalStatus(1);
    } else if (!isFlipped && internalStatus === 2) {
      setInternalStatus(3);
    }
  }, [isFlipped, internalStatus]);
  useEffect(() => {
    if (internalStatus === 4) {
      setInternalStatus(0);
    }
  }, [internalStatus]);

  return (
    <CSSTransition
      in={internalStatus === 1 || internalStatus === 3}
      nodeRef={ref}
      onEntered={handleAdvance}
      timeout={150}
      classNames={internalStatus < 3 ? flipClassNames : flipBackClassNames}
    >
      <span ref={ref} className={className}>
        {typeof children === 'function'
          ? children({
              isFront: internalStatus === 2 || internalStatus === 3,
              isBack: internalStatus < 2 || internalStatus === 4,
            })
          : children}
      </span>
    </CSSTransition>
  );
}
