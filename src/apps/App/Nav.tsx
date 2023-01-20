import Link from 'next/link';
import { FunctionComponent } from 'react';
import { LazyRouteComponent } from './App.models';

interface NavProps {
  menu: Array<LazyRouteComponent>;
}

const Nav: FunctionComponent<NavProps> = ({ menu }) => (
  <nav>
    <ul>
      {menu.map(({ name, route }) => (
        <li key={route}>
          <Link href={route}>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
