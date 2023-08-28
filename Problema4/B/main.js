let materias = [
  ["Lengua", ["Roberto", ["Juan", "Pedro", "Cofla"]]],
  ["Matematicas", ["Andrea", ["Pedro", "Julian", "Samuel"]]],
  ["Fisica", ["Luis", ["Julian", "Cofla", "Pedro"]]],
  ["Calculo", ["Miguel", ["Julian", "Pedro", "Francisco"]]],
];

let res = "";

for (const materia of materias) {
  if (materia[1][1].includes("Cofla")) {
    res += `
      Materia: <b>${materia[0]}</b> <br>
      Profesor: <b>${materia[1][0]}</b> <br> <br>
    `;
  }
}

document.write(res);
