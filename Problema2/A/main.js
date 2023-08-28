"use strict";

let primera = true;

function comprobar(edad, hora) {
  if (edad < 18) {
    alert("No puedes pasar");
  } else {
    if (primera && hora >= 2 && hora < 8) {
      alert("Eres la primera persona en pasar despues de las 2 no pagas");
      primera = false;
    } else {
      alert("Puedes pasar");
    }
  }
}

comprobar(18, 12);
comprobar(19, 12);
comprobar(15, 1.75);
comprobar(12, 2.25);
comprobar(19, 2.5);
comprobar(20, 2.75);
comprobar(17, 3);
comprobar(17, 4);
