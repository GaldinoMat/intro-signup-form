const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const inputsDiv = document.querySelectorAll(".inputs-warning");
const email = document.getElementById("email-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

submitButton.addEventListener("click", () => {
  getInputs();

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const emailWarning = document.querySelector(".email");
  const emailWarningImg = document.getElementById("email-warning");
  email.value.match(pattern)
    ? removeErrors(emailWarning, emailWarningImg)
    : displayError(emailWarning, emailWarningImg);
});

function getInputs() {
  inputsDiv.forEach((div) => {
    let warning = div.querySelector(".warning");
    let img = div.querySelector(".warning-img");
    div.querySelector(".text-input").value.length === 0
      ? displayError(warning, img)
      : removeErrors(warning, img);
  });
}

function removeErrors(...warningElements) {
  warningElements.forEach((element) => {
    element.classList.remove("visible");
    element.classList.add("invisible");
  });
}

function displayError(...warningElements) {
  warningElements.forEach((element) => {
    element.classList.add("visible");
    element.classList.remove("invisible");
  });
}
