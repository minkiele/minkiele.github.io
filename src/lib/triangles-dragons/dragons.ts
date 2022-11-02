import { Plane } from './matrix/plane';
import { PrintableDirectionMatrix } from './matrix/printable-direction-matrix';

const L_REP: string = 'L';
const R_REP: string = 'R';

export const L: Symbol = Symbol(L_REP);
export const R: Symbol = Symbol(R_REP);

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

export function getDragonFractal(iterations = 13, bendDirection = L, orientation = Plane.Orientation.E): PrintableDirectionMatrix {
    let dragon: Directions = [];

    for (let i = 1; i <= iterations; i += 1) {
        dragon = Bend(dragon, bendDirection);
    }

    const matrix = new PrintableDirectionMatrix(orientation);
    for (let bend of dragon) {
        matrix.turn(bendToDirection(bend));
    }
    return matrix;
}
