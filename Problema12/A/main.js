let materias = [
  {
    materia: "Matematicas",
    nota: 7,
  },
  {
    materia: "Fisica",
    nota: 3,
  },
  {
    materia: "Calculo Integral",
    nota: 9,
  },
  {
    materia: "Calculo II",
    nota: 7,
  },
  {
    materia: "Ingles",
    nota: 10,
  },
  {
    materia: "Electronica",
    nota: 2,
  },
  {
    materia: "Quimica",
    nota: 8,
  },
  {
    materia: "Mecanica",
    nota: 5,
  },
  {
    materia: "E.F",
    nota: 0,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    let materia = materias[id];

    if (materia == undefined) reject("La materia no existe");
    else
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 400);
  });
};

const devolverMaterias = async () => {
  for (let i = 0; i < materias.length; i++) {
    let materia = await obtenerMateria(i);
    let htmlCode = `
      <div class="materia">
        <p class="materia-info">Materia: <b>${materia.materia}</b></p>
        <p class="materia-info">Nota: <b>${materia.nota}</b></p>
      </div>
    `;
    document.body.innerHTML += htmlCode;
  }
};

devolverMaterias();
