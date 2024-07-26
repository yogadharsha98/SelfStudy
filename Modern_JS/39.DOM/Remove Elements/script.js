function removeElements() {
  const item = document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');

  ul.removeChild(li);
}

function removeItem(itemNUmber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNUmber})`);

  ul.removeChild(li);
}

function removeItem2(itemNUmber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNUmber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNUmber) {
  const li = document.querySelectorAll('li')[itemNUmber - 1];

  li.remove();
}
const removeItem4 = (itemNUmber) =>
  document.querySelectorAll('li')[itemNUmber - 1].remove();

removeElements();
// removeFirstItem();
// removeItem(2);
// removeItem2(1);
// removeItem3(2);
removeItem4(1);
