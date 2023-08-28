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

class CelularAltaGama extends Celular {
  constructor(color, peso, rdp, rdc, ram, rdce) {
    super(color, peso, rdp, rdc, ram);
    this.rdce = rdce;
    this.encendido = false;
    this.frase = `El movil es de color <b>${this.color}</b>, pesa <b>${this.peso}</b>, tiene una resolucion de <b>${this.rdp}</b>, la camara tiene <b>${this.rdc}</b>, la camara extra tiene <b>${this.rdce}</b> y tiene <b>${this.ram}</b> de memoria <br>`;
  }

  grabarCamaraLenta() {
    if (!this.encendido) return alert("El movil no esta encendido");

    alert("Grabando video camara lenta");
  }

  reconociemientoFacial() {
    if (!this.encendido) return alert("El movil no esta encendido");

    alert("Reconociendo cara");
  }
}

let mov1 = new CelularAltaGama("azul", "200g", "4K", "80MP", "16GB", "50MP");
mov1.botonEncendido();
mov1.grabarCamaraLenta();
document.write(mov1.mostrarCaracteristicas());
