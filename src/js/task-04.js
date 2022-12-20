const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('#value')
}
let counterValue = 0;
refs.decrementBtn.addEventListener('click', onDecrementBtnClick.bind(refs))
refs.incrementBtn.addEventListener('click', onIncrementBtnClick.bind(refs))
function onDecrementBtnClick(){
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}
function onIncrementBtnClick(){
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}

