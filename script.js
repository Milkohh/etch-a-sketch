const container = document.getElementById("container");

// Create a grid of 16x16
for (let i = 0; i < 16; i++) {
  const colDiv = document.createElement("div");

  for (let j = 0; j < 16; j++) {    
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.style.height = "30px";
    cell.style.width = "30px";
    
    colDiv.appendChild(cell);
  }

  container.appendChild(colDiv);
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.classList.add("coloured");
  });
});