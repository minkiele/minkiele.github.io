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
const JumpMatrix = lazy(() => import("./apps/JumpMatrix/JumpMatrix"));

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
    name: "Palle",
    component: Circles,
  },
  {
    route: "/jump-matrix",
    name: "Jumps",
    component: JumpMatrix,
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
