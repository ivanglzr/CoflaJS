let alumnos = [
  ["Lucas", "lucas@gmail.com", "Fisica"],
  ["Matias", "matias@gmail.com", "Calculo"],
  ["Fernando", "fernando@gmail.com", "Lengua"],
  ["Ivan", "ivan@gmail.com", "Plastica"],
  ["Hugo", "hugo@gmail.com", "Biologia"],
  ["Dario", "dario@gmail.com", "Tecnologia"],
  ["Diego", "diego@gmail.com", "matematicas"],
  ["Miguel", "miguel@gmail.com", "Calculo II"],
  ["Marcos", "marcos@gmail.com", "Cultura"],
];

let container = document.querySelector("#container");

for (const alumno of alumnos) {
  let div = document.createElement("div");
  div.classList.add("alumno-container");

  let name = document.createElement("div");
  name.classList.add("flex-div");
  name.classList.add("name");
  name.innerHTML = alumno[0];

  let email = document.createElement("div");
  email.classList.add("flex-div");
  email.classList.add("email");
  email.innerHTML = alumno[1];

  let subject = document.createElement("div");
  subject.classList.add("flex-div");
  subject.classList.add("subject");
  subject.innerHTML = alumno[2];

  let week = document.createElement("div");
  week.classList.add("flex-div");
  week.classList.add("week");

  let select = document.createElement("select");

  let option1 = document.createElement("option");
  option1.value = "Semana 1";
  option1.innerHTML = "Semana 1";

  let option2 = document.createElement("option");
  option2.value = "Semana 2";
  option2.innerHTML = "Semana 2";

  select.appendChild(option1);
  select.appendChild(option2);

  week.appendChild(select);

  div.appendChild(name);
  div.appendChild(email);
  div.appendChild(subject);
  div.appendChild(week);

  container.appendChild(div);
}

let btnSubmit = document.querySelector(".submit");

btnSubmit.addEventListener("click", () => {
  let weeks = document.querySelectorAll(".week");
  let selects = document.querySelectorAll("select");

  for (let i = 0; i < weeks.length; i++) {
    weeks[i].innerHTML = selects[i].value;
  }
});
