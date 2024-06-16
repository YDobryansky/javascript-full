const buttons = document.querySelectorAll('.pagination__page');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    console.log(e.target.getAttribute('data-page-number'));
  });
});
