export class Cell {
  constructor(private state: number, private neighborsSum: number) {}

  public setNextState(): number {
    if (this.hasThreeNeighbors() || this.hasTwoNeighborsAndAlive()) return 1;
    return 0;
  }

  public hasThreeNeighbors(): boolean {
    return this.neighborsSum === 3;
  }

  public hasTwoNeighborsAndAlive(): boolean {
    return this.state === 1 && this.neighborsSum === 2;
  }
}
