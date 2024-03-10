import { Board } from "./game-of-life";
import { Cell } from "./game-of-life";
import { it } from "@jest/globals";

/**
 * Rules
 * -------------------
 * a living cell with fewer than 2 neighbors dies,
 * a living cell with 2 living neighbors survives,
 * a living cell with 3 living neighbors survives,
 * a living cell with more than 3 living neighbors dies,
 * a dead cell with 3 neighbors alive comes to life.
 *
 *
 * Test cases
 * ------------------
 * - any cell with fewer than 2 neighbors, regardless of whether it is currently alive or dead, will die after a tick,
 * - every cell with exactly 3 neighbors, regardless of whether it is currently alive or dead, will be alive after the "tick",
 * - if a cell currently has 2 neighbors, the cell will only be alive after tick if it’s already alive.
 */

describe("Game Of Life", () => {
  describe("Cell", () => {
    it.each([new Cell(1, 1), new Cell(1, 0), new Cell(0, 1), new Cell(0, 0)])(
      'cell will be dead after tick when has less than 2 neighbors"',
      (cell) => {
        expect(cell.setNextState()).toEqual(0);
      }
    );

    it("cell will be alive after tick when has 3 neighbors", () => {
      const cell = new Cell(1, 3);
      expect(cell.setNextState()).toEqual(1);
    });

    it("alive cell will be alive after tick when has 2 neighbors", () => {
      const cell = new Cell(1, 2);
      expect(cell.setNextState()).toEqual(1);
    });
  });
  describe("Board", () => {
    describe("returns proper board after tick", () => {
      it("sample board 1", () => {
        const board = {
          before: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
          after: [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
          ],
        };
        expect(new Board(board.before).tick()).toEqual(board.after);
      });

      it("sample board 2", () => {
        const board = {
          before: [
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1],
          ],
          after: [
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0],
          ],
        };
        expect(new Board(board.before).tick()).toEqual(board.after);
      });

      it("sample board 3", () => {
        const board = {
          before: [
            [1, 0, 1],
            [1, 0, 1],
            [1, 1, 0],
          ],
          after: [
            [0, 0, 0],
            [1, 0, 1],
            [1, 1, 0],
          ],
        };
        expect(new Board(board.before).tick()).toEqual(board.after);
      });
    });
  });
});
