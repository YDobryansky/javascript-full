export function finishForm() {  
  const loginInput = Object.assign(document.createElement('input'),{type: 'text', name:'login'});  
  const form = document.querySelector('form');

  form.prepend(loginInput);

  Object.assign(form.querySelector('input[name="password"]'), { type: 'password' });
}

