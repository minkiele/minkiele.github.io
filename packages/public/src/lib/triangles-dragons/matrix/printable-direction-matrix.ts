import { OrientationMatrix } from './orientation-matrix';
import { Line } from './line';
import { Plane } from './plane';

export class PrintableDirectionMatrix extends OrientationMatrix<Line.Line> {
  public step(newOrientation: Plane.Orientation) {
    const comingOrientation: Plane.Orientation = Plane.getOppositeOrientation(this.orientation);

    const newLine: Line.Line = new Line.Line(
      newOrientation === Plane.Orientation.N || comingOrientation === Plane.Orientation.N,
      newOrientation === Plane.Orientation.E || comingOrientation === Plane.Orientation.E,
      newOrientation === Plane.Orientation.S || comingOrientation === Plane.Orientation.S,
      newOrientation === Plane.Orientation.W || comingOrientation === Plane.Orientation.W
    );
    let newContent: Line.Line;
    try {
      const currentContent: Line.Line = this.getContent(this.row, this.column);
      newContent = currentContent.unite(newLine);
    } catch (exc) {
      newContent = newLine;
    }
    return this.setContent(newContent, this.row, this.column).move(newOrientation);
  }

  public turn(direction: Plane.Direction): this {
    const currentOrientation: Plane.Orientation = this.orientation;
    const newOrientation: Plane.Orientation = Plane.getNextOrientation(direction, currentOrientation);
    return this.step(newOrientation);
  }

  public toString(): string {
    return this.matrix.map((row) => row.map((col) => (col !== null ? col : ' ')).join('')).join('\n');
  }
}
