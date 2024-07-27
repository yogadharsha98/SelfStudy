const clearBtn = document.querySelector('#clear');

function onClear() {
  const ul = document.querySelector('ul');
  const itemList = document.querySelectorAll('li');

  //   ul.innerHTML = '';
  itemList.forEach((item, index) => {
    item.remove();
  });
}

//Javascript event listener
// clearBtn.onclick = function () {
//   alert('Clear item');
// };

// clearBtn.onclick = function () {
//   console.log('Clear item');
// };

// addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear all'));

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
// setTimeout(() => clearBtn.click(), 5000);
