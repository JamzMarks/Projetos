function Animal(nome, comida) {
    this.nome = nome;
    this.comida = comida;
  }
  
  let dog = new Animal("Rex", "carne");
  console.log(dog.__proto__)
  console.log(Animal.prototype)
  console.log(dog.__proto__ === Animal.prototype)

Animal.prototype.falar = function() {
    console.log(`${this.nome} faz barulho, esta comendo ${this.comida}`);

}

let cat = new Animal('Geraldo', 'peixe')

cat.falar()

function Cachorro(nome, comida, latir){
    Animal.call(this. nome, comida)
    this.latir = latir
}

Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.constructor = Cachorro
Cachorro.prototype.eleLate = function(){
    if(this.latir){
        console.log(`Ele late`)
    }else{
        console.log(`Ele nao late`)
    }
}


let bulldog = new Cachorro('Bolt', 'Carne', false)

bulldog.eleLate()

function Foo() {}
let a = new Foo();

console.log(a.__proto__ === Foo.prototype);
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(Foo.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
  