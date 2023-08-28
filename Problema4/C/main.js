let materias = [
  ["Fisica", 19],
  ["Matematicas", 5],
  ["Lengua", 24],
  ["Biologia", 20],
  ["E.F", 17],
  ["Plastica", 29],
  ["Informatica", 10],
  ["Electronica", 11],
  ["Mecanica clasica", 25],
  ["Circuitos", 14],
  ["Calculo", 13],
  ["Calculo 2", 22],
];

function comprobar(materias) {
  let mes = "Las materias son: ";
  materias.map((materia) => (mes += `${materia[0]}, `));
  let materia = prompt(mes);

  for (const mat of materias) {
    if (mat[0] == materia) {
      if (mat[1] < 20) {
        alert(`Te has inscrito en ${mat[0]}`);
        mat[1]++;
        console.log(mat[1]);
        break;
      }
      alert("La materia esta completa");
    }
  }
}

comprobar(materias);
