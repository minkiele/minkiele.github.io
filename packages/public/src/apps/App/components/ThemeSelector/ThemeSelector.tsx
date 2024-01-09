import useTheme, { UseThemeType } from '@/hooks/useTheme';
import { FunctionComponent, MouseEventHandler } from 'react';
import styles from './ThemeSelector.module.scss';
import Emoji from '../Emoji/Emoji';

export interface ThemeSelectorProps {
  theme: ReturnType<typeof useTheme>['theme'];
  onChange: (theme: UseThemeType) => void;
}

const ThemeSelector: FunctionComponent<ThemeSelectorProps> = ({
  theme,
  onChange,
}) => {
  const handleChangeTheme =
    (theme: UseThemeType): MouseEventHandler<HTMLButtonElement> =>
    () => {
      onChange(theme);
    };
  return (
    <div className={styles.themeSelector}>
      <p className="sr-only">Current theme: {theme === 'dark' ? 'dark' : 'light'}</p>
      <button
        aria-label={`Change theme to ${theme === 'dark' ? 'light' : 'dark'}`}
        className={styles.themeSelector_switch}
        onClick={handleChangeTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Emoji>🔦</Emoji>
      </button>
    </div>
  );
};

export default ThemeSelector;
