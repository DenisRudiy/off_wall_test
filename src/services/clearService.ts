export function clearService() {
  const paintedCells = document.querySelectorAll(".Field_cell.painted");
  paintedCells.forEach((cell) => {
    if (cell instanceof HTMLElement) {
      cell.classList.remove("painted");
      cell.style.backgroundColor = "white";
    }
  });
}
