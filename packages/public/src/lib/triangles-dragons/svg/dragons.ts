export type Orientation = 'N' | 'S' | 'E' | 'W';
export type Direction = 'L' | 'R';

export default class Plotter {
  public static readonly DEFAULT_LENGTH = 10;
  public static readonly DEFAULT_ARC = 3;

  public static orientations: [
    Orientation,
    Orientation,
    Orientation,
    Orientation
  ] = ['N', 'E', 'S', 'W'];

  public static getDirections(l: number, s: 'L' | 'R' = 'L'): Array<'L' | 'R'> {
    return l <= 1
      ? []
      : Plotter.getDirections(l - 1, s)
          .concat(s)
          .concat(
            Plotter.getDirections(l - 1, s)
              .reverse()
              .map((v) => (v === 'L' ? 'R' : 'L'))
          );
  }

  public static getNextOrientation(
    orientation: Orientation,
    direction: Direction
  ): Orientation {
    return Plotter.orientations[
      (Plotter.orientations.length +
        Plotter.orientations.indexOf(orientation) +
        (direction === 'R' ? 1 : -1)) %
        Plotter.orientations.length
    ];
  }
  private moves: Array<Orientation> = [];
  public constructor(private orientation: Orientation) {
    this.moves.push(this.orientation);
  }
  public turn(direction: Direction) {
    this.orientation = Plotter.getNextOrientation(this.orientation, direction);
    this.moves.push(this.orientation);
  }

  public run(directions: Array<Direction>) {
    for (const direction of directions) {
      this.turn(direction);
    }
  }

  private isTerminalSegment(index: number): boolean {
    return index === 0 || index === this.moves.length - 1;
  }

  public plot(length = Plotter.DEFAULT_LENGTH, arc = Plotter.DEFAULT_ARC) {
    let output = '';

    let size = [0, 0, 0, 0];
    let cursor = [0, 0];

    for (let index = 0; index < this.moves.length; index += 1) {
      const move = this.moves[index];
      const isTerminal = this.isTerminalSegment(index);
      const segLength = length - arc * (isTerminal ? 1 : 2);
      switch (move) {
        case 'N': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'E';
            output += `a${arc} ${arc} 0 0 ${isLeftTurn ? 0 : 1} ${
              isLeftTurn ? '' : '-'
            }${arc} -${arc}`;
          }
          output += `v-${segLength}`;
          cursor[1] -= length;
          if (cursor[1] > size[0]) {
            size[0] = cursor[1];
          }
          if (cursor[1] < size[2]) {
            size[2] = cursor[1];
          }
          break;
        }
        case 'S': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'W';
            output += `a${arc} ${arc} 0 0 ${isLeftTurn ? 0 : 1} ${
              isLeftTurn ? '-' : ''
            }${arc} ${arc}`;
          }
          output += `v${segLength}`;
          cursor[1] += length;
          if (cursor[1] > size[0]) {
            size[0] = cursor[1];
          }
          if (cursor[1] < size[2]) {
            size[2] = cursor[1];
          }
          break;
        }
        case 'E': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'S';
            output += `a${arc} ${arc} 0 0 ${isLeftTurn ? 0 : 1} ${arc} ${
              isLeftTurn ? '' : '-'
            }${arc}`;
          }
          output += `h${segLength}`;
          cursor[0] += length;
          if (cursor[0] > size[1]) {
            size[1] = cursor[0];
          }
          if (cursor[0] < size[3]) {
            size[3] = cursor[0];
          }
          break;
        }
        case 'W': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'N';
            output += `a${arc} ${arc} 0 0 ${isLeftTurn ? 0 : 1} -${arc} ${
              isLeftTurn ? '-' : ''
            }${arc}`;
          }
          output += `h-${segLength}`;
          cursor[0] -= length;
          if (cursor[0] > size[1]) {
            size[1] = cursor[0];
          }
          if (cursor[0] < size[3]) {
            size[3] = cursor[0];
          }
          break;
        }
      }
    }
    const path = `M${-size[3]} ${-size[2]}${output}`;
    const width = size[1] - size[3];
    const height = size[0] - size[2];
    return { path, width, height };
  }
}
