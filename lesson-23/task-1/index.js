const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.addEventListener('click', toggleTaskStatus);

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const addTask = () => {
  const text = inputElem.value.trim();

  if (text === '') return;

  const newTask = {
    id: Date.now(),
    text,
    done: false,
  };

  tasks.push(newTask);
  renderTasks(tasks);
  inputElem.value = '';
};

const toggleTaskStatus = event => {
  const taskId = +event.target.dataset.id;
  const task = tasks.find(task => task.id === taskId);
  task.done = !task.done;
  renderTasks(tasks);
};

createBtnElem.addEventListener('click', addTask);
renderTasks(tasks);
