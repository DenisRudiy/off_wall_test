export function hoverCell(event: any, row: number, col: number) {
  const element = event.currentTarget;
  if (element.classList.contains("painted")) {
    element.classList.remove("painted");
    element.style.backgroundColor = "white";
  } else {
    element.classList.add("painted");
    element.style.backgroundColor = "blue";
  }
  return `row ${row} col ${col}`;
}
