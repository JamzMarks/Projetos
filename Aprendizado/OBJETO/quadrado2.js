class Poligono {
    constructor(altura, largura) {
       this.name = "Poligono";
       this.altura = altura;
       this.largura = largura;
    }
 
    getName() {
       console.log(`Olá eu sou um ${this.name}`);
    }
 
    static getNameHeranca() {
       console.log("Herdado da classe Poligono")
    }
 }

 class Quadrado extends Poligono{
    constructor(altura, largura){
        super(altura, largura)
        this.name = 'Quadrado'
    }

    getArea(){
        let area = this.altura * this.largura
        return area
    }
 }

 const poli1 = new Quadrado(30,30)
console.log(poli1.getArea())