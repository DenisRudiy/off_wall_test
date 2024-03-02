export function changeSize(size: number) {
  const paintedCells = document.querySelectorAll(".Field_cell");
  if (size > 57) {
    paintedCells.forEach((cell) => {
      if (cell instanceof HTMLElement) {
        cell.style.width = "13px";
        cell.style.height = "13px";
      }
    });
  } else if (size > 30) {
    paintedCells.forEach((cell) => {
      if (cell instanceof HTMLElement) {
        cell.style.width = "18px";
        cell.style.height = "18px";
      }
    });
  } else {
    paintedCells.forEach((cell) => {
      if (cell instanceof HTMLElement) {
        cell.style.width = "50px";
        cell.style.height = "50px";
      }
    });
  }
}
