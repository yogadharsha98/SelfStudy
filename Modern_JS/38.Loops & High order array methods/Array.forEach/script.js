const socials = ['Twitter', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// });

// socials.forEach((item, index, arr) =>
//   console.log(
//     `${index}-${item}
//   `,
//     arr
//   )
// );

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const users = [
  { name: 'Will', age: '20' },
  { name: 'Lucus', age: '21' },
  { name: 'Mike', age: '10' },
  { name: 'Dustin', age: '22' },
];

users.forEach((user) => console.log(user.age));
