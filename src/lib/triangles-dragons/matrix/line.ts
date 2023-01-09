export namespace Line {
  export enum Char {
    EMPTY = ' ',
    EW = '\u2500', // ─
    NS = '\u2502', // │
    ES = '\u250c', // ┌
    SW = '\u2510', // ┐
    NE = '\u2514', // └
    NW = '\u2518', // ┘
    NES = '\u251c', // ├
    NSW = '\u2524', // ┤
    ESW = '\u252c', // ┬
    NEW = '\u2534', // ┴
    NESW = '\u253c', // ┼
    W = '\u2574', // ╴
    N = '\u2575', // ╵
    E = '\u2576', // ╶
    S = '\u2577', // ╷
  }

  type Bitwise<T extends number> = 0 | T;

  export class Line {
    private $_N: Bitwise<1> = 0;
    private $_E: Bitwise<2> = 0;
    private $_S: Bitwise<4> = 0;
    private $_W: Bitwise<8> = 0;
    public get W(): boolean {
      return this.$_W !== 0;
    }
    public set W(status: boolean) {
      this.$_W = status ? 8 : 0;
    }
    public get N(): boolean {
      return this.$_N !== 0;
    }
    public set N(status: boolean) {
      this.$_N = status ? 1 : 0;
    }
    public get S(): boolean {
      return this.$_S !== 0;
    }
    public set S(status: boolean) {
      this.$_S = status ? 4 : 0;
    }
    public get E(): boolean {
      return this.$_E !== 0;
    }
    public set E(status: boolean) {
      this.$_E = status ? 2 : 0;
    }
    public constructor(N: boolean = false, E: boolean = false, S: boolean = false, W: boolean = false) {
      this.W = W;
      this.N = N;
      this.S = S;
      this.E = E;
    }

    public unite(line: Line): Line {
      return new Line(this.N || line.N, this.E || line.E, this.S || line.S, this.W || line.W);
    }

    public intersecate(line: Line): Line {
      return new Line(this.N && line.N, this.E && line.E, this.S && line.S, this.W && line.W);
    }

    public negate(): Line {
      return new Line(!this.N, !this.E, !this.S, !this.W);
    }

    public toString(): string {
      const bits: number = this.$_W | this.$_N | this.$_S | this.$_E;
      switch (bits) {
        case 0:
          return Char.EMPTY;
        case 1:
          return Char.N;
        case 2:
          return Char.E;
        case 3:
          return Char.NE;
        case 4:
          return Char.S;
        case 5:
          return Char.NS;
        case 6:
          return Char.ES;
        case 7:
          return Char.NES;
        case 8:
          return Char.W;
        case 9:
          return Char.NW;
        case 10:
          return Char.EW;
        case 11:
          return Char.NEW;
        case 12:
          return Char.SW;
        case 13:
          return Char.NSW;
        case 14:
          return Char.ESW;
        case 15:
          return Char.NESW;
        default:
          throw new Error('Unrecognized symbol');
      }
    }
  }
  export function getLine(char: Char): Line {
    let bitmask: number;
    switch (char) {
      case Char.EMPTY:
        bitmask = 0;
        break;
      case Char.N:
        bitmask = 1;
        break;
      case Char.E:
        bitmask = 2;
        break;
      case Char.NE:
        bitmask = 3;
        break;
      case Char.S:
        bitmask = 4;
        break;
      case Char.NS:
        bitmask = 5;
        break;
      case Char.ES:
        bitmask = 6;
        break;
      case Char.NES:
        bitmask = 7;
        break;
      case Char.W:
        bitmask = 8;
        break;
      case Char.NW:
        bitmask = 9;
        break;
      case Char.EW:
        bitmask = 10;
        break;
      case Char.NEW:
        bitmask = 11;
        break;
      case Char.SW:
        bitmask = 12;
        break;
      case Char.NSW:
        bitmask = 13;
        break;
      case Char.ESW:
        bitmask = 14;
        break;
      case Char.NESW:
        bitmask = 15;
        break;
      default:
        throw new Error('Unrecognized char');
    }
    return new Line(Boolean(bitmask & 1), Boolean(bitmask & 2), Boolean(bitmask & 4), Boolean(bitmask & 8));
  }
}
