import { User } from './user.js';

class Student extends User {
  #isActive = true;

  constructor(id, firstName, lastName, group, points) {
    super(id, firstName, lastName);
    this.group = group;
    this.points = points;
  }

  get getIsActive() {
    return this.#isActive;
  }

  set setIsActive(isActive) {
    this.#isActive = isActive;
  }
}

export { Student };
