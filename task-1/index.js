'use strict';

const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

function logEvent(phase, elem) {
  const color = phase === 'capturing' ? 'grey' : 'green';
  const span = `<span style="color: ${color}; margin-left: 8px;">${elem}</span>`;
  eventsList.innerHTML += span;
}

function handleClick(event) {
  logEvent('capturing', event.currentTarget.className);
}

function handlePropagation(event) {
  logEvent('bubbling', event.currentTarget.className);
}

function attachHandlers() {
  rectDiv.addEventListener('click', handleClick, true);
  rectP.addEventListener('click', handleClick, true);
  rectSpan.addEventListener('click', handleClick, true);

  rectDiv.addEventListener('click', handlePropagation);
  rectP.addEventListener('click', handlePropagation);
  rectSpan.addEventListener('click', handlePropagation);
}

function removeHandlers() {
  rectDiv.removeEventListener('click', handleClick, true);
  rectP.removeEventListener('click', handleClick, true);
  rectSpan.removeEventListener('click', handleClick, true);

  rectDiv.removeEventListener('click', handlePropagation);
  rectP.removeEventListener('click', handlePropagation);
  rectSpan.removeEventListener('click', handlePropagation);
}

clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});

removeHandlersBtn.addEventListener('click', removeHandlers);
attachHandlersBtn.addEventListener('click', attachHandlers);

attachHandlers();
