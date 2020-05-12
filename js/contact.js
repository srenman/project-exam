const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm() {
  event.preventDefault();

  // Name input

  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");
  let nameHasError = false;
  const nameValue = name.value;

  if (checkInputLength(nameValue, 2) === true) {
    nameError.style.display = "none";
    nameHasError = false;
  } else {
    nameError.style.display = "block";
    nameHasError = true;
  }

  // Email input
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  let emailHasError = false;
  const emailValue = email.value;

  if (validateEmail(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  // Message input
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;

  if (checkInputLength(messageValue, 8) === true) {
    messageError.style.display = "none";
    messageHasError = false;
  } else {
    messageError.style.display = "block";
    messageHasError = true;
  }

  // Submit message

  const submitMessage = document.querySelector("#submitMessage");

  if (
    nameHasError === true ||
    messageHasError === true ||
    emailHasError === true
  ) {
    submitMessage.style.display = "none";
  } else {
    console.log("message has been sendt");
    submitMessage.style.display = "block";
  }
}

function checkInputLength(value, lengthToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lengthToCheck) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
