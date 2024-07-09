import { User } from './user.js';

export class Student extends User {
  constructor(id, firstName, lastName, group, points) {
    super(id, firstName, lastName);
    this.group = group;
    this.points = points;
    this._isActive = true;
  }

  get isActive() {
    return this._isActive;
  }

  set isActive(value) {
    this._isActive = value;
  }
}
