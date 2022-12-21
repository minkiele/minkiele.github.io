import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { LazyRouteComponent } from "./App.models";

interface NavProps {
  menu: Array<LazyRouteComponent>;
}

const Nav: FunctionComponent<NavProps> = ({ menu }) => (
  <nav>
    <ul>
      {menu.map(({ name, route }) => (
        <li key={route}>
          <NavLink to={route}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
