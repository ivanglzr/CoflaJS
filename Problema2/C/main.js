let op = parseInt(
  prompt(
    "Que operacion quieres hacer: 1. Suma 2. Resta 3. Multiplicacion 4. Division"
  )
);

let num1 = parseFloat(prompt("Cual es el 1er numero"));
let num2 = parseFloat(prompt("Cual es el 2o numero"));

let resultado = "El resultado es: ";

if (op == 1) {
  resultado += `${num1 + num2}`;
} else if (op == 2) {
  resultado += `${num1 - num2}`;
} else if (op == 3) {
  resultado += `${num1 * num2}`;
} else if (op == 4) {
  resultado += `${num1 / num2}`;
} else {
  resultado = "No se encontro la operacion";
}

alert(resultado);
