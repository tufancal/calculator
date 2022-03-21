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
const operate = function (operator, a, b) {
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

// DOM declarations
const inputField = document.getElementById("nonedit"); //DISPLAY
const number0 = document.getElementById("numBtn0");
const number1 = document.getElementById("numBtn1");
const number2 = document.getElementById("numBtn2");
const number3 = document.getElementById("numBtn3");
const number4 = document.getElementById("numBtn4");
const number5 = document.getElementById("numBtn5");
const number6 = document.getElementById("numBtn6");
const number7 = document.getElementById("numBtn7");
const number8 = document.getElementById("numBtn8");
const number9 = document.getElementById("numBtn9");

// Start condition
let currentNumber = "";
inputField.value = "0";

// addEventLister for clicking the numButtons
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
  currentNumber += "2";
  inputField.value = currentNumber;
});

number3.addEventListener("click", () => {
  currentNumber += "3";
  inputField.value = currentNumber;
});

number4.addEventListener("click", () => {
  currentNumber += "4";
  inputField.value = currentNumber;
});
