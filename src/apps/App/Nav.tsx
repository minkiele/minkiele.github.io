import Link from 'next/link';
import { FunctionComponent } from 'react';
import { LazyRouteComponent } from './App.models';

interface NavProps {
  menu: Array<LazyRouteComponent>;
  className?: string;
}

const Nav: FunctionComponent<NavProps> = ({ menu, className }) => (
  <nav className={className}>
    <ul>
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
