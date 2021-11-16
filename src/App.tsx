import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

const SudokuUI = lazy(() => import("./apps/SudokuUI/SudokuUI"));
const Anagrammator = lazy(() => import("./apps/Anagrammator/Anagrammator"));
const GoToReactJS = lazy(() => import("./apps/GoToReactJS/GoToReactJS"));
const TestForm = lazy(() => import("./apps/TestForm/TestForm"));
const StringsCombinator = lazy(() => import("./apps/StringsCombinator/StringsCombinator"));
const TriggerEffect = lazy(() => import("./apps/TriggerEffect/TriggerEffect"));

interface LazyRouteComponent {
  route: string;
  name: string;
  component: ReturnType<typeof lazy>;
}

const lazyRouteComponents: Array<LazyRouteComponent> = [
  {
    route: "/",
    name: "Sudoku",
    component: SudokuUI,
  },
  {
    route: "/anagrammator",
    name: "Anagrammator",
    component: Anagrammator,
  },
  {
    route: "/gotoreactjs",
    name: "Go to ReactJS",
    component: GoToReactJS,
  },
  {
    route: "/testform",
    name: "Test Form",
    component: TestForm,
  },
  {
    route: "/strings-combinator",
    name: "Strings Combinator",
    component: StringsCombinator,
  },
  {
    route: "/triggereffect",
    name: "TriggerEffect",
    component: TriggerEffect,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {lazyRouteComponents.map(({ name, route }) => (
            <li>
              <NavLink to={route}>{name}</NavLink>
            </li>
          ))}
        </ul>
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
      </header>
    </div>
  );
}

export default App;
