import {
  FunctionComponent,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styles from '../../Records.module.scss';
import classNames from 'classnames';

interface ToggleEventHandler {
  (evt: MouseEvent<HTMLSpanElement>, current: boolean): void;
}

interface TogglerProps {
  children?: ReactNode;
  className?: string;
  show?: boolean;
  onToggle?: ToggleEventHandler;
}

const Toggler: FunctionComponent<TogglerProps> = ({
  children,
  className,
  show,
  onToggle,
}) => {
  const [toggled, setToggled] = useState(false);
  const toggle = useCallback(() => setToggled((current) => !current), []);

  const isCtaRendered = show == null || onToggle == null;

  const handleToggle: MouseEventHandler<HTMLSpanElement> = (evt) => {
    onToggle?.(evt, toggled);
    if (!evt.isDefaultPrevented()) {
      toggle();
    }
  };

  useEffect(() => {
    if (show != null) {
      setToggled(show);
    }
  }, [show]);

  return (
    <div
      className={classNames(styles.toggler, className, {
        [styles.toggler__show]: toggled,
      })}
    >
      {isCtaRendered && (
        <div className={styles.toggler_control}>
          <span
            role="button"
            onClick={handleToggle}
            className={styles.toggler_controlButton}
            aria-label={toggled ? 'Hide text' : 'Show text'}
          >
            {toggled ? '-' : '+'}
          </span>
        </div>
      )}
      <div className={styles.toggler_content}>{children}</div>
    </div>
  );
};

export default Toggler;
