const textInput = document.querySelector('.text-input');
const checkbox = document.querySelector('.task-status');

textInput.addEventListener('input', () => {
  console.log(`Checkbox is checked: ${checkbox.checked}`);
});

checkbox.addEventListener('change', () => {
  console.log(`Checkbox is checked: ${checkbox.checked}`);
});
