class User {
  #isAdmin = false;

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get isAdmin() {
    return this.#isAdmin;
  }

  set isAdmin(isAdmin) {
    this.#isAdmin = isAdmin;
  }
}

export { User };
