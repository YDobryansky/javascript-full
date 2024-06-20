import { getTasks } from './storage.js';

const listElem = document.querySelector('.list');

const createTaskElement = ({ text, done }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(checkbox, text);
  return listItemElem;
};

export const renderTasks = () => {
  const tasks = getTasks();
  const tasksElems = tasks.sort((a, b) => a.done - b.done).map(createTaskElement);

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};
