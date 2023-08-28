let alumnos = prompt("Cuantos alumnos son");

for (let i = 0; i < alumnos; i++) {
  let nombre = prompt("Cual es el nombre del alumno");
  let ausencias = prompt("Cuantas ausencias");
  let color = "green";

  if (ausencias > 3) {
    color = "red";
    alert(`Ha faltado ${ausencias} dias, mayor a lo permitido`);
  }

  alert(
    `${nombre} ha ido a clase ${30 - ausencias} dias y ha faltado ${ausencias}`
  );

  document.write(
    `${nombre} ha asistido <b>${
      30 - ausencias
    }</b> y ha faltado <b style="color: ${color};">${ausencias}</b> dias <br>`
  );
}
