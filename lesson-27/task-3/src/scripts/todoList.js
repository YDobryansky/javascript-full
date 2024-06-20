//will creating task
import { createTask } from './....';
//will update task
import { toggleTask } from './....';


export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', createTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', toggleTask);
};
