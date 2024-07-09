export class User {
  #isAdmin = false;

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getIsAdmin() {
    return this.#isAdmin;
  }

  setIsAdmin(isAdmin) {
    this.#isAdmin = isAdmin;
  }
}