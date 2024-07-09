import { User } from './user.js';

class Student extends User {
  #isActive = true; // Поле isActive за замовчуванням true

  constructor(id, firstName, lastName, group, points) {
    super(id, firstName, lastName);
    this.group = group;
    this.points = points;
  }

  get isActive() {
    return this.#isActive;
  }

  set isActive(isActive) {
    this.#isActive = isActive;
  }
}

export { Student };
