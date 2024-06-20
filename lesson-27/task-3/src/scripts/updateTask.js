import { getTasks, setTasks } from './storage.js';
import { renderTasks } from './render.js';

const listElem = document.querySelector('.list');

const updateTaskStatus = event => {
  if (!event.target.classList.contains('list__item-checkbox')) return;

  const tasks = getTasks();
  const taskElem = event.target.closest('.list__item');
  const taskText = taskElem.textContent.trim();

  const task = tasks.find(task => task.text === taskText);
  task.done = event.target.checked;

  setTasks(tasks);
  renderTasks();
};

export const initUpdateTaskHandler = () => {
  listElem.addEventListener('click', updateTaskStatus);
};
