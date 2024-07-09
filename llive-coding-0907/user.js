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

  get getIsAdmin() {
    return this.#isAdmin;
  }

  set setIsAdmin(isAdmin) {
    this.#isAdmin = isAdmin;
  }
}

export { User };

/**
   |============================
   | Протестуй метод getFullName класу User, викличи його мінімум 3 рази з різними тестовими значеннями. Результат кожного виконання методу виводь в консоль
   |============================
  */
const user1 = new User(1, 'John', 'Doe');
console.log(user1.getFullName());
const user2 = new User(2, 'Jane', 'Smith');
console.log(user2.getFullName());
const user3 = new User(3, 'Alice', 'Johnson');
console.log(user3.getFullName());

console.log(user1.isAdmin);
console.log(user2.isAdmin);
console.log(user3.isAdmin);
