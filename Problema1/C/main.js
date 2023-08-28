function comprobar() {
  let miente = prompt("La persona miente?").toLowerCase();

  if (miente == "si") {
    alert("Descarga realizada");
  } else if (miente == "no") {
    alert("No se ha realizado la descarga");
  } else {
    alert("La respuesta debe ser mas clara");
    comprobar();
  }
}

comprobar();
