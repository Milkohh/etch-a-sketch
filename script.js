function createGrid(xWidth, yWidth) {
  container.innerHTML = "";

  for (let i = 0; i < xWidth; i++) {
    const colDiv = document.createElement("div");

    for (let j = 0; j < yWidth; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.addEventListener("mouseenter", () => {
        cell.classList.add("coloured");
      });

      cell.style.height = "30px";
      cell.style.width = "30px";

      colDiv.appendChild(cell);
    }

    container.appendChild(colDiv);
  }
}

const container = document.getElementById("container");
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
  createGrid(16, 16);
});

createGrid(16, 16);