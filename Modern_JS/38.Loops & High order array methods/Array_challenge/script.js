//challenge 1
const people = [
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'doe@example.com',
    phone: '555-1234',
    age: 20,
  },
  {
    firstname: 'Jane',
    lastname: 'Smith',
    email: 'smith@example.com',
    phone: '555-5678',
    age: 15,
  },
  {
    firstname: 'Emily',
    lastname: 'Johnson',
    email: 'johnson@example.com',
    phone: '555-8765',
    age: 25,
  },
  {
    firstname: 'Michael',
    lastname: 'Brown',
    email: 'brown@example.com',
    phone: '555-4321',
    age: 10,
  },
  {
    firstname: 'Sarah',
    lastname: 'Davis',
    email: 'davis@example.com',
    phone: '555-6789',
    age: 28,
  },
];

// Take the people array and create an array called youngPeople that
// stores object with ONLY name and email properties of all the people that
// are 25 and under.
//The name property should have their first and last name

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => {
    return {
      name: person.firstname + ' ' + person.lastname,
      email: person.email,
    };
  });

console.log(youngPeople);

//challenge 2
//Add all positive numbers

const numbers = [23, -24, -5, 20, -10];

const addPositive = numbers
  .filter((num) => num > 0)
  .reduce((num, cur) => num + cur);

console.log(addPositive);

//Challenge 3
//The first letter of word should be capitalized

const words = ['code', 'programmer', 'developer'];

const capitalizedWord = words.map((word) => {
  return word[0].toLocaleUpperCase() + word.slice(1, word.length);
});

console.log(capitalizedWord);
