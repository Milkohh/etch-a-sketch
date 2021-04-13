function colourCell(e) {
  const colourOptions = document.getElementById("colour-options");
  const selectedIndex = colourOptions.options.selectedIndex;
  const selectedValue = colourOptions.options[selectedIndex].value;

  if (selectedValue === "random") {
    e.target.style.backgroundColor = getRandomColour();
  }
  e.target.style.backgroundColor = selectedValue;
}

function getRandomColour() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(cellSize) {
  container.innerHTML = "";

  for (let i = 0; i < cellSize; i++) {
    const colDiv = document.createElement("div");

    for (let j = 0; j < cellSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.addEventListener("mouseenter", colourCell);

      cell.style.height = `${GRID_MAX_SIZE / cellSize}px`;
      cell.style.width = `${GRID_MAX_SIZE / cellSize}px`;

      colDiv.appendChild(cell);
    }

    container.appendChild(colDiv);
  }
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

function resizeGrid() {
  let newCellSize;
  let validInput = false;

  // Validate the user input
  do {
    newCellSize = parseInt(prompt("How many squares per side? "), 10);

    if (!newCellSize) {
      alert("New size must be a number between 1-100!");
    } else if (newCellSize < 1 || newCellSize > 100) {
      alert(
        "Number not in range of 1-100! Please pick a number between 1-100."
      );
    } else {
      validInput = true;
    }
  } while (!validInput);

  createGrid(newCellSize);
}

const GRID_MAX_SIZE = 700;

const container = document.getElementById("container");
container.style.width = `${GRID_MAX_SIZE}px`;

const resizeBtn = document.getElementById("resize-btn");
const clearBtn = document.getElementById("clear-btn");

resizeBtn.addEventListener("click", resizeGrid);
clearBtn.addEventListener("click", clearGrid);

createGrid(16);
