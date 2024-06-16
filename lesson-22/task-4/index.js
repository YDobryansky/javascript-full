const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('change', () => {
  console.log(`Checked: ${checkboxElem.checked}`);
  console.log(`Value: ${checkboxElem.value}`);
});
