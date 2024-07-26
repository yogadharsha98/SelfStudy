function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replace first';

  firstItem.replaceWith(li);
}
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  const li = document.createElement('li');

  li.textContent = 'Replace second';

  secondItem.replaceWith(li);
}

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  // lis.forEach((item, index) => {
  //   // item.outerHTML = '<li>Replace all</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Replace second item';
  //   } else {
  //     item.innerHTML = 'Replace all';
  //   }
  // });
  lis.forEach((item, index) => {
    index === 1
      ? (item.innerHTML = 'second item')
      : (item.innerHTML = 'Replace all');
  });
}

function replaceChildHeading() {
  const header = document.querySelector('header');

  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping list';

  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
