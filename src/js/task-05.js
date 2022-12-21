const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputName.addEventListener('input', event => {
  if(event.currentTarget.value !== ''){ 
    nameOutput.textContent = event.currentTarget.value}
    else{
      nameOutput.textContent = 'Anonymous'
    }
})
