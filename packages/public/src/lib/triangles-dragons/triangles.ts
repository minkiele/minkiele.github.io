const P: Symbol = Symbol('P');
const D: Symbol = Symbol('D');

function Oddity(O1: Symbol, O2: Symbol): Symbol {
  return O1 === O2 ? P : D;
}

type Row = Array<Symbol>;
type Triangle = Array<Row>;

const triangle: Triangle = [];

function addRow(triangle: Triangle) {
  const row: Row = [D];
  if (triangle.length) {
    const lastRow: Row = triangle[triangle.length - 1];
    for (let j = 0; j < lastRow.length - 1; j += 1) {
      row.push(Oddity(lastRow[j], lastRow[j + 1]));
    }
    row.push(D);
  }
  triangle.push(row);
}

for (let i = 0; i < Math.pow(2, 8); i += 1) {
  addRow(triangle);
}

const P_REP: string = ' ';
const D_REP: string = '*';

function rowToString(row: Row, PRep: string = P_REP, DRep: string = D_REP): string {
  return row.map((single) => (single === D ? DRep : PRep)).join('');
}

export function getTriangle(limit = 2 ** 8): Triangle {
  const triangle: Triangle = [];
  for (let i = 0; i < limit; i += 1) {
    addRow(triangle);
  }
  return triangle;
}

export function triangleToStringRows(triangle: Triangle, PRep: string = P_REP, DRep: string = D_REP): Array<string> {
  return triangle.map((row) => rowToString(row, PRep, DRep));
}

export function triangleToString(triangle: Triangle, PRep: string = P_REP, DRep: string = D_REP): string {
  return triangleToStringRows(triangle, PRep, DRep).join('\n');
}

// console.log(triangleToString(triangle));
