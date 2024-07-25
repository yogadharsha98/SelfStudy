const div = document.createElement('div');
div.id = 'my-element';
div.setAttribute('title', 'my-element');

// div.innerText = 'Hello';

const text = document.createTextNode('hello world');
div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);
