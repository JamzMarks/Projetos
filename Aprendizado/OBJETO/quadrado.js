class Poligono {
    constructor(height, width) {
       this.name = "Poligono";
       this.height = height;
       this.width = width;
    }
 
    getName() {
       console.log(`Olá eu sou um ${this.name}`);
    }
 
    static getNameHeranca() {
       console.log("Herdado da classe Poligono")
    }
 }
 
 class Quadrado extends Poligono {
    constructor(altura,largura) {
       super();
       this.altura = altura;
       this.largura = largura;
       this.area = this.largura * this.altura;
       this.name = "Quadrado";
    }
 
    getArea() {
       console.log(this.area);
    }
 
    static getNameClass() {
       console.log("Eu sou a classe Quadrado")
    }
 
 }
 
 const a = new Quadrado(30, 20);
a.getArea()
 Quadrado.getNameHeranca();