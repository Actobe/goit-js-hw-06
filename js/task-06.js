const validationInput = document.querySelector("#validation-input");

function checkInputLength() {
  const expectedLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );
  const currentLength = validationInput.value.length;

  if (currentLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

validationInput.addEventListener("blur", checkInputLength);
