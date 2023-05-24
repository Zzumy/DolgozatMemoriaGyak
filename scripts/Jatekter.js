import { Kartya } from "./Kartya.js";

export class Jatekter {
  #kartyaLista = [];
  #kivalasztottKartyaLista = [];
  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    this.#init();
  }
  #init() {
    this.#kivalasztottKartyaLista = [];
    this.#kever();
    const szuloElem = $("article");
    szuloElem.empty();
    for (let ix = 0; ix < this.#kartyaLista.length; ix++) {
      const kartya = new Kartya(this.#kartyaLista[ix], szuloElem);
    }
  }
  #kever() {
    this.#kartyaLista.sort(function () {
      return 0.5 - Math.random();
    });
  }
  #ellenorzes() {}
  #TriggerBlocker() {}
  #TriggerUnBlocker() {}
}
