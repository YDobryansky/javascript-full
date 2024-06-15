const rects = document.querySelectorAll('.rect');
const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

let handlersAttached = true;

function handleClick(event) {
  const eventType = event.eventPhase === Event.CAPTURING_PHASE ? 'grey' : 'green';
  const element = event.currentTarget.classList.contains('rect_span') ? 'span' : event.currentTarget.classList.contains('rect_p') ? 'p' : 'div';
  const span = document.createElement('span');
  span.style.color = eventType;
  span.style.marginLeft = '8px';
  span.textContent = element;
  eventsList.appendChild(span);
}

function attachHandlers() {
  rects.forEach((rect) => {
    rect.addEventListener('click', handleClick, true);
    rect.addEventListener('click', handleClick, false);
  });
  handlersAttached = true;
}

function removeHandlers() {
  rects.forEach((rect) => {
    rect.removeEventListener('click', handleClick, true);
    rect.removeEventListener('click', handleClick, false);
  });
  handlersAttached = false;
}

clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});

removeHandlersBtn.addEventListener('click', () => {
  removeHandlers();
});

attachHandlersBtn.addEventListener('click', () => {
  attachHandlers();
});

attachHandlers();