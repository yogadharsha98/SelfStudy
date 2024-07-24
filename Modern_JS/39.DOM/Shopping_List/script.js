// let output;

// output = document.all[11];
// output = document.all.length;

// output = document.documentElement;
// output = document.head;
// output = document.body;

// output = document.head.children;
// output = document.body.children;

// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// document.forms[0].id = 'new-id';

// output = document.links;
// output = document.links[0];
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);

// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//set attribute

document.getElementById('app-title').title = 'shopping list';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello world';
title.innerText = 'Hello again';
title.innerHTML = '<strong>Shopping List</strong>';

//Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(1)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Grap juice';
secondItem.style.color = 'red';

//use these methodson other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = document.querySelector('li');
firstItem.style.color = 'blue';
