
const contactsEl = document.querySelector('#categories');
const itemEl = contactsEl.children;
console.log(`Number of categories: ${itemEl.length}`);
const titleEl = contactsEl.querySelectorAll('h2');
titleEl.forEach(el => console.log(`Category: ${el.textContent}
Elements: ${el.nextElementSibling.children.length}`));




