export class Kartya {
  #fajlnev;
  #allapot;
  #blokkolt;
  #divElem;
  #imgElem;

  constructor(id, allapot, szuloElem) {
    szuloElem.append(`<div class="kartya"><img src="" alt="kartya"></div>`);
    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img");
    this.#allapot = false;

    this.divElem.on("click", () => {
      this.kattintas();
      this.#kattintasTrigger();
    });
  }

  setAllapot(ertek) {
    this.#setLap();
  }

  getFajlnev() {
    return this.#fajlnev;
  }

  #setLap() {
    if (this.#allapot) {
      this.#imgElem.attr("src", this.#fajlnev);
    } else {
      this.#imgElem.attr("src", "css/images/hatter.jpg");
    }
  }

  kattintas() {
    this.#allapot = !this.#allapot;
    this.#setLap();
  }

  #kattintasTrigger() {
    const esemeny = new CustomEvent("kartyakatt", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
