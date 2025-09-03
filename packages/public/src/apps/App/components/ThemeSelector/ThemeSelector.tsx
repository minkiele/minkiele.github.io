import useTheme, { UseThemeType } from '@/hooks/useTheme';
import { FunctionComponent, MouseEventHandler } from 'react';
import styles from './ThemeSelector.module.scss';
import Emoji from '../Emoji/Emoji';

export interface ThemeSelectorProps {
  theme: ReturnType<typeof useTheme>['theme'];
  onChange: (theme: UseThemeType) => void;
  batterySaver?: boolean;
}

const ThemeSelector: FunctionComponent<ThemeSelectorProps> = ({
  theme,
  onChange,
  batterySaver,
}) => {
  const handleChangeTheme =
    (theme: UseThemeType): MouseEventHandler<HTMLButtonElement> =>
    () => {
      onChange(theme);
    };
  return (
    <div className={styles.themeSelector}>
      <p className="sr-only">
        Current theme: {theme === 'dark' ? 'dark' : 'light'}
      </p>
      <button
        aria-label={
          batterySaver
            ? 'Since it appears you are low on battery theme was automatically set as dark'
            : `Change theme to ${theme === 'dark' ? 'light' : 'dark'}`
        }
        className={styles.themeSelector_switch}
        onClick={handleChangeTheme(theme === 'dark' ? 'light' : 'dark')}
        disabled={batterySaver}
      >
        <Emoji>🔦</Emoji>
      </button>
    </div>
  );
};

export default ThemeSelector;
