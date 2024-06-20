import { getTasks, setTasks } from './storage.js';
import { renderTasks } from './render.js';

const taskInputElem = document.querySelector('.task-input');

const createTask = () => {
  const taskText = taskInputElem.value.trim();
  if (taskText === '') return;

  const tasks = getTasks();
  const newTask = { text: taskText, done: false };
  tasks.push(newTask);
  setTasks(tasks);
  renderTasks();

  taskInputElem.value = '';
};

export const initCreateTaskHandler = () => {
  const createTaskBtn = document.querySelector('.create-task-btn');
  createTaskBtn.addEventListener('click', createTask);
};
