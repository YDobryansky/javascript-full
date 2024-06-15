export function finishList() {
  const list = document.querySelector('.list');
  
  const li1 = Object.assign(document.createElement('li'),{textContent: '1'});
  const li4 = Object.assign(document.createElement('li'),{textContent: '4'});
  const li6 = Object.assign(document.createElement('li'),{textContent: '6'});
  const li8 = Object.assign(document.createElement('li'),{textContent: '8'});

  list.prepend(li1);
  list.querySelector('.special').before(li4); 
  list.querySelector('.special').after(li6);
  list.append(li8);
}