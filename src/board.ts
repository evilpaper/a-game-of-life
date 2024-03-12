import { Cell } from "./cell";

export class Board {
  constructor(private board: number[][]) {}

  public tick() {
    this.board = this.board.map((row: number[], rowIdx: number) => {
      return row.map((__, cellIdx: number) => {
        const neighbors = [
          this.getCellContent(cellIdx - 1, rowIdx - 1),
          this.getCellContent(cellIdx - 1, rowIdx),
          this.getCellContent(cellIdx - 1, rowIdx + 1),
          this.getCellContent(cellIdx, rowIdx - 1),
          this.getCellContent(cellIdx, rowIdx + 1),
          this.getCellContent(cellIdx + 1, rowIdx - 1),
          this.getCellContent(cellIdx + 1, rowIdx),
          this.getCellContent(cellIdx + 1, rowIdx + 1),
        ];
        const neighborsSum = neighbors.reduce((sum, a) => sum + a, 0);
        const cell = new Cell(
          this.getCellContent(rowIdx, cellIdx),
          neighborsSum
        );
        return cell.setNextState();
      });
    });
    return this.board;
  }

  private getCellContent(cellIndex: number, rowIndex: number) {
    return this.board[rowIndex] && this.board[rowIndex][cellIndex] ? 1 : 0;
  }
}
