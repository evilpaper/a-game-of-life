/**
 * Rules
 * -------------------
 * a living cell with fewer than 2 neighbors dies,
 * a living cell with 2 living neighbors survives,
 * a living cell with 3 living neighbors survives,
 * a living cell with more than 3 living neighbors dies,
 * a dead cell with 3 neighbors alive comes to life.
 */

// import { sum } from "./game-of-life";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

import { Board } from "./game-of-life";

const boardOfDeads: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

it("returns empty board when all given cells are dead", () => {
  const board = new Board(boardOfDeads);
  expect(board.tick()).toEqual(boardOfDeads);
});
