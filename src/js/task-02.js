
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

function createElement([...names]){
  for(let i = 0; i < names.length; i += 1){
    let itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = names[i];
    listEl.append(itemEl);
  }
return listEl.children;
}
createElement(ingredients)
console.log(listEl.children)
