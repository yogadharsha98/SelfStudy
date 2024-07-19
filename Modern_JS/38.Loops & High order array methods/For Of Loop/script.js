//Loop through arrays
const items = ['book', 'pen', 'kite'];
const users = [
  { name: 'Lucus' },
  { name: 'Will' },
  { name: 'Mike' },
  { name: 'Dustin' },
];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// loop over string

const str = 'Hello world';

for (const letter of str) {
  console.log(letter);
}

// Loop over maps

const map = new Map();

map.set('name', 'Mike');
map.set('age', '30');

for (const [key, value] of map) {
  console.log(key, value);
}
