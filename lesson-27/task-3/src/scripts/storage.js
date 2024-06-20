const STORAGE_KEY = 'tasksList';

export const getTasks = () => {
  const tasks = localStorage.getItem(STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

export const setTasks = tasks => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
