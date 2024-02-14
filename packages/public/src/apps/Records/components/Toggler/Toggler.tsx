import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styles from '../../Records.module.scss';
import classNames from 'classnames';

interface TogglerProps {
  children?: ReactNode;
  show?: boolean;
}

const Toggler: FunctionComponent<TogglerProps> = ({ children, show }) => {
  const [toggled, setToggled] = useState(false);
  const toggle = useCallback(() => setToggled((current) => !current), []);

  useEffect(() => {
    if (show != null) {
      setToggled(show);
    }
  }, [show]);

  return (
    <div className={styles.toggler}>
      <div
        className={classNames(styles.toggler_control, {
          [styles.toggler_control__show]: toggled,
        })}
      >
        <span
          role="button"
          onClick={toggle}
          className={styles.toggler_controlButton}
        >
          {toggled ? '-' : '+'}
        </span>
      </div>
      <div
        className={classNames(styles.toggler_content, {
          [styles.toggler_content__show]: toggled,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Toggler;
