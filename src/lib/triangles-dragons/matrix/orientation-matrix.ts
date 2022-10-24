import { Matrix } from './matrix';
import { Plane } from './plane';

export class OrientationMatrix<T> extends Matrix<T> {

    protected row: number = 0;
    protected column: number = 0;

    public constructor(protected orientation: Plane.Orientation) {
        super();
    }

    public move(orientation: Plane.Orientation): this {
        switch (orientation) {
            case Plane.Orientation.N:
                if (this.row === 0) {
                    this.addRow(0);
                } else {
                    this.row -= 1;
                }
                break;
            case Plane.Orientation.S:
                this.row += 1;
                if (this.row === this.rows) {
                    this.addRow(this.row);
                }
                break;
            case Plane.Orientation.W:
                if (this.column === 0) {
                    this.addColumn(0);
                } else {
                    this.column -= 1;
                }
                break;
            case Plane.Orientation.E:
                this.column += 1;
                if (this.column === this.columns) {
                    this.addColumn(this.column);
                }
                break;
            default:
                throw new Error(`Unknown direction`);
        }

        this.orientation = orientation;

        return this;

    }

}
