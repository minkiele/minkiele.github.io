import { Plane } from './matrix/plane';
import { PrintableDirectionMatrix } from './matrix/printable-direction-matrix';

const L_REP: string = 'L';
const R_REP: string = 'R';

const L: Symbol = Symbol(L_REP);
const R: Symbol = Symbol(R_REP);

function MirrorDirections(direction: Symbol): Symbol {
    switch (direction) {
        case L: return R;
        case R: return L;
        default: throw new Error('Unknown direction');
    }
}

type Directions = Array<Symbol>;

function Bend(directions: Directions, direction: Symbol): Directions {
    const mirroredDirections: Directions = directions.map(MirrorDirections).reverse();
    switch (direction) {
        case L:
        case R:
            return [...directions, direction, ...mirroredDirections];
        default: throw new Error('Unknown direction');
    }
}

export function directionsToString(directions: Directions): string {
    return directions.map(direction => direction === L ? L_REP : R_REP).join('');
}

function bendToDirection(bend: Symbol): Plane.Direction {
    switch (bend) {
        case L:
            return Plane.Direction.L;
        case R:
            return Plane.Direction.R;
        default:
            throw new Error('Unknown direction');
    }
}

export function getDragonFractal(iterations = 13): PrintableDirectionMatrix {
    let dragon: Directions = [];

    for (let i = 1; i <= iterations; i += 1) {
        dragon = Bend(dragon, L);
    }

    const matrix = new PrintableDirectionMatrix(Plane.Orientation.E);
    for (let bend of dragon) {
        matrix.turn(bendToDirection(bend));
    }
    return matrix;
}
