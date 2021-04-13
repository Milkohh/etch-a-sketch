function createGrid(xWidth, yWidth) {
  for (let i = 0; i < xWidth; i++) {
    const colDiv = document.createElement("div");

    for (let j = 0; j < yWidth; j++) {    
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.style.height = "30px";
      cell.style.width = "30px";
      
      colDiv.appendChild(cell);
    }

    container.appendChild(colDiv);
  }
}

const container = document.getElementById("container");

createGrid(16, 16);

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.classList.add("coloured");
  });
});