export type Orientation = 'N' | 'S' | 'E' | 'W';
export type Direction = 'L' | 'R';

export default class Plotter {
  public static readonly DEFAULT_LENGTH = 10;
  public static readonly DEFAULT_ARC = 3;
  public static readonly DEFAULT_SPLIT = false;

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

  public static mergeCoords(
    { d, o, f, t }: { d: 'H' | 'V'; o: number; f: number; t: number },
    coords: Record<
      'H' | 'V',
      Record<string | number, Array<{ f: number; t: number }>>
    >
  ): typeof coords {
    const dm = coords[d] ?? new Map<number, Array<{ f: number; t: number }>>();
    const om = dm[o] ?? [];
    const n = om
      .map((s, i) => ({ ...s, i }))
      .filter(({ f: fc, t: tc }) => fc === t || tc === f);
    switch (n.length) {
      case 0:
        om.push({ f, t });
        om.sort(({ f: f1, t: t1 }, { f: f2, t: t2 }) =>
          f1 === f2 ? t1 - t2 : f1 - f2
        );
        break;
      case 1:
        if (n[0].f === t) {
          om[n[0].i].f = f;
        } else {
          om[n[0].i].t = t;
        }
        break;
      default:
        om[n[0].i].t = om[n[1].i].t;
        om.splice(n[1].i, 1);
        break;
    }
    dm[o] = om;
    coords[d] = dm;
    return coords;
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

  public plot(
    length = Plotter.DEFAULT_LENGTH,
    arc = Plotter.DEFAULT_ARC,
    split = Plotter.DEFAULT_SPLIT
  ) {
    let output = '';

    let [N, E, S, W] = [0, 0, 0, 0];
    let [x, y] = [0, 0];

    const coords: Record<
      'H' | 'V',
      Record<string | number, Array<{ f: number; t: number }>>
    > = { H: {}, V: {} };

    for (let index = 0; index < this.moves.length; index += 1) {
      const move = this.moves[index];
      const isTerminal = this.isTerminalSegment(index);
      const segLength = length - arc * (isTerminal ? 1 : 2);
      switch (move) {
        case 'N': {
          if (split && arc === 0) {
            Plotter.mergeCoords({ d: 'V', o: x, f: y - length, t: y }, coords);
          } else {
            if (index > 0 && arc > 0) {
              const isLeftTurn = this.moves[index - 1] === 'E';
              output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} ${
                (isLeftTurn ? 1 : -1) * arc
              } ${-arc}`;
            }
            output += `v${-segLength}`;
          }
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
          if (split && arc === 0) {
            Plotter.mergeCoords({ d: 'V', o: x, f: y, t: y + length }, coords);
          } else {
            if (index > 0 && arc > 0) {
              const isLeftTurn = this.moves[index - 1] === 'W';
              output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} ${
                (isLeftTurn ? -1 : 1) * arc
              } ${arc}`;
            }
            output += `v${segLength}`;
          }
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
          if (split && arc === 0) {
            Plotter.mergeCoords({ d: 'H', o: y, f: x, t: x + length }, coords);
          } else {
            if (index > 0 && arc > 0) {
              const isLeftTurn = this.moves[index - 1] === 'S';
              output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} ${arc} ${
                (isLeftTurn ? 1 : -1) * arc
              }`;
            }
            output += `h${segLength}`;
          }
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
          if (split && arc === 0) {
            Plotter.mergeCoords({ d: 'H', o: y, f: x - length, t: x }, coords);
          } else {
            if (index > 0 && arc > 0) {
              const isLeftTurn = this.moves[index - 1] === 'N';
              output += `a${arc} ${arc} 0 0 ${Number(!isLeftTurn)} ${-arc} ${
                (isLeftTurn ? -1 : 1) * arc
              }`;
            }
            output += `h${-segLength}`;
          }
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
    }

    const outputCoords: Record<string, string> = {};
    if (split && arc === 0) {
      for (const o of Object.keys(coords['H'])) {
        for (const { f, t } of coords['H'][o]) {
          outputCoords[`H${o}`] = (outputCoords[`H${o}`] ?? '') + `M${f} ${o}h${t - f}`;
        }
      }
      for (const o of Object.keys(coords['V'])) {
        for (const { f, t } of coords['V'][o]) {
          outputCoords[`V${o}`] = (outputCoords[`V${o}`] ?? '') + `M${o} ${f}v${t - f}`;
        }
      }
    }

    return {
      path: `M${-W} ${-S}${output}`,
      width: E - W,
      height: N - S,
      x: -W,
      y: -S,
      segments: Object.values(outputCoords),
    };
  }
}
