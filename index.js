const gridWidth = 600; // roughly the size of grid in pixels
let gridNumber = 16; // initial grid number (16 x 16 squares)
var divId = 0; // div id (used for each square)
var brId = 0; // break line id (used at the end of each column)

function buildGrid(num) {
  let squareSize = Math.floor(gridWidth / num);
  for (i = 0; i < num; i++) {
    brId += 1;
    let lineBreak = document.createElement("br");
    lineBreak.setAttribute("id", `br_${brId}`);
    document.body.appendChild(lineBreak);
    for (j = 0; j < num; j++) {
      divId += 1; 
      const square = document.createElement('div');
      square.setAttribute("id", `div_${divId}`);
      square.style.minWidth = `${squareSize}px`;
      square.style.minHeight = `${squareSize}px`;
      square.classList.add('container');
      square.addEventListener("mouseover", draw);
      // square.textContent = `${i+1}`;
      document.body.appendChild(square);
    }
  }
}

function draw(e) {
  e.target.style.backgroundColor = "black";
}

// removes previous grid by removing all of its divs and line breaks
function removeGrid(gridNumber) {
  for (i = 1; i <= gridNumber * gridNumber; i++) {
    var oldSquares = document.getElementById(`div_${i}`)
    oldSquares.remove();
  }
  for (i = 1; i <= gridNumber; i++) {
    var oldLineBreak = document.getElementById(`br_${i}`);
    oldLineBreak.remove();
  }
  brId = 0;
  divId = 0;
}

button = document.querySelector("button");

// prompts user for new grid size, then removes old grid and builds new grid
button.addEventListener("click", () => {
  let newGrid = prompt("Enter new grid size between 1 and 32", "16"); 
  if (newGrid > 32 || newGrid < 1 || isNaN(newGrid)) {
    alert("I said between 1 and 32!!");
    return;
  }
  removeGrid(gridNumber);
  buildGrid(newGrid);
  gridNumber = newGrid;
});

buildGrid(gridNumber); // initial grid 