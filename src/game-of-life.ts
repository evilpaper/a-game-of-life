// export function sum(a: number, b: number): number {
//   return a + b;
// }

export class Board {
  constructor(private board: number[][]) {}

  public tick() {
    return [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
}
