export class JumpMatrix {
  private row = -1;
  private col = -1;
  private move = 0;
  public isSolved(): boolean {
    return this.move === this.size ** 2;
  }
  private matrix: Array<Array<number | undefined>> = Array(this.size)
    .fill(undefined)
    .map(() => Array(this.size).fill(undefined));

  public constructor(private size = 5) {}

  private getRandomUpTo(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  private setStartPosition() {
    do {
      this.row = this.getRandomUpTo(this.size);
      this.col = this.getRandomUpTo(this.size);
    } while (this.getValueAtCurrentPosition() != null);
  }

  private advandceOneMove() {
    this.move += 1;
  }

  private isPositionCandidate(row: number, col: number): boolean {
    return row >= 0 && row < this.size && col >= 0 && col < this.size && this.matrix[row][col] == null;
  }

  private getCandidateCoordinates(rowOffset = 0, colOffset = 0): [number, number] {
    return [this.row + rowOffset, this.col + colOffset];
  }

  private advancePosition(row: number, col: number): this {
    this.setCurrentPosition(row, col);
    this.advandceOneMove();
    this.setValueAtCurrentPosition();
    return this;
  }

  private advance() {
    while (this.move < this.size ** 2) {
      const testedPositions: Array<boolean> = Array(8).fill(false);
      let advanced = false;
      let rowCandidate = -1;
      let colCandidate = -1;
      do {
        const direction = this.getRandomUpTo(8);
        switch (direction) {
          case 0: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(-3);
            break;
          }
          case 1: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(-2, 2);
            break;
          }
          case 2: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(0, 3);
            break;
          }
          case 3: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(2, 2);
            break;
          }
          case 4: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(3);
            break;
          }
          case 5: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(2, -2);
            break;
          }
          case 6: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(0, -3);
            break;
          }
          case 7: {
            [rowCandidate, colCandidate] = this.getCandidateCoordinates(-2, -2);
            break;
          }
        }
        if (!testedPositions[direction] && this.isPositionCandidate(rowCandidate, colCandidate)) {
          this.advancePosition(rowCandidate, colCandidate);
          advanced = true;
        }
        testedPositions[direction] = true;
      } while (!advanced && testedPositions.includes(false));
      if (!testedPositions.includes(false) && !advanced) {
        throw new Error('Cannot move anymore');
      }
    }
  }

  private getValueAtCurrentPosition(): number | undefined {
    return this.matrix[this.row][this.col];
  }

  private setCurrentPosition(row: number, col: number): this {
    this.row = row;
    this.col = col;
    return this;
  }

  private setValueAtCurrentPosition(): this {
    this.matrix[this.row][this.col] = this.move;
    return this;
  }

  public playFrom(row: number, col: number) {
    // Positioning the starting point the first move
    this.advandceOneMove();
    this.setCurrentPosition(row, col);
    this.setValueAtCurrentPosition();
    this.advance();
  }

  public play() {
    // Positioning the starting point the first move
    this.advandceOneMove();
    this.setStartPosition();
    this.setValueAtCurrentPosition();
    this.advance();
  }

  public toString(): string {
    return this.matrix
      .map((row) => {
        const printableRow = row.map((col) => `${col == null || col < 10 ? ' ' : ''}${col == null ? ' ' : col}`).join(' ');
        return `[ ${printableRow} ]`;
      })
      .join('\n');
  }

  public getMatrix(): Array<Array<number | undefined>> {
    // Copy the matrix
    return this.matrix.map((row) => row.slice());
  }

  public getValueAt(row: number, col: number): number | undefined {
    return this.matrix[row][col];
  }

  public getMove(): number {
    return this.move;
  }
}
