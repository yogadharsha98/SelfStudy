//Get child elements from parent element

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child two';
parent.children[1].innerHTML = '<strong>Child two</strong>';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child three';

console.log(output);

//Get parent elements from child
const child = document.querySelector('.child');

const output2 = child.parentElement;

child.parentElement.style.border = '10px solid #ccc';
child.parentElement.style.padding = '10px';
child.parentElement.style.borderRadius = '10px';

console.log(output2);

//Siblings elements
const secondItem = document.querySelector('.child:nth-child(2)');

output3 = secondItem;
output3 = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'blue';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output3);
