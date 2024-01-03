'use client';

import { UseGoogleAnalyticsPageviews } from '@/apps/App/App.analytics';
import useTheme from '@/hooks/useTheme';
import { ReactNode, Suspense } from 'react';
import Nav from '@/apps/App/Nav';
import { lazyRouteComponents } from '@/apps/App/App';
import ThemeSelector from '@/apps/ThemeSelector/ThemeSelector';

export default function Template({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="App">
      <aside>
        <Nav menu={lazyRouteComponents} />
        <ThemeSelector onChange={setTheme} theme={theme} />
      </aside>
      <article id="main-article">{children}</article>
      <Suspense fallback={null}>
        <UseGoogleAnalyticsPageviews />
      </Suspense>
    </div>
  );
}
