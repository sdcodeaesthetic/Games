var restart = document.querySelector("button");
var cell = document.querySelectorAll("td");
function clearBoard() {
  for (var i = 0; i < cell.length; i++) {
    cell[i].textContent = "";
  }
}
restart.addEventListener("click", clearBoard)
function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  }
  else if (this.textContent === "X") {
    this.textContent = "O";
  }
  else {
    this.textContent = "";
  }
}
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", changeMarker);
}
