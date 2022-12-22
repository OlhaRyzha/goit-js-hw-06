const form = document.querySelector(".login-form");
const formEmail = document.querySelector("label [type='email']");
const formPass = document.querySelector("label [type='password']");

form.addEventListener("submit", handleSubmit);

// const userData = { email: formEmail.value, password: formPass.value }
//   const {email, password } = userData;

  function handleSubmit(event) {
    event.preventDefault();

    if (formEmail.value === "" || formPass.value === "") {
      alert("Please fill in all the fields!")
 
    }else{
      alert(`Email: ${formEmail.value} Password: ${formPass.value}`)
    }
 
  
  
  console.log(userData)
  console.log(email)
  console.log(password)


  event.currentTarget.reset();
}
