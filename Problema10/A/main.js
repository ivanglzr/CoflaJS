let nota = document.querySelector("#nota");
let trabajo1 = document.querySelector("#trabajo1");
let trabajo2 = document.querySelector("#trabajo2");
let btnSubmit = document.querySelector("#btn-submit");
let pInfo = document.querySelector("#p-info");

btnSubmit.addEventListener("click", () => {
  let numNota = parseInt(nota.value);
  let numTrabajo1 = parseInt(trabajo1.value);
  let numTrabajo2 = parseInt(trabajo2.value);
  let valid;

  try {
    if (numNota < 0 || numNota > 10 || isNaN(numNota))
      throw "La nota no es valida";
    if (numTrabajo1 < 0 || numTrabajo1 > 10 || isNaN(numTrabajo1))
      throw "El trabajo 1 no es valido";
    if (numTrabajo2 < 0 || numTrabajo2 > 10 || isNaN(numTrabajo2))
      throw "El trabajo 2 no es valido";

    valid = true;
  } catch (err) {
    valid = false;
    alert(err);
  } finally {
    if (valid) {
      let promed = ((numNota + numTrabajo1 + numTrabajo2) / 3).toFixed(2);
      let color;

      if (promed >= 7) {
        color = "#3fd937";
        pInfo.innerHTML = `Has aprobado con un <b style="color: ${color};">${promed}</b>`;
      } else {
        color = "#fc1616";
        pInfo.innerHTML = `Has suspendido con un <b style="color: ${color};">${promed}</b>`;
      }
    }
  }
});
