const form = document.querySelector("form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const usermessage = document.querySelector("#usermessage");
const submitbtn = document.querySelector("#submitbtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const usermessageValue = usermessage.value.trim();

  let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(emailregex.test(""));

  if (firstnameValue === "") {
    setError(firstname, "please enter your first name");
  } else if (firstname.length < 3) {
    setError(firstname, "firstname must be at least 3 charaters");
  } else {
    setSuccess(firstname);
  }
  if (lastnameValue === "") {
    setError(lastname, "please enter your lastname");
  } else if (lastname.lenght < 3) {
    setError(lastname, "lastname must be at least 3 charater");
  } else {
    setSuccess(lastname);
  }

  if (emailValue === "") {
    setError(email, "please enter your email");
  } else if (!emailregex.test(emailValue)) {
    setError(error, "email is not valid");
  } else {
    setSuccess(email);
  }

  if (usermessageValue === "") {
    setError(usermessage, "please enter your message");
  } else if (usermessage.lenght < 10) {
    setError(usermessage, "message must be at least 10 charaters");
  } else {
    setSuccess(email);
  }
}

function setError(input, message) {
  const inputForm = input.parentElement;
  inputForm.className = "input-form error";
  const small = inputForm.querySelector("small");
  small.style.visibility = "visible";
  small.textContent = message;
}

function setSuccess(input) {
  const inputForm = input.parentElement;
  inputForm.className = "input-form success";
}
