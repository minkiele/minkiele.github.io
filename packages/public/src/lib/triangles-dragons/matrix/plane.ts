export namespace Plane {
  export enum Orientation {
    N = 0,
    E = 1,
    S = 2,
    W = 3,
  }

  export enum Direction {
    L,
    R,
  }

  export function getOppositeOrientation(orientation: Orientation): Orientation {
    return (orientation + 2) % 4;
  }

  function turnLeft(orientation: Orientation): Orientation {
    return (orientation + 3) % 4;
  }

  function turnRight(orientation: Orientation): Orientation {
    return (orientation + 1) % 4;
  }

  export function getNextOrientation(direction: Direction, currentOrientation: Orientation): Orientation {
    switch (direction) {
      case Direction.L:
        return turnLeft(currentOrientation);
      case Direction.R:
        return turnRight(currentOrientation);
      default:
        throw new Error('Unrecognized direction');
    }
  }
}
