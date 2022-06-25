const add = () => {
  let num1 = Number(prompt("input first number"));
  let num2 = Number(prompt("input second number"));

  alert(`${num1} + ${num2} = ${num1 + num2}`);
};

const subtract = () => {
  let num1 = Number(prompt("input first number"));
  let num2 = Number(prompt("input second number"));

  alert(`${num1} - ${num2} = ${num1 - num2}`);
};

const multiply = () => {
  let num1 = Number(prompt("input first number"));
  let num2 = Number(prompt("input second number"));

  alert(`${num1} * ${num2} = ${num1 * num2}`);
};

const divide = () => {
  let num1 = Number(prompt("input first number"));
  let num2 = Number(prompt("input second number"));

  alert(`${num1} / ${num2} = ${num1 / num2}`);
};

const calculate = () => {
  let input = prompt("Would you like to add, subtract, multiply or divide?");

  // break out of the function early if the cancel button is clicked
  if (input === null) {
    return;
  }

  const performCalculation = (input) => {
    switch (input) {
      case "add":
        add();
        break;
      case "subtract":
        subtract();
        break;
      case "multiply":
        multiply();
        break;
      case "divide":
        divide();
        break;
      default:
        // prompt the user to enter a valid response if response is not "add", "substract", "multiply" or "divide"
        input = prompt(
          "You have entered an invalid response. Please enter 'add', 'subtract', 'multiply' or 'divide' to proceed."
        );
        // perform the calculation with the new valid input as an argument
        performCalculation(input);
    }
  };
  performCalculation(input);

  // Restart calculator
  let newInput = prompt(
    "would you like to perform another calculation? Enter 'yes' or 'no'"
  );
  
  if (newInput === "yes") {
    calculate();
  } else {
    alert("Till next time!")
  }
};

calculate();