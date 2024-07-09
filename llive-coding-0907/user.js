export class User {
  #isAdmin = false; 

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get getIsAdmin() {
    return this.#isAdmin;
  }

  set setIsAdmin(isAdmin) {
    this.#isAdmin = isAdmin;
  }
}