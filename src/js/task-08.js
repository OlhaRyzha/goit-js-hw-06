const form = document.querySelector(".login-form");
const formEmail = document.querySelector("label [type='email']");
const formPass = document.querySelector("label [type='password']");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (formEmail.value === "" || formPass.value === "") {
    return console.log("Please fill in all the fields!");
  }

  const userData = { email: formEmail.value, password: formPass.value }
  const {email, password } = userData;
    
  alert(`Email: ${email} Password: ${password}`)
  
  console.log(userData)
  console.log(email)
  console.log(password)


  event.currentTarget.reset();
}
