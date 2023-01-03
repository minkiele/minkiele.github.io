import { FunctionComponent, lazy, Suspense, useEffect, useRef } from "react";
import { Route, Routes } from "react-router";
import { LazyRouteComponent } from "./App.models";
import "./App.scss";
import TheArchive from "./apps/TheArchive/TheArchive";
import Nav from "./Nav";

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

const allLazyRouteComponents: Array<LazyRouteComponent> = [
  {
    route: "/",
    name: "Minkiele",
    component: Info,
    setTitle: false,
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
  {
    route: "/vietnam",
    name: "Vietnam",
    component: Vietnam,
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
    archived: true,
  },
  {
    route: "/numeri-a-caso",
    name: "Numeri a caso",
    component: NumeriCasuali,
    archived: true,
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
    archived: true,
  },
  {
    route: "/jump-matrix",
    name: "Jumps",
    component: JumpMatrix,
    archived: true,
  },
  {
    route: "/fibonacci-triangle",
    name: "Fibonacci's triangle",
    component: Triangles,
    archived: true,
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
    archived: true,
  },
  {
    route: "/folypo",
    name: "Folypo",
    component: Polypo,
    archived: true,
  },
  {
    route: "/factorize",
    name: "Factorizer",
    component: Factorizer,
    archived: true,
  },
  {
    route: "/archive",
    name: "The Archive",
    component: TheArchive,
  }
];

const lazyRouteComponents = allLazyRouteComponents.filter(
  (lazyRouteComponent) => lazyRouteComponent.archived !== true
);
const archivedLazyRouteComponents = allLazyRouteComponents.filter(
  (lazyRouteComponent) => lazyRouteComponent.archived === true
);

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

function App() {
  return (
    <div className="App">
      <aside>
        <Nav menu={lazyRouteComponents} />
      </aside>
      <article>
        <Routes>
          {allLazyRouteComponents.map(
            ({ component: LazyComponent, name, route, setTitle = true }) => (
              <Route
                key={route}
                path={route}
                element={
                  <Suspense fallback={`Loading ${name}...`}>
                    <DocumentTitle title={setTitle ? name : undefined} />
                    <h1>{name}</h1>
                    <LazyComponent components={archivedLazyRouteComponents} />
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
