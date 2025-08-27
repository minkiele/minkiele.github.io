import { L } from '../dragons';
import { Plane } from '../matrix/plane';
import Plotter from './dragons';

export function getCompatOrientation(orientation: Plane.Orientation) {
  switch (orientation) {
    case Plane.Orientation.N:
      return 'N';
    case Plane.Orientation.E:
      return 'E';
    case Plane.Orientation.S:
      return 'S';
    case Plane.Orientation.W:
      return 'W';
  }
}

export function getCompatDirection(direction: Symbol) {
  return direction === L ? 'L' : 'R';
}

export function getCompatIterations(iterations: number) {
  return iterations + 1;
}
