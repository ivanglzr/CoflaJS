class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.rdp = rdp;
    this.rdc = rdc;
    this.ram = ram;
    this.encendido = false;
    this.frase = `El movil es de color <b>${this.color}</b>, pesa <b>${this.peso}</b>, tiene una resolucion de <b>${rdp}</b>, la camara tiene <b>${rdc}</b> y tiene <b>${ram}</b> de memoria <br>`;
  }

  botonEncendido() {
    if (!this.encendido) {
      alert("Telefono encendido");
      this.encendido = true;
    } else {
      alert("Telefono apagado");
      this.encendido = false;
    }
  }

  reiniciar() {
    if (!this.encendido)
      return alert("No se puede reiniciar porque esta apagado");

    alert("Telefono reiniciado");
  }

  foto() {
    if (!this.encendido)
      return alert("No se puede reiniciar porque esta apagado");

    alert("Foto tomada");
  }

  grabar() {
    if (!this.encendido)
      return alert("No se puede reiniciar porque esta apagado");

    alert("Grabando");
  }

  mostrarCaracteristicas() {
    return this.frase;
  }
}

let mov1 = new Celular("rojo", "255g", "1080p", "40mp", "8gb");
mov1.botonEncendido();
mov1.grabar();
document.write(mov1.mostrarCaracteristicas());

let mov2 = new Celular("negro", "155g", "2K", "50mp", "12gb");
mov2.botonEncendido();
mov2.grabar();
document.write(mov2.mostrarCaracteristicas());

let mov3 = new Celular("blanco", "200g", "4K", "58mp", "16gb");
mov3.botonEncendido();
mov3.grabar();
document.write(mov3.mostrarCaracteristicas());
