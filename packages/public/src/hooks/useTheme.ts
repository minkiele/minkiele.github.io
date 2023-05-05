import { useCallback, useEffect, useState } from 'react';

export type UseThemeType = 'light' | 'dark';

const STORAGE_KEY = 'io.github.minkiele.theme';

let envTheme = process.env.NEXT_PUBLIC_DEFAULT_THEME as UseThemeType | undefined;
if(envTheme !== 'light' && envTheme !== 'dark') {
  envTheme = undefined;
}

const useTheme = (defaultTheme: UseThemeType | undefined = envTheme) => {
  const [theme, themeSetter] = useState<UseThemeType>();
  const setTheme = useCallback(
    (theme?: UseThemeType) => {
      themeSetter(theme ?? defaultTheme);
    },
    [defaultTheme]
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
    themeSetter(storedTheme);
  }, [defaultTheme]);
  useEffect(() => {
    const newTheme = theme ?? defaultTheme;
    if (newTheme == null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }
  }, [theme, defaultTheme]);
  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  return { theme, setTheme };
};

export default useTheme;
