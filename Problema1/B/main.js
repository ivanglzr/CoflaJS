let dinero = prompt("Cuanto dinero tienes");
let loteria = 10;

let boletos = Math.trunc(dinero / loteria);

let vuelto = dinero - loteria * boletos;

if (boletos >= 3) {
  let regalado = dinero - loteria * 3;
  boletos = 3;
  alert(`Compras ${boletos} boletos y regalas ${regalado} euros`);
} else {
  alert(`Compras ${boletos} boletos y te sobran ${vuelto} euros`);
}
