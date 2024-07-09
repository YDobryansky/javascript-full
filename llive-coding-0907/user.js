export class User {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this._isAdmin = false;
  }

  get getIsAdmin() {
    return this._isAdmin;
  }

  set setIsAdmin(value) {
    this._isAdmin = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

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

console.log(user1.getIsAdmin);
console.log(user2.getIsAdmin);
console.log(user3.getIsAdmin);
