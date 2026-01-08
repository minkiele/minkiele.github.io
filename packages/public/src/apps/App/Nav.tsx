'use client';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import { LazyRouteComponent } from './App.models';

interface NavProps {
  menu: Array<LazyRouteComponent>;
  className?: string;
  skipToContent?: boolean;
}

const MAIN_ARTICLE = '#main-article';

const Nav: FunctionComponent<NavProps> = ({
  menu,
  className,
  skipToContent = true,
}) => {
  const handleSkipNavigation = () => {
    (
      document
        .querySelector(MAIN_ARTICLE)
        ?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as null | HTMLElement
    )?.focus();
  };
  return (
    <nav className={className}>
      <ul>
        {skipToContent && (
          <li>
            <Link
              href={MAIN_ARTICLE}
              className="sr-only-focusable"
              onClick={handleSkipNavigation}
            >
              Skip to content
            </Link>
          </li>
        )}
        {menu
          .filter(({ list = true }) => list)
          .map(
            ({
              name,
              route,
              prefetch = true,
              archived = false,
              external = false,
            }) => (
              <li key={route}>
                {external ? (
                  // Link to external urls that are not part of the NextJS routing
                  <a href={route}>{name}</a>
                ) : (
                  /* Do not prefetch archived apps or apps where prefetch was explicitly disabled */
                  <Link
                    href={route}
                    prefetch={!prefetch || archived ? false : undefined}
                  >
                    {name}
                  </Link>
                )}
              </li>
            )
          )}
      </ul>
    </nav>
  );
};

export default Nav;
