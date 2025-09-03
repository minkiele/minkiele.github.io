import { useCallback, useEffect, useState } from 'react';
import { useBatterySaver } from './useBattery';

export type UseThemeType = 'light' | 'dark';

const STORAGE_KEY = 'io.github.minkiele.theme';

let envTheme = process.env.NEXT_PUBLIC_DEFAULT_THEME as
  | UseThemeType
  | undefined;
if (envTheme !== 'light' && envTheme !== 'dark') {
  envTheme = undefined;
}

const useTheme = (defaultTheme: UseThemeType | undefined = envTheme) => {
  const [theme, themeSetter] = useState<UseThemeType>();
  const batterySaver = useBatterySaver();
  const setTheme = useCallback(
    (theme?: UseThemeType) => {
      themeSetter(batterySaver ? 'dark' : theme ?? defaultTheme);
    },
    [defaultTheme, batterySaver]
  );
  useEffect(() => {
    let storedTheme = (localStorage.getItem(STORAGE_KEY) ?? undefined) as
      | UseThemeType
      | undefined;
    if (
      storedTheme == null ||
      (storedTheme != 'light' && storedTheme != 'dark')
    ) {
      storedTheme = defaultTheme;
    }
    setTheme(storedTheme);
  }, [defaultTheme, setTheme]);
  useEffect(() => {
    const newTheme = batterySaver ? 'dark' : theme ?? defaultTheme;
    if (newTheme == null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }
  }, [theme, defaultTheme, batterySaver]);
  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  return { theme, setTheme, batterySaver };
};

export default useTheme;
