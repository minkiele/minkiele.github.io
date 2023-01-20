import { LazyRouteComponent } from './App.models';

export const allLazyRouteComponents: Array<LazyRouteComponent> = [
  {
    route: '/',
    name: 'Minkiele',
    // component: Info,
    setTitle: false,
  },
  {
    route: '/snake',
    name: 'Snake',
    // component: Snake,
  },
  {
    route: '/minesweeper',
    name: 'Minesweeper',
    // component: Minesweeper,
  },
  {
    route: '/vietnam',
    name: 'Vietnam',
    // component: Vietnam,
  },
  {
    route: '/sudoku',
    name: 'Sudoku',
    // component: SudokuUI,
  },
  {
    route: '/anagrammator',
    name: 'Anagrammator',
    // component: Anagrammator,
  },
  {
    route: '/cruciverba',
    name: 'Cruciverba',
    // component: Cruciverba,
    archived: true,
  },
  {
    route: '/numeri-a-caso',
    name: 'Numeri a caso',
    // component: NumeriCasuali,
    archived: true,
  },
  {
    route: '/parole',
    name: 'Ora a parole',
    // component: OraInParole,
  },
  {
    route: '/palle',
    name: 'Ora a palla',
    // component: Circles,
    archived: true,
  },
  {
    route: '/jump-matrix',
    name: 'Jumps',
    // component: JumpMatrix,
    archived: true,
  },
  {
    route: '/fibonacci-triangle',
    name: "Fibonacci's triangle",
    // component: Triangles,
    archived: true,
  },
  {
    route: '/dragon-fractal',
    name: 'The Dragon Fractal',
    // component: Dragons,
  },
  {
    route: '/demodogs',
    name: 'Demo Dogs',
    // component: DemoDogs,
    archived: true,
  },
  {
    route: '/folypo',
    name: 'Folypo',
    // component: Polypo,
    archived: true,
  },
  {
    route: '/factorize',
    name: 'Factorizer',
    // component: Factorizer,
    archived: true,
  },
  {
    route: '/archive',
    name: 'The Archive',
    // component: TheArchive,
  },
  {
    route: '/three',
    name: 'Three',
    // component: Three,
    archived: true,
  },
];

export const lazyRouteComponents = allLazyRouteComponents.filter((lazyRouteComponent) => lazyRouteComponent.archived !== true);
export const archivedLazyRouteComponents = allLazyRouteComponents.filter((lazyRouteComponent) => lazyRouteComponent.archived === true);
