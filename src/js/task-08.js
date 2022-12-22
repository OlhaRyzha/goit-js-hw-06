const form = document.querySelector(".login-form");
const formEmail = document.querySelector("label [type='email']");
const formPass = document.querySelector("label [type='password']");

form.addEventListener("submit", handleSubmit);



  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      alert("Заповніть, будь ласка, всі поля!")
 
    }else{
      alert(`Email: ${email.value} Password: ${password.value}`)
    }
 
  
  



  event.currentTarget.reset();
}
