import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import "./App.scss";

const Info = lazy(() => import("./apps/Info/Info"));
const SudokuUI = lazy(() => import("./apps/SudokuUI/SudokuUI"));
const Anagrammator = lazy(() => import("./apps/Anagrammator/Anagrammator"));
const Cruciverba = lazy(() => import("./apps/Cruciverba/Cruciverba"));
const OraInParole = lazy(() => import("./apps/OraInParole/OraInParole"));
const NumeriCasuali = lazy(() => import("./apps/NumeriCasuali/NumeriCasuali"));
const Circles = lazy(() => import("./apps/Circles/Circles"));

interface LazyRouteComponent {
  route: string;
  name: string;
  component: ReturnType<typeof lazy>;
}

const lazyRouteComponents: Array<LazyRouteComponent> = [
  {
    route: "/",
    name: "Minkiele",
    component: Info,
  },
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
    route: "/clock",
    name: "Ora in parole",
    component: OraInParole,
  },
  {
    route: "/random-numbers",
    name: "Numeri a caso",
    component: NumeriCasuali,
  },
  {
    route: "/circles",
    name: "Balls clock",
    component: Circles,
  },
];

function App() {
  return (
    <div className="App">
      <aside>
        <nav>
          <ul>
            {lazyRouteComponents.map(({ name, route }) => (
              <li key={route}>
                <NavLink to={route}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <article>
        <Routes>
          {lazyRouteComponents.map(
            ({ component: LazyComponent, name, route }) => (
              <Route
                key={route}
                path={route}
                element={
                  <Suspense fallback="loading">
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
