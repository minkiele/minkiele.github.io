import {
  SVGAttributes,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

export interface PieceEdges {
  N: symbol;
  S: symbol;
  W: symbol;
  E: symbol;
  // e forse quel che cerco neanche c'è
}

export type PieceProps = PieceEdges &
  Omit<SVGAttributes<SVGPathElement>, 'd' | 'x' | 'y'> &
  Required<Pick<SVGAttributes<SVGPathElement>, 'x' | 'y'>>;

interface UsePieceState extends PieceEdges {
  isCorner: boolean;
  isFrame: boolean;
  isValid: boolean;
}

type UsePieceAction =
  | {
      type: 'set';
      edges: PieceEdges;
    }
  | {
      type: 'rotate';
      clockwise?: boolean;
    };

export const IN = Symbol('IN');
export const OUT = Symbol('OUT');
export const FLAT = Symbol('FLAT');

const isCornerPiece = ({ N, S, W, E }: PieceEdges) =>
  (N === FLAT && E === FLAT && S !== FLAT && W !== FLAT) ||
  (E === FLAT && S === FLAT && W !== FLAT && N !== FLAT) ||
  (S === FLAT && W === FLAT && N !== FLAT && E !== FLAT) ||
  (W === FLAT && N === FLAT && E !== FLAT && S !== FLAT);

const isFramePiece = ({ N, S, W, E }: PieceEdges) =>
  isCornerPiece({ N, S, W, E }) ||
  (N === FLAT && E !== FLAT && S !== FLAT && W !== FLAT) ||
  (E === FLAT && S !== FLAT && W !== FLAT && N !== FLAT) ||
  (S === FLAT && W !== FLAT && N !== FLAT && E !== FLAT) ||
  (W === FLAT && N !== FLAT && E !== FLAT && S !== FLAT);

const isValidPiece = ({ N, S, W, E }: PieceEdges) =>
  isFramePiece({ N, S, W, E }) ||
  (N !== FLAT && E !== FLAT && S !== FLAT && W !== FLAT);

export const usePiece = (props: PieceEdges) => {
  const [pieceState, dispatch] = useReducer(
    (state: UsePieceState, action: UsePieceAction) => {
      switch (action.type) {
        case 'set':
          return {
            ...action.edges,
            isCorner: isCornerPiece(action.edges),
            isFrame: isFramePiece(action.edges),
            isValid: isValidPiece(action.edges),
          };
        case 'rotate':
          const { clockwise = true } = action;
          if (clockwise) {
            return {
              ...state,
              ...(clockwise
                ? {
                    N: state.W,
                    S: state.E,
                    W: state.S,
                    E: state.N,
                  }
                : {
                    N: state.E,
                    S: state.W,
                    W: state.N,
                    E: state.S,
                  }),
            };
          } else {
            return {
              N: state.E,
              S: state.W,
              W: state.N,
              E: state.S,
              isCorner: false,
              isFrame: false,
              isValid: false,
            };
          }
      }
    },
    {
      N: props.N,
      S: props.S,
      W: props.W,
      E: props.E,
      isCorner: isCornerPiece(props),
      isFrame: isFramePiece(props),
      isValid: isValidPiece(props),
    }
  );

  const set = useCallback(
    (edges: PieceEdges) => dispatch({ type: 'set', edges: edges }),
    []
  );

  useEffect(() => {
    set(props);
  }, [props, set]);

  const rotate = useCallback(
    (clockwise = true) => dispatch({ type: 'rotate', clockwise }),
    []
  );

  return useMemo(
    () => ({ ...pieceState, set, rotate }),
    [pieceState, set, rotate]
  );
};

interface SvgPathSegment {
  rotate: () => SvgPathSegment;
  reflect: () => SvgPathSegment;
}

class SvgPathDefinition {
  constructor(private segments: Array<SvgPathSegment> = []) {}

  rotate() {
    return new SvgPathDefinition(this.segments.map((s) => s.rotate()));
  }

  reflect() {
    return new SvgPathDefinition(this.segments.map((s) => s.reflect()));
  }

  add(segment: SvgPathSegment) {
    this.segments.push(segment);
    return this;
  }

  join(path: SvgPathDefinition) {
    this.segments.push(...path.segments);
    return this;
  }

  toString() {
    return this.segments.map((s) => s.toString()).join(' ');
  }
}

class SvgMoveSegment implements SvgPathSegment {
  constructor(
    private x: string | number,
    private y: string | number,
    private relative = true
  ) {}

  rotate() {
    return new SvgMoveSegment(-this.y, this.x);
  }

  reflect() {
    return new SvgMoveSegment(this.x, -this.y);
  }

  private getDirective(): string {
    return this.relative ? 'm' : 'M';
  }

  toString() {
    return `${this.getDirective()} ${this.x} ${this.y}`;
  }
}

class SvgCurveSegment implements SvgPathSegment {
  constructor(
    private x1: number,
    private y1: number,
    private x2: number,
    private y2: number,
    private x: number,
    private y: number,
    private relative = true
  ) {}

  rotate() {
    return new SvgCurveSegment(
      -this.y1,
      this.x1,
      -this.y2,
      this.x2,
      -this.y,
      this.x
    );
  }

  reflect() {
    return new SvgCurveSegment(
      this.x1,
      -this.y1,
      this.x2,
      -this.y2,
      this.x,
      -this.y
    );
  }

  private getDirective(): string {
    return this.relative ? 'c' : 'C';
  }

  toString() {
    return `${this.getDirective()} ${this.x1} ${this.y1} ${this.x2} ${
      this.y2
    } ${this.x} ${this.y}`;
  }
}

class SvgLineSegment implements SvgPathSegment {
  constructor(private x: number, private y: number, private relative = true) {}

  rotate() {
    return new SvgLineSegment(-this.y, this.x);
  }

  reflect() {
    return new SvgLineSegment(this.x, -this.y);
  }

  private getDirective(): string {
    return this.relative ? 'l' : 'L';
  }

  toString() {
    return `${this.getDirective()} ${this.x} ${this.y}`;
  }
}

const curveProto = new SvgPathDefinition([
  new SvgCurveSegment(24, 0, 40, -6, 40, 2),
  new SvgCurveSegment(0, 7, -16, 28, 10, 28),
  new SvgCurveSegment(26, 0, 10, -21, 10, -28),
  new SvgCurveSegment(0, -8, 16, -2, 40, -2),
]);

const curveOut = curveProto.reflect();

const lineProto = new SvgPathDefinition([new SvgLineSegment(100, 0)]);

const getEdge = (edge: symbol): SvgPathDefinition =>
  edge === FLAT ? lineProto : edge === IN ? curveProto : curveOut;

export const getPath = ({ N, E, S, W, x, y }: PieceProps): string => {
  const path = new SvgPathDefinition([new SvgMoveSegment(x, y)]);
  path.join(getEdge(N));
  path.join(getEdge(E).rotate());
  path.join(getEdge(S).rotate().rotate());
  path.join(getEdge(W).rotate().rotate().rotate());
  return path.toString();
};

const CURVED_SEGMENTS = [IN, OUT];
const getRandomCurvedEdge = () =>
  CURVED_SEGMENTS[Math.floor(Math.random() * 2)];

/**
 * Less random than the name suggests, we add at most 2 random edges per piece
 */
const getRandomPiece = (edges: Partial<PieceEdges> = {}): PieceEdges => {
  do {
    const piece = {
      N: edges.N ?? getRandomCurvedEdge(),
      E: edges.E ?? getRandomCurvedEdge(),
      S: edges.S ?? getRandomCurvedEdge(),
      W: edges.W ?? getRandomCurvedEdge(),
    };
    if (isValidPiece(piece)) {
      return piece;
    }
  } while (true);
};

export const getGrid = (
  rows: number,
  cols: number
): Array<Array<PieceEdges>> => {
  const grid: Array<Array<PieceEdges>> = [];
  for (let r = 0; r < rows; r += 1) {
    grid[r] = [];
    for (let c = 0; c < cols; c += 1) {
      grid[r][c] = getRandomPiece({
        N: r === 0 ? FLAT : grid[r - 1][c].S === OUT ? IN : OUT,
        W: c === 0 ? FLAT : grid[r][c - 1].E === OUT ? IN : OUT,
        ...(r === rows - 1 && { S: FLAT }),
        ...(c === cols - 1 && { E: FLAT }),
      });
    }
  }
  return grid;
};
