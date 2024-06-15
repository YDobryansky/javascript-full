export function getSection(num) {
  const span = document.querySelector(`span[data-number="${num}"]`);
  const box = span.closest('.box');
  return box.getAttribute('data-section');
}