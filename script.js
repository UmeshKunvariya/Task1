document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById("result");
    const operators = document.querySelectorAll(".operator");
    const numbers = document.querySelectorAll(".number");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");
  
    let currentNumber = '';
    let firstOperand = null;
    let operator = null;
  
    numbers.forEach((number) => {
      number.addEventListener('click', () => {
        currentNumber += number.value;
        result.value = currentNumber;
      });
    });
  
    operators.forEach((op) => {
      op.addEventListener('click', () => {
        if (currentNumber === '') return;
        if (firstOperand !== null) {
          calculate();
        }
        operator = op.value;
        firstOperand = parseFloat(currentNumber);
        currentNumber = '';
      });
    });
  
    clearButton.addEventListener('click', () => {
      clear();
    });
  
    calculateButton.addEventListener('click', () => {
      if (operator !== null && currentNumber !== '') {
        calculate();
      }
    });
  
    function clear() {
      currentNumber = '';
      firstOperand = null;
      operator = null;
      result.value = '';
    }
  
    function calculate() {
      const secondOperand = parseFloat(currentNumber);
      let resultValue;
      switch (operator) {
        case '+':
          resultValue = firstOperand + secondOperand;
          break;
        case '-':
          resultValue = firstOperand - secondOperand;
          break;
        case '*':
          resultValue = firstOperand * secondOperand;
          break;
        case '/':
          resultValue = firstOperand / secondOperand;
          break;
        default:
          return;
      }
      clear();
      result.value = resultValue;
    }
  });
  