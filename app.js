const createGrid = (gridSize) => {
  const gridContainer = document.querySelector('[data-js="container"]');
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  const gridItems = gridContainer.querySelectorAll("div");
  gridItems.forEach((gridItem) => gridItem.remove());

  const gridAmount = gridSize * gridSize;

  for (let i = 0; i < gridAmount; i++) {
    let singleDiv = document.createElement("div");
    singleDiv.style.backgroundColor = "#292b2c ";
    gridContainer.appendChild(singleDiv);

    singleDiv.addEventListener("mouseover", () => {
      singleDiv.style.backgroundColor = "#f7f7f7 ";
    });
  }
};

createGrid(16);

const changeSizeButton = document.querySelector('[data-js="changeSizeButton"]');
changeSizeButton.addEventListener("click", () => {
  const askUserInput = prompt("Enter a grid size between 1 and 100");
  const parseUserInput = parseInt(askUserInput);

  const gridSizeInput = document.querySelector('[data-js="gridSizeInput"]');
  gridSizeInput.innerHTML = `Current grid size: ${parseUserInput} x ${parseUserInput}`;

  if (parseUserInput >= 1 && parseUserInput <= 100) {
    createGrid(parseUserInput);
    document.body.appendChild(testDiv);
  } else {
    alert("You should enter a number between 1 and 100. Please try again!");
  }
});

const resetButton = document.querySelector('[data-js="resetGameButton"]');
resetButton.addEventListener("click", () => {
  window.location.reload();
});
