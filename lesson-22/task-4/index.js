const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', () => {
  console.log(`Checked: ${checkbox.checked}`);
  console.log(`Value: ${checkbox.value}`);
});