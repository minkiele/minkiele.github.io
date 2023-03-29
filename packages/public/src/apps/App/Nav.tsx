import Link from 'next/link';
import { FunctionComponent } from 'react';
import { LazyRouteComponent } from './App.models';

interface NavProps {
  menu: Array<LazyRouteComponent>;
  className?: string;
  skipToContent?: boolean;
}

const Nav: FunctionComponent<NavProps> = ({ menu, className, skipToContent = true }) => (
  <nav className={className}>
    <ul>
      {skipToContent && <li>
        <Link href="#main-title" className="sr-only-focusable">Skip to content</Link>
      </li>}
      {menu.map(({ name, route, prefetch, archived }) => (
        <li key={route}>
          {/* Do not prefetch archived apps or apps where prefetch was explicitly disabled */}
          <Link href={route} prefetch={prefetch === false ? false : (archived === true ? false : undefined)}>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
