import { User } from './user.js';

export class Student extends User {
  constructor(id, firstName, lastName, group, points) {
    super(id, firstName, lastName);
    this.group = group;
    this.points = points;
    this._isActive = true;
  }

  get getIsActive() {
    return this._isActive;
  }

  set setIsActive(value) {
    this._isActive = value;
  }
}
