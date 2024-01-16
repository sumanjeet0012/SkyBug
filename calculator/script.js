let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = function() {
  input.value = "";
};

buttonInput.forEach(function(buttonClass) {
  buttonClass.addEventListener("click", function() {
    if (equalPressed === 1) {
      equalPressed = 0;
    }
    input.value += buttonClass.value;
  });
});

function calculate() {
  equalPressed = 1;
  let inputValue = input.value;
  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Please Enter Valid Value or Expression");
    }
    input.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
  } catch (error) {
    alert(error.message);
  }
}

equal.addEventListener("click", calculate);
equal.addEventListener("click", calculate);

clear.addEventListener("click", function() {
  input.value = "";
});

erase.addEventListener("click", function() {
  input.value = input.value.substr(0, input.value.length - 1);
});