import { User } from './user.js';

export class Student extends User {
  #isActive = true; 

  constructor(id, firstName, lastName, group, points) {
    super(id, firstName, lastName);
    this.group = group;
    this.points = points;
  }

  getIsActive() {
    return this.#isActive;
  }

  setIsActive(isActive) {
    this.#isActive = isActive;
  }
}