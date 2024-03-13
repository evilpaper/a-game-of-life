import { Board } from "./board";

const app = document.getElementById("app");

const board = new Board([
  [1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1],
]);

// Draw first time
board.tick().forEach((row) => {
  row.forEach((cell) => {
    app.insertAdjacentHTML("beforeend", `<span>${cell}</span>`);
  });
});

// Draw subsequent times
function tick() {
  app.innerHTML = "";
  board.tick().forEach((row) => {
    row.forEach((cell) => {
      app.insertAdjacentHTML("beforeend", `<span>${cell}</span>`);
    });
  });
}

setInterval(tick, 1000);
