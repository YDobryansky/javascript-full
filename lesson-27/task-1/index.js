'use strict';

export const getLocalStorageData = () => {
  const data = {};

  for (let i = 0; i < localStorage.length; i + 1) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    try {
      data[key] = JSON.parse(value);
    } catch (e) {
      data[key] = value;
    }
  }

  return data;
};
