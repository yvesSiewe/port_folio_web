const regexMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const input = document.querySelector("input");
const errorMessage = document.querySelector(".lab span");
const succesBlock = document.querySelector(".successContainer");

document.querySelector(".subscribe").addEventListener("click", function (e) {
  e.preventDefault();
  if (!regexMAIL.test(input.value)) {
    errorMessage.style.display = "block";
    input.style.borderColor = "hsl(4, 100%, 67%)";
    input.style.color = "hsl(4, 100%, 67%)";
    input.style.backgroundColor = "hsla(4, 100%, 67%, 0.22)";
  } else {
    console.log("reussi");
    succesBlock.style.display = "flex";
    document.querySelector(".email").textContent = input.value;
    e.currentTarget.parentElement.parentElement.style.display = "none";
  }
});

document.querySelector(".dismiss").addEventListener("click", function () {
  location.reload();
});
