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

    let [N, E, S, W] = [0, 0, 0, 0];
    let [x, y] = [0, 0];

    // const paths: Array<{path: string, x: number, y: number}> = [];

    for (let index = 0; index < this.moves.length; index += 1) {
      const move = this.moves[index];
      const isTerminal = this.isTerminalSegment(index);
      const segLength = length - arc * (isTerminal ? 1 : 2);
      switch (move) {
        case 'N': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'E';
            output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} ${
              (isLeftTurn ? 1 : -1) * arc
            } -${arc}`;
          }
          output += `v-${segLength}`;
          y -= length;
          if (y > N) {
            N = y;
          }
          if (y < S) {
            S = y;
          }
          break;
        }
        case 'S': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'W';
            output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} ${
              (isLeftTurn ? -1 : 1) * arc
            } ${arc}`;
          }
          output += `v${segLength}`;
          y += length;
          if (y > N) {
            N = y;
          }
          if (y < S) {
            S = y;
          }
          break;
        }
        case 'E': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'S';
            output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} ${arc} ${
              (isLeftTurn ? 1 : -1) * arc
            }`;
          }
          output += `h${segLength}`;
          x += length;
          if (x > E) {
            E = x;
          }
          if (x < W) {
            W = x;
          }
          break;
        }
        case 'W': {
          if (index > 0 && arc > 0) {
            const isLeftTurn = this.moves[index - 1] === 'N';
            output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} -${arc} ${
              (isLeftTurn ? -1 : 1) * arc
            }`;
          }
          output += `h-${segLength}`;
          x -= length;
          if (x > E) {
            E = x;
          }
          if (x < W) {
            W = x;
          }
          break;
        }
      }

      // if(index % 128 === 0 || index === this.moves.length - 1) {
      //   // Snapshot
      //   paths.push({path: output, x, y});
      //   output = `M${x} ${y}`;
      // }
    }
    return {
      path: `M${-W} ${-S}${output}`,
      width: E - W,
      height: N - S,
      x: -W,
      y: -S,
    };
  }
}
