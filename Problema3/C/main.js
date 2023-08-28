class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.instalada = false;
    this.abierta = false;
  }

  instalar() {
    if (this.instalada) return alert("La aplicacion ya fue instalada");

    alert("App instalada");
    this.instalada = true;
  }

  abrir() {
    if (!this.instalada) return alert("La aplicacion no esta instalada");
    if (this.abierta) return alert("La aplicacion ya esta abierta");

    alert("App abierta");
    this.abierta = true;
  }

  cerrar() {
    if (!this.instalada) return alert("La aplicacion no esta instalada");
    if (!this.abierta) return alert("La aplicacion ya esta cerrada");

    alert("App cerrada");
    this.abierta = false;
  }

  desinstalar() {
    if (!this.instalada) return alert("La aplicacion ya fue desinstalada");

    alert("App desinstalada");
    this.instalada = false;
  }
}

let app1 = new App("100.000", "9/10", "250mb");
app1.instalar();
app1.abrir();
