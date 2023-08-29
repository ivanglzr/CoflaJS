let width = window.screen.availWidth;
let heigth = window.screen.availHeight;

let comprar = confirm(
  `El ancho es ${width} y el alto es ${heigth}. Quieres comprarla`
);

if (comprar) {
  alert("Compra realizada");
} else {
  alert("No comprada");
}
