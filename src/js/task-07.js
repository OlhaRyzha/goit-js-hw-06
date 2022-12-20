const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '';
rangeEl.addEventListener('input', () => textEl.style.fontSize = rangeEl.value + 'px')
