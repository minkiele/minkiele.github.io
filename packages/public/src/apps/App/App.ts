import { LazyRouteComponent } from './App.models';

export const allLazyRouteComponents: Array<LazyRouteComponent> = [
  {
    route: '/',
    name: 'Minkiele',
    setTitle: false,
  },
  {
    route: '/snake',
    name: 'Snake',
  },
  {
    route: '/minesweeper',
    name: 'Minesweeper',
  },
  {
    route: '/tictactoe',
    name: 'Tic Tac Toe',
  },
  {
    route: '/vietnam',
    name: 'Vietnam',
  },
  {
    route: '/24',
    name: '24 Clock',
    archived: true,
  },
  {
    route: '/sudoku',
    name: 'Sudoku',
    archived: true,
  },
  {
    route: '/anagrammator',
    name: 'Anagrammator',
  },
  {
    route: '/cruciverba',
    name: 'Cruciverba',
  },
  {
    route: '/numeri-a-caso',
    name: 'Numeri a caso',
    archived: true,
  },
  {
    route: '/parole',
    name: 'Ora a parole',
  },
  {
    route: '/palle',
    name: 'Ora a palla',
    archived: true,
  },
  {
    route: '/jump-matrix',
    name: 'Jumps',
    archived: true,
  },
  {
    route: '/tartaglia-triangle',
    name: "Tartaglia's triangle",
    archived: true,
  },
  {
    route: '/dragon-fractal',
    name: 'The Dragon Fractal',
  },
  {
    route: '/demodogs',
    name: 'Demo Dogs',
    archived: true,
  },
  {
    route: '/folypo',
    name: 'Folypo',
    archived: true,
  },
  {
    route: '/factorize',
    name: 'Factorizer',
    archived: true,
  },
  {
    route: '/three',
    name: 'Three',
    archived: true,
  },
  {
    route: '/soundpad',
    name: 'SoundPad',
    prefetch: false,
    archived: true,
  },
  {
    route: '/md2html',
    name: 'MD2HTML',
    prefetch: false,
    archived: true,
  },
  {
    route: '/records',
    name: 'My records',
    prefetch: false,
  },
  {
    route: '/archive',
    name: 'The Archive',
    prefetch: false,
  },
];

export const lazyRouteComponents = allLazyRouteComponents.filter(
  (lazyRouteComponent) => lazyRouteComponent.archived !== true
);
export const archivedLazyRouteComponents = allLazyRouteComponents.filter(
  (lazyRouteComponent) => lazyRouteComponent.archived === true
);
