//captute elements
const numbersButtons = document.getElementsByName("data-number");
const operationsButtons = document.getElementsByName("data-operation");
const equalButton = document.getElementsByName("data-equal")[0];
const deleteButton = document.getElementsByName("data-delete")[0];
var result = document.getElementById("result");
var currentOperation = " ";
var lastOperation = " ";
var operation = undefined;

//capture test console.log(numbersButtons);
//console.log(operationsButtons);
//console.log(equalButton);
//console.log(result);
//console.log(deleteButton);

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
  clear();
  updateDisplay();
});

//define methods
function selectOperation(op) {
  if (currentOperation === "") {
    return;
  }
  if (lastOperation !== "") {
    calculate();
  }

  operation = op.toString();
  lastOperation = currentOperation;
  currentOperation = "";
}
function calculate() {
  var calc;
  const before = parseFloat(lastOperation);
  const current = parseFloat(currentOperation);
  if (isNaN(before) || isNaN(current)) {
    return;
  }
  switch (operation) {
    case "+":
      calc = before + current;
      break;
    case "-":
      calc = before - current;
      break;
    case "X":
      calc = before * current;
      break;
    case "/":
      calc = before / current;
      break;
  }
  currentOperation = calc;
  operation = undefined;
  lastOperation = " ";
}
function addNumber(num) {
  currentOperation = currentOperation.toString() + num.toString();
  updateDisplay();
}
function clear() {
  currentOperation = " ";
  lastOperation = " ";
  operation = undefined;
}
function updateDisplay() {
  result.value = currentOperation;
}

clear();
