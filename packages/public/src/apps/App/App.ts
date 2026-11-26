import type { LazyRouteComponent } from './App.models';
import { sortRoutes } from './App.utils';

export const allLazyRouteComponents: Array<LazyRouteComponent> = [
  {
    route: '/',
    name: 'Minkiele',
    setTitle: false,
    description: 'The wrong website, by definition.',
  },
  {
    route: '/enigma-ui',
    name: 'EnigmaUI',
    external: true,
    description: 'A full-power Enigma machine',
  },
  {
    route: '/EnigmaUI',
    name: 'EnigmaUI',
    external: true,
    list: false,
    description: 'An old version of the Enigma machine',
  },
  {
    route: '/about',
    name: 'About',
    list: false,
    description: 'This is not me, this is a representation of me',
  },
  {
    route: '/snake',
    name: 'Snake',
    description: 'Snake, the game, as you saw it on a Nokia 3210',
  },
  {
    route: '/minesweeper',
    name: 'Minesweeper',
    description: 'My personal interpretation of the Minesweeper game',
  },
  {
    route: '/tictactoe',
    name: 'Tic Tac Toe',
    description: 'A game of Tic Tac Toe that you can draw against your device',
  },
  {
    route: '/vietnam',
    name: 'Vietnam',
    description: 'Tower of Hanoi',
  },
  {
    route: '/24',
    name: '24 Clock',
    archived: true,
    description: 'The clock from 24, with real, very upsetting sounds.',
  },
  {
    route: '/sudoku',
    name: 'Sudoku',
    archived: true,
    description: 'Check sudoku correctness',
  },
  {
    route: '/anagrammator',
    name: 'Anagrammator',
    description: 'Armagans orf eeyorenv',
  },
  {
    route: '/cruciverba',
    name: 'Cruciverba',
    description: 'Crosswords schemas designer',
  },
  {
    route: '/numeri-a-caso',
    name: 'Numeri a caso',
    archived: true,
    description: "That's how we write the numbers in Italy",
  },
  {
    route: '/parole',
    name: 'Ora a parole',
    description: 'A clock that writes the time as you would say it in italian',
  },
  {
    route: '/palle',
    name: 'Ora a palla',
    archived: true,
    description: 'A clock made of growing balls',
  },
  {
    route: '/jump-matrix',
    name: 'Jumps',
    archived: true,
    description: 'A little game where you have to fill a square of numbers',
  },
  {
    route: '/tartaglia-triangle',
    name: "Tartaglia's triangle",
    archived: true,
    description: "Tartaglia's triangle rendering, triangles and all",
  },
  {
    route: '/dragon-fractal',
    name: 'The Dragon Fractal',
    description: "Dragon's fractal, as shown in Jurassic Park (the book).",
  },
  {
    route: '/demodogs',
    name: 'Demo Dogs',
    archived: true,
    description: "Poor man's Polygen with fake breeds of dogs",
  },
  {
    route: '/folypo',
    name: 'Folypo',
    archived: true,
    description: 'Regular polygon generator',
  },
  {
    route: '/factorize',
    name: 'Factorizer',
    archived: true,
    description: 'Numbers factorization utilities',
  },
  {
    route: '/three',
    name: 'Three',
    archived: true,
    description: 'A little experiment with WebGL',
  },
  {
    route: '/soundpad',
    name: 'SoundPad',
    prefetch: false,
    archived: true,
    description: "A sound pad, altough with one sound, it's still a sound pad",
  },
  {
    route: '/puzzle',
    name: 'Puzzle',
    archived: true,
    description: 'A jigsaw',
  },
  {
    route: '/rotd',
    name: 'Record Of The Day',
    prefetch: false,
    archived: true,
    description: 'Record of the day, with a little help from Discogs',
  },
  {
    route: '/md2html',
    name: 'MD2HTML',
    prefetch: false,
    archived: true,
    description:
      'Utility to transform some Markdown to HTML to copy-paste in JSON files',
  },
  {
    route: '/fifteen',
    name: 'Fifteen',
    description: 'A game of 15',
  },
  {
    route: '/records',
    name: 'My records',
    prefetch: false,
    description: 'A Memory game, with a little help from Discogs',
  },
  {
    route: '/journal',
    name: 'The Journal',
    prefetch: false,
    description: 'Once upon a time this would have been called a blog',
  },
  {
    route: '/iban',
    name: 'IBAN',
    archived: true,
    prefetch: false,
    description: 'IBAN check routine',
  },
  {
    route: '/qr',
    name: 'QR code',
    archived: true,
    prefetch: false,
    description: 'Say what you want in the code of QR',
  },
  {
    route: '/EnigmaUI',
    name: 'EnigmaUI (Legacy Version)',
    external: true,
    archived: true,
  },
  {
    route: '/archive',
    name: 'The Archive',
    prefetch: false,
    description: 'Things that would clutter the main menu',
  },
  /* please append other routes before this comment */
].sort(sortRoutes);

export const lazyRouteComponents = allLazyRouteComponents.filter(
  (lazyRouteComponent) => lazyRouteComponent.archived !== true
);
export const archivedLazyRouteComponents = allLazyRouteComponents.filter(
  (lazyRouteComponent) => lazyRouteComponent.archived === true
);
