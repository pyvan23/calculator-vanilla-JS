//captute elements
const numbersButtons = document.getElementsByName("data-number");
const operationsButtons = document.getElementsByName("data-operations");
const equalButton = document.getElementsByName("data-equal")[0];
const deleteButton = document.getElementsByName("data-delete")[0];
var result = document.getElementById("result");
var currentOperation = "";
var lastOperation = "";
var operation = undefined;

/*capture test console.log(numbersButtons);
console.log(operationsButtons);
console.log(equalButton[0]);
console.log(result);
console.log(deleteButton);*/

//events alrady define
numbersButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    addNumber(button.innerText);
    //alert(button.innerText)
  });
});

operationsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOperation(button.innerText);
  });
});

equalButton.addEventListener("click", function () {
  calculate();
  updateDisplay();
});

deleteButton.addEventListener("click", function () {
  console.log("hi");
  clear();
  updateDisplay();
});

//define methods
function addNumber(num) {
  currentOperation = currentOperation.toString() + num.toString();
  updateDisplay();
}
function clear() {
  currentOperation = "";
  lastOperation = "";
  operation = undefined;
}
function updateDisplay() {
  result.value = currentOperation;
}
clear();
