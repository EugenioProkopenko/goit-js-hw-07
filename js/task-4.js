const form = document.querySelector(".login-form");
form.addEventListener("submit", hadleSubmit);


function hadleSubmit(event) {
event.preventDefault()
const elements = event.target.elements;
const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim() 
}

if (!info.email || !info.password) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(info);
form.reset();
};









