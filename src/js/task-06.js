
const textInput = document.querySelector("#validation-input");
textInput.classList = '';
textInput.addEventListener("blur", () => {
  textInput.classList = textInput.value.length === 6 ? 'valid' : 'invalid'
console.log(textInput.value);
});



