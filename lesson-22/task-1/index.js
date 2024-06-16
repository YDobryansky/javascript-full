const logEventWithColor = (eventType, color) => {
  const eventsList = document.querySelector('.events-list');
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${eventType}</span>`;
};

const logGreen = eventType => logEventWithColor(eventType, 'green');
const logGrey = eventType => logEventWithColor(eventType, 'grey');

const logGreenDiv = () => logGreen('DIV');
const logGreenP = () => logGreen('P');
const logGreenSpan = () => logGreen('SPAN');
const logGreyDiv = () => logGrey('DIV');
const logGreyP = () => logGrey('P');
const logGreySpan = () => logGrey('SPAN');

const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');

const attachEventListeners = () => {
  divElement.addEventListener('click', logGreyDiv, true);
  divElement.addEventListener('click', logGreenDiv);
  pElement.addEventListener('click', logGreyP, true);
  pElement.addEventListener('click', logGreenP);
  spanElement.addEventListener('click', logGreySpan, true);
  spanElement.addEventListener('click', logGreenSpan);
};

const removeEventListeners = () => {
  divElement.removeEventListener('click', logGreyDiv, true);
  divElement.removeEventListener('click', logGreenDiv);
  pElement.removeEventListener('click', logGreyP, true);
  pElement.removeEventListener('click', logGreenP);
  spanElement.removeEventListener('click', logGreySpan, true);
  spanElement.removeEventListener('click', logGreenSpan);
};

attachEventListeners();

const attachHandlersButton = document.querySelector('.attach-handlers-btn');
attachHandlersButton.addEventListener('click', attachEventListeners);

const removeHandlersButton = document.querySelector('.remove-handlers-btn');
removeHandlersButton.addEventListener('click', removeEventListeners);

const clearEventsList = () => {
  const eventsList = document.querySelector('.events-list');
  eventsList.innerHTML = '';
};

const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', clearEventsList);
