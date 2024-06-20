import { renderTasks } from './render.js';
import { initCreateTaskHandler } from './createTask.js';
import { initUpdateTaskHandler } from './updateTask.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initCreateTaskHandler();
  initUpdateTaskHandler();
});

window.addEventListener('storage', () => {
  renderTasks();
});
