

const form = document.querySelector('.controls');
const formInput = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount){
  const divsToAdd = []
for(let i = 0; i < amount; i+= 1){
const divEl = document.createElement('div')
divEl.style.width = `${30 + 10 * i}px`
divEl.style.height = `${30 + 10 * i}px`
divEl.style.background = getRandomHexColor()
divsToAdd.push(divEl)
}

return divsToAdd
}


const destroyBoxes = () => {
	boxEl.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(formInput.value)
	boxEl.append(...boxesToAdd)
})

console.log(formInput.value)

btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})
