export class Matrix<T> {
  protected matrix: Array<Array<T | null>> = [];
  protected rows: number = 0;
  protected columns: number = 0;

  public setContent(content: T, row: number, column: number): this {
    this.ensureMatrixSize(row + 1, column + 1);
    this.matrix[row][column] = content;
    return this;
  }

  public getContent(row: number, column: number): T {
    if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
      return this.matrix[row][column] as T;
    } else {
      throw new Error('ArrayIndexOutOfBoundException');
    }
  }

  private ensureMatrixSize(rows: number, columns: number) {
    for (let j = this.columns; j < columns; j += 1) {
      this.addColumn(j);
    }
    for (let i: number = this.rows; i < rows; i += 1) {
      this.addRow(i);
    }
  }

  private normalizeRowIndex(row: number): number {
    return Math.max(0, Math.min(row, this.rows));
  }

  private normalizeColumnIndex(column: number): number {
    return Math.max(0, Math.min(column, this.columns));
  }

  public addRow(row: number): this {
    const normalizedRow: number = this.normalizeRowIndex(row);
    const newRow: Array<T | null> = [];
    for (let i = 0; i < this.columns; i += 1) {
      newRow.push(null);
    }
    this.matrix.splice(normalizedRow, 0, newRow);
    this.rows += 1;
    return this;
  }

  public addColumn(column: number): this {
    const normalizedColumn: number = this.normalizeColumnIndex(column);
    for (let i = 0; i < this.rows; i += 1) {
      this.matrix[i].splice(normalizedColumn, 0, null);
    }
    this.columns += 1;
    return this;
  }

  public getRows() {
    return this.rows;
  }

  public getColumns() {
    return this.columns;
  }

  public getSize() {
    return this.rows * this.columns;
  }
}
