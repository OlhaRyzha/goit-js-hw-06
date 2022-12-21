

const form = document.querySelector('.controls');
const formInput = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let boxSize = 20;
function createBoxes(amount){
for(let i = 1; i < amount; i+= 1){
const divEl = document.createElement('div')
divEl.style.width =`${boxSize + 10 * i}px`
divEl.style.height =`${boxSize + 10 * i}px`
divEl.style.background = getRandomHexColor()
boxEl.append(divEl)
console.log(divEl)
}
return boxEl 
}

btnCreate.addEventListener('click', () => createBoxes(formInput.value))

btnDestroy.addEventListener('click', () => boxEl.innerHTML = '')
