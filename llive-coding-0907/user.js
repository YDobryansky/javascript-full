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

const user1 = new User(1, 'John', 'Doe');
console.log(user1.getFullName());
const user2 = new User(2, 'Jane', 'Smith');
console.log(user2.getFullName());
const user3 = new User(3, 'Alice', 'Johnson');
console.log(user3.getFullName());
export { User };
