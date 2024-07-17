let x;

// const todo = {};
//or

const todo = new Object();

todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3432,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

const todos = [
  { id: 1, name: 'Buy milk' },
  { id: 2, name: 'Pick up kids from the school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name');

console.log(x);
