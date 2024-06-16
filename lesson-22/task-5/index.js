const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', () => {
  console.log(searchInput.value);
});
