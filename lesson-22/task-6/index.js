const singleUseBtn = document.querySelector('.single-use-btn');

const handleClick = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', handleClick);
};

singleUseBtn.addEventListener('click', handleClick);
