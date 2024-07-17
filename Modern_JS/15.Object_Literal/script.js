let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Botson',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Jane';
person.isAdmin = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, I am ${this.name}`);
};
person.greet();

const person2 = {
  firstName: 'Brad',
  lastName: 'John',
};
x = person2.firstName;

console.log(x);
