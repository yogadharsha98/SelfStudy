const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

// console.log(id, title, name);
// console.log(todoId);

//Destructuring arrays
const num = [34, 56, 67, 88, 68];

const [a, b, ...rest] = num;
console.log(a, b, rest);
