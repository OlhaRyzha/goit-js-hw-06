
const textInput = document.querySelector("#validation-input");
textInput.className = '';
textInput.addEventListener("blur", () => {
  textInput.className = textInput.value.length === 6 ? 'valid' : 'invalid'
console.log(textInput.value);
});



