const post = {
  id: 1,
  title: 'Post one',
  body: 'This is the body',
};

//Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON (json to object)
const obj = JSON.parse(str);
// console.log(obj.id);

const posts = [
  {
    id: 1,
    title: 'Post one',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post two',
    body: 'This is the body',
  },
  {
    id: 3,
    title: 'Post three',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

// console.log(str2);

//step 1
const library = [
  {
    title: 'Book 1',
    author: 'Author 1',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

//step 3

const { title: firstbook } = library[0];

console.log(firstbook);

//step 4
const library_json = JSON.stringify(library);

console.log(library_json);
