const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', () => {
  console.log(checkbox.checked);
  console.log(`Value: ${checkbox.value}`);
});
