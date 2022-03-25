"use strict";

// functions for basic mathematic operations
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

// function to take an operator and call one of the functions above
const operate = function ([operator, a, b]) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

// DOM declarations : numbers
const inputField = document.getElementById("nonedit"); //DISPLAY
const number0 = document.getElementById("numBtn0");
const numberDot = document.getElementById("numBtnDot");
const number1 = document.getElementById("numBtn1");
const number2 = document.getElementById("numBtn2");
const number3 = document.getElementById("numBtn3");
const number4 = document.getElementById("numBtn4");
const number5 = document.getElementById("numBtn5");
const number6 = document.getElementById("numBtn6");
const number7 = document.getElementById("numBtn7");
const number8 = document.getElementById("numBtn8");
const number9 = document.getElementById("numBtn9");

// DOM declartions : operators
const clearBtn = document.getElementById("numBtnClear");
const addBtn = document.getElementById("numBtnAdd");
const subtractBtn = document.getElementById("numBtnSubtract");
const multiplyBtn = document.getElementById("numBtnMultiply");
const divideBtn = document.getElementById("numBtnDivide");
const equalBtn = document.getElementById("numBtnEqual");

// Start condition
let currentNumber = "";
inputField.value = currentNumber;
let calculateArray = [];
let result;

// addEventLister for clicking the numButtons
numberDot.addEventListener("click", () => {
  if (currentNumber.length > 0 && !currentNumber.includes(".")) {
    currentNumber += ".";
    inputField.value = currentNumber;
  }
});

number0.addEventListener("click", () => {
  if (inputField.value != "0") {
    currentNumber += "0";
    inputField.value = currentNumber;
  }
});

number1.addEventListener("click", () => {
  currentNumber += "1";
  inputField.value = currentNumber;
});

number2.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "2";
    inputField.value = currentNumber;
  } else {
    currentNumber += "2";
    inputField.value = currentNumber;
  }
});

number3.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "3";
    inputField.value = currentNumber;
  } else {
    currentNumber += "3";
    inputField.value = currentNumber;
  }
});

number4.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "4";
    inputField.value = currentNumber;
  } else {
    currentNumber += "4";
    inputField.value = currentNumber;
  }
});

number5.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "5";
    inputField.value = currentNumber;
  } else {
    currentNumber += "5";
    inputField.value = currentNumber;
  }
});

number6.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "6";
    inputField.value = currentNumber;
  } else {
    currentNumber += "6";
    inputField.value = currentNumber;
  }
});

number7.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "7";
    inputField.value = currentNumber;
  } else {
    currentNumber += "7";
    inputField.value = currentNumber;
  }
});

number8.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "8";
    inputField.value = currentNumber;
  } else {
    currentNumber += "8";
    inputField.value = currentNumber;
  }
});

number9.addEventListener("click", () => {
  if (inputField.value == result) {
    calculateArray = [];
    calculateArray[1] = currentNumber;
    currentNumber = "";
    currentNumber += "9";
    inputField.value = currentNumber;
  } else {
    currentNumber += "9";
    inputField.value = currentNumber;
  }
});

// addEventListener for operators & clear button

clearBtn.addEventListener("click", () => {
  calculateArray = [];
  currentNumber = "";
  inputField.value = currentNumber;
});

addBtn.addEventListener("click", (number) => {
  calculateArray[0] = "+";
  number = parseFloat(currentNumber);
  calculateArray.push(number);
  if (calculateArray.length === 3) {
    result = operate(calculateArray);
    currentNumber = result;
    inputField.value = result;
  } else {
    currentNumber = "";
    inputField.value = currentNumber;
    calculateArray = ["+", number];
  }
  return calculateArray;
});

subtractBtn.addEventListener("click", (number) => {
  calculateArray[0] = "-";
  number = parseFloat(currentNumber);
  calculateArray.push(number);
  if (calculateArray.length === 3) {
    result = operate(calculateArray);
    currentNumber = result;
    inputField.value = result;
  } else {
    currentNumber = "";
    inputField.value = currentNumber;
    calculateArray = ["-", number];
  }
  return calculateArray;
});

multiplyBtn.addEventListener("click", (number) => {
  calculateArray[0] = "*";
  number = parseFloat(currentNumber);
  calculateArray.push(number);
  if (calculateArray.length === 3) {
    result = operate(calculateArray);
    currentNumber = result;
    inputField.value = result;
  } else {
    currentNumber = "";
    inputField.value = currentNumber;
    calculateArray = ["*", number];
  }
  return calculateArray;
});

divideBtn.addEventListener("click", (number) => {
  calculateArray[0] = "/";
  number = parseFloat(currentNumber);
  calculateArray.push(number);
  if (calculateArray.length === 3) {
    result = operate(calculateArray);
    currentNumber = result;
    inputField.value = result;
  } else {
    currentNumber = "";
    inputField.value = currentNumber;
    calculateArray = ["/", number];
  }
  return calculateArray;
});

equalBtn.addEventListener("click", (number) => {
  number = parseFloat(currentNumber);
  calculateArray.push(number);
  result = operate(calculateArray);
  inputField.value = result;
});
