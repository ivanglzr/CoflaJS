let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let btnSubmit = document.querySelector("#btn-submit");
let pWarnings = document.querySelector("#p-info");

btnSubmit.addEventListener("click", () => {
  if (name.value.length < 3) return alert("El nombre es muy corto");
  if (
    email.value.length < 5 ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1
  )
    return alert("El email no es correcto");
  if (subject.value.length < 3)
    return alert("El nombre de la materia es demasiado corto");

  alert("Formulario enviado");
});
