let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Child one';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

console.log(output);

//parent node
let output2;
const child = document.querySelector('.child');

output2 = child.parentNode;
output2 = child.parentElement;
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

console.log(output2);

//siblings
let output3;
const secondItem = document.querySelector('.child:nth-child(2)');

output3 = secondItem.nextSibling;
output3 = secondItem.previousSibling;

console.log(output3);
