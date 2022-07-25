const testDiv = document.createElement("div");
testDiv.innerHTML = "<h2>This is created using js</h2>";
document.body.appendChild(testDiv);

const createGrid = (gridSize) => {
  const gridContainer = document.querySelector('[data-js="container"]');
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  const gridItems = gridContainer.querySelectorAll("div");
  gridItems.forEach((gridItem) => gridItem.remove());

  const gridAmount = gridSize * gridSize;

  for (let i = 0; i < gridAmount; i++) {
    let singleDiv = document.createElement("div");
    singleDiv.style.backgroundColor = "crimson";
    gridContainer.appendChild(singleDiv);

    singleDiv.addEventListener("mouseover", () => {
      singleDiv.style.backgroundColor = "blue";
    });
  }
};

createGrid(16);

const changeSizeButton = document.querySelector('[data-js="changeSizeButton"]');
changeSizeButton.addEventListener("click", () => {
  const askUserInput = prompt("Enter a grid size between 1 and 100");
  const parseUserInput = parseInt(askUserInput);
  parseUserInput >= 1 && parseUserInput <= 100
    ? createGrid(parseUserInput)
    : alert("You should enter a number between 1 and 100. Please try again!"),
    window.location.reload();
});

const resetButton = document.querySelector('[data-js="resetGameButton"]');
resetButton.addEventListener("click", () => {
  window.location.reload();
});
