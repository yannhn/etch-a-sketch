const testDiv = document.createElement("div");
testDiv.innerHTML = "<h2>This is created using js</h2>";
document.body.appendChild(testDiv);

const gridContainer = document.querySelector(".container");
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
  let singleDiv = document.createElement("div");
  singleDiv.style.backgroundColor = "blue";
  gridContainer.appendChild(singleDiv);
}
