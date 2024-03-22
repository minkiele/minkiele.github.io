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
}

export type PieceProps = PieceEdges &
  Omit<SVGAttributes<SVGSVGElement>, 'width' | 'height' | 'viewBox'>;

interface UsePieceState extends PieceEdges {
  // e forse quel che cerco neanche c'è
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
  reflectX: () => SvgPathSegment;
  reflectY: () => SvgPathSegment;
}

export class SvgPathDefinition {
  constructor(private segments: SvgPathSegment[]) {}

  rotate() {
    return new SvgPathDefinition(this.segments.map((s) => s.rotate()));
  }

  reflectX() {
    return new SvgPathDefinition(this.segments.map((s) => s.reflectX()));
  }

  reflectY() {
    return new SvgPathDefinition(this.segments.map((s) => s.reflectY()));
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

export class SvgMoveSegment implements SvgPathSegment {
  constructor(private x: number, private y: number) {}

  rotate() {
    return new SvgMoveSegment(-this.y, this.x);
  }

  reflectX() {
    return new SvgMoveSegment(-this.x, this.y);
  }

  reflectY() {
    return new SvgMoveSegment(this.x, -this.y);
  }

  toString() {
    return `m ${this.x} ${this.y}`;
  }
}

export class SvgCurveSegment implements SvgPathSegment {
  constructor(
    private x1: number,
    private y1: number,
    private x2: number,
    private y2: number,
    private x: number,
    private y: number
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

  reflectX() {
    return new SvgCurveSegment(
      -this.x1,
      this.y1,
      -this.x2,
      this.y2,
      -this.x,
      this.y
    );
  }

  reflectY() {
    return new SvgCurveSegment(
      this.x1,
      -this.y1,
      this.x2,
      -this.y2,
      this.x,
      -this.y
    );
  }

  toString() {
    return `c ${this.x1} ${this.y1} ${this.x2} ${this.y2} ${this.x} ${this.y}`;
  }
}

export class SvgLineSegment implements SvgPathSegment {
  constructor(private x: number, private y: number) {}

  rotate() {
    return new SvgLineSegment(-this.y, this.x);
  }

  reflectX() {
    return new SvgLineSegment(-this.x, this.y);
  }

  reflectY() {
    return new SvgLineSegment(this.x, -this.y);
  }

  toString() {
    return `l ${this.x} ${this.y}`;
  }
}

const curveProto = new SvgPathDefinition([
  new SvgCurveSegment(24, 0, 40, -6, 40, 2),
  new SvgCurveSegment(0, 7, -16, 28, 10, 28),
  new SvgCurveSegment(26, 0, 10, -21, 10, -28),
  new SvgCurveSegment(0, -8, 16, -2, 40, -2),
]);

const lineProto = new SvgPathDefinition([new SvgLineSegment(100, 0)]);

export const getPath = ({ N, E, S, W }: PieceEdges): string => {
  const path = new SvgPathDefinition([new SvgMoveSegment(30, 30)]);
  if (N === FLAT) {
    path.join(lineProto);
  } else if (N === IN) {
    path.join(curveProto);
  } else if (N === OUT) {
    path.join(curveProto.reflectY());
  }
  if (E === FLAT) {
    path.join(lineProto.rotate());
  } else if (E === IN) {
    path.join(curveProto.rotate());
  } else if (E === OUT) {
    path.join(curveProto.rotate().reflectX());
  }
  if (S === FLAT) {
    path.join(lineProto.rotate().rotate());
  } else if (S === IN) {
    path.join(curveProto.rotate().rotate());
  } else if (S === OUT) {
    path.join(curveProto.rotate().rotate().reflectY());
  }
  if (W === FLAT) {
    path.join(lineProto.rotate().rotate().rotate());
  } else if (W === IN) {
    path.join(curveProto.rotate().rotate().rotate());
  } else if (W === OUT) {
    path.join(curveProto.rotate().rotate().rotate().reflectX());
  }
  return path.toString();
};

const getRandomCurvedEdge = () => [IN, OUT][Math.floor(Math.random() * 2)];

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
