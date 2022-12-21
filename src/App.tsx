import {
  FunctionComponent,
  lazy,
  MouseEventHandler,
  Suspense,
  useEffect,
  useRef,
} from "react";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import {
  LazyRouteComponent,
  Menu as MenuList,
  MenuProps,
  Submenu,
} from "./App.models";
import "./App.scss";
import { flattenMenu, useTrackMenu } from "./App.utils";

const Info = lazy(() => import("./apps/Info/Info"));
const SudokuUI = lazy(() => import("./apps/SudokuUI/SudokuUI"));
const Anagrammator = lazy(() => import("./apps/Anagrammator/Anagrammator"));
const Cruciverba = lazy(() => import("./apps/Cruciverba/Cruciverba"));
const OraInParole = lazy(() => import("./apps/OraInParole/OraInParole"));
const NumeriCasuali = lazy(() => import("./apps/NumeriCasuali/NumeriCasuali"));
const Circles = lazy(() => import("./apps/Circles/Circles"));
const JumpMatrix = lazy(() => import("./apps/JumpMatrix/JumpMatrix"));
const Triangles = lazy(() => import("./apps/Triangles/Triangles"));
const Dragons = lazy(() => import("./apps/Dragons/Dragons"));
const DemoDogs = lazy(() => import("./apps/DemoDogs/DemoDogs"));
const Polypo = lazy(() => import("./apps/Polypo/Polypo"));
const Factorizer = lazy(() => import("./apps/Factorizer/Factorizer"));
const Vietnam = lazy(() => import("./apps/Vietnam/Vietnam"));
const Snake = lazy(() => import("./apps/Snake/Snake"));
const Minesweeper = lazy(() => import("./apps/Minesweeper/Minesweeper"));

type LazyComponent = ReturnType<typeof lazy>;

const menu: MenuList<LazyComponent> = [
  {
    route: "/",
    name: "Minkiele",
    component: Info,
    setTitle: false,
  },
  {
    id: "archive",
    name: "The archive",
    components: [
      {
        route: "/sudoku",
        name: "Sudoku",
        component: SudokuUI,
      },
      {
        route: "/anagrammator",
        name: "Anagrammator",
        component: Anagrammator,
      },
      {
        route: "/cruciverba",
        name: "Cruciverba",
        component: Cruciverba,
      },
      {
        route: "/numeri-a-caso",
        name: "Numeri a caso",
        component: NumeriCasuali,
      },
      {
        route: "/parole",
        name: "Ora a parole",
        component: OraInParole,
      },
      {
        route: "/palle",
        name: "Ora a palla",
        component: Circles,
      },
      {
        route: "/jump-matrix",
        name: "Jumps",
        component: JumpMatrix,
      },
      {
        route: "/fibonacci-triangle",
        name: "Fibonacci's triangle",
        component: Triangles,
      },
      {
        route: "/dragon-fractal",
        name: "The Dragon Fractal",
        component: Dragons,
      },
      {
        route: "/demodogs",
        name: "Demo Dogs",
        component: DemoDogs,
      },
      {
        route: "/folypo",
        name: "Folypo",
        component: Polypo,
      },
      {
        route: "/factorize",
        name: "Factorizer",
        component: Factorizer,
      },
    ],
  },
  {
    route: "/vietnam",
    name: "Vietnam",
    component: Vietnam,
  },
  {
    route: "/snake",
    name: "Snake",
    component: Snake,
  },
  {
    route: "/minesweeper",
    name: "Minesweeper",
    component: Minesweeper,
  },
];

const routes = flattenMenu(menu);

interface DocumentTitleProps {
  title?: string;
  sep?: string;
}

const DocumentTitle: FunctionComponent<DocumentTitleProps> = ({
  title,
  sep = " - #",
}) => {
  const originalTitleRef = useRef<string>(document.title);
  useEffect(() => {
    const originalTitle = originalTitleRef.current;
    const titleParts = [];
    if (originalTitle.length > 0) {
      titleParts.push(originalTitle);
    }
    if (title != null && title.length > 0) {
      titleParts.push(title);
    }
    if (titleParts.length > 0) {
      document.title = titleParts.join(sep);
    }
    return () => {
      if (titleParts.length > 0) {
        document.title = originalTitle;
      }
    };
  }, [title, sep]);
  return <>{undefined}</>;
};

const Menu: FunctionComponent<MenuProps<LazyComponent>> = ({
  menu,
  expanded,
  toggleExpanded,
}) => {
  const handleToggleExpanded =
    (id: string): MouseEventHandler<HTMLAnchorElement> =>
    (evt) => {
      evt.preventDefault();
      toggleExpanded(id);
    };
  return (
    <ul>
      {menu.map((menuItem, index) => (
        <>
          {(menuItem as LazyRouteComponent<LazyComponent>).route != null ? (
            <li
              key={`item-${index}-${
                (menuItem as LazyRouteComponent<LazyComponent>).route
              }`}
            >
              <NavLink
                to={(menuItem as LazyRouteComponent<LazyComponent>).route}
              >
                {(menuItem as LazyRouteComponent<LazyComponent>).name}
              </NavLink>
            </li>
          ) : (
            (menuItem as Submenu<LazyComponent>).components.length > 0 && (
              <li
                key={`item-${index}-${(menuItem as Submenu<LazyComponent>).id}`}
              >
                <a
                  href={`#${(menuItem as Submenu<LazyComponent>).id}`}
                  onClick={handleToggleExpanded(
                    (menuItem as Submenu<LazyComponent>).id
                  )}
                >
                  {menuItem.name}
                </a>
                {expanded.includes((menuItem as Submenu<LazyComponent>).id) && (
                  <Menu
                    menu={(menuItem as Submenu<LazyComponent>).components}
                    expanded={expanded}
                    toggleExpanded={toggleExpanded}
                  />
                )}
              </li>
            )
          )}
        </>
      ))}
    </ul>
  );
};

function App() {
  const expanded = useTrackMenu(menu);
  return (
    <div className="App">
      <aside>
        <nav>
          <Menu menu={menu} {...expanded} />
        </nav>
      </aside>
      <article>
        <Routes>
          {routes.map(
            ({ component: LazyComponent, name, route, setTitle = true }) => (
              <Route
                key={route}
                path={route}
                element={
                  <Suspense fallback={`Loading ${name}...`}>
                    <DocumentTitle title={setTitle ? name : undefined} />
                    <h1>{name}</h1>
                    <LazyComponent />
                  </Suspense>
                }
              />
            )
          )}
        </Routes>
      </article>
    </div>
  );
}

export default App;
