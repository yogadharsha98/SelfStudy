function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

//new element to insert
const li = document.createElement('li');
li.textContent = 'Insert me after';

//Existing element to insert after
const firstItem = document.querySelector('li:first-child');

insertAfter(li, firstItem);
