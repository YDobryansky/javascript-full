const buttons = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.getAttribute('data-page-number'));
};

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});
