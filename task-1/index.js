const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');

const addEventToList = (elementName, color) => {
    const span = document.createElement('span');
    span.textContent = elementName;
    span.style.color = color;
    span.style.marginLeft = '8px';
    eventsList.appendChild(span);
};

const divHandler = (e) => {
    if (e.eventPhase === Event.CAPTURING_PHASE) {
        addEventToList('div', 'grey');
    } else if (e.eventPhase === Event.BUBBLING_PHASE) {
        addEventToList('div', 'green');
    }
};

const pHandler = (e) => {
    if (e.eventPhase === Event.CAPTURING_PHASE) {
        addEventToList('p', 'grey');
    } else if (e.eventPhase === Event.BUBBLING_PHASE) {
        addEventToList('p', 'green');
    }
};

const spanHandler = (e) => {
    if (e.eventPhase === Event.CAPTURING_PHASE) {
        addEventToList('span', 'grey');
    } else if (e.eventPhase === Event.BUBBLING_PHASE) {
        addEventToList('span', 'green');
    }
};

const attachHandlers = () => {
    divElement.addEventListener('click', divHandler, true);
    divElement.addEventListener('click', divHandler, false);
    pElement.addEventListener('click', pHandler, true);
    pElement.addEventListener('click', pHandler, false);
    spanElement.addEventListener('click', spanHandler, true);
    spanElement.addEventListener('click', spanHandler, false);
};

const removeHandlers = () => {
    divElement.removeEventListener('click', divHandler, true);
    divElement.removeEventListener('click', divHandler, false);
    pElement.removeEventListener('click', pHandler, true);
    pElement.removeEventListener('click', pHandler, false);
    spanElement.removeEventListener('click', spanHandler, true);
    spanElement.removeEventListener('click', spanHandler, false);
};

clearBtn.addEventListener('click', () => {
    eventsList.innerHTML = '';
});

removeHandlersBtn.addEventListener('click', removeHandlers);
attachHandlersBtn.addEventListener('click', attachHandlers);

attachHandlers();
