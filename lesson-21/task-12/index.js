export function squaredNumbers() {
  const numberElements = document.querySelectorAll('.number');
  numberElements.forEach(element => {
    const number = element.dataset.number;
    element.dataset.squaredNumber = number * number;
  });
}