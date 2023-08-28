let op = parseInt(
  prompt(
    "Que operacion quieres hacer: 1. Suma 2. Resta 3. Multiplicacion 4. Division 5. Raiz Cuadrada 6. Raiz Cubica 7. Potencia"
  )
);

let resultado = "El resultado es: ";

if (op == 1) {
  let num1 = parseFloat(prompt("Cual es el 1er numero"));
  let num2 = parseFloat(prompt("Cual es el 2o numero"));
  resultado += `${num1 + num2}`;
} else if (op == 2) {
  let num1 = parseFloat(prompt("Cual es el 1er numero"));
  let num2 = parseFloat(prompt("Cual es el 2o numero"));
  resultado += `${num1 - num2}`;
} else if (op == 3) {
  let num1 = parseFloat(prompt("Cual es el 1er numero"));
  let num2 = parseFloat(prompt("Cual es el 2o numero"));
  resultado += `${num1 * num2}`;
} else if (op == 4) {
  let num1 = parseFloat(prompt("Cual es el 1er numero"));
  let num2 = parseFloat(prompt("Cual es el 2o numero"));
  resultado += `${num1 / num2}`;
} else if (op == 5) {
  let num1 = parseFloat(prompt("Cual es el numero"));
  resultado += `${Math.sqrt(num1)}`;
} else if (op == 6) {
  let num1 = parseFloat(prompt("Cual es el numero"));
  resultado += `${Math.cbrt(num1)}`;
} else if (op == 7) {
  let num1 = parseFloat(prompt("Cual es la base"));
  let num2 = parseFloat(prompt("Cual es el exponente"));
  resultado += `${num1 ** num2}`;
} else {
  resultado = "No se encontro la operacion";
}

alert(resultado);
