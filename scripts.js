const add = () => {
  n1 = parseFloat(document.getElementById("firstNumber").value);
  n2 = parseFloat(document.getElementById("secondNumber").value);
  result = n1 + n2;
  document.getElementById("result").innerHTML = `Resultado: ${result}`;
};

const subtract = () => {
  n1 = parseFloat(document.getElementById("firstNumber").value);
  n2 = parseFloat(document.getElementById("secondNumber").value);
  result = n1 - n2;
  document.getElementById("result").innerHTML = `Resultado: ${result}`;
};

const multiply = () => {
  n1 = parseFloat(document.getElementById("firstNumber").value);
  n2 = parseFloat(document.getElementById("secondNumber").value);
  result = n1 * n2;
  document.getElementById("result").innerHTML = `Resultado: ${result}`;
};

const divide = () => {
  n1 = parseFloat(document.getElementById("firstNumber").value);
  n2 = parseFloat(document.getElementById("secondNumber").value);
  if (n2 != 0) {
    result = n1 / n2;
  } else {
    result =
      'Para algunos el resultado es "infinito", para otros "indeterminado", el que te guste más.';
  }
  document.getElementById("result").innerHTML = `Resultado: ${result}`;
};
